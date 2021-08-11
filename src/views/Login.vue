<template>
  <div class="loginPage d-flex align-center">
    <v-card width="30vw" class="loginForm mx-auto pa-8 mt-12">
      <form>
        <h2 class="display-2 text-center mb-10">Soda Wise</h2>
        <v-text-field v-model="email" label="E-mail" required></v-text-field>
        <v-text-field v-model="password" type="password" label="Password" required></v-text-field>
        <v-btn class="mr-4" @click="login">submit</v-btn>
      </form>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
        email: '',
        password: '',
    };
  },
  methods: {
      login() {
          this.$store.state.liquidLvl = 10
          this.$router.push('/')
      },
  },
};
</script>

<style scoped>
.loginForm {
    z-index: 99;
}
</style>