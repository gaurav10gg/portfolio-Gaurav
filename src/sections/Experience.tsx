import { ArrowUpRight } from '@/components/site/icons';
import { experience } from '@/data/profile';

const Experience = () => (
  <section className="section section--ruled" id="experience">
    <div className="container">
      <div className="sectionHead">
        <h2 className="sectionHead__title">Experience</h2>
        <span className="mono sectionHead__note">Two internships, then I started building my own</span>
      </div>

      <ol className="exp">
        {experience.map((role) => (
          <li className="exp__row reveal" key={role.company}>
            <div>
              <p className="mono exp__when">{role.period}</p>
              <p className="mono exp__mode">
                {role.mode}
                {role.current ? ' · current' : ''}
              </p>
            </div>
            <div>
              <h3 className="exp__company">
                {role.company}
                {role.org && <span className="mono exp__org">{role.org}</span>}
              </h3>
              <p className="mono exp__role">{role.title}</p>

              <div className="exp__links">
                {role.live && (
                  <a
                    className="tlink"
                    href={role.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Hatch
                    <ArrowUpRight size={11} />
                  </a>
                )}
                {role.credentialUrl && (
                  <a
                    className="tlink"
                    href={role.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View internship certificate
                    <ArrowUpRight size={11} />
                  </a>
                )}
                {role.credential && !role.credentialUrl && (
                  <span className="mono exp__mode">{role.credential}</span>
                )}
              </div>

              <ul className="exp__bullets">
                {role.bullets.map((bullet) => (
                  <li className="exp__bullet" key={bullet}>
                    <span className="exp__dash" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
