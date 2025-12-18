/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function (tasks) {
  let earliest = Infinity;

  for (const [start, time] of tasks) {
    let total = start + time;

    if (total < earliest) earliest = total;
  }

  return earliest;
};
