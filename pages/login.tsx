import React, {useState,SyntheticEvent} from 'react';
import Layout from "../layouts/Layout";
import {useRouter} from "next/router";

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const router = useRouter();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://localhost:3000/login', {
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            credentials:'include',
            body: JSON.stringify({
                email,
                password
            })
        })

        await router.push('/');
    }

    return (
        <Layout>
            <>
                <main className="form-signin">
                    <form onSubmit={submit}>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <input type="email" className="form-control" placeholder="Email" required
                        onChange={e => setEmail(e.target.value)}
                        />
                        <input type="password" className="form-control" placeholder="Password" required
                        onChange={e => setPassword(e.target.value)}
                        />
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    </form>
                </main>
            </>
        </Layout>
    );
};

export default Login;
