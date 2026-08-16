import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, Burger } from './icons';
import { profile } from '@/data/profile';
import './Navbar.css';

const links = [
  { label: 'Hatch', id: 'hatch' },
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'Stack', id: 'stack' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-18% 0px -72% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          <span className="nav__mark" aria-hidden="true">
            G
          </span>
          <span className="nav__wordmark">GAURAV G</span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__link${active === link.id ? ' nav__link--active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a href="#contact" className="btn btn--sm btn--solid nav__cta">
            HIRE ME
            <ArrowRight size={11} className="btn__arrow" />
          </a>

          <button
            type="button"
            className="nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <Burger open={open} />
          </button>
        </div>
      </div>

      <span
        className="nav__progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      {open && (
        <>
          <button
            type="button"
            className="nav__scrim"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div className="nav__drawer">
            <div className="nav__drawerLinks">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`nav__drawerLink${
                    active === link.id ? ' nav__drawerLink--active' : ''
                  }`}
                >
                  {link.label}
                  <ArrowRight size={11} />
                </a>
              ))}
            </div>

            <div className="nav__drawerFoot">
              <a
                href={profile.resume}
                download
                className="btn btn--sm"
                onClick={() => setOpen(false)}
              >
                DOWNLOAD RÉSUMÉ
                <ArrowDown size={11} />
              </a>
              <a
                href="#contact"
                className="btn btn--sm btn--solid"
                onClick={() => setOpen(false)}
              >
                HIRE ME
                <ArrowRight size={11} className="btn__arrow" />
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
