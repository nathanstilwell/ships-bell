#!/usr/bin/env /usr/local/bin/node
/*eslint no-console: ["error", { allow: ["warn", "error"] } ] */

const watches = [
  'middle',
  'middle',
  'middle',
  'middle',

  'morning',
  'morning',
  'morning',
  'morning',

  'forenoon',
  'forenoon',
  'forenoon',
  'forenoon',

  'afternoon',
  'afternoon',
  'afternoon',
  'afternoon',

  'first dog',
  'first dog',
  'second dog',
  'second dog',

  'first',
  'first',
  'first',
  'first'
];

const bells = [
  8,    // 0
  2,    // 1
  4,    // 2
  6,    // 3

  8,    // 4
  2,    // 5
  4,    // 6
  6,    // 7

  8,    // 8
  2,    // 9
  4,    // 10
  6,    // 11

  8,    // 12
  2,    // 13
  4,    // 14
  6,    // 15

  8,    // 16
  2,    // 17
  4,    // 18
  6,    // 19

  8,    // 20
  2,    // 21
  4,    // 22
  6    // 23
];

const format_watch = (hour) => {
  return `${watches[hour]} watch`;
};

const format_bells = (hour, minute, extended_output = false) => {
  const hour_bells = bells[hour];
  const half_hour_bell = (minute >= 30) ? 1 : 0;
  const bells_count = (hour_bells + half_hour_bell) % 8;
  const bells_label = (bells_count > 1) ? 'bells' : 'bell';

  return `${bells_count} ${(extended_output) ? bells_label : '🔔'} `;
};

const d = new Date();
const hour = d.getHours();
const minute = d.getMinutes();

console.log(`${format_bells(hour, minute)}`);
console.log(`---`);
console.log(`${format_bells(hour, minute, true)}, ${format_watch(hour)}`);
