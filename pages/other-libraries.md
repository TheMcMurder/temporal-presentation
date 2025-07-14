---
layout: center
---

# Others

---
layout: two-cols-header
---
# Luxon
## 2015 - ????

::left::

<v-click>

### Pros

- Immutable API
- Migration Path for Moment
- No Extra timezone bundle
- Chainable API
- Faster than moment
</v-click>

::right::

<v-click>

### Cons

- Smaller community
- Browser Dependency for Intl features
- Large bundle - No tree shaking
</v-click>

---
layout: two-cols-header
---
# DayJS

::left::

<v-click>

### Pros

- Lightweight
- Moment.js API
- Chainable
- Plugin system
- Fast
- Cross-platform

</v-click>

::right::

<v-click>

### Cons

- Limited time zones
- Needs plugins for features
- Smaller ecosystem
- Plugin fragmentation
- Plugins behave globally
- Partial tree shaking
- Infrequent releases
</v-click>

---
layout: two-cols-header
---
# DateFns

::left::

<v-click>

### Pros

- Tree shaking
- Fully ESM
- Functional
- intl support

</v-click>

::right::

<v-click>

### Cons
- Like moment TZ support is a separate bundle
- No chaining
- Limited locale support
- Operates directly on native JS dates, inheriting many of the quirks
</v-click>