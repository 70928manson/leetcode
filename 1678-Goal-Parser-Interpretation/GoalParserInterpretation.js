/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let res = "";

  let i = 0;
  while (i < command.length) {
    const char = command[i];
    const next = command[i + 1];

    if (char === "G") {
      res += "G";
      i++;
    } else if (char === "(" && next === ")") {
      res += "o";
      i += 2;
    } else {
      res += "al";
      i += 4;
    }
  }

  return res;
};
