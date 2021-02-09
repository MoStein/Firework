var silvester;
(function (silvester) {
    class Heart extends silvester.Particle {
        constructor(_position, _velocity) {
            super();
            this.position = new silvester.Vector(0, 0);
            this.position.x = _position.x;
            this.position.y = _position.y;
            this.velocity = _velocity;
        }
        draw(_color, _particleRadius) {
            // crc2.beginPath();
            // crc2.fillStyle = _color;
            // crc2.arc(this.position.x, this.position.y, _particleRadius, 0, 2*Math.PI);
            // crc2.fill();
            // crc2.moveTo(this.position.x-_particleRadius, this.position.y - _particleRadius);
            // crc2.lineTo(this.position.x+_particleRadius, this.position.y + _particleRadius);
            // // crc2.moveTo(this.position.x - _particleRadius, this.position.y- _particleRadius);
            // // crc2.lineTo(this.position.x + _particleRadius, this.position.y+ _particleRadius);
            // // crc2.moveTo(this.position.x-_particleRadius, this.position.y - _particleRadius);
            // // crc2.lineTo(this.position.x+_particleRadius, this.position.y + _particleRadius);
            // // crc2.rotate
            // crc2.strokeStyle = _color;
            // crc2.stroke();
            // crc2.closePath();
            silvester.crc2.beginPath();
            silvester.crc2.strokeStyle = _color;
            silvester.crc2.fillStyle = _color;
            silvester.crc2.moveTo(this.position.x, this.position.y);
            silvester.crc2.lineTo(this.position.x + _particleRadius * 0.5, this.position.y - _particleRadius * 0.9);
            silvester.crc2.lineTo(this.position.x + _particleRadius * 0.7, this.position.y - _particleRadius * 0.5);
            silvester.crc2.lineTo(this.position.x, this.position.y + _particleRadius * 2);
            silvester.crc2.lineTo(this.position.x - _particleRadius * 0.7, this.position.y - _particleRadius * 0.5);
            silvester.crc2.lineTo(this.position.x - _particleRadius * 0.5, this.position.y - _particleRadius * 0.9);
            silvester.crc2.stroke();
            silvester.crc2.fill();
            silvester.crc2.closePath();
            // crc2.moveTo(this.position.x, this.position.x -_particleRadius);
            // crc2.bezierCurveTo(this.position.x + 50, this.position.y -10, this.position.x + 50, this.position.y + 10, this.position.x, this.position.y + 10);
            // crc2.moveTo(this.position.x, this.position.x -_particleRadius);
            // crc2.bezierCurveTo(this.position.x - 50, this.position.y -10, this.position.x - 50, this.position.y + 10, this.position.x, this.position.y + 10);
            silvester.crc2.stroke();
            silvester.crc2.fill();
        }
    }
    silvester.Heart = Heart;
})(silvester || (silvester = {}));
//# sourceMappingURL=Heart.js.map