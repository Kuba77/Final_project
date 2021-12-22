const GlobalConfig = require("../models/GlobalConfig");

module.exports = async () => {
  const configs = await GlobalConfig.findOne({
    customId: "qwe-global-configs",
  });
  return configs;
};
