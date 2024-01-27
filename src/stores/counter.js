import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(2)
    const name = ref('Mahmudul')
    const list = ref(['Javascript'])
    const doubleCount = computed(() => {
        return count.value * 2
    })


    function increment() {
        count.value++;
    }

    return {
        count,
        doubleCount,
        name,
        list,
        increment
    }

})