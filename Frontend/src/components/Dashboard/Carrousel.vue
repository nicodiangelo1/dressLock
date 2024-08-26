<template>
  <el-carousel :interval="0" type="card" :height="height" arrow="always">
    <el-carousel-item v-for="(item, index) in items" :key="index">
      <div class="item-content">
        <img
          :src="item.image"
          :alt="item.name"
          :style="{ height: height, width: width }"
        />
        <div class="item-details">
          <h3>{{ item.name }}</h3>
          <p><strong>Color:</strong> {{ item.color }}</p>
          <p><strong>Size:</strong> {{ item.size }}</p>
          <p><strong>Price:</strong> {{ item.price }}</p>
        </div>
      </div>
    </el-carousel-item>

    <!-- Personalización de la flecha anterior -->
    <template #prev>
      <el-button
        color="black"
        class="custom-arrow custom-prev"
        type="primary"
        circle
        icon="ArrowLeft"
      />
    </template>

    <!-- Personalización de la flecha siguiente -->
    <template #next>
      <el-button
        color="black"
        class="custom-arrow custom-next"
        type="primary"
        circle
        icon="ArrowRight"
      />
    </template>
  </el-carousel>
</template>

<script>
import { ArrowLeft, ArrowRight } from "@element-plus/icons-vue";

export default {
  name: "CarrouselComponent",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ArrowLeft,
    // eslint-disable-next-line vue/no-unused-components
    ArrowRight,
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      default: "300px",
    },
    width: {
      type: String,
      default: "100%",
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.el-carousel__item img {
  display: block;
  margin: 0 auto;
  object-fit: cover;
}

.item-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item-details {
  text-align: center;
  margin-top: 10px;
}

.custom-arrow {
  background-color: black;
  color: white;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.custom-prev {
  left: 10px;
}

.custom-next {
  right: 10px;
}

.custom-arrow:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.icon {
  width: 24px;
  height: 24px;
  stroke-width: 4;
}
</style>
