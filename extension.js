(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "lgafcg";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // Example code for a bot command:
        bot.commands.baconCommand = {
          command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Bacon!!!");
            }
          }
        };

        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: 'lgafcg',
        language: 'russian',
        chatLink: 'https://rawgit.com/lgafcg/source/master/lang/en.json',
        scriptLink: 'https://rawgit.com/lgafcg/source/master/basicBot.js',
        roomLock: false, // Requires an extension to re-load the script
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // true or false
        autowoot: false,
        autoskip: false,
        smartSkip: false,
        cmdDeletion: false,
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: false,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 59,
        cycleGuard: false,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 15,
        historySkip: false,
        timeGuard: false,
        strictTimeGuard: false,
        maximumSongLength: 10,
        autodisable: false,
        commandCooldown: 30,
        usercommandsEnabled: true,
        thorCommand: true,
        thorCooldown: 59,
        skipPosition: 3,
        skipReasons: [
            ['theme', 'This song does not fit the room theme. '],
            ['op', 'This song is on the OP list. '],
            ['history', 'This song is in the history. '],
            ['mix', 'You played a mix, which is against the rules. '],
            ['sound', 'The song you played had bad sound quality or no sound. '],
            ['nsfw', 'The song you contained was NSFW (image or sound). '],
            ['unavailable', 'The song you played was not available for some users. ']
        ],
        afkpositionCheck: 17,
        afkRankCheck: 'bouncer',
        motdEnabled: true,
        motdInterval: 47,
        motd: 'frag4mi благословил этот трек',
        filterChat: false,
        etaRestriction: false,
        welcome: false,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        website: null,
        intervalMessages: [],
        messageInterval: 5,
        songstats: true,
        commandLiteral: '!',
        blacklists: {
            NSFW: 'https://rawgit.com/lgafcg/custom/master/blacklists/NSFWlist.json',
            OP: 'https://rawgit.com/lgafcg/custom/master/blacklists/OPlist.json',
            BANNED: 'https://rawgit.com/lgafcg/custom/master/blacklists/BANNEDlist.json'
        }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/lgafcg/source/master/basicBot.js", extend);

}).call(this);
