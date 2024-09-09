// Function Declaration statement

const names = ['andrii', 'oxi'];

function reverseMutation([...arr]) {
  arr.reverse()
  console.log(arr)
}


// !!! NO MUTATION !!!

   console.log(names);      // [ 'andrii', 'oxi' ]
   reverseMutation(names);  // [ 'oxi', 'andrii' ] 
   console.log(names);      // [ 'andrii', 'oxi' ] 
   
// !!! NO MUTATION END !!!
