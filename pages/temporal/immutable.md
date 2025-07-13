# Immutable

```ts {monaco-run} {autorun:false}
let date = Temporal.PlainDate.from('2025-03-01');  
const newDate = date.add({ days: 7 }); // Returns new instance [1][6]  
console.log('date', date.toString()); // '2025-03-01' (unchanged)
console.log('newDate', newDate.toString())

```