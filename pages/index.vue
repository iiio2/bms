<script setup lang="ts">
const { data } = await useFetch('/api/books')
</script>

<template>
  <card-group :gap="1">
    <card v-for="book in data?.books">
      <card-body>
        <card-title>{{ book.name }}</card-title>
        <card-text>{{ book.desc }}</card-text>
        <card-text>{{ book.author }}</card-text>
        <card-footer>{{ book.category }}</card-footer>
      </card-body>
    </card>
  </card-group>
</template>
