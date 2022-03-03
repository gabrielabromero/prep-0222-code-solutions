var person = {
  firstName: 'Jonathan',
  lastName: 'Sims',
  hobby: 'reading'
};
console.log(person);

var fullName = "The person's name is: " + '' + person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'Archivist';
console.log("the person's current job is: ", person.job);

person.previousjob = 'researcher';
console.log("The person's previous job is:", person.previousjob);

console.log(person);
