import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/styles_login.css';

const Login = () => {
    return (
        <div className="App">
            <Header /> { }
            <main>
                <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
                    <div className="bg-white p-3 rounded w-25">
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter Email"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter Password"/>
                            </div>
                            <button type="submit" className="btn btn-success">Log in</button>
                            <p> You are agree to aour terms and policies</p>
                            <button className="btn btn-default border">Crear Cuenta</button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer /> { }
        </div>
    );
}

export default Login;