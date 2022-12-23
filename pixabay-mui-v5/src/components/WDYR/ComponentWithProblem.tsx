import { useState } from 'react';

const updatedUser1 = {
  name: 'faisal',
};

const updatedUser2 = {
  name: 'faisal',
};

const ComponentWithProblem = () => {
  console.log('rendered ');
  const [user, setUser] = useState(updatedUser1);

  const updateUser = () => {
    setUser(updatedUser2);
  };

  return (
    <div>
      <div> User name is : {user.name}</div>
      <button type="button" onClick={updateUser}>
        Update
      </button>
    </div>
  );
};

ComponentWithProblem.whyDidYouRender = true;

export default ComponentWithProblem;
