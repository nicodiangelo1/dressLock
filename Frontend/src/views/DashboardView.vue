<template>
  <div class="carousel-container">
    <!-- Carrusel de Prendas Superiores -->
    <CarrouselComponent
      :modelValue="'carousel-tops'"
      :height="'300px'"
      :width="'100%'"
      :items="[
        {
          image:
            'https://static.zara.net/assets/public/4cf2/d137/939e40aa8247/d7279c012676/07200380083-e1/07200380083-e1.jpg?ts=1722943040494&w=1024',
          name: 'CAMISA CROCHET GEOMÉTRICO',
          color: 'Beige-marro',
          size: 'M',
          price: '$20',
        },
        {
          image:
            'https://static.zara.net/assets/public/8ca4/023d/d64a426ab8fe/2916649dcb2c/01618404800-e1/01618404800-e1.jpg?ts=1718182165416&w=1024',
          name: 'CAMISA 100% LINO',
          color: 'Negro',
          size: 'L',
          price: '$35',
        },
        {
          image:
            'https://static.zara.net/assets/public/f999/362c/f16f4efaa8e6/1c31449eb619/01063406832-e1/01063406832-e1.jpg?ts=1708074154093&w=1024',
          name: 'CAMISA 100% LINO',
          color: 'Gris topo',
          size: 'XL',
          price: '$60',
        },
      ]"
    />

    <!-- Carrusel de Prendas Inferiores -->
    <CarrouselComponent
      :modelValue="'carousel-bottoms'"
      :height="'300px'"
      :width="'100%'"
      :items="[
        {
          image:
            'https://static.zara.net/assets/public/b92f/d7ac/a3234a9385c7/7361f98b1a3c/01063408832-e1/01063408832-e1.jpg?ts=1718207741467&w=1024',
          name: 'BERMUDA 100% LINO',
          color: 'Gris topo ',
          size: '32',
          price: '$40',
        },
        {
          image:
            'https://static.zara.net/assets/public/8f4f/df49/ecde4fb0bc05/89e3eee6495a/01618406401-e1/01618406401-e1.jpg?ts=1718182163514&w=1024',
          name: 'BERMUDA 100% LINO',
          color: 'Negro',
          size: 'M',
          price: '$30',
        },
        {
          image:'https://static.zara.net/assets/public/8fde/0110/45a949409f58/4954a517bb69/03992316064-e1/03992316064-e1.jpg?ts=1719917567907&w=1024',
          name: 'BERMUDA JACQUARD RAYAS',
          color: 'Gris',
          size: '34',
          price: '$50',
        },
      ]"
    />

    <!-- Carrusel de Calzado -->
    <CarrouselComponent
      :modelValue="'carousel-shoes'"
      :height="'300px'"
      :width="'100%'"
      :items="[
        {
          image:
            'https://static.zara.net/assets/public/acc4/fd7a/f2344c679ced/c7ec97ea53ec/12218420400-e2/12218420400-e2.jpg?ts=1723645583580&w=1024',
          name: 'ZAPATILLA BÁSICA',
          color: 'Azul',
          size: '42',
          price: '$60',
        },
        {
          image:
            'https://static.zara.net/assets/public/95cf/0dd4/d1f3428bb3d5/c3cfa587026f/12204320802-e2/12204320802-e2.jpg?ts=1722335115615&w=1024',
          name: 'ZAPATILLA BÁSICA',
          color: 'Gris',
          size: '43',
          price: '$80',
        },
        {
          image:
            'https://static.zara.net/assets/public/b82d/bc09/94734f2bb9fe/b86a05be9898/12314420410-e2/12314420410-e2.jpg?ts=1722335105231&w=1024',
          name: 'ZAPATILLA ESTILO RETRO',
          color: 'Brown',
          size: '41',
          price: '$30',
        },
      ]"
    />
  </div>
</template>

<script>
import CarrouselComponent from "@/components/Dashboard/Carrousel.vue";

export default {
  name: "DashboardView",
  components: {
    CarrouselComponent,
  },
  data() {
    return {};
  },
  setup() {},
  methods: {},
};
</script>

<style scoped>
.carousel-container {
  width: 50%;
  margin: 20px auto;
  margin-right: auto;
  margin-left: 6rem;
  display: flex;
  flex-direction: column;
}

.el-carousel__item img {
  display: block;
  margin-right: 0 auto;
  width: 100%;
  height: auto;
  object-fit: contain;
}

@media (max-width: 768px) {
  .carousel-container {
    width: 100%;
    padding: 0 10px;
    margin: 20px 0;
  }

  .el-carousel__item img {
    height: auto;
  }
}
</style>
