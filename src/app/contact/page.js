import { SiteHeader } from "@/src/components/SiteHeader";
import { SiteFooter } from "@/src/components/SiteFooter";
import { profile } from "@/src/data/profile";

export const metadata = {
  title: "Contact a Meta Ads & Shopify Specialist",
  description: "Contact Qamar Abbas about Meta Ads, Shopify, social media marketing, performance creative, or e-commerce growth.",
};

const whatsappHref = "https://wa.me/message/VZSXUJSSJGUSB1";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path fill="currentColor" d="M16.04 3A12.8 12.8 0 0 0 5.1 22.43L3.3 29l6.72-1.76A12.83 12.83 0 1 0 16.04 3Zm0 23.48c-1.9 0-3.75-.5-5.37-1.45l-.38-.22-3.99 1.04 1.06-3.88-.25-.4a10.65 10.65 0 1 1 8.93 4.91Zm5.84-7.97c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.82 1.05-1.01 1.26-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58a9.6 9.6 0 0 1-1.78-2.21c-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.31.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64 0 1.56 1.14 3.07 1.29 3.28.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.16-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export default function Contact() {
  const methods = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
    { label: "Instagram", value: profile.instagram, href: profile.instagramHref, external: true },
    { label: "Location", value: profile.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.address)}`, external: true },
  ];

  return (
    <>
      <SiteHeader />
      <main className="contact-v2">
        <section className="contact-v2-main">
          <header className="contact-v2-heading">
            <div>
              <p className="section-index">Contact details / Let’s talk</p>
              <h1>Have a project?<br /><em>Get in touch.</em></h1>
              <div className="contact-v2-intro">
                <span className="contact-status"><i /> Available for selected projects</span>
                <p>Tell me about your store, campaign, or growth challenge. I’ll review the details and respond with a clear next step.</p>
              </div>
            </div>
            <a className="contact-v2-whatsapp contact-v2-whatsapp-heading" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Message Qamar Abbas on WhatsApp">
              <div className="contact-v2-whatsapp-top"><span className="contact-v2-icon"><WhatsAppIcon /></span><span className="contact-v2-badge">Fastest response</span></div>
              <div><small>WhatsApp</small><h2>Start a conversation.</h2><p>Message me directly about your project and timeline.</p></div>
              <b>Open WhatsApp <span>↗</span></b>
            </a>
          </header>

          <div className="contact-v2-grid">
            <div className="contact-v2-methods">
              {methods.map((method, index) => (
                <a key={method.label} href={method.href} target={method.external ? "_blank" : undefined} rel={method.external ? "noreferrer" : undefined}>
                  <span>0{index + 1}</span>
                  <div><small>{method.label}</small><strong>{method.value}</strong></div>
                  <b>↗</b>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-v2-next">
          <div className="contact-v2-next-heading">
            <p className="section-index">What happens next</p>
            <h2>A simple start.<br /><em>A focused plan.</em></h2>
          </div>
          <ol>
            <li><span>01</span><div><strong>Tell me about the project</strong><p>Share your goals, current challenges, and ideal timeline.</p></div></li>
            <li><span>02</span><div><strong>Get a thoughtful response</strong><p>I’ll review the details and reply with the best next step.</p></div></li>
            <li><span>03</span><div><strong>Start growing</strong><p>We’ll align on scope, priorities, and a clear action plan.</p></div></li>
          </ol>
        </section>

        <section className="contact-v2-footer">
          <p>Meta Ads</p><p>Shopify growth</p><p>Social media</p><p>Performance creative</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
