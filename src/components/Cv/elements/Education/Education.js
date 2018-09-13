import React from 'react';
import styles from './Education.sass';
import School from './School';

const Education = ({education}) => (
    <section className={styles.container}>
        <h2 className={styles.name}>Edukacja</h2>
        <ul className={styles.list}>
            {education.map(school => (
                <School key={school.institution} school={school} />
            ))}
        </ul>
    </section>
);

export default Education;