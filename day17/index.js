function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const optimized = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i];
    const lastMerged = optimized[optimized.length - 1];

    if (curr[0] <= lastMerged[1]) {
      lastMerged[1] = Math.max(lastMerged[1], curr[1]);
    } else {
      optimized.push(curr);
    }
  }

  return optimized;
}

module.exports = optimizeIntervals