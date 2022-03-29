<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <right-column>
    <Sections/>
  </right-column>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import RightColumn from '@/core/components/grid/RightColumn/RightColumn.vue'
import Sections from '@/app/views/Home/extensions/Sections.vue'

@Component({
  components: {Sections, RightColumn},
})
export default class HomeRightBar extends Vue {
}
</script>

<style scoped lang="scss"></style>
