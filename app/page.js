'use client';

import { useCallback, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import WebGLEffect from '../components/WebGLEffect';

const contact = {
  phone: '+1 437 243 3693',
  email: 'alex@seshwithfriends.org',
  linkedin: 'https://www.linkedin.com/in/amorac/',
  website: 'http://www.eloruga.com',
  github: 'https://github.com/Oruga420',
};

const summaryText =
  'AI Solutions Architect with over 15 years of technical experience and a deep focus on Generative AI, automation, and cloud architecture. Expert in designing secure, scalable RAG systems and agentic workflows on GCP, AWS, and Vercel. Proven track record of saving enterprises over 20,000 man-hours annually and driving AI adoption rates from 47% to 97%. Skilled in orchestrating LLM pipelines, REST API integration, and full-stack development to deliver production-ready AI solutions.';

const expertise = [
  'Google Cloud Platform (GCP)',
  'AWS',
  'Vercel',
  'REST APIs',
  'Microservices',
  'RAG Patterns',
  'Vector Databases',
  'Embeddings',
  'OpenAI / Anthropic / Gemini Integration',
  'Agentic Workflows',
  'Prompt Engineering',
  'Next.js',
  'Python',
  'Salesforce Development',
  'QA Engineering',
  'CI/CD',
  'Salesforce Agentforce',
  'MCP Servers',
  'Zapier',
  'Jira',
];

const experiences = [
  {
    role: 'AI Solutions Architect',
    company: 'Assent',
    location: 'Remote (Canada)',
    dates: 'Feb 2025 - Present',
    bullets: [
      'Architecting and developing enterprise-grade GenAI applications within a regulated compliance platform, ensuring strict security and auditability standards.',
      'Successfully saved the company over 20,000 man-hours in under a year by implementing agentic workflows and internal tools that replace repetitive operational tasks.',
      'Drove internal AI adoption from 47% to 97% by embedding AI tools directly into existing workflows (Salesforce, Internal Apps).',
      'Designing scalable architectures using OpenAI, Anthropic, and Gemini models, featuring live RAG connections and custom MCP servers.',
      'Establishing governance and documentation standards to enable safe prototyping-to-production pipelines.',
    ],
  },
  {
    role: 'AI Solutions Architect',
    company: 'Sesh | Ai Solutions',
    location: 'Toronto, Ontario',
    dates: 'Nov 2021 - Present',
    bullets: [
      'Designed and architected over 120 GenAI applications currently in production across 30+ clients.',
      'Built more than 90 chatbots solving specific business problems utilizing vector search and RAG patterns.',
      'Lead technical education for a community of 100+ members, teaching practical AI implementation and workflow automation.',
      'Conducted multiple webinars for organizations like Latinas in Tech and Somos Latinos in Tech Ottawa.',
    ],
  },
  {
    role: 'Salesforce Consultant',
    company: 'Online Business Systems',
    location: 'Toronto, Ontario',
    dates: 'Jun 2024 - Nov 2024',
    bullets: [
      'Led implementation of Salesforce Agentforce and Marketing Cloud Account Engagement (MCAE).',
      'Configured AI assistants and copilot experiences, ensuring secure data access and alignment with business logic.',
      'Developed reusable integration patterns to accelerate client onboarding and ensure system scalability.',
    ],
  },
  {
    role: 'Salesforce Manager',
    company: 'Globalization Partners',
    location: 'Ontario, Canada',
    dates: 'Nov 2018 - Nov 2023',
    bullets: [
      'Managed a Salesforce environment with 1,000+ licenses, serving as the bridge between business requirements and technical implementation.',
      'Pioneered early GenAI initiatives, including building "GIA" (internal chatbot) and AI-assisted workflows for Jira.',
      'Combined platform ownership with delivery management, ensuring data security and high availability for global operations.',
    ],
  },
  {
    role: 'Project Manager',
    company: 'Amstar DMC',
    location: '',
    dates: '2016 - 2018',
    bullets: [
      'Managed complex web/API integration projects with budgets up to $700k.',
    ],
  },
  {
    role: 'QA/PMP',
    company: 'HCL Technologies',
    location: '',
    dates: '2013 - 2016',
    bullets: [
      'Led offshore QA teams and enforced Agile/SCRUM methodologies.',
    ],
  },
];

const education = [
  {
    degree: 'Ingenieria en Sistemas',
    school: 'Universidad Marista de MAcrida',
    years: '2004 - 2007',
  },
  {
    degree: 'Certifications',
    school: 'Salesforce Certified AI Associate, Salesforce Certified Administrator (SCA)',
    years: '',
  },
];

export default function Home() {
  const captureRef = useRef(null);

  const handleDownload = useCallback(async () => {
    if (!captureRef.current) return;
    const node = captureRef.current;
    const canvas = await html2canvas(node, {
      scale: 1,
      useCORS: true,
      backgroundColor: '#ffffff',
      windowWidth: node.scrollWidth,
      windowHeight: node.scrollHeight,
    });
    const imgData = canvas.toDataURL('image/jpeg', 0.7);
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
    const imgWidth = canvas.width * ratio;
    const imgHeight = canvas.height * ratio;
    const x = (pageWidth - imgWidth) / 2;
    const y = (pageHeight - imgHeight) / 2;
    pdf.addImage(imgData, 'JPEG', x, y, imgWidth, imgHeight, undefined, 'MEDIUM');
    pdf.save('Alejandro_De_La_Mora.pdf');
  }, []);

  return (
    <div className="page-shell">
      <WebGLEffect />
      <div className="download-bar">
        <button className="download-btn" onClick={handleDownload}>
          Download PDF
        </button>
      </div>
      <main ref={captureRef} className="resume">
        <header className="hero">
          <div className="hero-text">
            <p className="role">AI Solutions Architect</p>
            <h1>Alejandro De La Mora</h1>
            <p className="blurb">
              Architecting secure, scalable GenAI systems with a playful twist on precision and speed.
            </p>
          </div>
          <div className="contact-card">
            <h2>Contact</h2>
            <ul>
              <li>
                <span>Phone</span>
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </li>
              <li>
                <span>Email</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <span>LinkedIn</span>
                <a href={contact.linkedin} target="_blank" rel="noreferrer">
                  {contact.linkedin}
                </a>
              </li>
              <li>
                <span>Website</span>
                <a href={contact.website} target="_blank" rel="noreferrer">
                  {contact.website}
                </a>
              </li>
              <li>
                <span>GitHub</span>
                <a href={contact.github} target="_blank" rel="noreferrer">
                  {contact.github}
                </a>
              </li>
            </ul>
          </div>
        </header>

        <section className="panel summary">
          <div className="label">Professional Summary</div>
          <p>{summaryText}</p>
        </section>

        <section className="panel expertise">
          <div className="label">Areas of Expertise</div>
          <div className="tags">
            {expertise.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="panel experience">
          <div className="label">Work Experience</div>
          <div className="timeline">
            {experiences.map((job) => (
              <article key={`${job.company}-${job.role}`} className="job">
                <div className="job-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="job-meta">
                      {job.company}
                      {job.location ? ` | ${job.location}` : ''}
                    </p>
                  </div>
                  <span className="dates">{job.dates}</span>
                </div>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="panel education">
          <div className="label">Education & Certifications</div>
          <div className="education-grid">
            {education.map((item) => (
              <div key={item.degree} className="edu-item">
                <h4>{item.degree}</h4>
                <p>{item.school}</p>
                {item.years && <span className="years">{item.years}</span>}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
