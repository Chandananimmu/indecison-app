const fullname = "Mike Smith";
let firstname;
//using return
const getfirstname = x => {
  firstname = x.split(" ")[0];
  return firstname;
};
console.log(getfirstname(fullname));
let lastname;
//using expression without return
const getlastname = y => y.split(" ")[1];
console.log(getlastname(fullname));
