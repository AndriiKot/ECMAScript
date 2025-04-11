"use strict";

const { readFile } = require('node:fs/promises');


async function readSelfFile() {
  try {
    const data = await readFile(__filename, { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readSelfFile();