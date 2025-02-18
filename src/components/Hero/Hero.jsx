import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";
import Resume from '../../../dist/assets/resume.pdf';
import {Download} from 'lucide-react';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I'm Megha D Suvarna</h1>
            <p className={styles.description}>A passionate software developer with expertise in web development, deep learning, and blockchain technologies. 
                As a recent graduate, I bring a strong foundation in Python, C and Javascript coupled with hands-on experience in 
                diverse projects. I'm eager to contribute my skills and innovative mindset to a dynamic team.
            </p>
            <a href={Resume} download={true} className={styles.contactBtn}>
                  <Download />
                  Download Resume
            </a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="hero-image" className={styles.heroImg}></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
