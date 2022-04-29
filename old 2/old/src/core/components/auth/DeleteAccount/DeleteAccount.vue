<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <v-main class="auth-card">
    <v-container>
      <v-row justify="center">
        <v-card>
          <v-card-title> Удаление аккаунта</v-card-title>
          <v-card-text>
            <form>
              <p>Вы уверены что хотите удалить аккаунт?</p>
              <Recaptcha/>
              <v-row>
                <v-btn link plain small @click="callDeleteAccount"> Да, удалить!</v-btn>
                <v-btn @click="goToHome"> Нет, вернуться</v-btn>
              </v-row>
            </form>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import routesObj from '../../../../app/routes/routes-obj'
import '../styles/auth-card.scss'
import Vue from 'vue'
import Component from 'vue-class-component'
import {handlerError} from '@/core/lib/response-handler'
import '../styles/reCaptcha.scss'
import {vxc} from '@/core/store/store.vuex'
import Recaptcha from '@/core/components/auth/Recaptcha/Recaptcha.vue'
import {AxiosError} from 'axios'

@Component({
  components: {
    Recaptcha,
  },
})
export default class DeleteAccount extends Vue {
  authST = vxc.auth
  accountST = vxc.account

  callDeleteAccount() {
    this.accountST
      .deleteAccount()
      .then(() => {
        this.goToHome()
      })
      .catch((err: AxiosError) => {
        this.authST.resetRecaptcha()
        handlerError(err)
      })
  }

  goToHome() {
    this.$router.push(routesObj.HOME)
  }
}
</script>

<style lang="scss"></style>
