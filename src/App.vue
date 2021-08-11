<template>
  <v-app>
    <Liquid class="bottomStuff"/>
    <v-main class="mainContent">
      <router-view/>
      <v-bottom-navigation
        class="elevation-0"
        background-color="transparent"
        color="white"
        grow
        height="80"
        app
      >
        <v-btn class="navButtons" color="transparent" to="/" height="100%">
          <span>Home</span>
          <v-icon large>mdi-home</v-icon>
        </v-btn>

        <!-- <v-btn class="navButtons" color="transparent" to="/product" height="100%">
          <span>Products</span>
          <v-icon large>mdi-bottle-soda</v-icon>
        </v-btn> -->

        <!-- <v-btn class="navButtons" color="transparent" to="/locations" height="100%">
          <span>Locations</span>
          <v-icon large>mdi-map-marker</v-icon>
        </v-btn> -->

        <v-btn class="navButtons" color="transparent" to="/add-new" height="100%">
          <span>Add Product</span>
          <v-icon large>mdi-plus</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-main>
  </v-app>
</template>

<script>
import Liquid from "@/components/Shared/Liquid";
export default {
  name: "App",
  components: {
    Liquid
  },
  data: () => ({
    //
  }),
  computed: {
    color() {
      switch (this.value) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
        default:
          return "blue-grey";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .v-main {
  z-index: 200 !important;
  // margin-bottom: 200px !important;
  max-height: calc(100vh - 120px)!important;

  overflow: scroll;
}

.bottomStuff {
  position: fixed;
  bottom: 0;
}

.navButtons {
  z-index: 199 !important;
}

::-webkit-scrollbar {
  display: none;
}
</style>
