import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} 
            alt="me-sitting eith a laptop" 
            className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")}
                alt='cursor-icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Front-end Development</h3>
                    <p>Experience developing user interfaces, potentially with projects like the "Decentralized Voting System" and "Orrery WebApp" using ReactJS and Streamlit.  Focus on user experience and responsive design.
                    </p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")}
                alt='server-icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Database and Back-end Development</h3>
                    <p>Experience developing and maintaining database using Firebase and Mongodb. Implemented Back-end technologies like Flask in "PII Detection" project.
                    </p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/uiIcon.png")}
                alt='cursor-icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Blockchain and AIML</h3>
                    <p>Interested in blockchain technology and applied it in the "Decentralized Voting System" project. Optimized reduction in gas costs by 21% and reduced transaction time by implementing efficient Data Structures.
                    <br/>
                    Interested in building real-world applications using Machine Learning and Deep Learning and applied in various projects like "Plant Disease prediction" and "Movie recommendation systems".
                    </p>
                </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
