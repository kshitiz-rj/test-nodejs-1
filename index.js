

export class Circle{
    constructor (radius){
        this.radius = radius;
    };

    getArea() {
        return Math.round(Math.pow(this.radius,2) * Math.PI)
    }

    getDiameter(){
        return  Math.round(this.radius * Math.PI * 2)
    }
}

