import { ArrowRight } from '@/components/site/icons';
import { profile } from '@/data/profile';

const Hero = () => (
  <section className="hero" id="top">
    <div className="hero__grid">
      <div className="hero__main">
        <span className="eyebrow eyebrow--red">
          Backend &amp; infrastructure · {profile.location}
        </span>

        <h1 className="hero__title">
          I build the
          <br />
          <span className="hero__mark">backend</span> other
          <br />
          software runs on.
        </h1>

        <p className="hero__lede">{profile.intro}</p>

        <div className="hero__ctas">
          <a href="#work" className="btn btn--solid">
            See the work
            <ArrowRight className="btn__arrow" />
          </a>
          <a href="#contact" className="btn">
            Get in touch
            <ArrowRight className="btn__arrow" />
          </a>
        </div>

        <p className="mono hero__meta">
          {profile.status} — NIT Puducherry, CSE
        </p>
      </div>

      <aside className="hero__panel" aria-label="Projects shipped">
        <div className="hero__panelInner">
          <span className="hero__figure">25+</span>
          <span className="mono hero__figureLabel">Projects shipped</span>
          <span className="mono hero__figureSub">Public on GitHub</span>
        </div>
        <span className="mono hero__panelFoot">
          From reactor models and flare nowcasting to platforms used by 150+ testers.
        </span>
      </aside>
    </div>
  </section>
);

export default Hero;
