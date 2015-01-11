define([
  'behaviours/displayable',
], function(displayable) {

    function Starfield() {
      this.behaviours = [displayable];
    };

    Starfield.prototype.init = function() {
      this.displayObject = this.createMesh();
    }

    Starfield.prototype.createMesh = function() {
      var stars = new THREE.Geometry();
      for(var i = 0; i < 2000; i++) {
        stars.vertices.push(new THREE.Vector3(
          3000 * Math.random() - 1500,
          3000 * Math.random() - 1500,
          3000 * Math.random() - 1500
        ));
      };

      // var material = new THREE.ParticleBasicMaterial();
      var material = new THREE.ParticleBasicMaterial({
        color: 0xFFFFFF,
        size: 20,
        map: THREE.ImageUtils.loadTexture(
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAV1BMVEUAAAABAQEICAcODgwQEA0HBwcUFBAfHxUlJRcoKBgYGBI+Ph1bWyNmZiZRUSGHhzasrFW6umLJyXL29qz//74GBgb//97///T///8LCwkEBAQTEw8DAwPPe9lZAAAAa0lEQVR4AbXPMQ4CQQiFYd7C3GCn0PsfzVh6gXEXeSEzYr9+DckfKJA/wJzBg9CWrU0rsqmRZrW89ZbnA2sT2KAUs69IbOH1E6cZveC5rXjAqWyefpCf+/MbMd40gPJmyzd3PKTqare7XOIDWrg5xVb6veYAAAAASUVORK5CYII='
        ),
        blending: THREE.AdditiveBlending,
        transparent: true
      });
      var star_system = new THREE.ParticleSystem(stars, material);
      return star_system;
    };

    return Starfield;
});
