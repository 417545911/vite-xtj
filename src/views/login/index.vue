<template>
  <div class="select-none">
    <img :src="bg" class="wave" />
    <div class="flex-c">
      <div class="login-container">
        <div class="img">
          <component :is="toRaw(illustration)" />
        </div>
        <div class="login-box">
          <div class="login-form">
            <avatar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import bg from '@/assets/login/bg.png';
import illustration from '@/assets/login/illustration.svg';
import avatar from '@/assets/login/avatar.svg';

import { toRaw } from 'vue';
</script>

<style scoped lang="scss">
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
.login-container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 18rem;
  padding: 0 2rem;
  .img {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
      width: 500px;
    }
  }
  .login-box {
    display: flex;
    align-items: center;
    text-align: center;
    .login-form {
      width: 360px;
    }
  }
}
</style>
