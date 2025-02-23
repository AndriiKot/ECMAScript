"use strict";

const promise = new Promise((resolve, reject) => {
  const isUserLoggedIn = false;
  if (isUserLoggedIn) resolve('User is logged In');
  else reject('Sorry, you are not logged In'); 
});

console.log(promise);  // Promise { <rejected> 'Sorry, you are not logged In' }
