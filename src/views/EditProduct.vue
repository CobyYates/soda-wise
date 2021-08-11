<template>
  <div class="d-flex align-center flex-column justify-center">
    <v-card width="500" class="card mx-auto pa-8 my-10">
      <form>
        <div class="d-flex justify-center">
          <v-avatar color="grey lighten-2" size="100" class="mb-4">
            <v-icon v-if="product.logo == ''" x-large>mdi-image</v-icon>
            <v-img v-else :src="`${product.logo}`"/>
          </v-avatar>
        </div>
        <v-autocomplete
          v-model="product.name"
          :items="$store.state.sodas"
          item-text="name"
          item-value="name"
          outlined
          required
          label="Type of soda"
          @input="updateLogo"
        >
          <template v-slot:item="{ item }">
            <template>
              <v-list-item-avatar>
                <img :src="item.logo">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.name"></v-list-item-title>
              </v-list-item-content>
            </template>
          </template>
        </v-autocomplete>
        <v-text-field
          v-model="product.address"
          outlined
          label="Address"
          type="Address"
          required
        />
        <v-text-field
          v-model="product.location"
          outlined
          label="Location (ie: 123 Apple Street)"
          type="Location"
          required
        />
        <v-text-field
          v-model="product.region"
          outlined
          label="Region (ie: Utah)"
          type="state"
          required
        />
        <p>Measurements</p>
        <v-row>
          <v-col>
            <v-text-field
              v-model="product.size.amount"
              label="Amount"
              type="number"
              outlined
              required
            />
          </v-col>
          <v-col>
            <v-select
              :menu-props="{ bottom: true, offsetY: true }"
              :items="$store.state.sizeTypes"
              v-model="product.size.type"
              label="Type"
              type="text"
              outlined
              required
            />
          </v-col>
        </v-row>
        <v-slider
          hide-details="auto"
          v-model="product.inventory"
          thumb-label="always"
          label="Current Inventory"
          required
          min="0"
          max="25"
          class="mt-4"
        ></v-slider>
        <v-card-actions class="d-flex justify-end">
          <v-btn color="primary" @click="updateProduct()">
            Update
          </v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: ""
    };
  },
  methods: {
    updateLogo(item) {
      this.product.logo = this.$store.state.sodas.filter(
        e => e.name == item
      )[0].logo;
    },
    updateProduct(){
      this.$router.push(`/product/${this.product.productId}`)
    }
  },
  beforeMount() {
    this.product = this.$store.state.sodas.filter(
      e => e.productId == this.$route.params.id
    )[0];
    console.log(this.product);
  }
};
</script>

<style scoped>
.theme--light .v-card {
  background: rgba(238, 238, 238, 0.39);
}
</style>