const people = ["Greg", "Mary", "Devon", "James"];

for(let i=0; i<people.length; i++){
console.log(people[i]);
}


    people.shift();
    people.pop();
    people.unshift('Matt');
    people.push('Shhady');
    console.log(people);

    for(let i=0; i<people.length; i++){
        if (i == 2){
             break;
        }
        console.log(people [i]);
       }


       const people1 = ["Greg", "Mary", "Devon", "James"];

       console.log(people1.slice(2,4));

       console.log(people1.indexOf('Mary'));

       console.log(people1.indexOf('Foo'));

       people1.splice(2, 1, 'Elizabeth');
       people1.splice(3,0,'Artie')
       console.log(people1);
    
       let withBob = ['Bob']

       console.log(people1.concat(withBob));
    