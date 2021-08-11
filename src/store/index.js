import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: false,
    liquidLvl: 4,
    sizeTypes: ["Ounces","Liters","Pints","Quarts","Gallons"],
    sodas: [
      {
        productId: 1,
        name: "Coca-Cola",
        logo: "https://www.coca-cola.com/content/dam/brands/tw/coca-cola/image/coke-logo.png",
        quantityRemaining: 75,
        address: "123 1st St.",
        location: "Salt Lake City",
        region: "Utah",
        size: {
          type: "Ounces",
          amount: 32
        },
        inventory: 3,
        data: [
          {}
        ]
      },
      {
        productId: 2,
        name: "Diet Coca-Cola",
        logo: "https://hollycrab.com/allston/wp-content/uploads/sites/2/2016/08/Diet-Coke.png",
        quantityRemaining: 35,
        address: "123 1st St.",
        location: "Salt Lake City",
        region: "Utah",
        size: {
          type: "Ounces",
          amount: 32
        },
        inventory: 3,
        data: [
          {}
        ]
      },
      {
        productId: 15,
        name: "Coka-Cola Zero",
        logo: "data:image/png;base64,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",
        quantityRemaining: 90,
        address: "123 1st St.",
        location: "Salt Lake City",
        region: "Utah",
        size: {
          type: "Ounces",
          amount: 32
        },
        inventory: 3,
        data: [
          {}
        ]
      },
      {
        productId: 3,
        name: "Mello Yello",
        logo: "https://i.pinimg.com/originals/65/ce/4d/65ce4d1e64306e0e98ba70e4fcfc7784.png",
        quantityRemaining: 20,
        address: "123 1st St.",
        location: "Salt Lake City",
        region: "Utah",
        size: {
          type: "Ounces",
          amount: 32
        },
        inventory: 3,
        data: [
          {}
        ]
      },
      {
        productId: 4,
        name: "Barq's Root Beer",
        logo: "https://www.freshzza.com/wp-content/uploads/2020/07/barq-1.jpg",
        quantityRemaining: 52,
        address: "123 1st St.",
        location: "Salt Lake City",
        region: "Utah",
        size: {
          type: "Ounces",
          amount: 32
        },
        inventory: 3,
        data: [
          {}
        ]
      },
      {
        productId: 5,
        name: "Pibb Xtra",
        logo: "https://pbs.twimg.com/profile_images/1314656750927261702/CMp3lbpD_400x400.jpg",
        quantityRemaining: 86,
        address: "123 1st St.",
        location: "Salt Lake City",
        region: "Utah",
        size: {
          type: "Ounces",
          amount: 32
        },
        inventory: 3,
        data: [
          {}
        ]
      },
      {
        productId: 6,
        name: "Hi-C",
        logo: "https://www.coca-colafreestyle.com/content/dam/FreeStyle/en-US/Brands/Hi-C/Hi-C-Fruit-Punch.png",
        quantityRemaining: 99,
        address: "123 1st St.",
        location: "Salt Lake City",
        region: "Utah",
        size: {
          type: "Ounces",
          amount: 32
        },
        inventory: 3,
        data: [
          {}
        ]
      },
      {
        productId: 7,
        name: "Fanta",
        logo: "https://logos-world.net/wp-content/uploads/2020/05/Fanta-Logo.png",
        quantityRemaining: 10,
        address: "123 1st St.",
        location: "Salt Lake City",
        region: "Utah",
        size: {
          type: "Ounces",
          amount: 32
        },
        inventory: 3,
        data: [
          {}
        ]
      },
      {
        productId: 8,
        name: "Minute Maid Lemonade",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItLpI0u5VPdoEIFJILQnp-HAVPQYgC7VLAdDxBQqRv5YK-VAmN1Kean_sIUVIh0e20xI&usqp=CAU",
        quantityRemaining: 85,
        address: "123 1st St.",
        location: "Salt Lake City",
        region: "Utah",
        size: {
          type: "Ounces",
          amount: 32
        },
        inventory: 3,
        data: [
          {}
        ]
      },
      {
        productId: 9,
        name: "Dasani",
        logo: "https://www.southcongareehouseofpizza.com/wp-content/uploads/2019/04/logo_dasani.jpg",
        quantityRemaining: 80,
        address: "123 1st St.",
        location: "Salt Lake City",
        region: "Utah",
        size: {
          type: "Ounces",
          amount: 32
        },
        inventory: 3,
        data: [
          {}
        ]
      },
      {
        productId: 10,
        name: "Sprite",
        logo: "https://m.media-amazon.com/images/I/61lAcFlxwNL._AC_SX522_.jpg",
        quantityRemaining: 35,
        address: "123 1st St.",
        location: "Salt Lake City",
        region: "Utah",
        size: {
          type: "Ounces",
          amount: 32
        },
        inventory: 3,
        data: [
          {}
        ]
      },
      {
        productId: 11,
        name: "Dr Pepper",
        logo: "https://drpeppermuseum.com/wp-content/uploads/2017/07/dr_pepper_company.png",
        quantityRemaining: 50,
        address: "123 1st St.",
        location: "Salt Lake City",
        region: "Utah",
        size: {
          type: "Ounces",
          amount: 32
        },
        inventory: 3,
        data: [
          {}
        ]
      },
      {
        productId: 12,
        name: "Powerade",
        logo: "https://cdn.worldvectorlogo.com/logos/powerade.svg",
        quantityRemaining: 90,
        address: "123 1st St.",
        location: "Salt Lake City",
        region: "Utah",
        size: {
          type: "Ounces",
          amount: 32
        },
        inventory: 3,
        data: [
          {}
        ]
      },
      
      {
        productId: 13,
        name: "Canada Dry",
        logo: "https://logodix.com/logo/925468.jpg",
        quantityRemaining: 35,
        address: "123 1st St.",
        location: "Salt Lake City",
        region: "Utah",
        size: {
          type: "Ounces",
          amount: 32
        },
        inventory: 3,
        data: [
          {}
        ]
      },
      {
        productId: 14,
        name: "Mtn Dew",
        logo: "https://pbs.twimg.com/profile_images/1143779355518210048/oA4S_Yqk.png",
        quantityRemaining: 50,
        address: "123 1st St.",
        location: "Salt Lake City",
        region: "Utah",
        size: {
          type: "Ounces",
          amount: 32
        },
        inventory: 3,
        data: [
          {}
        ]
      },
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
