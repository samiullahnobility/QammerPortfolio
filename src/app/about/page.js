import Image from "next/image";
import { SiteHeader } from "@/src/components/SiteHeader";
import { SiteFooter } from "@/src/components/SiteFooter";
import { profile } from "@/src/data/profile";
import { services } from "@/src/data/services";
import { education, experience, hobbies, languages, references, workingSkills } from "@/src/data/resume";

export const metadata = { title: "About Qamar Abbas, Digital Marketer", description: "Learn about Qamar Abbas, a Meta Ads, Shopify and social media marketing specialist with hands-on experience in e-commerce growth and performance creative." };

export default function About() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="about-grid about-resume-hero">
          <div>
            <p className="section-index">About Qamar Abbas</p>
            <h1>Digital marketing<br /><em>for e-commerce growth.</em></h1>
            <p className="lead">{profile.about}</p>
            <div className="resume-quicklinks" aria-label="Resume sections">
              <a href="#experience">Experience</a>
              <a href="#education">Education</a>
              <a href="#skills">Skills</a>
              <a href="#references">References</a>
            </div>
          </div>
          <div className="about-photo">
            <Image src="/images/qammer/profile/qamar-abbas-founder.jpg" alt="Qamar Abbas" fill priority sizes="(max-width:900px) 100vw,50vw" />
          </div>
        </section>

        <section className="expertise">
          <div>
            <p className="section-index light">Digital marketing services</p>
            <h2>Strategy, creative<br /><em>and conversion.</em></h2>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section" id="experience">
          <div className="section-head">
            <p className="section-index">Work experience</p>
            <h2>Hands-on digital<br /><em>marketing experience.</em></h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.role}-${item.company}`}>
                <div className="timeline-meta">
                  <span>{item.period}</span>
                  <strong>{item.company}</strong>
                </div>
                <div className="timeline-body">
                  <h3>{item.role}</h3>
                  <ul>
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section resume-split" id="education">
          <div>
            <p className="section-index">Education</p>
            <h2>IT foundation,<br /><em>marketing execution.</em></h2>
          </div>
          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.degree}>
                <span>{item.period}</span>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section resume-split" id="skills">
          <div>
            <p className="section-index">Working skills</p>
            <h2>Meta Ads, Shopify<br /><em>and social content.</em></h2>
          </div>
          <div className="resume-stack">
            <div className="skill-cloud">
              {workingSkills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
            </div>
            <div className="personal-grid">
              <article className="personal-card">
                <h3>Languages</h3>
                <p>{languages.join(" / ")}</p>
              </article>
              <article className="personal-card">
                <h3>Hobbies</h3>
                <p>{hobbies.join(" / ")}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="resume-section references-section" id="references">
          <div className="section-head compact-head">
            <p className="section-index">References</p>
            <h2>Professional<br /><em>contacts.</em></h2>
          </div>
          <div className="reference-grid">
            {references.map((reference) => (
              <article className="reference-card" key={reference.name}>
                <h3>{reference.name}</h3>
                <p>{reference.role}</p>
                <a href={`tel:${reference.phone.replace(/\s/g, "")}`}>{reference.phone}</a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
