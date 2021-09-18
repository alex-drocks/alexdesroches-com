import PageLayout from "../components/PageLayout";

export default function Programmation() {
  return (
    <PageLayout
      pageTitle={"Programmation | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Services de programmation et conception de sites webs. Alexandre Desroches freelancer. Javascript, React, NodeJS, Firebase, HTML, CSS."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/programmation/"}
    >
      <h1>Services de programmation</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores blanditiis dolor dolorum eaque
        excepturi hic obcaecati pariatur, perferendis placeat qui quidem repellendus tempora vero vitae. Aspernatur
        dolorem dolorum enim.
      </p>
    </PageLayout>
  );
}
