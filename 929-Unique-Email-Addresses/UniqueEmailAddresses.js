/**
    可透過 @ 切分成 local name 和 domain name
    local name 有 . 會被忽略濾掉, 但 domain 不會
    local name 有 + 後面部分會被忽略濾掉, 但 domain 不會
 */

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const set = new Set();

  for (let i = 0; i < emails.length; i++) {
    const email = emails[i];
    const [local, domain] = email.split("@");

    let filteredStr = "";

    for (const char of local) {
      if (char === "+") break; // 偵測到 + 後中斷
      if (char === ".") continue; // 忽略 .
      filteredStr += char;
    }

    set.add(`${filteredStr}@${domain}`);
  }

  return set.size;
};
