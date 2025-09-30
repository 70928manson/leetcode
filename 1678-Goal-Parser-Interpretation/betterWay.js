/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let res = "";

  let i = 0;
  while (i < command.length) {
    if (command.startsWith("G", i)) {
      res += "G";
      i++;
    } else if (command.startsWith("()", i)) {
      res += "o";
      i += 2;
    } else if (command.startsWith("(al)", i)) {
      res += "al";
      i += 4;
    }
  }

  return res;
};
