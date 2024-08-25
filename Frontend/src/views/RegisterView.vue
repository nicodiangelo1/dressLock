<template>
  <div class="common-layout">
    <el-container>
      <el-main class="main-content">
        <img :src="require('@/assets/FondoLogin.jpeg')" class="imagen" />
      </el-main>
      <el-aside class="form-aside">
        <el-card class="card" shadow="always" body-style="card">
          <el-text class="my-2 titulo">{{ $t("register.titulo") }}</el-text>
          <el-form
            :model="form"
            :rules="rules"
            ref="loginForm"
            label-position="top"
            class="formulario"
          >
            <el-form-item prop="nombre">
              <NormalInput
                v-model="form.nombre"
                tipo="grande"
                :placeholder="$t('register.nombre')"
                :icon="getUserIcon()"
              />
            </el-form-item>
            <el-form-item prop="email">
              <NormalInput
                v-model="form.email"
                tipo="grande"
                :placeholder="$t('register.email')"
                :icon="getPostcardIcon()"
              />
            </el-form-item>
            <el-form-item prop="pais">
              <AutocompleteInput
                v-model="form.pais"
                tipo="grande"
                :items="paises"
                :placeholder="$t('register.pais')"
                :icon="getLocationIcon()"
              />
            </el-form-item>
            <el-form-item prop="password">
              <NormalInput
                v-model="form.password"
                tipo="grande"
                :placeholder="$t('register.password')"
                :isPassword="true"
                :icon="getLockIcon()"
              />
            </el-form-item>
            <el-form-item prop="passwordConfirm">
              <NormalInput
                v-model="form.passwordConfirm"
                tipo="grande"
                :placeholder="$t('register.passwordConfirm')"
                :isPassword="true"
                :icon="getLockIcon()"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="boton" @click="onSubmit">
                {{ $t("register.registrarse") }}
                <el-icon class="el-icon--right"><Check /></el-icon>
              </el-button>
            </el-form-item>
          </el-form>
          <el-text class="my-2">
            {{ $t("register.yaTienesCuenta") }}
            <router-link to="login">{{
              $t("register.hazClickAqui")
            }}</router-link>
          </el-text>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import NormalInput from "@/components/inputs/NormalInput";
import AutocompleteInput from "@/components/inputs/AutocompleteInput";
import { User, Lock, Check, Location, Postcard } from "@element-plus/icons-vue";
import { ElNotification } from "element-plus";

export default {
  name: "RegisterView",
  components: {
    NormalInput,
    AutocompleteInput,
    Check,
  },
  data() {
    return {
      paises: [
        /* lista de países */
      ],
      form: {
        nombre: "",
        pais: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      rules: {
        email: [
          {
            required: true,
            message: this.$t("register.errorMessage"),
            trigger: "blur",
          },
          {
            type: "email",
            message: this.$t("register.errorMessage"),
            trigger: ["blur", "change"],
          },
        ],
        nombre: [
          {
            required: true,
            message: this.$t("register.errorMessage"),
            trigger: "blur",
          },
        ],
        pais: [
          {
            required: true,
            message: this.$t("register.errorMessage"),
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: this.$t("register.errorMessage"),
            trigger: "blur",
          },
        ],
        passwordConfirm: [
          {
            required: true,
            message: this.$t("register.errorMessage"),
            trigger: "blur",
          },
          { validator: this.validatePasswordConfirm, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    getLockIcon() {
      return Lock;
    },
    getUserIcon() {
      return User;
    },
    getLocationIcon() {
      return Location;
    },
    getPostcardIcon() {
      return Postcard;
    },
    onSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          ElNotification({
            title: this.$t("register.success"),
            message: this.$t("register.successMessage"),
            type: "success",
            position: "bottom-right",
          });
          // Aquí puedes proceder con el envío del formulario
        } else {
          ElNotification({
            title: this.$t("register.error"),
            message: this.$t("register.errorMessage"),
            type: "error",
            position: "bottom-right",
          });
          return false;
        }
      });
    },
    validatePasswordConfirm(rule, value, callback) {
      if (value !== this.form.password) {
        callback(new Error(this.$t("register.passwordMismatch")));
      } else {
        callback();
      }
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
