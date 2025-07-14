---
layout: center
---

# MomentJS
## 2011 - 2023

---
monacoRunAdditionalDeps:
  - moment
---

# MomentJS
## Consistent Parsing

```ts {monaco-run}
import moment from 'moment'
let m1 = moment('2023-03-01');      // Always parses as local time by default
let m2 = moment('2023/03/01');      // Also parses as local time


console.log('m1', m1.toString());
console.log('m2', m2.toString());

```

---
monacoRunAdditionalDeps:
  - moment
  - moment-timezone
---
# MomentJS
## Easy Formatting

```ts {monaco-run}
import moment from 'moment-timezone';
let m = moment('2025-01-01T00:00:00-05:00');

console.log('m formatted', m.tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm:ss')); // "2025-01-01 14:00:00"
```

---
monacoRunAdditionalDeps:
  - moment
---
# MomentJS
## Date Arithmetic

```ts {monaco-run}
import moment from 'moment'
let m = moment();
console.log('m', m.toString());
let nextWeek = m.add(7, 'days');

console.log('nextWeek', nextWeek.toString())
```

---

# MomentJS
## Cons

<v-clicks>

- Monolithic library - 200 KB minified
- No internal Modularity
- Mutable created objects
- Slower than modern alternatives
- Depreciated
- Timezone support is less robust than modern alternatives
- Timezone support requires separate package
</v-clicks>