import { ref, onMounted, onUnmounted } from 'vue';
import { faker } from '@faker-js/faker'

export function useName() {
    const firstName = ref("")
    const lastName = ref("");
    function updateName() {
        firstName.value = faker.person.firstName()
        lastName.value = faker.person.lastName()
    }

    onMounted(() => {
        window.addEventListener("click", updateName)
    })

    return { firstName, lastName }
}