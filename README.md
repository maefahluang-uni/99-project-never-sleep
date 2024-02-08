# Feature Authentication

This feature is about to handle authentication of the application which uses of unauthenticated login (just add authentication guard but whatever username or password can still login)

## Use cases

Which pages that need authenticated access just add authentication middleware following

```html
<template>
  ...component content
</template>

<script>
export default {
  // Add this
  middleware: 'auth',

  // ...other component options
}
</script>
```
