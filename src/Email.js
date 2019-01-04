import React from 'react';

// subject, body as a query string.
// Not everyone has mailto: associated.

const email = 'contracts@101ideas.cz';
export default ({subject, children}) => <a href={`mailto:${email}?subject=${subject}`}>{children || email}</a>
