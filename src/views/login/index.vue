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
              <Motion :delay="100">
                <el-form-item :rules="[{ required: true, message: '请输入账号', trigger: 'blur' }]" prop="username">
                  <el-input clearable v-model="ruleForm.username" placeholder="账号" />
                </el-form-item>
              </Motion>
              <Motion :delay="150">
                <el-form-item :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]" prop="password">
                  <el-input show-password clearable v-model="ruleForm.password" placeholder="密码" />
                </el-form-item>
              </Motion>
              <Motion :delay="250">
                <el-button
                  class="w-full mt-4"
                  size="default"
                  type="primary"
                  :loading="loading"
                  @click="onLogin(ruleFormRef)">
                  登录
                </el-button>
              </Motion>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'element-plus';
import bg from '@/assets/login/bg.png';
import illustration from '@/assets/login/illustration.svg';
import avatar from '@/assets/login/avatar.svg';
import Motion from './utils/motion';
import { loginRules } from './utils/rule';

import { toRaw, reactive, ref } from 'vue';

const loading = ref(false);
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  username: 'admin',
  password: 'admin123',
});

const onLogin = async (formEl: FormInstance | undefined) => {
  loading.value = true;
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.info('🐕‍🦺登录成功', valid);
    } else {
      loading.value = false;
      return fields;
    }
  });
};
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
      .avatar {
        width: 350px;
        height: 80px;
      }
      h2 {
        text-transform: uppercase;
        margin: 15px 0;
        color: #999;
        font: bold 200% Consolas, Monaco, monospace;
      }
    }
  }
}

@media screen and (max-width: 1180px) {
  .login-container {
    grid-gap: 9rem;
  }
  .login-form {
    width: 290px;
  }
  .login-form h2 {
    font-size: 2.4rem;
    margin: 8px 0;
  }
  .img img {
    width: 360px;
  }
  .avatar {
    width: 280px;
    height: 80px;
  }
}

@media screen and (max-width: 968px) {
  .wave {
    display: none;
  }

  .img {
    display: none;
  }

  .login-container {
    grid-template-columns: 1fr;
  }

  .login-box {
    justify-content: center;
  }
}
</style>
