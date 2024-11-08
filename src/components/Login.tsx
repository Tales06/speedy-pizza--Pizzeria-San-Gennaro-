import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/Style-login.css";
import { Link } from 'react-router-dom';
export default function Login() {
    return (
        <div className="container-login d-flex align-items-center justify-content-center">
            <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
                <h3 className="text-center mb-4">Login</h3>
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Indirizzo email</label>
                        <input type="email" className="form-control" id="email" placeholder="Inserisci email" required />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Inserisci password" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                    <div className="text-center mt-3">
                        <a href="#">Password dimenticata?</a>
                        <Link to="/register" className="d-block mt-3">Non hai un account? Registrati</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
