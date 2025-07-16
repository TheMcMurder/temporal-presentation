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

  Taking a look at the output you'll see that when I log out the date normally it shows an absolute moment in time
  
  and the annotation tells you which calendar system is being used

  This helps avoid confusion about what absoute moment is being referenced which makes working across calendar systems easier

  Internally Temporal is using the Gregorian calendar system
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
