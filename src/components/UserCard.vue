<script setup lang="ts">
import type { IUser } from "@/types/general";
import getTodosCount from '@/helpers/getTodosCount'


interface Props {
  user: IUser
}

const props = defineProps<Props>()

const todosCompleted = getTodosCount(props.user, true)
const todosIncomplete = getTodosCount(props.user)
</script>

<template>
  <div :class="$style.card">
    <h3>Пользователь {{ user.id }}</h3>

    <span :class="$style.counter">
     <span :class="$style.completed">{{ todosCompleted }}</span>
     /
     <span :class="$style.incomplete">{{ todosIncomplete }}</span>
   </span>

    <ul :class="$style.list">
      <li
        v-for="item in user.items"
        :key="item.id"
        :class="{[$style.done]: item.completed }"
      > {{ item.title }}
      </li>
    </ul>
  </div>
</template>


<style module>
.card {
  position: relative;
  padding: 10px;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  width: 200px;
  max-height: 200px;
  overflow: hidden;
}

.list {
  height: 80%;
  overflow: auto;
  list-style-type: disclosure-closed;
  padding: 0 0 0 15px;
}

.done {
  text-decoration: line-through;
}

.counter {
  position: absolute;
  top: 0;
  right: 10px;
}

.completed {
  color: #008000;
}

.incomplete {
  color: #FF0000;
}
</style>