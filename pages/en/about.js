import PageTemplate from "../../components/PageTemplate";
import styles from "../../styles/a-propos.module.css";
import ResponsiveImage from "../../components/ResponsiveImage";
import Link from "next/link";
import {calculateAge} from "../../lib/calculateAge";

const About = () => {
  return (
    <PageTemplate
      pageTitle="About Alex Desroches | Web Developer"
      pageDescription="Learn about Alex Desroches, a front-end web developer focused on JavaScript, React, Next.js, clean code and reliable collaboration."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/en/about/"}
      pageAlternateURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/a-propos/"}
    >
      <div className="max-content-width display-flex">
        <section className="max-text-width">
          <h1>About Alex Desroches</h1>
          <p>
            TL;DR: I am passionate about coding, movies, video games, music production, theology, and philosophy:
            anything that awakens my creative mind and fuels my imagination.
          </p>
          <p>
            I am {calculateAge(new Date(1989, 4, 29))} years old and live in Quebec, Canada, with my beloved wife
            Cathy and our two kids!
          </p>
          <p>
            Since childhood, <strong>I have loved things that are technological, creative, and thought-provoking</strong>.{" "}
            For a funny example, when I was very young, I received my first electronic piano for Christmas and played
            until the batteries ran out. This anecdote still reflects my personality today. When I discover something I
            enjoy, like music or programming, I become fully invested in it.
          </p>
          <p>
            <strong>
              I'm persevering, passionate, and committed to excellence.
            </strong>{" "}
            I don't like failing, and I do my best to succeed. When I do fail, I take it hard, but it motivates me to
            keep improving. What I hate most is giving up. To me, real failure is giving up when you are close to
            success. That is why <strong>I constantly strive to progress</strong> rather than resign myself to defeat.
          </p>
          <p>
            <strong>For everything I do, I give my best</strong> and find solutions to improve my working environment.
            With me, you can expect professionalism, excellence, and trust. I always give my best, regardless of
            whether the responsibility is big or small.
          </p>
          <p>
            This is who I am in a nutshell!
          </p>
          <Link href="/en/programming" className="text-link">View my portfolio →</Link>
          <br/>
          <br/>
          <Link href="/en/contact" className="text-link">Contact me →</Link>
        </section>

        <section className="max-text-width">
          <div className="stylish-shadow-image">
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
