namespace silvester {
    export class Star extends Particle{
        

        constructor (_position: Vector, _velocity: Vector){
            super();
            this.position = new Vector(0,0);
            this.position.x = _position.x;
            this.position.y = _position.y;
            this.velocity = _velocity;
        }
        public draw (_color: string, _particleRadius: number): void {
            
            crc2.beginPath();
            crc2.fillStyle = _color;
            crc2.strokeStyle = _color;
            
            //Top half
            crc2.moveTo(this.position.x, this.position.y -_particleRadius*0.75);
            crc2.lineTo(this.position.x -_particleRadius*0.5, this.position.y + _particleRadius*0.5);
            crc2.lineTo(this.position.x + _particleRadius*0.5, this.position.y + _particleRadius*0.5);
            
            //Bottom half
            crc2.moveTo(this.position.x, this.position.y + _particleRadius * 0.75);
            crc2.lineTo(this.position.x + _particleRadius*0.5, this.position.y - _particleRadius*0.5);
            crc2.lineTo(this.position.x - _particleRadius*0.5, this.position.y -_particleRadius*0.5);

            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            


        }
        
    }
}