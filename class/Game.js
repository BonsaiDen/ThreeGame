/*global Class, BaseGame, THREE */
var Game = Class(function(update, render) {
    BaseGame(this, update, render);

}, BaseGame, {

    init: function(element, width, height) {
        BaseGame.init(this, element, width, height);
        this.setupScene();
    },

    setupScene: function() {

        var geometry, material, mesh, light;

        // Grid
        geometry = new THREE.PlaneGeometry(100, 100, 10, 10);
        material = new THREE.MeshLambertMaterial({ color: 0xffffff });

        mesh = new THREE.Mesh(geometry, material);
        mesh.useQuaternion = true;

        this.plane = mesh;
        this.scene.add(mesh);

        // Cube
        geometry = new THREE.CubeGeometry(10, 10, 10);
        material = new THREE.MeshLambertMaterial({ color: 0xffcc00 });
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.y = 5;
        this.cube = mesh;
        this.scene.add(mesh);

        // Light
        light = new THREE.SpotLight(0xffffff, 1);
        light.position.set(0, 50, 150);
        this.scene.add(light);

        // Camera
        this.camera.position.set(0, 50, 150);
        this.camera.lookAt(this.scene.position);

    },

    update: function(t) {

        this.cube.rotation.y += 0.025;

        this.plane.quaternion.setFromEuler({
            x: -Math.PI / 2,
            y: 0,
            z: -this.cube.rotation.y
        });

        BaseGame.update(this, t);

    }

});
