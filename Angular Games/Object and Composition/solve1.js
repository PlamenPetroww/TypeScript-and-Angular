const employees = [
    { name: "John", age: 29 },
    { name: "Wayne", age: 36 },
    { name: "David", age: 44 },
    { name: "Bruce", age: 21 },
  ];
  
  employees.sort((a, b) => {
    return a.age - b.age});

  
  console.log(employees);