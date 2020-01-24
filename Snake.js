function Snake() {
    this.scale = 10;
    this.body = [{x:0,y:0}];
    this.move = {x:0,y:1};
    this.food = {x:-15,y:-15};
    this.eaten = false

    this.draw = (direction) => {
        this.movement();     
        this.show(); // no logic
        this.changeDirection(direction);
        this.eatFood()
        if(!this.eaten) this.death()
        if(this.body.length > 0) this.segmentTrail();   
        this.eaten = false;
    }

    
    this.show = () => {
        fill(0)
        rect(this.food.x, this.food.y, this.scale, this.scale);
        this.body.forEach( (element) => {
            rect(element.x,element.y, this.scale, this.scale);
        }) 
    }

    this.death = () => {
        let isDead = false;
        for (let i = 1; i < this.body.length; i++) {
            if (this.body[i].x === this.body[0].x && this.body[i].y === this.body[0].y) isDead = true;
        };
        if (this.body[0].y < 0 || this.body[0].y >= 400 || this.body[0].x < 0 || this.body[0].x >= 400 || isDead) {
            this.reset();
        }

        //death alert => if death, then alert message
        //if snake crosses boundary line result is death

    }
    this.reset = () => {
        this.scale = 10;
        this.body = [];
        this.body[0] = {x:0,y:0};
        this.move = {x:0,y:1};
        this.food = {x:-15,y:-15};
        this.generateFood();
    }

    this.movement = () => {
        this.body[0].x += this.scale*this.move.x;
        this.body[0].y += this.scale*this.move.y;
    }

    this.generateFood = () => {
        this.food.x = Math.floor(Math.random()*40)*10;
        this.food.y = Math.floor(Math.random()*40)*10;
        if (this.food.x === 0 || this.food.x === 390 || this.food.y === 0 || this.food.y === 390) {
            this.generateFood();
        }
    }

    this.eatFood = () => {
        if(this.body[0].x === this.food.x && this.body[0].y === this.food.y) {
            console.log('eaten')
            this.generateFood();
            this.foodSynthesis();
            this.eaten = true
        }
    }

    this.foodSynthesis = () => {
        this.body.push(Object.assign({},this.body[0]));
    }

    this.segmentTrail = () => {
        this.body.unshift(Object.assign({},this.body[0]));
        this.body.pop();
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