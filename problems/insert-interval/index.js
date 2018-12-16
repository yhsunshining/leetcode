/**
 * Definition for an interval.
 **/
function Interval(start, end) {
  this.start = start;
  this.end = end;
}

/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  if (!intervals.length) {
    return [newInterval];
  }

  if (newInterval.end < intervals[0].start) {
    return [newInterval].concat(intervals);
  } else if (newInterval.start < intervals[0].start) {
    intervals[0].start = newInterval.start;
  }

  if (newInterval.start > intervals[intervals.length - 1].end) {
    return intervals.concat([newInterval]);
  } else if (newInterval.end > intervals[intervals.length - 1].end) {
    intervals[intervals.length - 1].end = newInterval.end;
  }

  let nums = [];
  intervals.forEach(interval => {
    nums.push(interval.start);
    nums.push(interval.end);
  });
  let start = binary_search(nums, 0, nums.length, newInterval.start);

  let end = binary_search(nums, start, nums.length, newInterval.end);

  if (start % 2 == 1) {
    if (nums[start] == newInterval.start) {
      start = start - 1;
    } else if (start == end && newInterval.end != nums[end + 1]) {
      intervals.splice((start >> 1) + 1, 0, newInterval);
      return intervals;
    } else {
      nums[start + 1] = newInterval.start;
      start += 1;
    }
  }

  if (end % 2 == 1) {
    if (newInterval.end == nums[end + 1]) {
      end += 2;
    } else {
      nums[end] = newInterval.end;
    }
  } else {
    end = end + 1;
  }

  let res = [];
  for (let i = 0; i < nums.length; ) {
    let interval = [];
    interval[0] = nums[i];
    if (i == start) {
      interval[1] = nums[end];
      i = end + 1;
    } else {
      interval[1] = nums[i + 1];
      i += 2;
    }
    res.push(new Interval(...interval));
  }
  return res;
};

var binary_search = function(nums, start, end, target) {
  while (start != end - 1) {
    let mid = (start + end) >> 1;

    if (nums[mid] <= target) {
      start = mid;
    } else {
      end = mid;
    }
  }
  return start;
};
