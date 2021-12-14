AFRAME.registerComponent("gameplay", {
  schema: {
    elementId: {
      type: "string",
      default: "#ring1",
    },
  },
  init: function () {
    var duration = 120;
    var timerE1 = document.querySelector("#timer");
    this.startTimer(timerE1, duration);
  },
  updateScore: function () {
    var element = document.querySelector("#score");
    var count = element.getAttribute("text").value;
    var currentscore = parseInt(count);
    currentscore += 10;
    element.setAttribute("text", { value: currentscore });
  },

  updateTarget: function () {
    var element = document.querySelector("#targets");
    var count = element.getAttribute("text").value;
    var currentTarget = parseInt(count);
    currentTarget -= 1;
    element.setAttribute("text", { value: currentTarget });
  },
  
  startTimer: function (timerE1, duration) {
    var minutes;
    var seconds;
    setInterval(() => {
      if (duration >= 0) {
        minutes = parseInt(duration / 60);
        seconds = parseInt(duration % 60);
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        timerE1.setAttribute("text", { value: minutes + ":" + seconds });
        duration = duration - 1;
      } else {
        this.gameOver();
      }
    }, 1000);
  },
  isCollided: function (elementId) {
    const element = document.querySelector(elementId);
    element.addEventListener("collide", (e) => {
      if (elementId.includes("#ring")) {
        element.setAttribute("visible", false);
        this.updateScore();
        this.updateTarget();
      } else if (elementId.includes("#hurdle")) {
        this.gameOver();
      }
    });
  },
  gameOver: function() {
    var element = document.querySelector("#gameover_text");
    element.setAttribute("visible", true)
    var planeE1 = document.querySelector("#plane_model");
    planeE1.setAttribute("dynamic-body", { mass: 1 })
  },
  update: function () {
    this.isCollided(this.data.elementId);
  },
});
