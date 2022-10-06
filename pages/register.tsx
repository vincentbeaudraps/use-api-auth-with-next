import React, {SyntheticEvent, useState} from 'react';
import Layout from "../layouts/Layout";
import Link from "next/link";
import {useRouter} from "next/router";

const Register = () => {

    const [name,setName] = useState('');
    const [firstname,setFirstname] = useState('');
    const [birthday ,setBirthday] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const router = useRouter();

    const submit = async (e: SyntheticEvent) => {
            e.preventDefault();

            await fetch('http://localhost:3000/users', {
                method: "POST",
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name,
                    firstname,
                    birthday,
                    email,
                    password
                })
        });

            await router.push('/login');
    }

    return (
        <Layout>
            <form onSubmit={submit}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 className="h3 mb-3 fw-normal">S'inscrire</h1>
                <input className="form-control" placeholder="Nom" required
                       onChange={e => setName(e.target.value)}
                />
                <input className="form-control" placeholder="Prénom" required
                       onChange={e => setFirstname(e.target.value)}
                />
                <input type="date" className="form-control" placeholder="Date de naissance" required
                       onChange={e => setBirthday(e.target.value)}
                />
                <input type="email" className="form-control" placeholder="Email" required
                       onChange={e => setEmail(e.target.value)}
                />

                <input type="password" className="form-control" placeholder="Password" required
                       onChange={e => setPassword(e.target.value)}
                />

                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <button className="w-100 btn btn-lg btn-primary" type="submit">S'inscrire</button>
            </form>
        </Layout>
    );
};

export default Register;