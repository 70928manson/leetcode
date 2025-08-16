let result = [];

function backtrack(path, choices) {
  if (choices.length === 0) {
    result.push(path);
    return;
  }

  for (let i = 0; i < choices.length; i++) {
    // 選一個數字
    let num = choices[i];

    // 放進 path，剩下的繼續遞迴
    backtrack(
      [...path, num], // 已選好的
      [...choices.slice(0, i), ...choices.slice(i + 1)] // 剩下的
    );
  }
}

backtrack([], nums);
return result;
