"use strict";
var silvester;
(function (silvester) {
    class Circle extends silvester.Particle {
        constructor(_position, _velocity) {
            super();
            this.position = new silvester.Vector(0, 0); //Entkopplung von der Client Position
            this.position.x = _position.x;
            this.position.y = _position.y;
            this.velocity = _velocity;
        }
        draw(_color, _particleRadius) {
            silvester.crc2.beginPath();
            silvester.crc2.fillStyle = _color;
            silvester.crc2.arc(this.position.x, this.position.y, _particleRadius, 0, 2 * Math.PI);
            silvester.crc2.fill();
        }
    }
    silvester.Circle = Circle;
})(silvester || (silvester = {}));
//# sourceMappingURL=Circle.js.map