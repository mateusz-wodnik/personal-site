import React from 'react';
import styles from './Technology.sass';


const Technology = ({technology}) => (
    <li className={styles.container}>
        <img className={styles.icon} src={require(`../../icons/${technology.icon}-original.svg`)} alt={technology.icon}/>
        <div className={styles.content}>
            <p className={styles.name}>{technology.name}</p>
            {/*<span className="skills__level">Poziom: {skill.level}</span>*/}
            {/*<div className="skills__keywords"></div>*/}
        </div>
    </li>
);

export default Technology;