function Snake() {
    this.scale = 10;
    this.body = [];
    this.head = {x:0,y:0};
    this.move = {x:0,y:1};
    this.food = {x:-15,y:-15};

    this.draw = (direction) => { 
        this.show(); // no logic
        if(this.body.length > 0) this.segmentTrail(); 

        this.eatFood()
        this.movement();  
        this.death();    
        this.changeDirection(direction);
        // console.log('food:', this.food, ' head:', this.head)
    }

    
    this.show = () => {
        fill(0)
        rect(this.head.x, this.head.y, this.scale, this.scale);
        rect(this.food.x, this.food.y, this.scale, this.scale);
        console.log(this.body)
        this.body.forEach( (element) => {
            rect(element.x,element.y, this.scale, this.scale);
        }) 
    }

    this.death = () => {
        let isDead = false;
        for (let i = 1; i < this.body.length; i++) {
            if (this.body[i].x === this.head.x || this.body[i].y === this.head.y) isDead = true;
        };
        if (this.head.y < 0 || this.head.y >= 400 || this.head.x < 0 || this.head.x >= 400 || isDead) {
            alert("You Dead. AWWW shit");
            this.reset();
        }

        //death alert => if death, then alert message
        //if snake crosses boundary line result is death

    }
    this.reset = () => {
        this.scale = 10;
        this.body = [];
        this.head = {x:0,y:0};
        this.move = {x:0,y:1};
        this.food = {x:-15,y:-15};
        this.generateFood();
    }

    this.movement = () => {
        this.head.x += this.scale*this.move.x;
        this.head.y += this.scale*this.move.y;
    }

    this.generateFood = () => {
        this.food.x = Math.floor(Math.random()*40)*10;
        this.food.y = Math.floor(Math.random()*40)*10;
        if (this.food.x === 0 || this.food.x === 390 || this.food.y === 0 || this.food.y === 390) {
            this.generateFood();
        }
    }

    this.eatFood = () => {
        if(this.head.x === this.food.x && this.head.y === this.food.y) {
            this.generateFood();
            this.foodSynthesis();
        }
    }

    this.foodSynthesis = () => {
        this.body.push(Object.assign({},this.head));
    }

    this.segmentTrail = () => {
        this.body.unshift(Object.assign({},this.head));
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