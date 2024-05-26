import React from "react";
import Footer from '../components/footer';
import Header from '../components/header';
import '../styles/notFound.css';

const NotFound = () => {
    return (
        <div className="notfound">
            <Header /> { }
            <main>
                <h1>404</h1>
                <h2>Página no encontrada</h2>
            </main>
            <Footer /> { }
        </div>
    );
}

export default NotFound;