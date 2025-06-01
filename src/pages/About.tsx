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
  IconGitHub,
  IconGitLab,
  IconBitbucket,
  IconRedux,
  IconJest,
  IconBootstrap,
  IconSQL,
  IconGit,
  IconTrello,
  IconConfluence,
  IconJenkins,
  IconPhotoShop,
  IconFigma,
  IconDreamweaver,
  IconVsCode,
  IconWebpack,
  IconPython,
  IconWordpress,
  IconNpm,
  IconGrunt
} from '../icons/Icons';

export const About = () => {
  const widthIcon = 40;
  const heightIcon = 40;
  return (
    <div className={styles.about}>
      <h1 className={styles['about__title']}>About</h1>
      <div className={styles['about__content']}>
        <p className={styles['about__intro']}>
          Firstly, if you're reading this, I wish you the very best and may your dreams all come true ✨
        </p>
        <p className={styles['about__intro']}>
          My name is Juan Sanchez. I'm a web developer with +2 years of experience specializing in front-end
          development. I have a passion for creating beautiful and engaging user interfaces. What I love the most is web
          applications, I find it very rewarding and challenging. Brilliant, Duolingo, and many other apps are some of
          my favorites.
        </p>
        <p className={styles['about__intro']}>
          I am currently looking for new opportunities to grow and improve my skills while building high quality
          products and services.
        </p>
        <h2 className={styles['about__h2']}>Who am I?</h2>
        <p className={styles['about__description']}>
          I consider myself a constant learner, always looking for new challenges to improve my skills and knowledge. I
          like to build not just the right thing, but the thing right 😉. I prioritize best practices—aligned with team
          consensus—and use the best tools to build the best possible product. I'm also passionate about mentoring
          others, helping teammates grow and improve their skills—because when we support each other, everyone wins.
          Creativity plays a central role in my work as well, I enjoy thinking outside the box and finding innovative
          ways to solve problems.
        </p>
        <h2 className={styles['about__h2']}>Tech stack</h2>
        <p className={styles['about__description']}>Some tools I feel comfortable with:</p>
        <ul className={styles['about__skills-list']}>
          <li>
            <div data-tooltip="TypeScript" className={styles['about__skills-icon']}>
              <IconTypeScript width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="React" className={styles['about__skills-icon']}>
              <IconReact width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="HTML" className={styles['about__skills-icon']}>
              <IconHTML width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="CSS" className={styles['about__skills-icon']}>
              <IconCSS width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="JavaScript" className={styles['about__skills-icon']}>
              <IconJavaScript width={widthIcon} height={heightIcon} />
            </div>
          </li>

          <li>
            <div data-tooltip="Next.js" className={styles['about__skills-icon']}>
              <IconNext width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="Tailwind" className={styles['about__skills-icon']}>
              <IconTailwind width={widthIcon} height={heightIcon} />
            </div>
          </li>

          <li>
            <div data-tooltip="Windsurf" className={styles['about__skills-icon']}>
              <IconWindsurf width={widthIcon} height={heightIcon} />
            </div>
          </li>
        </ul>
        <p className={styles['about__description']}>Some other tools I've used:</p>
        <ul className={styles['about__skills-list-two']}>
          <li>
            <div data-tooltip="GitHub" className={styles['about__skills-icon']}>
              <IconGitHub width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="GitLab" className={styles['about__skills-icon']}>
              <IconGitLab width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="Bitbucket" className={styles['about__skills-icon']}>
              <IconBitbucket width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="Redux" className={styles['about__skills-icon']}>
              <IconRedux width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="Jest" className={styles['about__skills-icon']}>
              <IconJest width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="Bootstrap" className={styles['about__skills-icon']}>
              <IconBootstrap width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="SQL" className={styles['about__skills-icon']}>
              <IconSQL width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="Git" className={styles['about__skills-icon']}>
              <IconGit width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="Python" className={styles['about__skills-icon']}>
              <IconPython width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="Trello" className={styles['about__skills-icon']}>
              <IconTrello width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="Confluence" className={styles['about__skills-icon']}>
              <IconConfluence width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="Jenkins" className={styles['about__skills-icon']}>
              <IconJenkins width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="Photoshop" className={styles['about__skills-icon']}>
              <IconPhotoShop width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="Figma" className={styles['about__skills-icon']}>
              <IconFigma width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="Dreamweaver" className={styles['about__skills-icon']}>
              <IconDreamweaver width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="VSCode" className={styles['about__skills-icon']}>
              <IconVsCode width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="Vite" className={styles['about__skills-icon']}>
              <IconVite width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="Webpack" className={styles['about__skills-icon']}>
              <IconWebpack width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="NPM" className={styles['about__skills-icon']}>
              <IconNpm width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="Wordpress" className={styles['about__skills-icon']}>
              <IconWordpress width={widthIcon} height={heightIcon} />
            </div>
          </li>
          <li>
            <div data-tooltip="Grunt" className={styles['about__skills-icon']}>
              <IconGrunt width={widthIcon} height={heightIcon} />
            </div>
          </li>
        </ul>
        <h2 className={styles['about__h2']}>&nbsp;Hobbies&nbsp;</h2>
        <p className={styles['about__description']}>
          Some of my hobbies include playing video games, I'm a Nintendo lover 😍, I play mainly Mario Kart and platform
          games. I also enjoy playing chess ♟️, I'm not good at it but I try to improve and develop other skills, I play
          mainly on chess.com. I like working out 🚴‍♂️, mainly aerobic sports like cycling and running. I studied music at
          the uni 🎓🎶, so I know how to play the guitar, the piano and the violin as well 🎸🎹🎻.
        </p>
        <p className={styles['about__description']}>
          I also enjoy listening to music, from Chopin, through Rammstein, and up to the OST of Undertale. Listening to
          podcasts 🎙 is a good source of new knowledge, and I like doing that while washing the dishes or any other
          activity where I don't have to think too much. The last thing I could list here is animation 🎨✨, I'm getting
          into it because I think it's a powerful way to communicate ideas.
        </p>
        <h2 className={`${styles['about__h2']} ${styles['about__h2-learning']}`}>What I'm learning</h2>
        <p className={styles['about__description']}>
          Currently, I'm learning backend development with Django and Python. I'm also learning about AI and machine
          learning to implement them in my projects. Finally, I'm reviewing my math knowledge, I believe the foundations
          are key to understanding complex concepts, not just learning by heart the algorithms of solving maths
          problems, but to really understand the why behind them.
        </p>
      </div>
      <Link to="/" className={styles['about__link']}>
        Home
      </Link>
    </div>
  );
};
