<template>
  <hnCalendar v-model="date" />
  {{ date }}
</template>

<script setup name="test">
import { reactive, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import hnCalendar from '@/pages/components/hn-calendar'

const date = ref('2020-01-01')

onLoad(val => {
  console.log(val)
})
</script>

<style scoped></style>
