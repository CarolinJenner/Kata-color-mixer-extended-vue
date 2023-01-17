Vue.createApp({
  data() {
    return {
      red: 150,
      green: 150,
      blue: 150,
    };
  },
  methods: {
    fetchRandomColors() {
      fetch("https://dummy-apis.netlify.app/api/color")
        .then((res) => res.json())
        .then((data) => {
          this.red = data.rgb.r;
          this.green = data.rgb.g;
          this.blue = data.rgb.b;
        });
    },
  },
  computed: {
    combinedColor() {
      return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    },
  },
}).mount("#app");
