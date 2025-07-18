# Time Arithmetic

```ts {monaco-run} {showOutputAt: '+1'}
const oStart = new Date('2025-03-01');  
const oEnd = new Date('2025-03-08');  
const oDiff = oEnd - oStart; // Milliseconds, no direct day/month support

const tStart = Temporal.PlainDate.from('2025-03-01');  
const tEnd = Temporal.PlainDate.from('2025-03-08');  
const tDiff = tStart.until(tEnd).days; // 7


console.log('new Date diff', oDiff);
console.log('Temporal date diff', tDiff)
```

<!-- 

-->

