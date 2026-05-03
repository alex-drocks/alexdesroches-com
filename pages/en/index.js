import Link from "next/link";
import PageTemplate from "../../components/PageTemplate";
import ResponsiveImage from "../../components/ResponsiveImage";
import HeroSkillShowcase from "../../components/HeroSkillShowcase";

export default function Index() {
  return (
    <PageTemplate
      pageTitle="Freelance Web Developer in Quebec | Alex Desroches"
      pageDescription="Freelance front-end web developer in Quebec building fast, accessible websites with React, Next.js, JavaScript and modern web tools."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/en/"}
      pageAlternateURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/"}
    >
      <section className="hero">
        <div className="max-content-width display-flex">
          <div className="max-text-width">
            <span className="hero-badge">Freelance Developer</span>
            <h1 className="hero-title">
              <span>Alexandre</span>{" "}
              <span>Desroches</span>
            </h1>
            <div className="shimmer-bar" aria-hidden="true" />
            <p className="hero-subtitle">
              I'm a front-end web developer who crafts fast, accessible, and beautiful
              websites, from idea to deployment.
            </p>
            <div className="hero-ctas">
              <Link href="/en/programming" className="btn btn-primary">
                See my services&nbsp;&rarr;
              </Link>
              <Link href="/en/contact" className="btn btn-secondary">
                Get in touch
              </Link>
            </div>
          </div>
          <div className="max-text-width hero-visual-wrap">
            <HeroSkillShowcase />
          </div>
        </div>
      </section>

      <div className="max-content-width display-flex">
        <div className="max-text-width">
          <h2>Freelance Web Developer</h2>
          <p>
            I am Alex Desroches, a dedicated web developer offering high-quality software and website programming
            services. I thrive on coding and delivering outstanding results.
          </p>
          <Link href="/en/about" className="text-link">Learn more about me&nbsp;&rarr;</Link>

          <h3>I specialize in front-end web development.</h3>
          <p>
            My strengths are built on core web technologies: HTML, CSS, and <strong>JavaScript</strong>.
          </p>
          <p>
            I work with modern, in-demand technologies such as:{" "}
            <strong>React.js</strong>, Next.js, Node.js, Electron.js, <strong>Angular</strong>, Squarespace, WordPress,
            WooCommerce, Firebase, and more.
          </p>
          <Link href="/en/programming" className="text-link">
            My portfolio and programming services&nbsp;&rarr;
          </Link>

          <h3>Let's work together!</h3>
          <p>
            I'll bring your idea to life from the ground up. Alternatively, let's combine our
            strengths and collaborate with your team.
          </p>
          <div className="handwritten-signature-container display-flex">
            <Link href="/en/contact" className="text-link">Contact me&nbsp;&rarr;</Link>
            <ResponsiveImage
              path="/images/signature/signature"
              alt="Alex Desroches signature"
              renderedWidth={92}
              renderedHeight={92}
              desktopWidth={276}
              mobileWidth={184}
              className="handwritten-signature"
            />
          </div>

        </div>

        <div className="max-text-width display-flex">
          <div className="stylish-shadow-image">
            <ResponsiveImage
              path="/images/whitebloc/whitebloc"
              alt="Art is Thinking"
              renderedWidth={501}
              renderedHeight={751}
              desktopWidth={1002}
              mobileWidth={501}
            />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
