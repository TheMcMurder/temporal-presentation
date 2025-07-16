---
layout: center
---

# Temporal
## 202X - ♾️

<!-- Why 202x? We don't know exactly when it will be released and incorporated into the JS language proper -->

---

# Why do we need Temporal?

- We could fix the date constructor by adding more methods
- We need a well designed API

<!-- 
  The problem with adding more methods is that the date construtor already has many APIs and developers are often confused about what to use.

  A well designed API not only needs to do more, but it should also do less and prevent misuse.

 -->

---

# API overview

- All methods are static
- Temporal is a namespace like `intl`
- Temporal contains several namespaces and classes

<!-- 
Temporal exposes over 200 utility methods via several classes and we can't cover them all but we can cover the broad strokes.

Classes 
 -->

---

# Class groupings

- Representing a time duration: `Temporal.Duration`
- Representing a time point:
  - A unique instant in history:
    - As a timestamp: `Temporal.instant`
    - As a date-time paired with a timezone: `Temporal.ZonedDateTime`
  - A timezone unaware date/time:
    - Date (year, momnth, day) + time: `Temporal.PlainDateTime`
    - Date (year, month, day): `Temporal.PlainDate`
      - Year, month: `Temporal.PlainYearMonth`
      - Month, day: `Temporal.PlainMonthDay`
    - Time (hour, minute, second, millisecond, microsection, nanosecond): `Temporal.PlainTime`
  - Getting the current time: `Temporal.Now`

<!-- 

This is a big wall of text but the important thing here is to call out the two main groupings

  - Getting an object representing a time duration: `Temporal.Duration`
  - Getting an object representing a point in time
  - Getting the current time: `Temporal.Now`

  Since a lot of these different classes share similar methods we're going to focus on their utility and how they solve problems with the Date constructor rather than the specifics of each.


  I do want to call out that a lot of these support conversion between each other even if you need to add information to do so in some cases.

  Okay, Let's dive into how we actually use these in practical ways that solve the problems with the Date Constructor

 -->
