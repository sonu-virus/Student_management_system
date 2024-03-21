import React from 'react'
npm

function SignUp() {

    function SignUp() {
        
        fetch('https://api.iot.inflection.org.in/users/signup',{
            method:'POST',
            body: JSON.stringify(jsonData) 
      
          })
    }

  return (
    <div>SignUp</div>
  )
}

export default SignUp