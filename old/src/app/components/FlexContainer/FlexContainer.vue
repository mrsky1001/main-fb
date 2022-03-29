<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <div class="flex-container">
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class FlexContainer extends Vue {
}
</script>
<style lang="scss" scoped>
.flex-container {
  //margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
}

@media screen and (max-width: 1250px) {
  .flex-container {
    flex-wrap: wrap;
  }
}
</style>
