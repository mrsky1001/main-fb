<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <div>
    <v-app-bar app light color="white" class="my-app-bar" scroll-target="#scrolling-techniques-2">
      <v-btn v-if="!navbar.isShowSearch" class="d-flex d-md-none" icon>
        <v-icon @click="navbar.setIsShowDrawer(true)"> mdi-menu</v-icon>
      </v-btn>
      <LogoBar/>
      <NavDrawer/>
      <SearchField class="search-field"/>
      <SearchButton/>
      <AvatarBar/>
    </v-app-bar>
    <SideDrawer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import {vxc} from '@/core/store/store.vuex'
import Component from 'vue-class-component'
import NavDrawer from '@/core/components/app/AppNavbar/NavDrawer/NavDrawer.vue'
import SearchButton from '@/core/components/app/AppNavbar/common/SearchButton.vue'
import AvatarBar from '@/core/components/app/AppNavbar/common/AvatarBar.vue'
import SideDrawer from '@/core/components/app/AppNavbar/SideDrawer/SideDrawer.vue'
import LogoBar from '@/core/components/app/AppNavbar/common/LogoBar.vue'
import SearchField from '../../../../core/components/app/AppNavbar/common/SearchField.vue'

@Component({
  components: {SearchField, SideDrawer, AvatarBar, SearchButton, NavDrawer, LogoBar},
})
export default class AppNavbar extends Vue {
  navbar = vxc.appNavbar
}
</script>

<style lang="scss">
.my-app-bar {
  box-shadow: rgba(0, 0, 0, 0.08) 0 8px 16px !important;

  .search-field {
    background-color: white;
    min-width: 400px;
    max-width: 400px;
    width: 400px;
  }

  .my-row-bar {
    margin: 0 !important;

    .v-btn {
      margin-right: 30px;
      padding: 0 !important;

      &:last-child {
        margin-right: 16px;
      }

      color: #2c3e50;

      .my-label {
        font-size: 1.17em;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0;
        margin-inline-end: 0;
        font-weight: bold;
      }

      .v-icon {
        margin-top: -4px;
        margin-right: 3px;
      }
    }

    .active-btn {
      .v-icon {
        margin-top: 4px;
        font-size: 28px;
      }

      > span {
        opacity: 1 !important;
      }

      .my-label {
        border-bottom: 0.2rem solid #2c3e50;
      }
    }
  }
}

@media screen and (min-width: 0px) and (max-width: 959px) {
  .my-app-bar {
    .v-toolbar__content {
      display: flex;
      justify-content: space-between;
    }

    .search-field {
      display: none;
    }
  }
}
</style>
