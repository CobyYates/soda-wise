<template>
  <div>
    <v-row>
      <v-col class="text-end">
        <v-btn
          color="primary"
          class="ma-3"
          @click="$store.state.list = !$store.state.list"
        >
          <v-icon v-if="$store.state.list">mdi-apps</v-icon>
          <v-icon v-else>mdi-format-list-bulleted</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3 class="ml-5">Low Soda's</h3>
      </v-col>
    </v-row>
    <v-row v-if="$store.state.list">
      <v-col cols="12" sm="11" lg="10" class="mx-auto">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          solo
        />
        <v-data-table
          :items="lowSodas"
          @click:row="openProduct"
          :items-per-page="20"
          class="elevation-1"
          :headers="headers"
          fixed-header
          :search="search"
        >
          <template v-slot:item.quantityRemaining="{ item }">
            <v-progress-linear
              v-model="item.quantityRemaining"
              :color="quantityColor(item.quantityRemaining)"
              height="30"
            >
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </template>

          <template v-slot:item.image="{ item }">
            <v-avatar size="80" class="my-2">
              <v-img :src="item.logo" class="liquid" />
            </v-avatar>
          </template>

          <template v-slot:item.cups="{ item }">
            <p class="mb-0">
              {{ item.quantityRemaining * 5 }} ({{ item.size.amount }}
              {{ item.size.type }})
            </p>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-row v-if="$store.state.list">
      <v-col cols="12" sm="11" lg="10" class="mx-auto">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          solo
        />
        <v-data-table
          :items="sodas"
          @click:row="openProduct"
          :items-per-page="20"
          class="elevation-1"
          :headers="headers"
          fixed-header
          :search="search"
          height="70vh"
        >
          <template v-slot:item.quantityRemaining="{ item }">
            <v-progress-linear
              v-model="item.quantityRemaining"
              :color="quantityColor(item.quantityRemaining)"
              height="30"
            >
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </template>

          <template v-slot:item.image="{ item }">
            <v-avatar size="80" class="my-2">
              <v-img :src="item.logo" class="liquid" />
            </v-avatar>
          </template>

          <template v-slot:item.cups="{ item }">
            <p class="mb-0">
              {{ item.quantityRemaining * 5 }} ({{ item.size.amount }}
              {{ item.size.type }})
            </p>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <div v-else>
      <v-row>
        <v-col
          v-for="item in lowSodas"
          :key="item.i"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          class="d-flex justify-center"
        >
          <soda :soda="item" />
        </v-col>
      </v-row>
    <v-divider class="my-5" />
      <v-row class="text-center mx-auto">
        <v-col
          v-for="item in sodas"
          :key="item.i"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          class="d-flex justify-center"
        >
          <soda :soda="item" />
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          class="d-flex justify-center align-center"
        >
          <soda :empty="true" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import soda from "../components/Home/Soda";
export default {
  components: {
    soda,
  },
  data() {
    return {
      headers: [
        { text: "", value: "image", width: "10%" },
        { text: "Product", value: "name", width: "20%" },
        { text: "Quantity", value: "quantityRemaining", width: "50%" },
        { text: "Cups", value: "cups", width: "20%" },
      ],
      search: "",
    };
  },
  methods: {
    quantityColor(value) {
      if (value <= 25) return "red";
      else return "green";
    },
    openProduct(item) {
      console.log(item);
      this.$router.push(`/product/${item.productId}`);
    },
    changeLevel() {
      console.log(document.getElementById("level").value);
      document.getElementById("level").value = 100;
      console.log(document.getElementById("level").value);
    },
  },
  computed: {
    lowSodas() {
      let items = this.$store.state.sodas
        .slice()
        .sort((a, b) => a.quantityRemaining - b.quantityRemaining);
      return items.filter((e) => e.quantityRemaining <= 25);
    },
    sodas() {
      let items = this.$store.state.sodas
        .slice()
        .sort((a, b) => a.quantityRemaining - b.quantityRemaining);
      return items.filter((e) => e.quantityRemaining > 25);
    },
  },
};
</script>

<style scoped>
.v-data-table {
  background: transparent !important;
}
</style>
