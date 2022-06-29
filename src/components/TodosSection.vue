<template>
  <section :class="$style.section">
    <UserCard v-for="item in items" :user="item" :key="item.id"/>
  </section>
</template>

<script setup lang="ts">
import type { IUser } from "@/types/general";
import UserCard from '@/components/UserCard.vue'

interface Props {
  items: IUser[]
}

defineProps<Props>()
</script>

<style module>
.section {
  display: flex;
  column-gap: 10px;
  row-gap: 10px;
  flex-wrap: wrap;
}
</style>