import React, { useState } from 'react'
import { SignUp } from '../../pages';
import SignIn from '../../pages/loginPage';

const LoginComponent = () => {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
    {showComponent ? <SignIn toggleComponent={() => setShowComponent(!showComponent)} /> : <SignUp toggleComponent={() => setShowComponent(!showComponent)}/>}
</div>
  )
}

export default LoginComponent
