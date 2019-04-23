import React from 'react';

const startYear = 2008;
const year = new Date().getFullYear()
export default () => <abbr title={`From ${startYear} on`}>{year - startYear}</abbr>
