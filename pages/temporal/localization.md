# Localization

```ts {monaco-run} {showOutputAt: '+1'} 
const instant = Temporal.Now.instant();

const locales = [
  'en-US', // English (United States)
  'fr-FR', // French (France)
  'ar-EG', // Arabic (Egypt)
  'ja-JP-u-ca-japanese', // Japanese with Japanese calendar
  'he-IL-u-ca-hebrew' // Hebrew (Israel) with Hebrew calendar
];

locales.forEach(locale => {
  const dt = instant.toZonedDateTimeISO('America/Denver');
  console.log(`${locale}:`, dt.toLocaleString(locale, { dateStyle: 'full', timeStyle: 'long' }));
});
```

<!-- 

-->

