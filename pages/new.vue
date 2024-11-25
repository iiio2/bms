<script setup lang="ts">
const name = ref('')
const desc = ref('')
</script>

<template>
  <h3>Add new book</h3>
  <FormKit
    type="text"
    label="FormKit Input"
    help="edit me to get started"
    v-model="name"
  />

  <p>{{ name }}</p>
</template>
