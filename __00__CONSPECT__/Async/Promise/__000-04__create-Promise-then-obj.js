"use strict";

const promise = new Promise((resolve, reject) => {
  const isUserLoggedIn = true;
  if (isUserLoggedIn) resolve({ name: 'Andrii' });
  else reject('Sorry, you are not logged In');
});


promise.then((data) => console.log(data));  // { name: 'Andrii' }


