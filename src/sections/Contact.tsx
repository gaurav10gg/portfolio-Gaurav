import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from '@/components/site/icons';
import { profile } from '@/data/profile';

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'GitHub', value: 'github.com/gaurav10gg', href: profile.github },
  { label: 'LinkedIn', value: 'linkedin.com/in/gaurav10g', href: profile.linkedin },
  { label: 'Phone', value: profile.phone, href: 'tel:+916374207466' },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="pitch section--ruled" id="contact">
      <div className="pitch__grid">
        <div className="pitch__main">
          <span className="eyebrow eyebrow--red">Contact</span>
          <h2 className="pitch__title">Hiring, or building something that needs a backend?</h2>
          <p className="pitch__body">
            I am open to internships and to work on interesting infrastructure. The fastest way to
            reach me is email — I answer within a day.
          </p>

          <div className="btnRow pitch__ctas">
            <a href={`mailto:${profile.email}`} className="btn btn--solid">
              Write to me
              <ArrowRight className="btn__arrow" />
            </a>
            <button type="button" className="btn" onClick={copyEmail}>
              {copied ? 'Copied' : 'Copy address'}
            </button>
          </div>

          <div className="pitch__share">
            <span className="mono pitch__shareLabel">Elsewhere</span>
            <div className="pitch__channels">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="pitch__channel"
                >
                  <span className="mono pitch__channelKey">{channel.label}</span>
                  <span className="pitch__channelVal">{channel.value}</span>
                  <ArrowUpRight size={10} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <aside className="pitch__rail" aria-label="At a glance">
          <div className="pitch__stat">
            <span className="pitch__figure">1 day</span>
            <span className="mono pitch__statLabel">Reply time</span>
            <span className="mono pitch__statSub">Usually faster</span>
          </div>
          <div className="pitch__stat">
            <span className="pitch__figure">NITPY</span>
            <span className="mono pitch__statLabel">Based in</span>
            <span className="mono pitch__statSub">{profile.location}</span>
          </div>
          <div className="pitch__stat pitch__stat--dark">
            <span className="pitch__figure">Open</span>
            <span className="mono pitch__statLabel">Internships</span>
            <span className="mono pitch__statSub">Backend and infrastructure</span>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
