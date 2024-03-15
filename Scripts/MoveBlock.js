// const fs = require("fs");

// // Read the JSON file
// fs.readFile("data.json", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }

//   // Parse JSON string to JavaScript object
//   const canvasPixels = JSON.parse(data);

//   // Call AFRAME component registration with canvasPixels
//   AFRAME.registerComponent("moveBlocks", {
//     schema: {

//     },

//     init: function () {
//       this.moveBlocks();
//       // Define moveBlocks function
//     },

//     moveBlocks : function() {
//       window.addEventListener("keydown", (e) => {
//         if (e.key === "z") {
//           for (let i = 0; i < canvasPixels.length; i++) {
//             if (canvasPixels[i][2] == "black") {
//               var box = document.createElement("a-box");
//               box.setAttribute("id", `${canvasPixels[i]}`);
//               box.setAttribute("scale", { x: 1, y: 1, z: 1 });
//               box.setAttribute("position", { x: 0, y: 0, z: 0 });

//               var animation = document.createElement("a-animation");
//               animation.setAttribute("attribute", "position");
//               animation.setAttribute("to", {
//                 x: canvasPixels[i][0],
//                 y: canvasPixels[i][1],
//                 z: -10,
//               });

//               var scene = document.querySelector("#scene");

//               box.appendChild(animation);
//               scene.appendChild(box);
//             }
//           }
//         }
//       });
//     }
//   });
// });

AFRAME.registerComponent("moveblocks", {
  schema: {
    canvasPixels: { type: "array", default: [
      [0, 0, "white"],
      [0, 1, "black"],
      [1, 1, "black"],
      [1, 1, "white"]
    ]}
  },

  init: function () {
    this.moveBlocks();
    // Define moveBlocks function
  },

  moveBlocks : function() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "z") {
        for (let i = 0; i < this.data.canvasPixels.length; i++) {
          if (this.data.canvasPixels[i][2] == "black") {
            var box = document.createElement("a-box");
            box.setAttribute("id", `${this.data.canvasPixels[i]}`);
            box.setAttribute("scale", { x: 1, y: 1, z: 1 });
            box.setAttribute("position", { x: 0, y: 0, z: 0 });
            box.setAttribute("color", "blue");

            var animation = document.createElement("a-animation");
            animation.setAttribute("attribute", "position");
            animation.setAttribute("to", {
              x: this.data.canvasPixels[i][0],
              y: this.data.canvasPixels[i][1],
              z: -10,
            });

            var scene = document.querySelector("#scene");

            box.appendChild(animation);
            scene.appendChild(box);

            console.log(this.data.canvasPixels[i][0]);
            console.log(this.data.canvasPixels[i][1]);
            console.log(this.data.canvasPixels[i][2]);
          }
        }
      }
    });
  }
});