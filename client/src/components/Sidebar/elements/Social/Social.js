import React from 'react';
import styles from './Social.sass';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Social = () => (
    <section className={styles.container}>
        <a href="https://www.linkedin.com/in/mateusz-wodnik" target="_blank" className={styles.link}>
            <FaLinkedin />
        </a>
        <a href="https://github.com/mateusz-wodnik" target="_blank" className={styles.link}>
            <FaGithub />
        </a>
    </section>
);

export default Social;
