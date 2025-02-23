"use strict";

const promise = new Promise((resolve, reject) => {
  const isUserLoggedIn = false;
  if (isUserLoggedIn) resolve('User is logged In');
  else reject('Sorry, you are not logged In');
});


promise.catch((error) => console.log(error));  // Sorry, you are not logged In 



