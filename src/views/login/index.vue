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
            <avatar class="avatar" />
            <Motion>
              <h2 class="outline-none">你好</h2>
            </Motion>
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="loginRules" size="large">
              <el-form-item :rules="[{ required: true, message: '请输入账号', trigger: 'blur' }]" prop="username">
                <el-input clearable v-model="ruleForm.username" placeholder="账号" />
              </el-form-item>
            </el-form>
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
import Motion from './utils/motion';
import { loginRules } from './utils/rule';

import { toRaw, reactive } from 'vue';

const ruleForm = reactive({
  username: 'admin',
  password: 'admin123',
});
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
