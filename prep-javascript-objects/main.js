const person = {
  firstName: 'Ryan',
  lastName: 'Garcia',
  hobby: 'learning',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log('persons full name:', fullName);

person.job = 'Mechanic';
console.log('persons job:', person.job);

person['previousJob'] = 'Driver';
console.log('persons previousJob:', person['previousJob']);

console.log(person);
