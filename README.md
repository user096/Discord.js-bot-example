# Discord.js-bot-example
A simple bot example for discord.js beginners!

You can send **issues** to us, if there is any problems with our code!
We are not responsible if you **mess up** on your code, if it is an error, comment or send us an issue.

## Before you start anything, please setup your bot by following the steps below.
Before you start [setting up your bot user](https://discordapp.com/developers/docs) by going to [this tutorial.](https://anidiots.guide/first-bot/your-first-bot)

- The first thing you gotta do is create a file named `index.js` or `server.js` or whatever name that ends with `.js` because we're using JavaScript to code our bot.
- Then you're gotta open up **Command Prompt**(Or PowerShell, it depends on your version of Windows) on Windows or **Terminal** on Mac. By using `SHIFT+RightClick` in your folder, and select `Open command prompt here`
- Then you gotta write `npm init -y` into your command prompt, and you will see a file named package.json (or another file called package-lock.json will appear up) file. It holds all the libraries you're using, and you will need a library called `Discord.js`
- To install discord.js API, you will have to write `npm install discord.js`
- Then write `node (yourfile).js`

After that you shall be good to go with the code.

First thing you have to do is to load up the **discord.js** library.
You can load it up by just writing this simple line below:

```js
const Discord = require('discord.js')
```
Then you will have to set up your bot. 
So the bot is simply your "Client", as we have to setup the client, we will have to write this line below.

```js
const client = new Discord.Client
```
> Constant variable "Discord" is defined as the discord.js library if you wonder if "Discord" is defined or not

Then we will have to make the console send the message "bot is ready!" when the bot is online and ready. So we will write this below:

```js
client.on("ready", () => {
  console.log('bot is ready!')
});
```

> For the bot to be online, and ready, you will have to log it in using your **TOKEN**
> DO NOT SHARE YOUR TOKEN TO ANYONE, IT IS SIMPLY A PASSWORD THAT ALLOWS PEOPLE TO LOGIN INO THE BOT.

Write this line below:

```js
client.login('token')
```
Then the bot shall be ready and online!

After that, you will have to make the bot RESPOND to your message. By entering it into the message event.
By writing this code ON TOP OF THE `client.login('token')`!!!:

```js
client.on("message", async message => {

if(message.content = "ping") {
message.reply('pong!')
}

});
```
After that your bot is a fully functioning bot!

If you want to check out the discord.js library, you can go [here](discord.js.org)

If this is not helpful to you, check out these guides below:
- [An Idiot's Guide](http://anidiots.guide)
- [Discord.js Guide](https://discordjs.guide)

Respitory Help
==================================
- This respitory will have issues and bugs, you can send us the issue and we will try to fix the issue.
- Like we said, we are not responsible if you mess up on your code and we will not help you on your code.

**Here are some common issues that people will ask:**

### Some of the commands doesn't have the full code.
Yes, we didn't want to provide the full code in some of the commands like [ban](https://github.com/ElectroCrysZtaL/Discord.js-bot-example/blob/master/commands/ban.js) and [kick.](https://github.com/ElectroCrysZtaL/Discord.js-bot-example/blob/master/commands/kick.js)
Yeah we get it, "I WANT THE FULL CODE! I WANT THE FULL CODE!" But we cannot give you the fullcode because we want you to figure it out by yourself. You can look up the [discord.js library](discord.js.org) and you can find to make the full command.
### There's an error on a command.
You can send us the error at the [issues](https://github.com/ElectroCrysZtaL/Discord.js-bot-example/issues) page and we will try to fix the issue or error as soon as we can.

> If you have an error on **Changing** the code, then we're not responsible on fixing the errors for you, you should fix the problem BY YOURSELF.
### How do i make the bot always online?
You will have to check [this page](http://anidiots.guide/other-guides/hosting-on-glitch) on how to do it.
- Click here to proceed to [Glitch](glitch.com)
### I don't understand this example.
- Check out [An Idiot's Guide](http://anidiots.guide) or [Discord.js Guide.](https://discordjs.guide)

Sources
=============================

Source Name | Source links
------------ | -------------
An Idiot's Guide| http://anidiots.guide
Discord.js Guide| http://discordjs.guide
Discord.js| http://discord.js.org
Glitch | http://glitch.com

[citation needed](www.easybib.com)
