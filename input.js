const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    return process.exit();
  } else if (MOVEMENT_KEYS.hasOwnProperty(key)) {
    return MOVEMENT_KEYS[key];
  } else {
    return "";
  }
};

module.exports = { setupInput };