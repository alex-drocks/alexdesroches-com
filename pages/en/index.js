import React from 'react';
import PageTemplate from "../../components/PageTemplate";
import Link from "next/link";
import ResponsiveImage from "../../components/ResponsiveImage";

const Index = () => {
  return (
    <PageTemplate
      pageTitle={process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription={process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION_EN}
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/en/"}
    >
      <div className="max-content-width display-flex">
        <div className="max-text-width">
          <h2>Freelance Web Developer</h2>
          <p>
            My name is <strong>Alexandre Desroches</strong>. I am a passionate Web developer, providing high quality
            services for software and website programming. I love coding and build great apps.
          </p>
          <Link href="/en/about"><a className="text-link">More about me&nbsp;&rarr;</a></Link>

          <h3>I'm good with Front-End Web Development.</h3>
          <p>
            In fact, my strengths are mostly built on top of the Web languages.
            So at the core - HTML, CSS and <strong>JavaScript</strong>.
          </p>
          <p>
            In this vast ecosystem, I master modern - on demand - technologies like&nbsp;:
            <strong>React.js</strong>, Next.js, Node.js, Electron.js, Squarespace, WordPress, WooCommerce,
            Firebase and more.
          </p>
          <Link href="/en/programming">
            <a className="text-link">Portfolio / Programming services&nbsp;&rarr;</a>
          </Link>

          <h3>Let's team up!</h3>
          <p>
            Hand me a new project to build your idea from scratch, or let's join our strengths together with your team.
          </p>
          <div className="handwritten-signature-container display-flex">
            <Link href="/en/contact"><a className="text-link">Contact me&nbsp;&rarr;</a></Link>
            <ResponsiveImage
              path="/images/signature/signature"
              alt="Alexandre Desroches's Signature."
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
            {/*<span className="stylish-shadow-image--overlay-text">Art is Thinking</span>*/}
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
};

export default Index;
