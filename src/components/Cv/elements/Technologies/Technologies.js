import React from 'react';
import styles from './Technologies.sass';
import Technology from './Technology';

const Technologies = ({technologies}) => (
    <section className={styles.container}>
        <h2 className={styles.name}>Technologie</h2>
        <ul className={styles.list}>
            {technologies.map(technology => (
                <Technology key={technology.name} technology={technology} />
            ))}
        </ul>
    </section>
);

export default Technologies;