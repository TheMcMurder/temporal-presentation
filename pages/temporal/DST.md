# Daylight Savings Time

```ts {monaco-run} {showOutputAt: '+1'}
// 1:30 AM on the day DST ends in Los Angeles (clocks go back from 2:00 to 1:00)
const beforeDST = Temporal.ZonedDateTime.from('2020-11-01T01:30-07:00[America/Los_Angeles]');
console.log('beforeDST', beforeDST.toString())
// Add 1 hour
const afterDST = beforeDST.add({ minutes: 45 });
console.log('after', afterDST.toString());
```

<!-- 
Notice: The offset changes from -07:00 (PDT) to -08:00 (PST) automatically[4].

-->

