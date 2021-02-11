"use strict";
var silvester;
(function (silvester) {
    class Star extends silvester.Particle {
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
            silvester.crc2.strokeStyle = _color;
            //Top half
            silvester.crc2.moveTo(this.position.x, this.position.y - _particleRadius * 0.75);
            silvester.crc2.lineTo(this.position.x - _particleRadius * 0.5, this.position.y + _particleRadius * 0.5);
            silvester.crc2.lineTo(this.position.x + _particleRadius * 0.5, this.position.y + _particleRadius * 0.5);
            //Bottom half
            silvester.crc2.moveTo(this.position.x, this.position.y + _particleRadius * 0.75);
            silvester.crc2.lineTo(this.position.x + _particleRadius * 0.5, this.position.y - _particleRadius * 0.5);
            silvester.crc2.lineTo(this.position.x - _particleRadius * 0.5, this.position.y - _particleRadius * 0.5);
            silvester.crc2.stroke();
            silvester.crc2.fill();
            silvester.crc2.closePath();
        }
    }
    silvester.Star = Star;
})(silvester || (silvester = {}));
//# sourceMappingURL=Star.js.map