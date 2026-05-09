import PageTemplate from "../../components/PageTemplate";
import styles from "../../styles/a-propos.module.css";
import ResponsiveImage from "../../components/ResponsiveImage";

export default function About() {
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
            I'm passionate about programming, movies, video games, music production, theology, and philosophy.
            Basically, anything that sparks my creative side and feeds my imagination.
          </p>
          <p>
            I'm in my thirties and live in Quebec, Canada, with my beloved wife Cathy and our two kids!
          </p>
          <p>
            <strong>Since childhood, I've loved anything related to technology, creativity, and thinking.</strong>{" "}
            A funny example: when I was very young, I received my first electronic piano for Christmas and played
            until the batteries were dead! This anecdote still reflects my personality today. When I discover something I
            enjoy, like music or programming, I get fully invested in it.
          </p>
          <p>
            <strong>
              I'm persistent, passionate, and committed to doing excellent work.
            </strong>{" "}
            I don't like failing, and I do my best to succeed. When I do fail, I take it hard, but it pushes me to keep
            going. What I hate most is giving up. To me, real failure is giving up when you are so close to success.
            This is why <strong>I constantly strive to progress</strong> rather than resign myself to defeat.
          </p>
          <p>
            <strong>For everything I do, I give my best</strong> and find solutions to improve my working environment.
            With me, you can expect professional, thorough, and well-done work. I always give my best, whether the
            responsibility is big or small.
          </p>
        </section>

        <section className="max-text-width">
          <div className="stylish-shadow-image">
            <span aria-hidden="true" className="stylish-shadow-image--overlay-text">Art is Revealing</span>
            <ResponsiveImage
              path="/images/about/about"
              alt="Art is Revealing"
              renderedWidth={501}
              renderedHeight={752}
              desktopWidth={1000}
              mobileWidth={501}
              mobilePath="/images/about/about-w501"
              className={styles.stylishImage}
            />
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}
