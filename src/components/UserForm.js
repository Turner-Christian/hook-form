import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const UserForm = ( props ) => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const createUser = (e) => {

        e.preventDefault();

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
        console.log('Welcome', newUser);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <form className="form-width card p-3 rounded bg-secondary" onSubmit={ createUser }>
            <div className="p-3 text-light">
                <label className="form-label mx-3">First Name:</label>
                <input className="form-control" type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) }></input>
            </div>
            <div className="p-3 text-light">
                <label className="form-label mx-3">Last Name:</label>
                <input className="form-control" type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) }></input>
            </div>
            <div className="p-3 text-light">
                <label className="form-label mx-3">Email:</label>
                <input className="form-control" type="text" value={email} onChange={ (e) => setEmail(e.target.value) }></input>
            </div>
            <div className="p-3 text-light">
                <label className="form-label mx-3">Password:</label>
                <input className="form-control" type="password" value={password} onChange={ (e) => setPassword(e.target.value) }></input>
            </div>
            <div className="p-3 text-light">
                <label className="form-label mx-3">Confirm Password:</label>
                <input className="form-control" type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) }></input>
            </div>
            <div className="d-flex justify-content-center">
                <input className="btn m-3 px-4 bg-danger text-light" type="submit" value="Create"></input>
            </div>
        <div className="d-flex flex-column text-white bg-dark p-4 rounded">
            <p>First Name: <span className="bg-warning text-dark">{firstName}</span></p>
            <p>Last Name: <span className="bg-warning text-dark">{lastName}</span></p>
            <p>Email: <span className="bg-warning text-dark">{email}</span></p>
            <p>Password: <span className="bg-warning text-dark">{password}</span></p>
            <p>Confirm Password: <span className="bg-warning text-dark">{confirmPassword}</span></p>
        </div>
        </form>
    );
}

export default UserForm;