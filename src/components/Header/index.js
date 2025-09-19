'use client';
import { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
    const [show, setShow] = useState(false);
    return (
        <>
            <header className={styles.headerMobile}>
                <button onClick={() => { setShow(!show) }}>X</button>
                {show &&
                    <nav className={styles.nav}>
                        <ul className={styles.ulMenu}>
                            <li className={styles.liMenu}><Link href='/'>Home</Link ></li>
                            <li className={styles.liMenu}><Link href='/produtos'>Produtos</Link >
                                <ul className={styles.ulSubMenu}>
                                    <li className={styles.liSubMenu}><Link href='/produtos'>Cadastrar</Link ></li>
                                    <li className={styles.liSubMenu}><Link href='/produtos'>Relatório</Link > </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                }
            </header>

            <header className={styles.header}>
                <nav>
                    <ul className={styles.ulMenu}>
                        <li className={styles.liMenu}><Link href='/'>Home</Link ></li>
                        <li className={styles.liMenu}><Link href='/produtos'>Produtos</Link >
                            <ul className={styles.ulSubMenu}>
                                <li className={styles.liSubMenu}><Link href='/produtos'>Cadastrar</Link ></li>
                                <li className={styles.liSubMenu}><Link href='/produtos'>Relatório</Link > </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}