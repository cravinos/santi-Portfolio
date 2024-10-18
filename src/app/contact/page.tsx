import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title">contact me.</h1>
      
      <ContactForm />
      <h3>How Does this work? Well its going to send To a Database where I get notifications when someone sends a message!</h3>
    </article>
  );
}