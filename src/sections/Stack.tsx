import { stack } from '@/data/profile';

const Stack = () => (
  <section className="section section--ruled" id="stack">
    <div className="container">
      <div className="sectionHead">
        <h2 className="sectionHead__title">What I reach for</h2>
        <span className="mono sectionHead__note">
          {stack.reduce((n, g) => n + g.items.length, 0)} tools · backend first
        </span>
      </div>

      {stack.map((group) => (
        <div key={group.group} style={{ marginBottom: '1.75rem' }}>
          <div className="hiw__domainsHead">
            <span className="mono hiw__blockLabel">{group.group}</span>
            <span className="mono hiw__domainsNote">{group.items.length}</span>
          </div>
          <ul className="hiw__domainGrid">
            {group.items.map((item) => (
              <li className="hiw__domain" key={item}>
                <span className="mono hiw__domainName">{item}</span>
                <span className="mono hiw__domainTag">{group.group}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Stack;
