# Chaining

```ts {monaco-run} {showOutputAt: '+1'} 
const { PlainDate } = Temporal;

const result = PlainDate.from('2025-03-01')
  .add({ days: 5 })            // March 6, 2025
  .add({ months: 1 })          // April 6, 2025
  .subtract({ weeks: 2 })      // March 23, 2025
  .toString();                 // ISO string: "2025-03-23"

console.log(result); 
```
<!-- 
  Each operation returns a new `PlainDate` object
	No side effects or mutations
	All steps can be chained seamlessly
 -->