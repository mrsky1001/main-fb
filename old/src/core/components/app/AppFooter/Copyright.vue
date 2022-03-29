<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <div>
    <p>{{ new Date().getFullYear() }} — © Все права защищены. Никита и Анастасия Коляда.</p>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Copyright extends Vue {
  text =
    'Копировать какие-либо материалы с ресурса запрещено. Делать это можно только с письменного разрешения правообладателя или со ссылкой на сайт-источник.'
}
</script>

<style lang="scss" scoped></style>
