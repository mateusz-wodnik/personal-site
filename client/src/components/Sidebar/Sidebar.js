import React from 'react';

// Import styles
import styles from './Sidebar.sass';

// Import components
import Navigation from './elements/Navigation/Navigation';
import Social from './elements/Social/Social';
import Logo from './elements/Logo/Logo';

const Sidebar = () => (
    <aside className={styles.container}>
        <Logo/>
        <Navigation/>
        <Social/>
    </aside>
);

export default Sidebar;
