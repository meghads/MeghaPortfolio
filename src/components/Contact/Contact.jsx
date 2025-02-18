import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>CONTACT</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} 
                alt="Email Icon"/>
                <a href='mailto:meghads.1si22ci028@gmail.com'>meghads.1si22ci028@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} 
                alt="LinkedIn Icon"/>
                <a href='https://www.linkedin.com/in/megha-dayananda-69259725b/'>megha-dayananda</a>
                </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} 
                alt="Github Icon"/>
                <a href='https://github.com/meghads'>meghads</a>
            </li>
        </ul>
    </footer>
  )
  
}
