<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <div class="left-col">
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class LeftColumn extends Vue {
}
</script>

<style lang="scss" scoped>
.left-col {
  padding: 0 10px 0 10px;
  margin-top: 5rem;

  min-width: 28vw;
}

@media screen and (min-width: 0px) and (max-width: 1400px) {
  //.left-col {
  //    min-width: 10rem;
  //}
}
</style>
