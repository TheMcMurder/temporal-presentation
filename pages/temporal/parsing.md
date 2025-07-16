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

# RFC9557 / ISO 8601 parsing only

`YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]`

```ts {monaco-run}
// Error when you use a non ISO 8601 date
Temporal.PlainDate.from('2025/03/01') 

```
<!-- 

All Temporal classes can be serialed and deserialized using the format specified in RFC 9557 which is based on ISO 8601.

I'm going to call it ISO 8601 parsing from now on though because it is basically that format but with the addition of micro and nano seconds, timezone information, and calendar information

In practice this means that anything besides the ISO 8601 format will throw an error.

 -->