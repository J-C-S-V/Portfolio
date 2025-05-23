import { Link } from 'react-router-dom';
// import { ImageProfile } from '../components/Profile';
import styles from './About.module.css';
import {
  IconCSS,
  IconHTML,
  IconJavaScript,
  IconNext,
  IconReact,
  IconTailwind,
  IconTypeScript,
  IconVite,
  IconWindsurf,
} from '../icons/Icons';

export const About = () => {
  const widthIcon = 40;
  const heightIcon = 40;
  return (
    <div className={styles.about}>
      <h1 className={styles['about__title']}>About</h1>
      <div className={styles['about__content']}>
        <p className={styles['about__description']}>
          Firstly, if you're reading this, I wish you the very best and may your dreams all come true ✨
        </p>
        <p className={styles['about__description']}>
          Hi, my name is Juan Sanchez. I'm a web developer with +2 years of experience specializing in front-end development. I have a strong passion for creating beautiful and enhanced user interfaces.
        </p>
        <p className={styles['about__description']}>
          I am currently looking for new challenges to grow and improve my skills while building high quality products and services.
        </p>
        <h2 className={styles['about__skills-title']}>Who I am</h2>
        <p className={styles['about__description']}>
          I consider myself a constant learner, always looking for new challenges to improve my skills and knowledge.
          Both soft and hard skills are important to me, but if I had to choose, 
          I would say that soft skills are more important, those make teams and 
          people in general to be successful, to achieve things that otherwise wouldn't be possible.
        </p>
        <h2>Tech stack</h2>
        <p className={styles['about__description']}>
          My skills include:
        </p>
        <ul className={styles['about__skills-list']}>
          <li>
            <div>
              <IconHTML width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div>
              <IconCSS width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div>
              <IconReact width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div>
              <IconTypeScript width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div>
              <IconNext width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div>
              <IconTailwind width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div>
              <IconVite width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div>
              <IconWindsurf width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div>
              <IconJavaScript width={widthIcon} height={heightIcon} />
            </div>
          </li>
        </ul>
        <p className={styles['about__description']}>
          Some other tools I've used:
        </p>
        <ul className={styles['about__skills-list']}>
          <li>
            <div>
              <IconHTML width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div>
              <IconCSS width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div>
              <IconReact width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div>
              <IconTypeScript width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div>
              <IconNext width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div>
              <IconTailwind width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div>
              <IconVite width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div>
              <IconWindsurf width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div>
              <IconJavaScript width={widthIcon} height={heightIcon} />
            </div>
          </li>
        </ul>
        <h2>Hobbies</h2>
        <p className={styles['about__description']}>Some of my hobbies include playing video games, playing chess, working out, playing the guitar (piano and violin as well 😀), listening to music, listening to podcasts, and reading books.</p>
        <h2>
          What I'm learning
        </h2>
        <p>Currently, I'm learning backend development with Django and Python. I'm also learning about AI and machine learning to implement them in my projects.</p>
      </div>

      <Link to="/" className={styles['about__link']}>
        Home
      </Link>
    </div>
  );
};