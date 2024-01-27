import { defineStore } from 'pinia'
import { ref } from 'vue'
import { computed } from 'vue'

export const useTaskStore = defineStore('taskStore', () => {
    const tasks = ref([
        { id: 1, title: 'buy some milk', isFav: false },
        { id: 2, title: 'play Gloomhaven', isFav: true },
    ])
    const name = ref('Pinia Tasks')



    const favs = computed(() => {
        return tasks.value.filter(t => t.isFav)
    })

    const favCount = computed(() => {
        return tasks.value.reduce((p, c) => {
            return c.isFav ? p + 1 : p
        }, 0)
    })
    // console.log(tasks.value.length)
    const totalCount = computed(() => {
        return tasks.value.length
    })

    return { tasks, favs, favCount, totalCount, name }
})