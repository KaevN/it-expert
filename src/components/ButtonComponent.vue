<script setup lang="ts">
import LoaderComponent from '@/components/LoaderComponent.vue'

interface Props {
  loading: boolean
}

withDefaults(defineProps<Props>(), {
  loading: false
})

</script>

<template>
  <button
    :class="[$style.button, {[$style.disabled]: loading}]"
    :disabled="loading"
  >
    {{ loading ? 'Загружаем' : 'Загрузить' }}
    <LoaderComponent v-if="loading" :class="$style.loader"/>
  </button>
</template>

<style module>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  width: 200px;
  font-size: 20px;
  background-color: #bfff00;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.disabled {
  justify-content: space-between;
  cursor: not-allowed;
}
</style>