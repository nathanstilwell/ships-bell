# Ship's Bell

This is my attempt to create a utility to convert Julian time to nautical time or bells for watches. I'm imaging a function that will return an object that contains the number of bells and the current watch. For example:

```js
const hours = 14;
const minutes = 30;

time(hour, minutes);
/* returns
  {
    bells: 5,
    watch: 'afternoon'
  }
*/
```

A reference of timing of duty periods can be seen [here](https://en.wikipedia.org/wiki/Ship%27s_bell#Timing_of_duty_periods).
