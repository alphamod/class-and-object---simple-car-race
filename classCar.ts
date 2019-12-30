class Car{
    speed:number;
    make;
    img;
    carElem;
    frame;
    id;

    constructor(carMake, sourceImg){
        this.make=carMake;
        this.img = document.createElement("img");
        this.img.setAttribute("src", sourceImg);
        this.img.style.position="relative";

        var makeDiv=document.createElement("div");
        makeDiv.setAttribute("id",this.make+1);
        
        this.img.setAttribute("id",this.make);
        document.getElementById("race").appendChild(makeDiv);
        document.getElementById(this.make+1).appendChild(this.img);
    }

    race(){
        this.carElem=document.getElementById(this.make);
        let pos=0;
        this.frame=()=>{
        if (pos==800){
            clearInterval(this.id);
        }else{
            pos+=5;
            this.carElem.style.left=`${pos}px`;
        }
        }
        this.id=setInterval(this.frame, this.speed);
    }
}
let myBMW=new Car("BMW", "./imagesConcept/bmw.png");
let myBenz=new Car("benz", "./imagesConcept/benz.png");
let myTesla=new Car("tesla", "./imagesConcept/tesla.png");
myBMW.speed=2;
myBenz.speed=0;
myTesla.speed=3;
