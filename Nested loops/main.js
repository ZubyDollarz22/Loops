//When we have a loop running inside another loop, we call that a nested loop. One use for a nested for loop is to compare the elements in two arrays[Preview: Docs Arrays are lists of ordered, stored data that can be of any data type.] 
const bobsFollowers = ['mark', 'Jude', 'Favy', 'Dan'];
const tinasFollowers = ['mark', 'Jude', 'Rose'];
const mutualFollowers = [];


for (let i = 0; i < bobsFollowers.length; i++){
  for (let x = 0; x < tinasFollowers.length; x++){
    if(bobsFollowers[i] === tinasFollowers[x]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
