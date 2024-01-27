<template>
  <div>
    <h2>A Component</h2>
    <h2>Name {{ store.name }}</h2>
    <h2>List {{ store.list }}</h2>
    <h2>Number {{ store.count }}</h2>
    <h2>Double Count: {{ store.doubleCount }}</h2>
    <button @click="store.increment">Increment</button>
    <h1>name: {{ store.c_Name.lastName }} {{ store.c_Name.lastName }}</h1>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();

// store.$patch((state) => {
//   state.list.push("vue3");
//   state.count = 60;
// });
// store.$patch({
//   count: 50,
//   name: "Mahmudul Hasan",
// });

// Replace state

store.$state = {
  count: store.count + 10,
};
</script>

<style scoped>
</style>