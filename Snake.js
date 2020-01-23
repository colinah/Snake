function Snake() {
    this.scale = 10;
    this.body = [{x:0,y:0}];
    this.move = {x:0,y:1};
    this.food = {x:-15,y:-15};

    this.draw = (direction) => {
        let c1 = [...this.body]
        console.log('1', c1)
        this.movement(); 
        let c2 = [...this.body]
        console.log('2', c2)        
        this.show(); // no logic
        
        let c4 = [...this.body]
        console.log('4', c4)
        this.changeDirection(direction);
        let c5 = [...this.body]
        console.log('5', c5)
        this.eatFood()  
        let c6 = [...this.body]
        console.log('6', c6)
        this.death(); 
        let c3 = [...this.body]
        console.log('3', c3)
        if(this.body.length > 0) this.segmentTrail();   

        // console.log('food:', this.food, ' body[0]:', this.body[0])
    }

    
    this.show = () => {
        fill(0)
        rect(this.food.x, this.food.y, this.scale, this.scale);
        this.body.forEach( (element) => {
            rect(element.x,element.y, this.scale, this.scale);
        }) 
    }

    this.death = () => {
        let c = [...this.body]
        let isDead = false;
        for (let i = 2; i < this.body.lengt-1; i++) {
            if (this.body[i].x === this.body[0].x || this.body[i].y === this.body[0].y) isDead = true;
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
            this.generateFood();
            this.foodSynthesis();
        }
    }

    this.foodSynthesis = () => {
        console.log(this.body)
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