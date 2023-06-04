/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-var */
/* eslint-disable linebreak-style */
const Person = ({ name, age, job }) => {
  var _name = name;
  var _age = age;
  var _job = job;

  return {
    getName: () => _name,
    getAge: () => _age,
    getJob: () => _job,

    // eslint-disable-next-line no-return-assign, arrow-parens
    setJob: newJob => _job = newJob,
  };
};

const me = Person({ name: 'Tan', age: 25, job: 'developer' });
console.log(me.getName());
console.log(me.getJob());
me.setJob('Senior Developer');
console.log(me.getJob());