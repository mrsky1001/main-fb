<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <v-main class="lighten-3 my-main-column">
    <div class="section-header">
      <h2 class="section-title">- {{ homeST.currentSection.name }} -</h2>
    </div>
    <flex-container>
      <home-left-bar></home-left-bar>
      <home-main-container></home-main-container>
      <home-right-bar></home-right-bar>
    </flex-container>
  </v-main>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {Watch} from 'vue-property-decorator'
import {vxa} from '@/app/store/store.app'
import HomeMainContainer from '@/app/views/Home/MainContainer/HomeMainContainer.vue'
import HomeRightBar from '@/app/views/Home/RightBar/HomeRightBar.vue'
import HomeLeftBar from '@/app/views/Home/LeftBar/HomeLeftBar.vue'
import {Route} from 'vue-router'
import FlexContainer from '@/app/components/FlexContainer/FlexContainer.vue'

@Component({
  components: {FlexContainer, HomeMainContainer, HomeRightBar, HomeLeftBar},
})
export default class Home extends Vue {
  homeST = vxa.home

  checkParams() {
    if (this.$route.params.sectionId) {
      this.homeST.setCurrentSection(this.$route.params.sectionId)
    }

    if (this.$route.params.searchText) {
      this.homeST.setSearchText(this.$route.params.searchText)
    }
  }

  mounted() {
    this.homeST.reset(false)
    this.checkParams()
    this.homeST.getPosts(true)

    let timer: any = null
    window.addEventListener('scroll', () => {
      if (timer !== null) {
        clearTimeout(timer)
        timer = null
      } else {
        timer = setTimeout(
          () => {
            let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom
            if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
              !this.homeST.loading && this.homeST.getPosts()
            }
          },
          this.homeST.loading ? 1000 : 150
        )
      }
    })
  }

  @Watch('$route')
  routeUpdate(val: Route) {
    this.checkParams()

    if (Object.keys(val.params).length > 0) {
      this.homeST.getPosts(true)
    } else {
      this.homeST.reset()
    }
  }
}
</script>
<style lang="scss" scoped>
.section-header {
  padding: 40px 0 0 0;
  width: 100%;
  text-align: center;

  .section-title {
    color: #8a8a8a;
    font-weight: 300;
    font-size: xx-large;
  }
}

.ads-desktop {
  position: absolute;
  bottom: 0;
  padding: 3vw;
  vertical-align: bottom;
}

.ads-mobile {
  display: none;
}

@media screen and (max-width: 1264px) {
  .ads-desktop {
    display: none;
  }

  .ads-mobile {
    display: block;
  }
}
</style>
