<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <v-main class="account-form auth-card">
    <ModalImageMenu
      :show-modal="accountST.isShowAvaMenuModal"
      :set-show-modal="accountST.setIsShowAvaMenuModal"
      :delete-img="accountST.deleteAvatar"
      :upload-img="showAvaUploadModal"
    />
    <ModalImageUploader
      :show-modal="accountST.isShowAvaUploadModal"
      :set-show-modal="accountST.setIsShowUploadModal"
      :img="accountST.avatar"
      :set-img="accountST.saveAvatar"
      :cropper-options="cropOpts"
    />
    <v-row justify="center">
      <v-card>
        <v-card-title>Учетная запись</v-card-title>
        <v-card-text>
          <ValidationObserver ref="obs" v-slot="{ invalid, handleSubmit }">
            <v-form @keyup.native.enter="handleSubmit(accountST.saveAccount)">
              <ValidationProvider
                v-slot="{ errors }"
                name="username"
                vid="username"
                immediate
                :rules="accountST.validUsernameRules"
              >
                <AvatarField :click-avatar-img="showAvaMenuModal" :errors="errors"/>
                <input :value="accountST.username" style="display: none"/>
              </ValidationProvider>

              <ValidationProvider v-slot="{ errors }" name="email" :rules="accountST.validEmailRules">
                <v-text-field
                  outlined
                  label="E-mail"
                  :value="accountST.email"
                  :error-messages="errors"
                  @change="accountST.setEmail"
                />
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors }"
                name="password"
                :rules="accountST.validPasswordRules"
              >
                <v-text-field
                  outlined
                  autocomplete="off"
                  label="Новый пароль"
                  :value="accountST.password"
                  :error-messages="errors"
                  :type="accountST.isShowPassword ? 'text' : 'password'"
                  :append-icon="accountST.isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @change="accountST.setPassword"
                  @click:append="accountST.setIsShowPassword(!accountST.isShowPassword)"
                />
              </ValidationProvider>
              <Recaptcha/>
              <v-row>
                <v-btn link plain small :to="routes.DELETE_ACCOUNT.path"> Удалить аккаунт</v-btn>
                <v-btn @click="handleSubmit(accountST.saveAccount)"> Сохранить</v-btn>
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
import '../styles/auth-card.scss'
import '../styles/reCaptcha.scss'
import {vxc} from '@/core/store/store.vuex'
import routesObj from '@/app/routes/routes-obj'
import ModalImageMenu from '@/core/components/app/ModalImageUploader/ModalImageMenu.vue'
import AvatarField from '@/core/components/auth/Account/AvatarField/AvatarField.vue'
import ModalImageUploader from '@/core/components/app/ModalImageUploader/ModalImageUploader.vue'
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
    ModalImageMenu,
    AvatarField,
    ModalImageUploader,
    Recaptcha,
    ValidationProvider,
    ValidationObserver,
  },
})
export default class Account extends Vue {
  accountST = vxc.account
  authST = vxc.auth
  routes = routesObj

  cropOpts = {
    isShowCircleChk: false,
    isShowQualityFld: false,
    isShowFullAreaBtn: false,
    isShowExpansionPnl: false,
    isShowAspectRatioFld: false,
    isShowProportionalChk: false,
    maxCropperHeight: 300,
  }

  showAvaUploadModal() {
    this.accountST.setIsShowUploadModal(true)
    this.accountST.setIsShowAvaMenuModal(false)
  }

  showAvaMenuModal() {
    if (this.accountST.avatar && this.accountST.isLoaded) {
      this.accountST.setIsShowUploadModal(false)
      this.accountST.setIsShowAvaMenuModal(true)
    } else {
      this.accountST.setIsShowUploadModal(true)
    }
  }

  mounted() {
    this.accountST.getAccountData()
  }
}
</script>

<style lang="scss" scoped>
.account-form {
}
</style>
