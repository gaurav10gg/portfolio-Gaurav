import { ArrowRight, ArrowUpRight } from '@/components/site/icons';
import { profile, projects } from '@/data/profile';

const statusOf = (project: (typeof projects)[number]) => {
  if (project.live) return { label: 'Live', tone: 'green' };
  if (project.metric) return { label: 'Featured', tone: 'red' };
  return { label: 'Shipped', tone: 'ink' };
};

const Work = () => (
  <section className="section section--ruled" id="work">
    <div className="container">
      <div className="sectionHead">
        <h2 className="sectionHead__title">On the workbench</h2>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="tlink">
          All on GitHub
          <ArrowRight size={11} />
        </a>
      </div>

      <div className="grid grid--3">
        {projects.map((project, i) => {
          const status = statusOf(project);
          const visibleTech = project.stack.slice(0, 3);
          const rest = project.stack.length - visibleTech.length;

          return (
            <article
              className={`card projectCard reveal${i < 2 ? ' card--accent' : ''}`}
              key={project.slug}
            >
              <div className="card__head">
                <span className="mono projectCard__stack">{project.kind}</span>
                <span className={`tag tag--${status.tone}`}>{status.label}</span>
              </div>

              <h3 className="card__title">{project.title}</h3>
              <p className="card__desc">{project.blurb}</p>

              {project.metric && (
                <div className="projectCard__metric">
                  <span className="projectCard__metricValue">{project.metric.value}</span>
                  <span className="mono projectCard__metricLabel">{project.metric.label}</span>
                </div>
              )}

              <ul className="projectCard__tech">
                {visibleTech.map((tech) => (
                  <li className="mono projectCard__techItem" key={tech}>
                    {tech}
                  </li>
                ))}
                {rest > 0 && (
                  <li className="mono projectCard__techItem">+{rest}</li>
                )}
              </ul>

              <div className="card__foot">
                <span className="mono projectCard__kind">{project.year}</span>
                <span className="projectCard__actions">
                  {project.live && (
                    <a
                      className="mono projectCard__ext"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                      <ArrowUpRight size={10} />
                    </a>
                  )}
                  <a
                    className="mono projectCard__ext"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repo
                    <ArrowUpRight size={10} />
                  </a>
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Work;
