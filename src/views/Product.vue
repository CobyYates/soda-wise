<template>
  <v-row>
    <v-col cols="12" md="6" lg="4" xl="3">
      <v-card height="auto" class="card ma-6">
        <div class="text-center grey lighten-2">
          <v-avatar size="200" class="mx-auto my-3">
            <v-img :src="soda.logo"/>
          </v-avatar>
        </div>
        <v-card-title class="display-1">{{soda.name}}</v-card-title>
        <v-list>
          <v-list-item v-for="item in rightList" :key="item.i">
            <v-list-item-icon>
              <v-icon large>mdi-{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{item.title}}</v-list-item-title>
            <v-list-item-subtitle
              class="font-weight-bold"
              v-if="item.type == 'text'"
            >{{soda[`${item.value}`]}}</v-list-item-subtitle>
            <v-list-item-subtitle
              class="font-weight-bold"
              v-if="item.type == 'multiple'"
            >{{soda.size[`${item.value[0]}`]}} {{soda.size[`${item.value[1]}`]}}</v-list-item-subtitle>
            <v-list-item-subtitle v-if="item.type == 'progress'">
              <v-progress-linear
                v-model="soda[`${item.value}`]"
                :color="quantityColor(soda[`${item.value}`])"
                height="30"
              >
                <template v-slot:default="{ value }">
                  <strong
                    :class="soda[`${item.value}`] >= 75 ? 'white--text':''"
                  >{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
        <v-card-actions class="d-flex flex-end">
          <v-btn @click="$router.push(`/edit-product/${soda.productId}`)" color="error">
            Edit Product
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" md="6" lg="8" xl="9">
      <v-row>
        <v-col>
          <v-card height="80vh" class="card ma-6">
            <apexchart type="bar" height="100%" class="chart" :options="options" :series="series"></apexchart>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>

        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      soda: null,
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      rightList: [
        {
          title: "Address",
          icon: "map-marker",
          type: "text",
          value: "address"
        },
        {
          title: "Location",
          icon: "office-building-marker",
          type: "text",
          value: "location"
        },
        {
          title: "Region",
          icon: "map",
          type: "text",
          value: "region"
        },
        {
          title: "Calculation Factor",
          icon: "beer",
          type: "multiple",
          value: ["amount", "type"]
        },
        {
          title: "In Inventory",
          icon: "archive",
          type: "text",
          value: "inventory"
        },
        {
          title: "Quantity Remaining",
          icon: "car-coolant-level",
          type: "progress",
          value: "quantityRemaining"
        }
      ],
      options: {
        chart: {
          height: '200px'
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        },
        title: {
          text: "Monthly Usage",
          align: "center",
          style: {
            fontSize: "20px"
          }
        },
        colors: ["#00897b"]
      },
      series: [
        {
          name: "Usage (32 Ounces)",
          data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139]
        }
      ]
    };
  },
  beforeMount() {
    this.soda = this.$store.state.sodas.filter(
      e => e.productId == this.$route.params.id
    )[0];
  },
  methods: {
    quantityColor(value) {
      if (value < 25) return "red";
      if (value >= 25 && value < 50) return "orange";
      if (value >= 50 && value < 75) return "yellow";
      if (value >= 75) return "green";
    }
  }
};
</script>

<style lang="scss" scoped>
.theme--light .v-card {
  background: rgba(238, 238, 238, 0.39);
}
</style>
