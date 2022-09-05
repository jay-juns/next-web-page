import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">about</Link>
                </li>
                <li>
                    <Link href="/contact">contact us</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header