import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function SignIn(){
    return(
        <div className="signIn-container">
            <div className="signIn-nav">
                <Navbar />
            </div>
            <div className="signIn-content-container">
                <form>
                    <h1>Sign In</h1>
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

                    <label for="pword"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="pword" id="pword" required/>
        
                    <button type="submit" class="registerbtn">Log In</button>
                </form>
        </div>
        <Footer />
        </div>

    )
}

export default SignIn