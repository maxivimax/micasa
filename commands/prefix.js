const { LOCALE } = require("../util/EvobotUtil");
const editJsonFile = require("edit-json-file");
const i18n = require("i18n");
let file = editJsonFile(`${__dirname}/../config.json`);

i18n.setLocale(LOCALE);

module.exports = {
  name: "prefix",
  cooldown: 20,
  aliases: ["pr"],
  description: i18n.__("prefix.description"),
  execute(message, args) {
    // file.set("PREFIX", args);
    // console.log(file.get());
    // file.save();
    message.reply(i18n.__mf("prefix.result", { NewPr: args }))
  }
};
