const workers = [
  {"name":"Kirill", "salary":2000},
  {"name":"Ann", "salary":2500},
  {"name":"Ivan", "salary":1000},
  {"name":"Andrew", "salary":900},
];

function nameReturn (array) {
for (i = 0; i < workers.length; i++) {
  
  if (array[i].salary >= 1000) {
  console.log(array[i].name);}
}    

};

nameReturn(workers);