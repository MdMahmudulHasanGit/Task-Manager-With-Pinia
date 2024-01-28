import { defineStore } from 'pinia'
import { ref } from 'vue'
import { computed } from 'vue'

export const useTaskStore = defineStore('taskStore', () => {
    // All states are here ----->
    const tasks = ref([
        { id: 1, title: 'buy some milk', isFav: false },
        { id: 2, title: 'play Gloomhaven', isFav: true },
    ])
    const name = ref('Pinia Tasks')


    // All getters are here ------->
    const favs = computed(() => {
        return tasks.value.filter(t => t.isFav)
    })

    const favCount = computed(() => {
        return tasks.value.reduce((p, c) => {
            return c.isFav ? p + 1 : p
        }, 0)
    })
    const totalCount = computed(() => {
        return tasks.value.length
    })

    // All actions are here ------->
    function addTasks(task) {
        this.tasks.push(task)
    }

    function deleteTask(id) {
        tasks.value = tasks.value.filter(t => {
            return t.id !== id
        })

        console.log(tasks.value)
    }

    function toggleFav(id) {
        const task = tasks.value.find(t => t.id === id)
        task.isFav = !task.isFav
    }

    return { tasks, favs, favCount, totalCount, name, deleteTask, toggleFav, addTasks }
})