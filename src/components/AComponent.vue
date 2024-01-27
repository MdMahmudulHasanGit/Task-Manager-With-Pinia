<template>
  <div>
    <h2>A Component</h2>
    <h2>Second Count {{ store.secondCount }}</h2>
    <h2>Name {{ store.name }}</h2>
    <h2>List {{ store.list }}</h2>
    <h2>Number {{ store.count }}</h2>
    <h2>Double Count: {{ store.doubleCount }}</h2>
    <button @click="store.increment">Increment</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
store.secondCount = 20;
store.count = store.count + 1;
</script>

<style scoped>
</style>