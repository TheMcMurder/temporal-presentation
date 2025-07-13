# Full Time zone support
## Conversion

```ts {monaco-run} {autorun:false}
let now1 = Temporal.Now.instant()
let now2 = now1.toZonedDateTimeISO('Asia/Tokyo'); // IANA Time Zone Identifiers
console.log('now1', now1.toString());
console.log('now2', now2.toString());
```

<!-- 
- new Date() sometimes creates local dates, sometimes creates UTC dates 
- momentJS requires a plugin
- Temporal does it out of the box
-->

---

# Full Time zone support
## Direct creation

```ts {monaco-run} {autorun:false}
let now = Temporal.Now.zonedDateTimeISO('Europe/Paris'); 
console.log('now', now.toString()); 

```
