interface Fighter {
    attack(Fighter);
    defend(Fighter);
    heal(Fighter);
}

class Ninja {
    attack(f: Fighter) {}
    defend(f: Fighter) {}
    heal(f: Fighter) {}
    throw(f: Fighter) {}
    jump() {}
}

class Person {
    eat() {}
    move() {}
}

let n = new Ninja();
let p = new Person();
let fighter: Fighter = n;