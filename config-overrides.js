const { alias } = require("react-app-rewire-alias");
const path = require("path");
module.exports = function override(config) {
  alias({
    "@component": path.resolve(__dirname, "src/component"),
    "@img": path.resolve(__dirname, "src/assets/img"),
    "@icons": path.resolve(__dirname, "src/assets/icons"),
    "@style": path.resolve(__dirname, "src/assets/style/scss/global"),
  })(config);

  return config;
};
