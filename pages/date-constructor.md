---

# The Date constructor

<v-clicks>

- First introduced in 1995
- All dates are UTC based internally
- Most method return local time values
- Limited timezone support
- Copy paste from java.util.date

</v-clicks>

---
transition: none
---
# The Date constructor

<!-- ts {monaco-run} will turn the editor into something that can run automatically -->

<!-- ```ts {monaco-run} {autorun:false} -->

```ts {1|2|3|all}
let today = new Date();
console.log("today", today); // This will automatically represent today
console.log("today - valueOf", today.valueOf()); // Returns a number MS since the UNIX epoch (midnight Jan 1 1970 UTC)
console.log("today - toString", today.toString()); // Returns the date in local timezone
```

<!--
Here is another comment.
-->
---

# The Date constructor

```ts {monaco-run}
let today = new Date();
console.log("today", today); // This will automatically represent today
console.log("today - valueOf", today.valueOf()); // Returns a number MS since the UNIX epoch (midnight Jan 1 1970 UTC)
console.log("today - toString", today.toString()); // Returns the date in local timezone
```

---

# Parsing inconsistencies
```ts {monaco-run} {autorun:false}
// Same date, different string formats
let day1 = new Date('2023-01-09');       // 2023-01-09T00:00:00Z (UTC)
let day2 = new Date('2023-1-9');         // 2023-01-09T00:00:00 (local time) 😭
let day3 = new Date('01/09/2023');       // 2023-01-09T00:00:00 (local time) 😭
let day4 = new Date('2023-01-9');        // 2023-01-09T00:00:00 (local time) 😭
// Let's compare the dates 
console.log('day1 & day2', day1.getTime() === day2.getTime())
console.log('day2 & day3', day2.getTime() === day3.getTime())
console.log('day3 & day4', day3.getTime() === day4.getTime())
// Let's look at their epoch time values
console.log('day1', day1.getTime())
console.log('day2', day2.getTime())
console.log('day3', day3.getTime())
console.log('day4', day4.getTime())

```