class Animal {
    name: string;
    isSnake: boolean;
    isHunt: boolean;
    animalType: string;
    isCat: boolean;
    noOfLegs: number;
    eatingType: string;

    constructor(animalName) {
        this.name = animalName;
    }

    hibernate() {
        (this.isSnake!=true)?console.log(`${this.name} is Hibernating.`):console.log(`${this.name} cannot hibernate.`);
    }
    eat() {
        if (this.isHunt == true) {
            console.log(`${this.name} is hunting now.`);
        } else {
            console.log(`${this.name} is eating now.`);
        }
    }
    run() {
        (this.isSnake == false && this.noOfLegs != 0) ? console.log(`${this.name} is running now with ${this.noOfLegs} legs`) : console.log(`${this.name} is crawling now.`)
    }
}

let myAnimal = new Animal("Lion");
myAnimal.isSnake = false;
myAnimal.isHunt = true;
myAnimal.noOfLegs = 4;