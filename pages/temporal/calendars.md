# Calendar Conversion

```ts {monaco-run}
let jan1 = Temporal.PlainDate.from('2020-01-01');

let islamicDate = jan1.withCalendar('islamic-civil');
let buddhistDate = jan1.withCalendar('buddhist');

console.log('Islamic Date', islamicDate, myToString(islamicDate));
console.log('buddhist date', buddhistDate, myToString(buddhistDate));

function myToString(temporalDate) {
  return `${temporalDate.year}-${temporalDate.month}-${temporalDate.day}`
}

```

<!-- 
	•	The Temporal API keeps the underlying date consistent, and the annotation tells you which calendar system is being used for interpretation.
	•	This approach helps avoid confusion about what absolute day is being referenced, especially when working across multiple calendar systems.
-->


---

# Calendar Conversion
## Direct creation

```ts {monaco-run}
let hebrewDate = Temporal.PlainDate.from({  
  calendar: 'hebrew',  
  year: 5785,  
  month: 7,  
  day: 10  
});  
console.log(hebrewDate.toString(), hebrewDate.toLocaleString('en-US', { calendar: 'hebrew' }));
```
