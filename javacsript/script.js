//let names = ["Tiff"];


//for (name of names){
    //console.log(name);
//}

//let str= "Thomas,Earl,Pee Wee,Gert,Barnes"
//while(str > 3)
//console.log(str)

//function sayHello(name){
    //return "Corcoding";
    //console.log(`hello ${name}`);
//}

//const returnValue = sayHello('Terry');
//const returnValueTwo = sayHello('Barry');


//console.log(returnValue);
//console.log(returnValueTwo);

//function isVowel(letter){
    //if(letter.A ==true) {
 //return "It's a vowel true";
  // }

  // return "It's not a vowel false";

// }

// const myLetter = {
    // others: "E,I,O,U,W,Y",
    // A:true
// };

// console.log(isVowel(myLetter))

//function Car(make,model,year) {
    //this.make = make;
    //this.model = model;
    //this.year = year;
//}

//{
    //make: whateverWePassedIn,
    //model:whateverWePassedIn,
    //year:whateverWePassedIn,
//}
function Pizza(passedInSize,passedInSauce,passedInTopping,passedInFlavor){

    this.size = passedInSize;
    this.topping = passedInTopping;
    this.sauce = passedInSauce;
    this.flavor = passedInFlavor;


    this.changeSize= function(newSize) {
        this.size = newSize;
    }
}

const mikePizza = new Pizza("Medium","cheese","alfedro","olive oil");
mikePizza.changeSize("Lrg");

console.log(mikePizza);