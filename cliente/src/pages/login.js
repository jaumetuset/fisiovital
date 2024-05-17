import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/styles_login.css';

const Login = () => {
    return (
        <div className="login-page">
            <Header />
            <main className="login-main">
                <div className="login-container">
                    <div className="login-form">
                        <h2>Welcome Back!</h2>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter Password" required />
                            </div>
                            <button type="submit" className="btn-login">Log in</button>
                        </form>
                        <p className="terms-text">By logging in, you agree to our <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a></p>
                        <p className="create-account-text">Don't have an account? <a href="/signup">Sign Up</a></p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Login;
