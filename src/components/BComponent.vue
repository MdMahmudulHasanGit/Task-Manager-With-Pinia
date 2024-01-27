<template>
  <div>
    <hr />
    <h2>B Component</h2>
    <h1>Count {{ store.count }}</h1>
    <h2>Name {{ store.name }}</h2>
    <h2>List {{ store.list }}</h2>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();

console.log(store);
</script>

<style scoped>
</style>