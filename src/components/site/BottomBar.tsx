import { ArrowRight, Close } from './icons';
import { profile } from '@/data/profile';

const BottomBar = ({ onDismiss }: { onDismiss: () => void }) => (
  <aside className="bar" role="region" aria-label="Availability">
    <div className="bar__inner">
      <span className="nav__mark" style={{ width: 22, height: 22, fontSize: '0.7rem' }}>
        G
      </span>
      <p className="mono bar__text">
        Building Hatch.
        <span className="bar__textLong"> Open to internships — backend and infrastructure.</span>
      </p>
      <a href={`mailto:${profile.email}`} className="bar__cta">
        Write to me
        <ArrowRight size={12} className="btn__arrow" />
      </a>
      <button type="button" className="bar__close" onClick={onDismiss} aria-label="Dismiss">
        <Close />
      </button>
    </div>
  </aside>
);

export default BottomBar;
