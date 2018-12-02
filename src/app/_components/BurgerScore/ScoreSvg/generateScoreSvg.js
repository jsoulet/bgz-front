const fs = require('fs');

const dirPath = `${__dirname}/assets`;
const getFileContent = name => `/* eslint-disable */
import React from 'react';
import { ReactComponent as Image } from './assets/${name}.svg';

const ${name} = () => <Image />;
export default ${name};
`;

const files = fs.readdirSync(dirPath);
files.forEach((filePath) => {
  if (filePath === '.DS_Store') {
    return;
  }
  const fileName = filePath.replace('.svg', '');
  fs.writeFileSync(
    `${__dirname}/${fileName}.js`,
    getFileContent(fileName),
  );
  console.log(`${fileName}`);
});
