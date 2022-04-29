<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <div>
    <p class="font-weight-bold grey--text header-map-text p-size-h2">
      <v-icon class="grey--text"> mdi-message-text-outline</v-icon>
      Контакты для связи:
    </p>

    <div style="margin-left: 20px">
      <v-btn
        plain
        class="footer-btn font-weight-black"
        color="white"
        target="_blank"
        href="mailto:foma.blog@yandex.ru"
      >
        foma.blog@yandex.ru
      </v-btn>
      <social-network/>
    </div>
  </div>
</template>

<script lang="ts">
import routesObj from '@/app/routes/routes-obj'
import Vue from 'vue'
import Component from 'vue-class-component'
import SocialNetwork from '@/core/components/app/AppFooter/SocialNetwork.vue'

@Component({
  components: {SocialNetwork},
})
export default class Contacts extends Vue {
  routesObj = routesObj
}
</script>

<style lang="scss" scoped>
.header-map-text {
  width: fit-content;
  //border-bottom: 2px solid;
}

.footer-btn {
  min-width: 0 !important;
  padding: 0 16px 0 0 !important;
}

.p-size-h2 {
  font-size: 0.875rem;
}
</style>
