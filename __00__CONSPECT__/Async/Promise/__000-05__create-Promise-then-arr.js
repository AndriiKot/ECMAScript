"use strict";

const promise = new Promise((resolve, reject) => {
  const isUserLoggedIn = true;
  if (isUserLoggedIn) resolve([22, 33, 44, 55]);
  else reject('Sorry, you are not logged In');
});


promise.then((data) => console.log(data));  // [22, 33, 44, 55]



