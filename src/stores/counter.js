import { defineStore } from 'pinia'
import { useName } from '../compasables/name'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(2)
    const name = ref('Mahmudul')
    const list = ref(['Javascript'])
    const doubleCount = computed(() => {
        return count.value * 2
    })

    const c_Name = useName()


    function increment() {
        count.value++;
    }

    return {
        count,
        doubleCount,
        name,
        list,
        c_Name,
        increment
    }

})