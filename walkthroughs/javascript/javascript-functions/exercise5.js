// Data Usage
/*
30 day cycles, no-rollover

planLimit: 100, day: 15, usage: 56

1. 15 days used, 15 days remaining
2. Average daily use: 3.333 GB/day
3. You are EXCEEDING your average daily use (3.73 GB/day),
continuing this high usage, you'll exceed your data plan by
11.9 GB.
4. To stay below your data plan, use no more than 2.93 GB/day.
*/
const getNumberToFixed = (num, decimalPlace) => {
  return parseFloat(num.toFixed(decimalPlace));
};

const getAvg = (total, length) => {
  return getNumberToFixed(total / length);
};

const getUsageFeedback = (planLimit, days, usage) => {
  const cycleLength = 30;
  const projectedAvg = getAvg(planLimit, cycleLength);
  const currentAvg = getAvg(usage, days);
  const projectedUsage = currentAvg * cycleLength;
  const adjustedAvg = getAvg(planLimit - usage, cycleLength - days);

  let output = `${days} days used, ${cycleLength - days} days remaining
  Suggested daily use: ${projectedAvg} GB/day
  `;

  if (currentAvg > projectedAvg) {
    output += `You are EXCEEDING your average daily use (${currentAvg} GB/day),
    continuing this high usage, you'll exceed your data plan by
    ${projectedUsage - planLimit} GB.
    To stay below your data plan, use no more than ${adjustedAvg} GB/day.`;
  } else if (currentAvg < projectedAvg) {
    output += `You are UNDER your average daily use (${currentAvg} GB/day),
    continuing this low usage, you'll lose out on ${Math.abs(
      projectedUsage - planLimit
    )} GB.
    To stay use all of your data plan, use on average ${adjustedAvg} GB/day.`;
  } else {
    output += `You are AT your average daily use (${currentAvg} GB/day).`;
  }

  console.log(output);
};

getUsageFeedback(100, 15, 56);
