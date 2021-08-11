<template>
  <div>
    <canvas id="canvas"/>
    <div id="cup"></div>
    <input hidden type="range" id="level" v-model="$store.state.liquidLvl" min="1" max="100">
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    liquidLvl() {
      return this.$store.state.liquidLvl;
    }
  },
  methods: {
      
  },
  mounted() {
    //essential variables
    var canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d"),
      aniId;

    //parameters
    var w = (canvas.width = window.innerWidth),
      h = (canvas.height = window.innerHeight),
      particles = [], //particle array
      level = this.liquidLvl,
      fill = false,
      color = "#FF5252",
      c;

    //Particle object constructor
    function particle(x, y, d) {
      this.x = x;
      this.y = y;
      this.d = d;
      this.respawn = function() {
        this.x = Math.random() * (w * 0.8) + 0.1 * w;
        this.y = Math.random() * 30 + h - ((h - 100) * level) / 100 - 50 + 50;
        this.d = Math.random() * 5 + 5;
      };
    }
    //function to start or restart the animation
    function init() {
      c = 0;
      particles = [];
      for (var i = 0; i < 40; i++) {
        var obj = new particle(0, 0, 0);
        obj.respawn();
        particles.push(obj);
      }
      aniId = window.requestAnimationFrame(draw);
    }
    //function that draws into the canvas in a loop
    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = color;
      ctx.strokeStyle = color;

      //draw the liquid
      ctx.beginPath();
      ctx.moveTo(w, h - ((h - 100) * level) / 100 - 50);
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.lineTo(0, h - ((h - 100) * level) / 100 - 50);
      var temp = 50 * Math.sin((c * 1) / 50);
      ctx.bezierCurveTo(
        w / 3,
        h - ((h - 100) * level) / 100 - 50 - temp,
        (2 * w) / 3,
        h - ((h - 100) * level) / 100 - 50 + temp,
        w,
        h - ((h - 100) * level) / 100 - 50
      );
      ctx.fill();

      //draw the bubbles
      for (var i = 0; i < 40; i++) {
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].d, 0, 2 * Math.PI);
        if (fill) ctx.fill();
        else ctx.stroke();
      }
      update();
      aniId = window.requestAnimationFrame(draw);
    }
    //function that updates variables
    function update() {
      c++;
      if (100 * Math.PI <= c) c = 0;
      for (var i = 0; i < 40; i++) {
        particles[i].x = particles[i].x + Math.random() * 2 - 1;
        particles[i].y = particles[i].y - 1;
        particles[i].d = particles[i].d - 0.04;
        if (particles[i].d <= 0) particles[i].respawn();
      }
    }
    
    //update canvas size when resizing the window
    window.addEventListener("resize", function() {
      //update the size
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      //stop the animation before restarting it
      window.cancelAnimationFrame(aniId);
      init();
    });
    //start animation
    init();
  },
};
</script>

<style scoped>
body {
  margin: 0;
}

#cup {
    background: rgb(201, 201, 201);
    height: 120px;
    width: 100vw;
    position: fixed;
    bottom: 0;
    z-index: -1;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
    border-radius: 5px;
    position: relative;
    /* background: inherit; */
    overflow: hidden;
}

#cup:before {
  content: "";
  position: absolute;
  background: inherit;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: inset 0 0 100px rgba(255, 255, 255, 0.685);
  filter: blur(10px);
  margin: -20px;
}

canvas {
  position: absolute;
  bottom: 0;
  left: 0;
  background: transparent;
  /* background: rgb(189, 189, 189); */
}

#canvas {
  z-index: 0 !important;
}

#level {
  position: relative;
  margin: 0px 1px;
  top: calc(50% - 13px);
  left: calc(60px - 50vh);
  width: calc(100vh - 100px);
  background-color: white;
  -webkit-appearance: none;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
</style>