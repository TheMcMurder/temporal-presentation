---
theme: seriph
background: https://images.unsplash.com/photo-1533749047139-189de3cf06d3?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
title: Welcome to Slidev
info: |
  ## Temporal - an API 30 years in the making
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
transition: slide-left
mdc: true
---
# Temporal: A JS API 30 years in the making

Why Dates in Javascript are about to "get good"

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: none
---
# The Date constructor

<!-- ts {monaco-run} will turn the editor into something that can run automatically -->

<!-- ```ts {monaco-run} {autorun:false} -->

```ts {1|2|3|4|all}
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