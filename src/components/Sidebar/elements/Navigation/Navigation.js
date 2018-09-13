import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.sass';
import { MdHome, MdCode, MdDock, MdContacts } from 'react-icons/md';

const Navigation = () => (
    <section className={styles.container}>
        <NavLink exact to='/personal-site' className={styles.link} activeClassName={styles.active}>
            <MdHome />
        </NavLink>
        <NavLink exact to='/personal-site/skills' className={styles.link} activeClassName={styles.active}>
            <MdCode />
        </NavLink>
        <NavLink exact to='/personal-site/cv' className={styles.link} activeClassName={styles.active}>
            <MdDock />
        </NavLink>
        <NavLink exact to='/personal-site/contact' className={styles.link} activeClassName={styles.active}>
            <MdContacts />
        </NavLink>
    </section>
);

export default Navigation;
