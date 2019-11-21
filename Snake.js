function Snake() {
    this.scale = 10;
    this.x = 1;
    this.y =1;

    this.show = () => {
        rect(this.x,this.y,this.scale,this.scale)
        fill(0)
    }
}