# Reliable Parsing

```ts {monaco-run}
let sd1 = new Date('2025-03-01'); // Interpreted as UTC in some browsers, local time in others  
let sd2 = new Date('March 1, 2025'); // May fail in non-US locales 

let d1 = Temporal.PlainDate.from('2025-03-01');
let d2 = Temporal.PlainDateTime.from('2025-03-01T14:30:00'); // Explicit time handling 

console.log('sd1', sd1);
console.log('sd2', sd2);

console.log('d1', d1);
console.log('d2', d2);

```

<!-- 
With the JS date constructor different date formats produce different values. Sometimes it cares about local timezone and sometimes it doesn't. It's also inconsistent between browsers where one format cares about local timezone in one browser and doesn't in another.


That problem doesn't exist in temporal because ...

 -->

---

# ISO 8601 parsing only

```ts {monaco-run}
// Error when you use a non ISO 8601 date
Temporal.PlainDate.from('2025/03/01') 

```