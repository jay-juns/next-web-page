import React from 'react';
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();

    return (
        <header className='header'>
            <div className='nav-wrapper'>
                <ul>
                    <li className={router.pathname == "/" ? "active" : ""}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={router.pathname == "/serve" ? "active" : ""}>
                        <Link href="/serve">Who we serve</Link>
                    </li>
                    <li className={router.pathname == "/offer" ? "active" : ""}>
                        <Link href="/offer">What we offer</Link>
                    </li>
                    <li className={router.pathname == "/introduction" ? "active" : ""}>
                        <Link href="/introduction">Why Visecare</Link>
                    </li>
                </ul>
                <ul className='left-nav'>
                    <li className={router.pathname == "/login" ? "active" : ""}>
                        <Link href="/login">Member Poartal</Link>
                    </li>
                    <li className={router.pathname == "/signup" ? "active" : ""}>
                        <Link href="/signup">Sign up</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header