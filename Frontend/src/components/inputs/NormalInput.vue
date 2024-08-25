<template>
  <el-input
    :model-value="modelValue"
    @input="updateInput"
    :class="inputClass"
    :placeholder="placeholder"
    :style="isFormField ? { margin: '0 !important' } : {}"
    :type="isPassword ? 'password' : 'text'"
    :show-password="isPassword"
  >
    <template #prefix v-if="icon">
      <component :is="icon" class="input-icon"></component>
    </template>
  </el-input>
</template>

<script>
export default {
  name: "NormalInput",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    isPassword: {
      type: Boolean,
      default: false,
    },
    isFormField: {
      type: Boolean,
      default: true,
    },
    placeholder: String,
    icon: {
      type: Object, // El icono ahora debe ser un objeto (un componente)
      default: null,
    },
  },
  computed: {
    inputClass() {
      if (this.tipo === "pequeno") return "pequeno";
      if (this.tipo === "mediano") return "mediano";
      if (this.tipo === "grande") return "grande";
      return "";
    },
  },
  methods: {
    updateInput(value) {
      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<style scoped lang="scss">
.pequeno {
  width: 240px;
  height: 28px;
  margin: 4px;
}

.mediano {
  width: 240px;
  height: 36px;
  margin: 6px;
}

.grande {
  width: 240px;
  height: 44px;
  margin: 8px;
}

.input-icon {
  margin-right: 8px;
  height: 24px;
  widows: 24px;
}
</style>
