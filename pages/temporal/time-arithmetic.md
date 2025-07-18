# Time Arithmetic

```ts {monaco-run} {showOutputAt: '+1'}
const oStart = new Date('2025-03-01');  
const oEnd = new Date('2025-03-08');  
const oDiff = oEnd - oStart; // Milliseconds, no direct day/month support

const tStart = Temporal.PlainDate.from('2025-03-01');  
const tEnd = Temporal.PlainDate.from('2025-03-08');  
const tDiff = tStart.until(tEnd).days; // 7

// Localize the difference
const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: "always" }); // undefined = system/user locale
const formattedDiff = rtf.format(tDiff, "day");

console.log('new Date diff', oDiff);
console.log('Temporal date diff', tDiff)
console.log('Localized difference:', formattedDiff); // "in 7 days"
```

<!-- 

-->

