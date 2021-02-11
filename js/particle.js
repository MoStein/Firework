"use strict";
var silvester;
(function (silvester) {
    class Particle {
        constructor() {
        }
        draw(_color, _particleRadius) {
        }
        move() {
            this.velocity = silvester.Vector.getSum(this.velocity, new silvester.Vector(0, 0.01)); //Gravitation
            this.position = silvester.Vector.getSum(this.position, this.velocity);
        }
    }
    silvester.Particle = Particle;
})(silvester || (silvester = {}));
//# sourceMappingURL=particle.js.map