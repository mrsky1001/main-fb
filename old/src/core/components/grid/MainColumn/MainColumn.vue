<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <div class="main-column">
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class MainColumn extends Vue {
}
</script>

<style lang="scss">
.main-column {
  margin-top: 5rem;
  min-width: 35vw;
}

@media screen and (max-width: 1235px) {
  .main-column {
    width: 90vw;
  }
}
</style>
