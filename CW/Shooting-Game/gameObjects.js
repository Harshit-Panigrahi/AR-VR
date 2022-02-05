AFRAME.registerComponent("fences", {
  init: function () {
    //starting x position
    posX = -20;
    //starting z-position
    posZ = 85;

    for (var i = 0; i < 10; i++) {
      //create wire-fence entity
      var wireFence1 = document.createElement("a-entity");
      var wireFence2 = document.createElement("a-entity");
      var wireFence3 = document.createElement("a-entity");
      var wireFence4 = document.createElement("a-entity");

      //set x, y and z position
      posX = posX + 5;
      posY = 2.5;
      posZ = posZ - 10;

      //scale
      var scale = { x: 2, y: 2, z: 2 };

      //set the id
      wireFence1.setAttribute("id", "wireFence1" + i);
      wireFence2.setAttribute("id", "wireFence2" + i);
      wireFence3.setAttribute("id", "wireFence3" + i);
      wireFence4.setAttribute("id", "wireFence4" + i);

      //set the position
      wireFence1.setAttribute("position", { x: posX, y: 2.5, z: -35 });
      wireFence2.setAttribute("position", { x: posX, y: 2.5, z: 85 });
      wireFence3.setAttribute("position", { x: -30, y: 2.5, z: posZ });
      wireFence4.setAttribute("position", { x: 50, y: 2.5, z: posZ });

      //set the scale
      wireFence1.setAttribute("scale", scale);
      wireFence2.setAttribute("scale", scale);
      wireFence3.setAttribute("scale", scale);
      wireFence4.setAttribute("scale", scale);

      //set the model
      wireFence1.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );

      wireFence2.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );

      wireFence3.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );

      wireFence4.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );

      //set the rotation
      wireFence3.setAttribute("rotation", { x: 0, y: 90, z: 0 });
      wireFence4.setAttribute("rotation", { x: 0, y: 90, z: 0 });

      //set the physics body
      wireFence1.setAttribute("static-body", {});
      wireFence2.setAttribute("static-body", {});
      wireFence3.setAttribute("static-body", {});
      wireFence4.setAttribute("static-body", {});

      //attach the entity to the scene
      var sceneEl = document.querySelector("#scene");
      sceneEl.appendChild(wireFence1);
      sceneEl.appendChild(wireFence2);
      sceneEl.appendChild(wireFence3);
      sceneEl.appendChild(wireFence4);
    }
  },
});

AFRAME.registerComponent("boxes", {
  schema: {
    size: { type: "number", default: 3 },
  },
  init: function () {
    let px = [
      22.86, -17.35, -12.81, 0.44, -30.18, -25.89, 15.61, 29.68, 11.95, -15.4,
      -14.09, 34.76, 2.29, 21.77, 1.57, 34.72, 12.04, -10.9, 6.48, 15.66,
    ];
    let pz = [
      54.56, -4.71, 14.91, 56.74, 41.13, 50.76, 57.84, 7.02, -5.24, -26.82,
      27.59, -35.78, 34.52, 31.32, -9.22, 26.72, 48.9, 27.24, 9.94, 54.29,
    ];
    for (var i = 0; i < 20; i++) {
      var box = document.createElement("a-box");
      box.setAttribute("src", "./assets/box.jpeg");

      let posX = px[i];
      let posZ = pz[i];
      let pos = { x: posX, y: 1.5, z: posZ };
      box.setAttribute("position", pos);

      box.setAttribute("width", this.data.size);
      box.setAttribute("height", this.data.size);
      box.setAttribute("depth", this.data.size);

      box.setAttribute("dynamic-body", { mass: 200 });

      let sceneEl = document.querySelector("#scene");
      sceneEl.appendChild(box);
    }
  },
});
