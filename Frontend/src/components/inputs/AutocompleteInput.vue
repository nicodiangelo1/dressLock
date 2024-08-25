<template>
  <div class="el-autocomplete"></div>
  <el-autocomplete
    :model-value="modelValue"
    @input="updateInput"
    :fetch-suggestions="querySearch"
    :placeholder="placeholder"
  >
    <template #prefix v-if="icon">
      <component :is="icon" class="input-icon"></component>
    </template>
    <template #suffix>
      <div :class="inputClass"></div>
    </template>
  </el-autocomplete>
</template>

<script>
export default {
  name: "AutocompleteInput",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    placeholder: String,
    icon: {
      type: Object,
      default: null,
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  computed: {
    formattedItems() {
      return this.items.map((item) => {
        return typeof item === "string" ? { value: item } : item;
      });
    },
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
    querySearch(queryString, cb) {
      const results = queryString
        ? this.formattedItems.filter(this.createFilter(queryString))
        : this.formattedItems;
      cb(results || []);
    },
    createFilter(queryString) {
      return (item) => {
        return (
          item.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
  },
};
</script>

<style scoped>
.input-icon {
  margin-right: 8px;
  height: 24px;
  widows: 24px;
}
.pequeno {
  height: 28px;
}

.mediano {
  height: 36px;
}

.grande {
  height: 44px;
}
</style>
