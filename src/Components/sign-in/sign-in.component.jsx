import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../../Components/form-input/form-input.component'
import CustomButton from '../../Components/custom-button/custom-button.component.jsx'

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email:'', password:'' })
        //clear email and password after submit
    } 

    handleChange = event => {
        const {value,name} = event.target;
        this.setState({ [name]:value })

    }

    render () {
        return (
             <div className='sign-in'>
                 <h2> I Already have an account </h2>
                 <span>Sign in with your email and password </span>
                 <form onSubmit ={this.handleSubmit}>
                    <FormInput 
                        name = 'email' 
                        type="email" 
                        value = {this.state.email} 
                        handleChange={this.handleChange} 
                        required
                        label='email'                    
                    />
                    
                    <FormInput 
                        name ="password" 
                        type="password" 
                        value={this.state.password}
                        handleChange={this.handleChange}
                         required
                        label = 'password'

                     />

                    <CustomButton type="submit"> Sign In </CustomButton>
                 </form>
             </div>
        )
    }
}

export default SignIn;