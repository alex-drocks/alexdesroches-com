import {useState} from "react";

import styles from "../styles/contact.module.css";

const initialFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  extraField: "",
};

const copy = {
  fr: {
    name: "Nom",
    email: "Courriel",
    subject: "Sujet",
    message: "Message",
    submit: "Envoyer le message",
    sending: "Envoi en cours...",
    success: "Merci. Votre message a ete envoye.",
    error: "Le message n'a pas pu etre envoye. Veuillez reessayer.",
    unavailable: "Le formulaire est temporairement indisponible.",
    required: "Tous les champs sont requis.",
  },
  en: {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    submit: "Send message",
    sending: "Sending...",
    success: "Thanks. Your message has been sent.",
    error: "The message could not be sent. Please try again.",
    unavailable: "The form is temporarily unavailable.",
    required: "All fields are required.",
  },
};

function ContactForm({language = "fr"}) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const labels = copy[language] || copy.fr;
  const isSending = status === "sending";

  function updateFormValue(event) {
    const {name, value} = event.target;

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const requiredValues = [
      formValues.name,
      formValues.email,
      formValues.subject,
      formValues.message,
    ];

    if (requiredValues.some((value) => !value.trim())) {
      setStatus("error");
      setStatusMessage(labels.required);
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formValues,
          language,
        }),
      });

      if (response.status === 503) {
        setStatus("error");
        setStatusMessage(labels.unavailable);
        return;
      }

      if (!response.ok) {
        throw new Error("Contact form request failed.");
      }

      setFormValues(initialFormValues);
      setStatus("success");
      setStatusMessage(labels.success);
    } catch {
      setStatus("error");
      setStatusMessage(labels.error);
    }
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formField}>
        <label htmlFor={`contact-name-${language}`}>{labels.name}</label>
        <input
          id={`contact-name-${language}`}
          name="name"
          type="text"
          autoComplete="name"
          value={formValues.name}
          onChange={updateFormValue}
          disabled={isSending}
          required
        />
      </div>

      <div className={styles.formField}>
        <label htmlFor={`contact-email-${language}`}>{labels.email}</label>
        <input
          id={`contact-email-${language}`}
          name="email"
          type="email"
          autoComplete="email"
          value={formValues.email}
          onChange={updateFormValue}
          disabled={isSending}
          required
        />
      </div>

      <div className={styles.formField}>
        <label htmlFor={`contact-subject-${language}`}>{labels.subject}</label>
        <input
          id={`contact-subject-${language}`}
          name="subject"
          type="text"
          value={formValues.subject}
          onChange={updateFormValue}
          disabled={isSending}
          required
        />
      </div>

      <div className={styles.formField}>
        <label htmlFor={`contact-message-${language}`}>{labels.message}</label>
        <textarea
          id={`contact-message-${language}`}
          name="message"
          rows="7"
          value={formValues.message}
          onChange={updateFormValue}
          disabled={isSending}
          required
        />
      </div>

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor={`contact-extra-field-${language}`}>Leave this field empty</label>
        <input
          id={`contact-extra-field-${language}`}
          name="extraField"
          type="text"
          autoComplete="off"
          tabIndex="-1"
          value={formValues.extraField}
          onChange={updateFormValue}
        />
      </div>

      <button className="btn btn-primary" type="submit" disabled={isSending}>
        {isSending ? labels.sending : labels.submit}
      </button>

      {statusMessage && (
        <p
          className={`${styles.formStatus} ${status === "error" ? styles.formStatusError : ""}`}
          role="status"
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
}

export default ContactForm;
