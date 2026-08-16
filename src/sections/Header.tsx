import { useEffect, useState } from 'react';
import { ArrowRight, Burger } from '@/components/site/icons';
import { profile } from '@/data/profile';

const navLinks = [
  { name: 'Work', id: 'work' },
  { name: 'Experience', id: 'experience' },
  { name: 'Stack', id: 'stack' },
  { name: 'Contact', id: 'contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav">
      <div className="nav__inner container">
        <a href="#top" className="nav__brand" aria-label={`${profile.name} — home`}>
          <span className="nav__mark">G</span>
          <span className="nav__wordmark">{profile.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__link${active === link.id ? ' nav__link--active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a href={profile.resume} download className="btn btn--sm nav__cta">
            Résumé
          </a>
          <button
            type="button"
            className="nav__burger"
            aria-expanded={open}
            aria-controls="nav-drawer"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <Burger open={open} />
          </button>
        </div>
      </div>

      {open && (
        <>
          <div id="nav-drawer" className="nav__drawer">
            <nav className="nav__drawerLinks" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`nav__drawerLink${active === link.id ? ' nav__drawerLink--active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  <span>{link.name}</span>
                  <ArrowRight />
                </a>
              ))}
            </nav>
            <div className="nav__drawerFoot">
              <a href={profile.resume} download className="btn btn--solid btn--block">
                Download résumé
                <ArrowRight className="btn__arrow" />
              </a>
              <p className="mono nav__drawerNote">
                {profile.role} · {profile.location}
              </p>
            </div>
          </div>
          <button type="button" className="nav__scrim" aria-label="Close menu" onClick={() => setOpen(false)} />
        </>
      )}
    </header>
  );
};

export default Header;
