# Quiz

```ts {monaco-run} {autorun:false}
const date = new Date("0")
console.log(date)
```

1. 2000-01-01T00:00:00.000Z
2. Invalid Date
3. 1970-01-01T00:00:00.000Z
4. Throws an error

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
let value = Date.parse(0) === Date.parse("0");
console.log(value);
```
1. Throws an error
2. false
3. undefined
4. true

Thank you to [jsdate.wtf](https://jsdate.wtf)

<!-- 
Both parse to 946684800000 milliseconds! Date.parse only operates on strings, so 0 is coerced to the string "0".
 -->