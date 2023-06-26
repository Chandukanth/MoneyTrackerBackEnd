const crypto = require("crypto");

const md5Password = (password) => {
  if (!password) {
    return;
  }

  return `${crypto.createHash("md5").update(password).digest("hex")}`;
};

module.exports = { md5Password };
