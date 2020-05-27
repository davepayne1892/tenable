module.exports = require("pino")({
  prettyPrint: {
    colorize: true,
    translateTime: true,
  },
  customLevels: {
    log: 100,
    print: 100,
  },
  level: "warn",
});
