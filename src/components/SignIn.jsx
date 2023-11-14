import  { useState } from 'react';

export default function SignIn (props) {
    const [formData, setFormData] = useState({
      email : "",
      password : "",
    })

    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here using formData state
      props.createUser(formData.email, formData.password)
    };

    function handleInputChange (event) {
      const {name, value} = event.target

      setFormData({
        ...formData,
        [name]: value,
      });
    }

    return(
        <div className="auth-fields-and-buttons">
          <form onSubmit={handleSubmit}>
            <input id="email-input" name="email" type="email" value={formData.email} placeholder="Email" onChange={handleInputChange}></input>
            <input id="password-input" name="password" type="password" value={formData.password} placeholder="Password" onChange={handleInputChange}></input>

            <button id="sign-in-btn" className="primary-btn" >Sign in</button>
            <button id="create-account-btn" className="secondary-btn" type="submit">Create Account</button>

          </form>
      </div>
    )
}