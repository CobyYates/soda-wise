<template>
  <div>
    <div v-if="empty == true" class="ma-auto">
      <v-card height="200" flat class="d-flex justify-center align-center">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              fab
              v-bind="attrs"
              v-on="on"
              x-large
              dark
              color="error"
              class="ma-auto"
              @click="$router.push('/add-new')"
            >
              <v-icon x-large>mdi-plus</v-icon>
            </v-btn>
          </template>
          <span>Add New Product</span>
        </v-tooltip>
      </v-card>
    </div>

    <div v-else>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-progress-circular
            :rotate="100"
            :size="250"
            :width="20"
            v-bind="attrs"
            v-on="on"
            :value="soda.quantityRemaining"
            :color="quantityColor(soda.quantityRemaining)"
          >
            <template v-slot:default>
              <v-avatar size="190" @click="$router.push(`/product/${soda.productId}`)">
                <v-img :src="soda.logo" class="liquid"/>
              </v-avatar>
            </template>
          </v-progress-circular>
        </template>
        <span>{{soda.quantityRemaining}}%</span>
      </v-tooltip>
    </div>

    <!-- <div v-else-if="soda.productId % 2 == 0">
      <v-avatar size="200">
        <v-img :src="soda.logo" @click="$router.push(`/product/${soda.productId}`)"/>
      </v-avatar>

      <v-progress-linear
        v-model="soda.quantityRemaining"
        :color="quantityColor(soda.quantityRemaining)"
        height="25"
        class="mt-4"
      >
        <template v-slot:default="{ value }">
          <strong>{{ Math.ceil(value) }}%</strong>
        </template>
      </v-progress-linear>
    </div>-->
  </div>
</template>

<script>
export default {
  props: ["soda", "empty"],
  name: "Soda",

  data: () => ({
    //
  }),
  methods: {
    quantityColor(value) {
      if (value <= 25) return "red";
      else return "green";
    }
  }
};
</script>

<style lang="scss" scoped>
.v-avatar {
  cursor: pointer;
}

.liquid::before {
  content: "";
  position: absolute;
  top: -180%;
  left: -50%;
  width: 200%;
  height: 200%;
  border-radius: 40%;
  background-color: white;
  opacity: 0.4;
  animation: thing 16s linear infinite;
}
@keyframes thing {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
