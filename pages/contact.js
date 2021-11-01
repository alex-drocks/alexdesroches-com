import PageTemplate from "../components/PageTemplate";

export default function Contact() {
  return (
    <PageTemplate
      pageTitle={"Contact | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Contacter Alexandre Desroches."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/contact/"}
    >
      <div className="max-text-width">
        <h1>Contacter Alexandre Desroches</h1>
        <p>
          Vous pouvez me joindre par le moyen que vous préférez. Soit par courriel, téléphone, Facebook, Twitter, etc.
          Je suis très ouvert à la discussion et à vos propositions de projets. Ce sera un plaisir pour moi de
          communiquer avec vous.
        </p>

        <ContactLink label="Courriel" url="mailto:alex.desroches7@gmail.com"/>
        <ContactLink label="LinkedIn" url="https://www.linkedin.com/in/alexandre-desroches-dev/"/>
        <ContactLink label="Facebook" url="https://www.facebook.com/alexandre.drocks"/>
        <ContactLink label="Twitter" url="https://twitter.com/DrocksAlex"/>

        <p>
          (438) 395-7649<br/>
          1684 Girard, Ste-Madeleine, QC Canada, J0H 1S0
        </p>
      </div>
    </PageTemplate>
  );
}

function ContactLink({label, url}) {
  return (
    <p>
      <a className="text-link" href={url}>{label}&nbsp;&rarr;</a>
    </p>
  )
}
