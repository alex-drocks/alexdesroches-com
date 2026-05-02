import {useState} from "react";
import {myContactLinks} from "../lib/myContactLinks";
import styles from "../styles/contact.module.css";

export default function ContactForm({isEnglish}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0A%0AMessage:%0A${message}`;
    const mailtoLink = `mailto:${myContactLinks.email}?subject=${encodeURIComponent(subject || "Contact from alexdesroches.com")}&body=${body}`;

    window.open(mailtoLink, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.formSuccess}>
        <p>
          {isEnglish
            ? "Thanks for reaching out! Your email client should have opened with your message pre-filled. If it didn't open automatically, you can email me directly at:"
            : "Merci de m'avoir contacté ! Votre client de messagerie devrait s'être ouvert avec votre message pré-rempli. Si ce n'est pas le cas, vous pouvez m'écrire directement à l'adresse :"}
        </p>
        <p>
          <a href={`mailto:${myContactLinks.email}`} className="text-link">
            {myContactLinks.email}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      className={styles.contactForm}
      onSubmit={handleSubmit}
      aria-label={isEnglish ? "Contact form" : "Formulaire de contact"}
    >
      <div className={styles.formField}>
        <label htmlFor="contact-name">
          {isEnglish ? "Name" : "Nom"}
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={isEnglish ? "Your name" : "Votre nom"}
        />
      </div>
      <div className={styles.formField}>
        <label htmlFor="contact-email">
          {isEnglish ? "Email" : "Courriel"}
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={isEnglish ? "your@email.com" : "votre@email.com"}
        />
      </div>
      <div className={styles.formField}>
        <label htmlFor="contact-subject">
          {isEnglish ? "Subject" : "Sujet"}
        </label>
        <input
          id="contact-subject"
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder={isEnglish ? "Project inquiry" : "Demande de projet"}
        />
      </div>
      <div className={styles.formField}>
        <label htmlFor="contact-message">
          {isEnglish ? "Message" : "Message"}
        </label>
        <textarea
          id="contact-message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={isEnglish ? "Tell me about your project..." : "Parlez-moi de votre projet..."}
        />
      </div>
      <button
        type="submit"
        className={styles.submitButton}
      >
        {isEnglish ? "Send →" : "Envoyer →"}
      </button>
      <p className={styles.formNote}>
        {isEnglish
          ? "This will open your email client. Alternatively, you can reach out directly via LinkedIn or email."
          : "Ceci ouvrira votre client de messagerie. Vous pouvez aussi me contacter directement via LinkedIn ou par courriel."}
      </p>
    </form>
  );
}
