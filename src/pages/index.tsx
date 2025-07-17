import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { InformationConfig } from '@site/information.config';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

function HomepageHeader() {
  return (
    <header
      className={clsx('hero hero--primary')}>
      <div className='container '>
        <div className='hero__container'>
          <div className='hero__photo'>
            <div className='hero__photo__name'>
              Hi, I&apos;m {InformationConfig.bannerHero.name} 👋
            </div>
            <img src='img/profile_pic.jpeg' />
          </div>
        </div>
        <Heading as='h1' className='hero__title'>
          {InformationConfig.bannerHero.title}
        </Heading>
        <p
          className='header__description'
          dangerouslySetInnerHTML={{ __html: InformationConfig.bannerHero.description }}
        />
        <div className='hero__container'>
          <Link
            to="/blog">
            <button className="header__get__in__touch">
              View Blog
            </button>
          </Link>
        </div>
      </div>
    </header >
  )
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="">
      <HomepageHeader />
      {/* <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
