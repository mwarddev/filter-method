  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

const paul = people.filter(person => person.name === 'Paul');
console.log(paul);

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// Compact but confusing
const candidates = students.filter(student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
  return strongSkills.length > 0;
});
console.log(candidates);

// Separate arrow funtion from filter parenthesis and give another variable name
// Easier to read and function is reusable
const hasStrongSkills2 = student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
  return strongSkills.length > 0;
};
// Call the hasStrongSkills function in the filter method
const candidates2 = students.filter(hasStrongSkills2);
console.log(candidates2);

// Separate call back function further by extracting the inner filter
const has5YearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills3 = student => student.skills.filter(has5YearsExp).length > 0;
const candidates3 = students.filter(hasStrongSkills3);
console.log(candidates3);

const candidateName = candidates3.map(cand => cand.name);
console.log(candidateName);