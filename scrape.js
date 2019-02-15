const request = require('request');
const cheerio = require('cheerio');

request('http://play.esea.net/users/679733', (error,
  response, html) => {
    if(!error && response.statusCode ==  200){
      //console.log(html);
      const $ = cheerio.load(html);

      const rankGraph = $('#rankGraph');

      const output = rankGraph.find('h1').text();
      console.log(output);
    }
  });
