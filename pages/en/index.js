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
              I'm a <strong>senior front-end developer</strong>. I turn complex needs into fast,
              accessible, and durable websites, applications, and tools.
            </p>
            <div className="hero-ctas">
              <Link href="/en/programming" className="btn btn-primary">
                See my services&nbsp;&rarr;
              </Link>
              <Link href="/en/contact" className="btn btn-secondary">
                Discuss a project
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
            My name is <strong>Alex Desroches</strong>. I'm a freelance developer offering{" "}
            <strong>software, web app, and website programming services</strong>, depending on what you need.
            I love coding, and I care about doing good work.
          </p>
          <Link href="/en/about" className="text-link">Learn more about me&nbsp;&rarr;</Link>

          <h3>Senior front-end web developer</h3>
          <p>
            My strengths are mostly built on core web technologies: HTML, CSS, and <strong>JavaScript</strong>.
          </p>
          <p>
            In this vast ecosystem, I work with modern, in-demand technologies like:{" "}
            <strong>React.js</strong>, Next.js, Node.js, Electron.js, <strong>Angular</strong>, Squarespace, WordPress,
            WooCommerce, Firebase, and more.
          </p>
          <Link href="/en/programming" className="text-link">
            My portfolio and programming services&nbsp;&rarr;
          </Link>

          <h3>Let's work together!</h3>
          <p>
            I'll bring <strong>your idea to life</strong> from the ground up. Or, let's combine our
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
              fallbackExtension="png"
              sizes="92px"
              className="handwritten-signature"
              loading="lazy"
            />
          </div>

        </div>

        <div className="max-text-width display-flex">
          <div className="stylish-shadow-image">
            <span aria-hidden="true" className="stylish-shadow-image--overlay-text stylish-shadow-image--overlay-text--angled">Art is Thinking</span>
            <ResponsiveImage
              path="/images/whitebloc/whitebloc"
              alt="Art is Thinking"
              renderedWidth={501}
              renderedHeight={751}
              desktopWidth={1002}
              mobileWidth={501}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
