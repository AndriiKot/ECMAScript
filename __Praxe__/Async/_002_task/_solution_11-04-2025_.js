'use sctrict';

const MAX_VALUE = 10;
const log = console.dir;


log('Begin');

for(let i = 0; i < MAX_VALUE; i++) {
  log({ count: i, data: new Date()})
}

log('The End');