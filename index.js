const Discord = require('discord.js');
const bot = new Discord.Client();
const usr = new Discord.ClientUser()
const TOKEN = '';
const request = require('request');
const cheerio = require('cheerio');

/*
var testChannel;
testChannel= bot.channels.find("id", "545531026227724288");
bot.on('ready', () => {
  testChannel.send('test');
  //usr.sendMessage('What up gamers!?!?!?', testChannel);
});
*/

bot.on('message', function(message){
    if(message.content == '!rank tai')
    {
      request('http://play.esea.net/users/679733', (error,
        response, html) => {
          if(!error && response.statusCode ==  200){
            const $ = cheerio.load(html);

            const rankGraph = $('#rankGraph');

            const output = rankGraph.find('h1').text();
            message.reply('Tai\'s rank: ' + output);
          } //end if
        }); //end request

    }
    else if(message.content == '!rank amir')
    {
      request('http://play.esea.net/users/2038152', (error,
        response, html) => {
          if(!error && response.statusCode ==  200){
            const $ = cheerio.load(html);

            const rankGraph = $('#rankGraph');

            const output = rankGraph.find('h1').text();
            message.reply('Amir\'s rank: D-');
          } //end if
        }); //end request
    }
    else if(message.content == '!rank tej')
    {

      request('http://play.esea.net/users/2004594', (error,
        response, html) => {
          if(!error && response.statusCode ==  200){
            const $ = cheerio.load(html);

            const rankGraph = $('#rankGraph');

            const output = rankGraph.find('h1').text();
            message.reply('Tej\'s rank: ' + output);
          } //end if
        }); //end request

    }
    else if(message.content == '!rank sk')
    {
      request('http://play.esea.net/users/2072358', (error,
        response, html) => {
          if(!error && response.statusCode ==  200){
            const $ = cheerio.load(html);

            const rankGraph = $('#rankGraph');

            const output = rankGraph.find('h1').text();
            message.reply('Sk\'s rank: ' + output);
          } //end if
        }); //end request
    }
    else if(message.content == '!rank roche')
    {
      request('http://play.esea.net/users/689555', (error,
        response, html) => {
          if(!error && response.statusCode ==  200){
            const $ = cheerio.load(html);

            const rankGraph = $('#rankGraph');

            const output = rankGraph.find('h1').text();
            message.reply('Sk\'s rank: ' + output);
          } //end if
        }); //end request
    }
    else if(message.content == '!rank conner')
    {
      request('http://play.esea.net/users/2033459', (error,
        response, html) => {
          if(!error && response.statusCode ==  200){
            const $ = cheerio.load(html);

            const rankGraph = $('#rankGraph');

            const output = rankGraph.find('h1').text();
            message.reply('Connor\'s rank: ' + output);
          } //end if
        }); //end request
    }
});

bot.on('ready', function(){
    console.log("Ready");
})
bot.login(TOKEN);
/*Client ID: 545070217424928769*/


/*
function rank() {
  const result = '';
  request('http://play.esea.net/users/2038152', (error,
    response, html) => {
      if(!error && response.statusCode ==  200){
        //console.log(html);
        const $ = cheerio.load(html);

        const rankGraph = $('#rankGraph');

        const output = rankGraph.find('h1').text();
        result = output;
      } //end if
    }); //end request
    return(result);
};// end function
*/
