import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

// @ts-ignore
const Layout = (props) => {

    let menu;
    const router = useRouter();
    const logout = async () => {
        await fetch('http://localhost:3000/logout', {
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            credentials:'include',
            })
        await router.push('/login');
    }

    if (!props.auth){
menu = (
    <div>
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
                <Link href="/login">
                    <a className="nav-link active" >Se connecter</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/register">
                    <a className="nav-link active" >S'inscrire</a>
                </Link>
            </li>
        </ul>
    </div>
)
    }else{
        menu = (
            <div>
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                            <a className="nav-link active" >Se déconnecter</a>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
                  crossOrigin="anonymous"/>

            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container-fluid">
                    <Link href="/">
                    <a href="#" className="navbar-brand" onClick={logout} >Home</a>
                    </Link>
                    <div>
                    {menu}
                    </div>
                </div>
            </nav>

            <main className="form-signin">
                {props.children}
            </main>
        </>
    );
};

export default Layout;