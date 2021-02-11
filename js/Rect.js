"use strict";
var silvester;
(function (silvester) {
    class Rectangle extends silvester.Particle {
        constructor(_position, _velocity) {
            super();
            this.position = new silvester.Vector(0, 0);
            this.position.x = _position.x;
            this.position.y = _position.y;
            this.velocity = _velocity;
        }
        draw(_color, _particleRadius) {
            silvester.crc2.beginPath();
            silvester.crc2.fillStyle = _color;
            silvester.crc2.fillRect(this.position.x, this.position.y, _particleRadius, _particleRadius);
            silvester.crc2.fill();
        }
    }
    silvester.Rectangle = Rectangle;
})(silvester || (silvester = {}));
//# sourceMappingURL=Rect.js.map