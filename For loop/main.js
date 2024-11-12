//Instead of writing out the same code over and over, loops allow us to tell computers to repeat a given block of code on its own.
//  A loop is a programming tool that is used to repeat a set of instructions.

//For loop
for (let i = 5; i < 11; i++ ){
    console.log(i);
  }

  //Looping in reverse
  for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }

  //Looping through arrays
  const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i]);
}
