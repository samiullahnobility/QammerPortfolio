import { SiteHeader } from "@/src/components/SiteHeader";
import { SiteFooter } from "@/src/components/SiteFooter";
import { profile } from "@/src/data/profile";

export const metadata = { title: "Contact - Qamar Abbas" };

export default function Contact() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="contact contact-page">
          <p className="section-index">Start a conversation</p>
          <h1>Let's make<br /><em>it perform.</em></h1>
          <p className="lead">For Shopify stores, Meta Ads, social content or e-commerce growth work, reach out directly.</p>
          <div className="contact-cards">
            <a href={`mailto:${profile.email}`}>
              <span>Email</span>
              <strong>{profile.email}</strong>
              <b>-&gt;</b>
            </a>
            <a href={`tel:${profile.phoneHref}`}>
              <span>Phone</span>
              <strong>{profile.phone}</strong>
              <b>-&gt;</b>
            </a>
            <a href={profile.instagramHref} target="_blank" rel="noreferrer">
              <span>Instagram</span>
              <strong>{profile.instagram}</strong>
              <b>-&gt;</b>
            </a>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.address)}`} target="_blank" rel="noreferrer">
              <span>Address</span>
              <strong>{profile.address}</strong>
              <b>-&gt;</b>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
