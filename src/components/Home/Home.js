import React, {Component} from 'react';
import styles from './Home.sass';
import myImage from './myImage.png';
import PrintText from '../../_utils/PrintText';

class Home extends Component {
    state = {
        printed: false
    }
    render() {
        return(
            <article className={styles.container}>
                <div className={styles.text}>
                    <h1><PrintText text="Cześć! Nazywam się Mateusz." interval={150} randomize={150} callback={() => this.setState({printed: true})} /></h1>
                    <h2>{this.state.printed && <PrintText text="Jestem Web developerem" interval={150} randomize={150} />}</h2>
                </div>
                <img src={myImage} alt="My image" className={styles.image}/>
            </article>
        );
    }
} 


export default Home;