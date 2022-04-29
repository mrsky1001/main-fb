<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
    <main-column lg="5" class="home-main-column"> </main-column>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ServiceStorage from '@/core/lib/service-storage'
import { vxc } from '@/core/store/store.vuex'
import TypeCardsBar from '@/app/views/Home/extensions/TypeCardsBar.vue'
import TableViewPosts from '@/app/views/Home/extensions/tablePosts/TableViewPosts.vue'
import MainColumn from '@/core/components/grid/MainColumn/MainColumn.vue'
import CardViewPosts from '@/app/views/Home/extensions/CardViewPosts.vue'
import { vxa } from '@/app/store/store.app'
import NoPosts from '@/app/components/NoPosts/NoPosts.vue'
import { Watch } from 'vue-property-decorator'

@Component({
    components: { NoPosts, TypeCardsBar, TableViewPosts, CardViewPosts, MainColumn },
})
export default class HomeMainContainer extends Vue {
    homeST = vxa.home
    authST = vxc.auth
    isLoaded = false
    typeHomeView = false
    filter = {
        justPublished: false,
        justDraft: false,
        sortNew: true,
        sortPopular: true,
        sortOld: false,
        all: false,
    }

    mounted() {
        setTimeout(() => {
            this.isLoaded = true
        }, 1000)
    }

    @Watch('homeST.posts')
    onPostsUpdated() {
        this.isLoaded = false
        setTimeout(() => {
            this.isLoaded = true
        }, 300)
    }

    goToUp() {
        window.scroll(0, 0)
    }

    setTypeHomeView(val: boolean) {
        this.typeHomeView = val
        ServiceStorage.setProp('typeHomeView', val)
    }
}
</script>
<style lang="scss" scoped>
.to-up-block {
    z-index: 3;
    position: fixed;
    top: 90%;
    right: 6%;
    opacity: 26%;

    .v-btn {
        background: white;
    }

    &:hover {
        opacity: 100%;
    }
}

.home-main-column {
    max-width: 800px;
    position: relative;
    z-index: 3;
}
</style>
