module.exports = {
  token: process.env.TOKEN,
  MONGODB_SRV: process.env.DB_LINK,
  DEFAULTSETTINGS: {
    prefix: "!",
    welcomeMessage: "Bienvenue **{{USER}}** !\n Amuse toi bien sur **{{SERVER_NAME}}** :tada:",
    leaveMessage: "Aurevoir **{{USER}}**\n On espère te revoir bientot :cry:"

  }
}

