const obj={
  name:"Vikram",
  getName()
  {
    return this.name;
  
  }
}
const getName=obj.getName;
console.log(getName());