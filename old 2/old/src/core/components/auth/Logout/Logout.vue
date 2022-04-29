<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <v-main class="auth-card">
    <v-container>
      <v-row justify="center">
        <v-card>
          <v-card-title> Выход</v-card-title>
          <v-card-text class="card-body">
            <form>
              <p>Вы уверены что хотите выйти?</p>
              <v-row>
                <v-btn link plain small @click="callSubmit"> Да, выйти!</v-btn>
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
import Vue from 'vue'
import Component from 'vue-class-component'
import {ValidationObserver, ValidationProvider} from 'vee-validate'
import routesObj from '@/app/routes/routes-obj'
import {handlerError} from '@/core/lib/response-handler'
import '../styles/auth-card.scss'
import {vxc} from '@/core/store/store.vuex'

@Component({
  components: {
    ValidationProvider,
    ValidationObserver,
  },
})
export default class Logout extends Vue {
  authST = vxc.auth

  callSubmit() {
    this.authST
      .logout()
      .then(() => {
        this.goToHome()
      })
      .catch((err) => {
        handlerError(err)
      })
  }

  goToHome() {
    this.$router.push(routesObj.HOME)
  }
}
</script>

<style lang="scss" scoped></style>
