<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <v-main class="login-form auth-card">
    <v-container>
      <v-row justify="center">
        <v-card>
          <v-card-title> Вход</v-card-title>
          <v-card-text class="card-body">
            <ValidationObserver ref="obs" v-slot="{ invalid, handleSubmit }">
              <v-form @keyup.native.enter="handleSubmit(callLogin)">
                <ValidationProvider v-slot="{ errors }" name="login" :rules="loginST.validRules">
                  <v-text-field
                    outlined
                    autofocus
                    label="Логин"
                    :value="loginST.login"
                    :error-messages="errors"
                    @change="loginST.setLogin"
                  />
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }" name="password" :rules="loginST.validRules">
                  <v-text-field
                    required
                    outlined
                    label="Пароль"
                    autocomplete="off"
                    :value="loginST.password"
                    :error-messages="errors"
                    :type="loginST.isShowPassword ? 'text' : 'password'"
                    :append-icon="loginST.isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @change="loginST.setPassword"
                    @click:append="loginST.setIsShowPassword(!loginST.isShowPassword)"
                  />
                </ValidationProvider>
                <Recaptcha/>
                <v-row>
                  <v-btn link plain small :to="routes.REGISTRATION.path"> Зарегистрироваться</v-btn>
                  <v-btn @click="handleSubmit(callLogin)"> Войти</v-btn>
                </v-row>
              </v-form>
            </ValidationObserver>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {required} from 'vee-validate/dist/rules'
import {extend, setInteractionMode, ValidationObserver, ValidationProvider} from 'vee-validate'
import routesObj from '@/app/routes/routes-obj'
import {handlerError} from '@/core/lib/response-handler'
import '../styles/auth-card.scss'
import '../styles/reCaptcha.scss'
import {vxc} from '@/core/store/store.vuex'
import Recaptcha from '@/core/components/auth/Recaptcha/Recaptcha.vue'
import {IRoute} from '@/core/models/interfaces/app/IRoute'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: 'Поле не должно быть пустым',
})

@Component({
  components: {
    Recaptcha,
    ValidationProvider,
    ValidationObserver,
  },
})
export default class Login extends Vue {
  loginST = vxc.login
  authST = vxc.auth

  routes = routesObj

  callLogin() {
    this.loginST
      .loginAccount()
      .then((res) => {
        if (res) {
          if (this.loginST.prevRoute.path === routesObj.REGISTRATION.path) {
            this.$router.push(routesObj.HOME)
          } else {
            this.$router.push(this.loginST.prevRoute)
          }
        } else {
          this.authST.resetRecaptcha()
        }
      })
      .catch((err) => {
        this.authST.resetRecaptcha()
        handlerError(err)
      })
  }

  beforeRouteEnter(to: IRoute, from: IRoute, next: any) {
    next(() => {
      this.loginST.prevRoute = from
    })
  }
}
</script>

<style lang="scss" scoped>
.login-form {
}
</style>
