import React from 'react';
import PageTemplate from "../../components/PageTemplate";
import styles from "../../styles/a-propos.module.css";
import ResponsiveImage from "../../components/ResponsiveImage";
import Link from "next/link";
import {calculateAge} from "../../lib/calculateAge";

const About = () => {
  return (
    <PageTemplate
      pageTitle={"About | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Get to know more about Alexandre Desroches - Javascript Web Developer with Front-End Web Development expertise."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/en/about/"}
    >
      <div className="max-content-width display-flex">
        <section className="max-text-width">
          <h2>About Alexandre Desroches</h2>
          <p>
            TLDR; I am a passionate guy and <strong>I enjoy coding</strong>, movies, video games, music, music
            production, theology and philosophy. You know, about anything that awakens my creative mind and satisfies my
            imagination.
          </p>
          <p>
            I am {calculateAge(new Date(1989, 4, 29))} years old, living in Canada in the province
            of Quebec, with my beloved wife Cathy and our new born son Samuel!
          </p>
          <p>
            Since my childhood, <strong>I love what is technological, creative and demands reflection</strong>.{" "}
            To quote a funny example... being very young - I received my first electronic piano for Christmas
            and I played until the batteries were empty! This anecdote further demonstrates
            my personality today. When I discover something that I enjoy - like music or
            programming - I'm fully invested in that.
          </p>
          <p>
            <strong>
              I'm a persevering, passionate and excellence-oriented worker.
            </strong>{" "}
            I don't like failing and do my best to succeed. When I do fail, I take it hardly, but this is the drive that
            keeps me wanting more. What I hate the most is giving up. To me, real failure is giving up when you are so
            close to success. This is why{" "}<strong>I constantly strive to progress</strong> rather than resigning
            myself to
            defeat.
          </p>
          <p>
            <strong>For everything I do, I give my best</strong> and I find solutions to improve my
            working environment. With me, you can expect professionalism, excellence and trust. I always give the best
            of myself no matter the responsibility - big or small.
          </p>
          <p>
            This is who I am in a nutshell!
          </p>
          <Link href="/en/programming"><a className="text-link">Look at my portfolio&nbsp;&rarr;</a></Link>
          <br/>
          <br/>
          <Link href="/en/contact"><a className="text-link">Contact me&nbsp;&rarr;</a></Link>
        </section>

        <section className="max-text-width">
          <div className="stylish-shadow-image">
            <span className={styles.imageTextOverlay + " stylish-shadow-image--overlay-text"}>Art is Revealing</span>
            <ResponsiveImage
              path="/images/about/about"
              alt="Art is Revealing"
              renderedWidth={501}
              renderedHeight={752}
              desktopWidth={1000}
              mobileWidth={501}
              className={styles.stylishImage}
            />
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};


export default About;
