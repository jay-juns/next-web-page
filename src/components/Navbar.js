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
                    <li className={router.pathname == "/about" ? "active" : ""}>
                        <Link href="/about">about</Link>
                    </li>
                    <li className={router.pathname == "/contact" ? "active" : ""}>
                        <Link href="/contact">contact us</Link>
                    </li>
                </ul>
                <ul className='left-nav'>
                    <li className={router.pathname == "/login" ? "active" : ""}>
                        <Link href="/login">Log in</Link>
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