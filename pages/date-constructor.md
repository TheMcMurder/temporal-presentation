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

# Problems with the Date Constructor
## Parsing inconsistencies
```ts {monaco-run} {showOutputAt: '+1'}
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

---

# Problems with the Date Constructor
## API naming conventions


```ts {monaco-run} {showOutputAt: '+1'}
// SetYear() vs setFullYear()
const setYearExample = new Date();

setYearExample.setYear(98);

console.log('setYearExample', setYearExample.toString());

setYearExample.setFullYear(98)

console.log('setYearExample', setYearExample.toString());
```

---

# Combining Problems Scenario

```ts
// The server sends the time
// '2024-02-28' to represent midnight on Feb 28 2024 and we parse it
let serverTime = new Date('2024-02-28')
// The user does some operations of some sort and we patch the changes.
// we create the date to send it back and the server only keeps the difference
let time = `${serverTime.getYear()}-${serverTime.getMonth()}-${serverTime.getDate()}`
/*

 {
   clientName: 'Justin',
   ....
   date: time
 }
*/
// What is the problem here?
```

---


# Combining Problems Scenario

```ts {monaco-run} {showOutputAt: '+1'}
// The server sends the time '2024-02-28' to represent midnight on Feb 28 2024 and we parse it.

let serverTime = new Date('2024-02-28');

// 1. GetMonth is 0 based but getDate is not... 

console.log('serverTime.getMonth()', serverTime.getMonth());

let time = `${serverTime.getYear()}-${serverTime.getMonth() + 1}-${serverTime.getDate()}`;
console.log('time we are about to send back to the server', time);
```

<!-- We need to use different APIs than expected
- Get month is 0 based but getDate is not
- And get year is returning years since 1900 - not even epoch time - Deprecated
 -->

---

# Combining Problems Scenario
```ts {monaco-run} {showOutputAt: '+1'}
// The server sends the time '2024-02-28' to represent midnight on Feb 28 2024 and we parse it.
let serverTime = new Date('2024-02-28')

// 1. GetMonth is 0 based but getDate is not...
// 2. GetYear is not at all what we need

let time = `${serverTime.getFullYear()}-${serverTime.getMonth() + 1}-${serverTime.getDate()}`
console.log('time we are about to send back to the server', time);
```
<!-- 
  When we parsed the string it's saved as UTC internally but most APIs return the local timezone
 -->

---

# Combining Problems Scenario
## Solution
```ts {monaco-run} {showOutputAt: '+1'}
// The server sends the time '2024-02-28' to represent midnight on Feb 28 2024 and we parse it.
let serverTime = new Date('2024-02-28')

// 1. GetMonth is 0 based but getDate is not...
// 2. GetYear is not at all what we need
let month = serverTime.getUTCMonth() + 1

let time = `${serverTime.getUTCFullYear()}-${month.toString().padStart(2, '0')}-${serverTime.getUTCDate()}`
console.log('time we are about to send back to the server', time);
```
<!-- 
  With Date.UTC and numeric arguments we can force the date to be created in UTC time
 -->

<v-click at="1">

- getUTCFullYear, getUTCMonth, and getUTCDate are needed
- Some items are O based and others are 1 based
- May also need to `padStart`
</v-click>