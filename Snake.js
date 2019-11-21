function Snake() {
    this.scale = 10;
    this.body = [{x:1,y:1}];
    this.head = {x:1,y:1};
    this.move = {x:0,y:1}

    this.draw = (direction) => {
        this.show()
        this.movement()
        this.changeDirection(direction)
    }

    this.show = () => {
        fill(0)
        rect(this.head.x, this.head.y, this.scale, this.scale);
        // for( let i = 0; i < this.body.length; i++ ){
        //     rect(this.body[i].x, this.body[i].y, this.scale, this.scale)
        // }
        
    }

    this.movement = () => {
        this.head.x += this.scale*this.move.x;
        this.head.y += this.scale*this.move.y;
    }

    this.changeDirection = (direction) => {
        if(direction === 'right'){
            if(this.move.x === -1){
                return
            } else {
            this.move = {x:1,y:0};
            }
        } else if(direction === 'left') {
            if(this.move.x === 1){
                return
            } else {
            this.move = {x:-1,y:0}
            }
        } else if(direction === 'up') {
            if(this.move.y === 1){
                return
            } else {
                this.move = {x:0,y:-1}
            }
        } else if(direction === 'down') {
            if(this.move.y === -1){
                return
            } else {
                this.move = {x:0,y:1}
            }
        }
    }
}