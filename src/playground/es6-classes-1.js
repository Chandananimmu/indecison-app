class Person {
  constructor(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    return ` Hi I'm ${this.name} `;
  }
    getDescription(){
      return `${this.name} is ${this.age} years old`;
    }
  
}
class Traveller extends Person{
 
  constructor(name,age,location) {
    super(name,age);
    this.location = location;
    }
    haslocation(){
      return !!this.location;
    }
    getGreeting(){
      let Greeting=super.getGreeting();
      if(this.haslocation()){
        Greeting+=`I'm visiting from ${this.location}.${this.age}`
      }
      return Greeting;
    }

}
const me = new Traveller("Andrew Mead", 26,"New York");
console.log(me.getGreeting());
const other = new Traveller();
console.log(other.getGreeting());
