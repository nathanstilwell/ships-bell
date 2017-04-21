const watches = [
  'middle', 'middle', 'middle', 'middle',
  'morning', 'morning', 'morning', 'morning',
  'forenoon', 'forenoon', 'forenoon', 'forenoon',
  'afternoon', 'afternoon', 'afternoon', 'afternoon',
  'first dog', 'first dog', 'second dog', 'second dog',
  'first', 'first', 'first', 'first'
];

const bells = [
  8, 2, 4, 6,
  8, 2, 4, 6,
  8, 2, 4, 6,
  8, 2, 4, 6
];

module.exports = function (hour, minute) {
  const hour_bells = bells[hour];
  const half_hour_bell = (minute >= 30) ? 1 : 0;
  const bells_count = (hour_bells < 8) ? hour_bells + half_hour_bell : (half_hour_bell) ? half_hour_bell : hour_bells;

  return {
    bells: bells_count,
    watch: watches[hour]
  };
};
