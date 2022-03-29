<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <div class="right-col">
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class RightColumn extends Vue {
}
</script>

<style scoped lang="scss">
.right-col {
  width: 100%;
  padding: 0 10px 0 10px;
  margin-top: 5rem;
}
</style>
