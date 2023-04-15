var Car = /** @class */ (function () {
    function Car(carMake, sourceImg) {
        this.make = carMake;
        this.img = document.createElement("img");
        this.img.setAttribute("src", sourceImg);
        this.img.style.position = "relative";
        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("id", this.make + 1);
        this.img.setAttribute("id", this.make);
        document.getElementById("race").appendChild(makeDiv);
        document.getElementById(this.make + 1).appendChild(this.img);
    }
    Car.prototype.race = function () {
        var _this = this;
        this.carElem = document.getElementById(this.make);
        var pos = 0;
        this.frame = function () {
            if (pos == 800) {
                clearInterval(_this.id);
            }
            else {
                pos += 20;
                _this.carElem.style.left = pos + "px";
            }
        };
        this.id = setInterval(this.frame, this.speed);
    };
    return Car;
}());
var myBMW = new Car("BMW", "./imagesConcept/bmw.png");
var myBenz = new Car("benz", "./imagesConcept/benz.png");
var myTesla = new Car("tesla", "./imagesConcept/tesla.png");
myBMW.speed = 100;
myBenz.speed = 200;
myTesla.speed = 1000;
