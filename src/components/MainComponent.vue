<script setup lang="ts">
import { ref } from "vue";
import type { IUser, ITodoItem } from '@/types/general'
import getTodosCount from '@/helpers/getTodosCount'
import ButtonComponent from '@/components/ButtonComponent.vue'
import TodosSection from '@/components/TodosSection.vue'

const loading = ref(false)

const sortedTodos = ref<IUser[]>([])

const sortByCompleted = (first: IUser, second: IUser) => {
  if (getTodosCount(first, true) > getTodosCount(second, true)) return -1
  if (getTodosCount(first, true) < getTodosCount(second, true)) return 1;
  if (second.id > first.id) return -1
  if (second.id < first.id) return 1

  return 0;
}

const getSortedTodos = (items: ITodoItem[]) => {
  return items.reduce((acc: IUser[], curr) => {
    const index = acc.findIndex(el => el.items.length > 0 && el.items[0].userId === curr.userId)
    index !== -1 ? acc[index].items.push(curr) : acc.push({id: curr.userId, items: [curr]})

    return acc.sort(sortByCompleted)
  }, [])
}

const getTodos = () => {
  loading.value = true
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(async response => {
      const data: ITodoItem[] = await response.json()
      loading.value = false

      sortedTodos.value = getSortedTodos(data)

      if (!response.ok) {
        const error = 'Ошибка: попробуйте ещё раз';
        return Promise.reject(error);
      }
    })
    .catch(error => {
      alert(error)
    })
}

</script>

<template>
  <div :class="$style.container">
    <ButtonComponent
      :loading="loading"
      @click="getTodos"
    />

    <TodosSection v-if="!loading" :class="$style.todos" :items="sortedTodos"/>
  </div>
</template>


<style module>
.container {
  padding: 20px;
}

.todos {
  margin-top: 20px;
}
</style>