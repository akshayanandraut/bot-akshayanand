var Botkit = require('botkit');

var controller = Botkit.slackbot();

var bot = controller.spawn({

  token: "xoxb-143511011970-fSKjWd9p8ZjImjdaeZiBj0Nf"

})

bot.startRTM(function(err,bot,payload) {

  if (err) {

    throw new Error('Could not connect to Slack');

  }

});

controller.hears(["Hello","Hi","hii","greetings"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {

  bot.reply(message,'Hello, how may I help you today?');

});
controller.hears(["Good *"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {

  bot.reply(message,'Hello, Good *');

});
controller.hears([""],["direct_message","direct_mention","mention","ambient"],function(bot,message) {

  bot.reply(message,'I didn\'t understand what you said. I am not programmed to respond to such requests.');

});
