# Quiz

```ts {monaco-run} {autorun:false}
const date = new Date("0")
console.log(date)
```

1. 2000-01-01T00:00:00.000Z
2. Invalid Date
3. 1970-01-01T00:00:00.000Z
4. 2000-01-01T07:00:00.000Z

Thank you to [jsdate.wtf](https://jsdate.wtf)

<!-- 
The string "0" is interpreted as the year 2000, not as a timestamp!
 -->

---

```ts {monaco-run} {autorun:false}
const plaindate = Temporal.PlainDate.from('0') 
console.log(plaindate)
```

1. 2000-01-01T00:00:00.000Z
2. Invalid Date
3. 1970-01-01T00:00:00.000Z
4. Throws an error

<!-- 
In Temporal you can only parse ISO 8601 
 -->

---

```ts {monaco-run} {autorun:false}
const date = new Date(0)
console.log(date)
```

1. Invalid Date
2. 2000-01-01T00:00:00.000Z
3. 1970-01-01T00:00:00.000Z
4. Throws an error

Thank you to [jsdate.wtf](https://jsdate.wtf)

<!-- 
The number 0, as opposed to the string "0", is interpreted as milliseconds since the Unix epoch (Jan 1, 1970).
 -->

---

```ts {monaco-run} {autorun:false}
const plainDate = Temporal.PlainDate.from(0)
console.log(plainDate)
```

1. Invalid Date
2. 2000-01-01T00:00:00.000Z
3. 1970-01-01T00:00:00.000Z
4. Throws an error

<!-- 
The number 0 is not a string and temporal can only parse ISO 8601
 -->

---

```ts {monaco-run} {autorun:false}
let date = new Date("1");
console.log(date);
```
1. 0001-01-01T00:00:00.000Z
2. 1970-01-01T00:00:01.000Z
3. Invalid Date
4. 2001-01-01T07:00:00.000Z

Thank you to [jsdate.wtf](https://jsdate.wtf)

<!-- 
  "1" is interpreted as a year, so this is 2000+1.
 -->

---

```ts {monaco-run} {autorun:false}
const plainDate = Temporal.PlainDate.from("1")
console.log(plainDate)
```
1. Throws an error
2. 1970-01-01T00:00:01.000Z
3. Invalid Date
4. 2001-01-01T00:00:00.000Z

<!-- 
  "1" is not in ISO 8601 cannot be turned into a Temporal date
 -->

---

```ts {monaco-run} {autorun:false}
let date = new Date("2");
console.log(date);
```
1. Invalid Date
2. 2001-01-02T00:00:00.000Z
3. 2001-02-01T07:00:00.000Z
4. 2001-02-01T00:00:00.00PZ

Thank you to [jsdate.wtf](https://jsdate.wtf)

<!-- 
  "2" is interpreted as a month, and the year is set to 2001.
 -->

---

```ts {monaco-run} {autorun:false}
const plainDate = Temporal.PlainDate.from("2")
console.log(plainDate)
```
1. Throws an error
2. 1970-01-01T00:00:01.000Z
3. Invalid Date
4. 2001-01-01T00:00:00.000Z

<!-- 
  "2" is not in ISO 8601 cannot be turned into a Temporal date
 -->

---

```ts {monaco-run} {autorun:false}
let date = new Date("maybe 1");
console.log(date);
```
1. null in Chrome and 2001-05-01T06:00:00.000Z in Firefox
2. null in Firefox and 2001-05-01T06:00:00.000Z in Chrome
3. Invalid Date in Both Firefox and Chrome
4. 2001-04-30T06:00:00.000Z in both Firefox and Chrome

Thank you to [jsdate.wtf](https://jsdate.wtf)

<!-- 
  "may" in "maybe" is parsed as the month May! And for some reason this expression cares about your local timezone.
 -->

---

```ts {monaco-run} {autorun:false}
const plainDate = Temporal.PlainDate.from("maybe 1")
console.log(plainDate)
```
1. 1970-01-01T00:00:01.000Z
2. Throws an error
3. Invalid Date
4. 2001-01-01T00:00:00.000Z

<!-- 
  "maybe 1" is not in ISO 8601 cannot be turned into a Temporal date
 -->