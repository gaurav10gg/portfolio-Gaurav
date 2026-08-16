import { education } from '@/data/profile';

const facts = [
  { figure: 'NITPY', label: 'Campus', sub: 'Puducherry, India' },
  { figure: '3', label: 'Languages', sub: 'English · Tamil · Hindi' },
  { figure: 'CSE', label: 'Degree in progress', sub: 'B.Tech · second year' },
  { figure: 'Football', label: 'Off the clock', sub: 'Enjoys watching matches', dark: true },
];

const Background = () => (
  <section className="section section--ruled" id="background">
    <div className="container">
      <div className="sectionHead">
        <h2 className="sectionHead__title">Where I come from</h2>
        <span className="mono sectionHead__note">NIT Puducherry · second year</span>
      </div>

      <div className="bgnd">
        <div>
          <p className="bgnd__copy">
            I got serious about programming in my last year of school, somewhere between preparing
            for JEE and spending far too much time building things nobody had asked me to build. I
            liked the process of taking an idea that bothered me, figuring out how it could work,
            and eventually turning it into something real. That habit stayed with me.
          </p>
          <p className="bgnd__copy">
            Over time, I found myself drawn not just to writing code, but to understanding how
            things actually work underneath. I care about the parts of a system that are easy to
            overlook when everything is working: databases that hold up as they grow, jobs that
            recover when something goes wrong, APIs that stay predictable, and deployments that can
            be rolled back when they need to be.
          </p>
          <p className="bgnd__copy">
            I&apos;ve also always been interested in the other side of building — figuring out what
            is worth building in the first place. Being part of Y Combinator&apos;s Startup School
            India gave me a chance to learn from other builders and think more seriously about
            products, users, and turning technical ideas into something people actually need.
          </p>
          <p className="bgnd__copy">
            I&apos;m still figuring a lot of this out, but that&apos;s probably what I enjoy most
            about building. Most projects start with a problem that annoys me, and somewhere along
            the way, they teach me something I didn&apos;t know before.
          </p>

          <div className="edu">
            {education.map((item) => (
              <div className="edu__row reveal" key={item.school}>
                <div>
                  <p className="mono edu__when">{item.period}</p>
                  <p className="mono edu__note">{item.note}</p>
                </div>
                <div>
                  <h3 className="edu__school">{item.school}</h3>
                  <p className="edu__qual">{item.qualification}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="bgnd__rail" aria-label="Quick facts">
          {facts.map((fact) => (
            <div
              className={`bgnd__stat${fact.dark ? ' bgnd__stat--dark' : ''}`}
              key={fact.label}
            >
              <span className="bgnd__figure">{fact.figure}</span>
              <span className="mono bgnd__statLabel">{fact.label}</span>
              <span className="mono bgnd__statSub">{fact.sub}</span>
            </div>
          ))}
        </aside>
      </div>
    </div>
  </section>
);

export default Background;
