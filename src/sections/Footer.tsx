import { ArrowRight, ArrowUpRight } from '@/components/site/icons';
import { profile } from '@/data/profile';

const footerLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Background', href: '#background' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Hatch', href: profile.hatch },
  { label: 'Email', href: `mailto:${profile.email}` },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer__main container">
      <div className="footer__brandRow">
        <span className="nav__mark">G</span>
        <span className="mono footer__brandText">{profile.name}</span>
      </div>

      <div className="footer__grid">
        <div>
          <h2 className="footer__statement">I build the backend other software runs on.</h2>
          <p className="footer__lede">
            Backend and infrastructure engineer at NIT Puducherry. Founder of Hatch. Open to
            internships and to work on systems that have to stay up.
          </p>
        </div>
        <div className="footer__action">
          <a href={`mailto:${profile.email}`} className="btn btn--onDark">
            Write to me
            <ArrowRight className="btn__arrow" />
          </a>
          <p className="mono footer__actionNote">{profile.status}</p>
        </div>
      </div>

      <nav className="footer__links" aria-label="Footer">
        {footerLinks.map((link) => (
          <a key={link.href} href={link.href} className="footer__link">
            {link.label}
          </a>
        ))}
      </nav>

      <div className="footer__meta">
        <ul className="footer__metaCol">
          <li className="mono footer__metaKey">{profile.name}</li>
          <li className="mono footer__metaVal">NIT Puducherry</li>
          <li className="mono footer__metaVal">{profile.role}</li>
        </ul>

        <ul className="footer__metaCol">
          <li className="mono footer__metaKey">Elsewhere</li>
          {socials.map((social) => (
            <li key={social.label}>
              <a className="mono footer__social" href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {social.label}
                <ArrowUpRight size={10} />
              </a>
            </li>
          ))}
        </ul>

        <ul className="footer__metaCol">
          <li className="mono footer__metaKey">The loop</li>
          <li className="mono footer__metaVal">Learn → build → ship</li>
          <li className="mono footer__metaVal">Measure → iterate</li>
        </ul>
      </div>
    </div>

    <div className="footer__strip">
      <div className="footer__stripInner container">
        <span className="mono">
          {profile.name} · {new Date().getFullYear()} · {profile.location}
        </span>
        <span className="mono">React · Vite · Inter Tight</span>
      </div>
    </div>
  </footer>
);

export default Footer;
