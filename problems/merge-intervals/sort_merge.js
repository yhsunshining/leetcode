/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  if (!intervals.length) {
    return [];
  }
  intervals = intervals.sort((a, b) => a.start - b.start);
  let res = [intervals[0]];
  let last = res[0];
  for (let i = 1, len = intervals.length; i < len; i++) {
    let item = intervals[i];
    if (last.end >= item.start) {
      last.end = Math.max(item.end, last.end);
    } else {
      res.push(item);
      last = item;
    }
  }
  return res;
};
