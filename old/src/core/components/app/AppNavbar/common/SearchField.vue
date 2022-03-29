<!--
  - Copyright (©) 13.10.2021, 14:47. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <v-text-field
    v-show="navbar.isShowSearch"
    autofocus
    single-line
    hide-details
    placeholder="Что будем искать?"
    :value="navbar.searchText"
    @change="navbar.setSearchText"
    @keydown.native.enter="callSearch"
    @focusout="navbar.setIsShowSearch(false)"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {vxc} from '@/core/store/store.vuex'
import routesObj from '@/app/routes/routes-obj'

@Component
export default class SearchField extends Vue {
  navbar = vxc.appNavbar

  callSearch() {
    this.$router.push({name: routesObj.SEARCH.name, params: {searchText: this.navbar.searchText}}).catch(() => {
      null
    })
  }
}
</script>

<style lang="scss" scoped></style>
