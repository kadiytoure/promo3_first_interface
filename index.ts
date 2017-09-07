interface RenderFunc {
render();
}

class Tree implements RenderFunc {
height: number;
species: string;
color: string;
age: number;
constructor(height: number, species: string, color: string, age: number ) {
    this.height = height;
    this.species = species;
    this.color = color;
    this.age = age;

}
render(){
//render display a tree emoji for spruce, oak, palm tree
//the age of tree and the color
//example: `2 meters green`
//render displays a tree emoji for spruce, oak, palm tree.

   let emoji = this.species;
   if (this.species == "spruce") {
       emoji = "🌲";
   } else if (this.species == "oak") {
       emoji = "🌳";
   } else if (this.species == "palm") {
       emoji = "🌴"
   }
    console.log(emoji + " " + this.height + "meters" + this.color);
}
}

//create an Animal class with a render method 
//which display the emoji associated with the
//species.
class Animal {
    species :string;
    constructor(species: string) {
        this.species = species;
    }
    render(){
        let emoji = this.species;
        if (emoji === "goat"){
            emoji = "🐐";
        } else if (emoji == "leopard"){
            emoji = "🐆";
        }
        console.log(emoji + " " + this.species);
    }
}
let objects: RenderFunc[] = [];

objects.push(new Tree(2, "spruce", "dark green", 3));
objects.push(new Tree(3, "oak", "orange", 10));
objects.push(new Tree(5, "palm", "green", 5));

objects.push(new Animal("goat"));
objects.push(new Animal("goat"));
objects.push(new Animal("leopard"));

objects.push({"name": "toto"});
for (let a of objects){
    a.render();
}
/*
for (let t of trees) {
    t.render();
}
*/
