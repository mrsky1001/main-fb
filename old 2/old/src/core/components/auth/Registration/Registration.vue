<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <v-main class="registration-form auth-card">
    <v-row justify="center">
      <v-card>
        <v-card-title>Регистрация</v-card-title>
        <v-card-text>
          <ValidationObserver ref="obs" v-slot="{ invalid, handleSubmit }">
            <v-form @keyup.native.enter="handleSubmit(callSubmit)">
              <ValidationProvider v-slot="{ errors }" name="username" :rules="regST.validUsernameRules">
                <v-text-field
                  required
                  autofocus
                  outlined
                  label="Имя"
                  :value="regST.username"
                  :error-messages="errors"
                  @change="regST.setUsername"
                />
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }" name="email" :rules="regST.validEmailRules">
                <v-text-field
                  required
                  outlined
                  label="E-mail"
                  :value="regST.email"
                  :error-messages="errors"
                  @change="regST.setEmail"
                />
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }" name="password" :rules="regST.validPasswordRules">
                <v-text-field
                  required
                  outlined
                  autocomplete="off"
                  label="Пароль"
                  :value="regST.password"
                  :error-messages="errors"
                  :type="regST.isShowPassword ? 'text' : 'password'"
                  :append-icon="regST.isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @change="regST.setPassword"
                  @click:append="regST.setIsShowPassword(!regST.isShowPassword)"
                />
              </ValidationProvider>

              <div>
                <p style="text-align: justify">
                  Перед регистрацией необходимо прочесть и согласиться с нашей
                  <a target="_blank" :href="routes.CONDITIONS.path"
                  >политикой предоставления информации
                  </a>
                  и
                  <a target="_blank" :href="routes.AGREEMENT.path"
                  >условиями обработки персональных данных</a
                  >.
                </p>
              </div>
              <ValidationProvider
                v-slot="{ errors }"
                name="agreeConditions"
                :rules="regST.validDocsRules"
              >
                <v-checkbox
                  required
                  outlined
                  label="Согласен c условиями предоставления информации"
                  :value="regST.agreeConditions"
                  :error-messages="errors"
                  @change="regST.setAgreeConditions"
                />
                <input :value="regST.agreeConditions" style="display: none"/>
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }" name="agreeAgreement" :rules="regST.validDocsRules">
                <v-checkbox
                  required
                  outlined
                  label="Согласен c условиями обработки персональных данных"
                  :value="regST.agreeAgreement"
                  :error-messages="errors"
                  @change="regST.setAgreeAgreement"
                />
                <input :value="regST.agreeAgreement" style="display: none"/>
              </ValidationProvider>
              <Recaptcha/>
              <v-row>
                <v-btn link plain small :to="routes.LOGIN.path"> Войти</v-btn>
                <v-btn @click="handleSubmit(callSubmit)"> Зарегистрироваться</v-btn>
              </v-row>
            </v-form>
          </ValidationObserver>
        </v-card-text>
      </v-card>
    </v-row>
  </v-main>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {email, max, min, regex, required} from 'vee-validate/dist/rules'
import {extend, setInteractionMode, ValidationObserver, ValidationProvider} from 'vee-validate'
import {handlerError} from '@/core/lib/response-handler'
import routesObj from '@/app/routes/routes-obj'
import '../styles/auth-card.scss'
import '../styles/reCaptcha.scss'
import {vxc} from '@/core/store/store.vuex'
import Recaptcha from '@/core/components/auth/Recaptcha/Recaptcha.vue'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: 'Поле не должно быть пустым',
})

extend('min', {
  ...min,
  message: 'Поле должно содержать не менее {length} символов',
})

extend('max', {
  ...max,
  message: 'Поле должно содержать не более {length} символов',
})

extend('email', {
  ...email,
  message: 'Не корректный e-mail',
})

extend('regex', {
  ...regex,
  message: 'Поле должно содержать только латинские символы и цифры',
})

@Component({
  components: {
    Recaptcha,
    ValidationProvider,
    ValidationObserver,
  },
})
export default class Registration extends Vue {
  regST = vxc.registration
  authST = vxc.auth
  routes = routesObj

  callSubmit() {
    this.regST
      .regAccount()
      .then((res) => {
        if (res) {
          this.$router.push(routesObj.HOME)
        } else {
          this.authST.resetRecaptcha()
        }
      })
      .catch(handlerError)
  }
}
</script>

<style lang="scss" scoped></style>
