const Discord = require('discord.js');
const bot = new Discord.Client();
const usr = new Discord.ClientUser()
const TOKEN = 'NTQ1MDcwMjE3NDI0OTI4NzY5.D0UUxw.OuYVW9Gr5fxIM4aMqz9ipJe3KQI';
const request = require('request');
const cheerio = require('cheerio');
const aliasFilter = "&source=users&sort_by=last_visit&filters%5Bgeo_country%5D=&filters%5Btier%5D=&fields%5Balias%5D=1&fields%5Bunique_ids%5D=1";

bot.on('message', function(message){

    var cmd = message.content.substring(0,6);
    if (message.content.substring(0,6) == "!rank ") {
      var playerID = message.content.split(" ");
      userRank(playerID[1]);
    }
    else if (message.content.substring(0,5) == "!rws ") {
      var playerID = message.content.split(" ");
      userRWS(playerID[1]);
    }
    else if (message.content.substring(0,5) == "!adr ") {
      var playerID = message.content.split(" ");
      userADR(playerID[1]);
    }
    else if (message.content.substring(0,8) == "!record ") {
      var playerID = message.content.split(" ");
      userRecord(playerID[1]);
    }

    function userRecord(playerName){
      request('http://play.esea.net/index.php?s=search&source=users&query=' + playerName + aliasFilter, (error,
        response, html) => {
          if(!error && response.statusCode ==  200){
            const $ = cheerio.load(html);
            const result = $('.result');
            const output = result.text();
            var matches = output.includes('"' + playerName + '"');
            if(matches){
              var userpath = result.attr('href'); //Reads the href value of the
              request('http://play.esea.net' + userpath, (error,
                response, html) => {
                  if(!error && response.statusCode ==  200){
                    const $2 = cheerio.load(html);
                    const rankGraph = $2('.sub-header.margin-bottom.margin-top');
                    var userRecordFinal = rankGraph.text();
                    message.reply(playerName + '\'s ' + userRecordFinal.substring(11));
                  } //end if
                }); //end request
              }
              else{
                message.reply('Player not found');
              }
            }
          });
        }

    function userADR(playerName){
      request('http://play.esea.net/index.php?s=search&source=users&query=' + playerName + aliasFilter, (error,
        response, html) => {
          if(!error && response.statusCode ==  200){
            const $ = cheerio.load(html);
            const result = $('.result');
            const output = result.text();
            var matches = output.includes('"' + playerName + '"');
            if(matches){
              var userpath = result.attr('href'); //Reads the href value of the
              request('http://play.esea.net' + userpath + '?tab=stats', (error,
                response, html) => {
                  if(!error && response.statusCode ==  200){
                    const $2 = cheerio.load(html);
                    const rankGraph = $2('.stat');
                    var userADRFinal = rankGraph.eq(12).text();
                    message.reply(playerName + '\'s ADR: ' + userADRFinal);
                  } //end if
                }); //end request
              }
              else{
                message.reply('Player not found');
              }
            }
          });
        }

    function userRWS(playerName){
      request('http://play.esea.net/index.php?s=search&source=users&query=' + playerName + aliasFilter, (error,
        response, html) => {
          if(!error && response.statusCode ==  200){
            const $ = cheerio.load(html);
            const result = $('.result');
            const output = result.text();
            var matches = output.includes('"' + playerName + '"');
            if(matches){
              var userpath = result.attr('href'); //Reads the href value of the
              request('http://play.esea.net' + userpath + '?tab=stats', (error,
                response, html) => {
                  if(!error && response.statusCode ==  200){
                    const $2 = cheerio.load(html);
                    const rankGraph = $2('.stat');
                    var userRWSFinal = rankGraph.eq(14).text();
                    message.reply(playerName + '\'s RWS: ' + userRWSFinal);
                  } //end if
                }); //end request
              }
              else{
                message.reply('Player not found');
              }
            }
          });
        }
    function userRank(playerName){
      request('http://play.esea.net/index.php?s=search&source=users&query=' + playerName + aliasFilter, (error,
        response, html) => {

          if(!error && response.statusCode ==  200){
            const $ = cheerio.load(html);
            const result = $('.result');
            const output = result.text();
            var matches = output.includes('"' + playerName + '"');
            if(matches){
              var userpath = result.attr('href'); //Reads the href value of the
              request('http://play.esea.net' + userpath, (error,
                response, html) => {
                  if(!error && response.statusCode ==  200){
                    const $2 = cheerio.load(html);
                    const rankGraph = $2('#rankGraph');
                    var userRankFinal = rankGraph.find('h1').text();
                    message.reply(playerName + '\'s rank: ' + userRankFinal);
                  } //end if
                }); //end request
            }
            else{
              message.reply('Player not found');
            }
          } //end if
        }); //end request
    } //end userRank
});//end bot.on

bot.on('ready', function(){
    console.log("Bot is online..");
});

bot.login(TOKEN);
