<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <div :class="styleClasses">
    <div class="v-input__control">
      <div class="v-input__slot">
        <fieldset aria-hidden="true"/>
        <div class="v-text-field__slot">
          <v-icon v-if="!accountST.avatar" @click="clickAvatarImg"> mdi-camera-plus-outline</v-icon>

          <v-avatar v-if="accountST.avatar" class="avatar-img" @click="clickAvatarImg">
            <v-img :src="accountST.avatar"/>
          </v-avatar>

          <v-divider vertical inset/>
          <input
            id="username"
            name="username"
            placeholder="Имя"
            :class="inputClasses"
            :value="accountST.username"
            @input="accountST.setUsername"
          />
        </div>
      </div>
      <div class="v-text-field__details">
        <div class="v-messages theme--light error--text">
          <div class="v-messages__wrapper">
            <div class="v-messages__message">
              {{ errors.join(', ') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {vxc} from '@/core/store/store.vuex'
import {Prop} from 'vue-property-decorator'

@Component
export default class AvatarField extends Vue {
  accountST = vxc.account

  @Prop()
  errors: string[]

  @Prop()
  clickAvatarImg: () => void

  get styleClasses() {
    const classes =
      'avatar-field v-input  theme--light v-text-field v-text-field--is-booted' +
      ' v-text-field--enclosed v-text-field--outlined '
    const errorClasses = classes + 'error--text v-input--has-state'
    const normalClasses = classes + 'v-input--is-label-active v-input--is-dirty '

    return this.errors.length ? errorClasses : normalClasses
  }

  inputClasses() {
    return this.errors.length ? 'error--text error-input' : null
  }
}
</script>

<style lang="scss" scoped>
.avatar-field {
  margin-top: 10px;

  .v-input__slot {
    margin: 0 0 3px 0;
  }

  fieldset {
    margin-top: 5px;
  }

  .avatar-img {
    min-width: 43px !important;
    height: auto !important;
  }

  .v-divider {
    margin-left: 20px;
  }

  input {
    padding: 10px 20px;

    &.error-input {
      &::-webkit-input-placeholder {
        /* Chrome */
        color: #ff5252 !important;
      }

      &:-ms-input-placeholder {
        /* IE 10+ */
        color: #ff5252 !important;
      }

      &::-moz-placeholder {
        /* Firefox 19+ */
        color: #ff5252 !important;
        opacity: 1;
      }

      &:-moz-placeholder {
        /* Firefox 4 - 18 */
        color: #ff5252 !important;
        opacity: 1;
      }
    }
  }
}
</style>
