<template>
  <div class="common-layout">
    <el-container>
      <el-main class="main-content">
        <img :src="require('@/assets/FondoLogin.jpeg')" class="imagen" />
      </el-main>
      <el-aside class="form-aside">
        <el-card class="card" shadow="always" body-style="card">
          <el-text class="my-2 titulo"> {{ $t("login.titulo") }} </el-text>
          <el-form
            :model="form"
            :rules="rules"
            ref="loginForm"
            label-position="top"
            class="formulario"
          >
            <el-form-item prop="email">
              <NormalInput
                v-model="form.email"
                tipo="grande"
                :placeholder="$t('login.email')"
                :icon="getUserIcon()"
              />
            </el-form-item>
            <el-form-item prop="password">
              <NormalInput
                v-model="form.password"
                tipo="grande"
                :placeholder="$t('login.clave')"
                :isPassword="true"
                :icon="getLockIcon()"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="boton" @click="onSubmit">
                {{ $t("login.acceder") }}
                <el-icon class="el-icon--right"><Unlock /></el-icon>
              </el-button>
            </el-form-item>
          </el-form>
          <el-text class="my-2">
            {{ $t("login.mensajeNoRegistrado") }}
            <router-link to="register">
              {{ $t("login.clickAqui") }}
            </router-link>
          </el-text>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import NormalInput from "@/components/inputs/NormalInput";
import { Unlock, User, Lock } from "@element-plus/icons-vue";
import { ElNotification } from "element-plus";

export default {
  name: "LoginView",
  components: {
    NormalInput,
    Unlock,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      rules: {
        email: [
          {
            required: true,
            message: this.$t("validation.email.required"),
            trigger: "blur",
          },
          {
            type: "email",
            message: this.$t("validation.email.invalid"),
            trigger: ["blur", "change"],
          },
        ],
        password: [
          {
            required: true,
            message: this.$t("validation.password.required"),
            trigger: "blur",
          },
        ],
      },
    };
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    return {
      router,
      store,
    };
  },
  methods: {
    getLockIcon() {
      return Lock;
    },
    getUserIcon() {
      return User;
    },
    async onSubmit() {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          try {
            await this.store.dispatch('auth/login', {
              email: this.form.email,
              password: this.form.password,
            });
            this.router.push('/dashboard'); 
            ElNotification({
              title: this.$t("success"),
              message: this.$t("login.successMessage"),
              type: "success",
              position: "bottom-right",
            });
          } catch (error) {
            ElNotification({
              title: this.$t("login.error"),
              message: this.$t("login.incorrectCredentials"),
              type: "error",
              position: "bottom-right",
            });
          }
        } else {
          ElNotification({
            title: this.$t("login.error"),
            message: this.$t("login.errorMessage"),
            type: "error",
            position: "bottom-right",
          });
          return false;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.formulario {
  margin: auto;
}
.common-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.imagen {
  width: 100%;
  height: 100vh;
  object-fit: cover; /* Asegura que la imagen cubra todo el área */
}

.form-aside {
  width: 100%;
  max-width: 480px;
  box-sizing: border-box;
}

.card {
  background: rgb(240, 240, 240);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.titulo {
  font-size: 32px;
  margin: 24px 0px;
}

.boton {
  width: 100%;
  background-color: rgb(29, 132, 58);
  margin-top: 12px;
  color: white;
  font-weight: bold;
}

.boton:hover {
  background-color: rgb(24, 110, 48);
}

/* Estilos para pantallas pequeñas */
@media (max-width: 768px) {
  .main-content {
    order: 2; /* Mueve la imagen debajo del formulario */
    height: 40vh; /* La imagen ocupa menos espacio en pantallas pequeñas */
  }

  .form-aside {
    order: 1;
    width: 100%;
    max-width: 100%;
  }
}

:deep(.el-card__body) {
  display: flex;
  flex-direction: column;
}
</style>
