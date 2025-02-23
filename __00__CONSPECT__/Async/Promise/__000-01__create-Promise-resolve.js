"use strict";

const promise = new Promise((resolve, reject) => {
  const isUserLoggedIn = true;
  if (isUserLoggedIn) resolve('User is logged In');
  else reject('Sorry, you are not logged In');
});

console.log(promise);  // Promise { 'User is logged In' }