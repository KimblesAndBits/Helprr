import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SocialButton from './styled/SocialButton'
import BrandButton from './styled/BrandButton'
import SlidingForm from './styled/SlidingForm'

const FormSignup = () => (
  <SlidingForm signup>
    <h1>Create Account</h1>
    <div>
      <SocialButton>
        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
      </SocialButton>
      <SocialButton>
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
      </SocialButton>
      <SocialButton>
        <FontAwesomeIcon icon={['fab', 'google']} />
      </SocialButton>
    </div>
    <p>or register with your email</p>
    <form>
      <input placeholder="Name" type="text" />
      <input placeholder="Email" type="text" />
      <input placeholder="Password" type="password" />
    </form>
    <BrandButton>Sign up</BrandButton>
  </SlidingForm>
)

export default FormSignup
