<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <left-column>
    <sections class="sections-block"/>
  </left-column>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import LeftColumn from '@/core/components/grid/LeftColumn/LeftColumn.vue'
import Sections from '@/app/views/Home/extensions/Sections.vue'

@Component({
  components: {LeftColumn, Sections},
})
export default class HomeLeftBar extends Vue {
}
</script>

<style scoped lang="scss">
.sections-block {
  display: none;
}

@media screen and (max-width: 1240px) {
  .sections-block {
    display: flex;
  }
}
</style>
