namespace silvester {
    export class Heart extends Particle {

    

        constructor (_position: Vector, _velocity: Vector){
            super();
            this.position = new Vector(0,0);
            this.position.x = _position.x;
            this.position.y = _position.y;
            this.velocity = _velocity;

            
        }
        public draw (_color: string, _particleRadius: number): void {
            
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

            crc2.beginPath();
            crc2.strokeStyle = _color;
            crc2.fillStyle = _color;

            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x + _particleRadius*0.5, this.position.y-_particleRadius*0.9);
            crc2.lineTo(this.position.x + _particleRadius*0.7, this.position.y - _particleRadius*0.5);
            crc2.lineTo(this.position.x, this.position.y + _particleRadius*2);
            crc2.lineTo(this.position.x - _particleRadius*0.7, this.position.y - _particleRadius*0.5);
            crc2.lineTo(this.position.x - _particleRadius * 0.5, this.position.y -_particleRadius*0.9);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            
            // crc2.moveTo(this.position.x, this.position.x -_particleRadius);
            // crc2.bezierCurveTo(this.position.x + 50, this.position.y -10, this.position.x + 50, this.position.y + 10, this.position.x, this.position.y + 10);
            // crc2.moveTo(this.position.x, this.position.x -_particleRadius);
            // crc2.bezierCurveTo(this.position.x - 50, this.position.y -10, this.position.x - 50, this.position.y + 10, this.position.x, this.position.y + 10);
            crc2.stroke();
            crc2.fill();
            
            
        }
       
    }
}