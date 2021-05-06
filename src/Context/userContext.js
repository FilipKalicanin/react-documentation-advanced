import React from 'react';

// Every created context object comes with Provider and Consumer components
// if context was created with defaultValue => const UserContext = React.createContext('defaultValue);
// it can be consumed anywhere withoud setting new value
const UserContext = React.createContext();

export default UserContext;