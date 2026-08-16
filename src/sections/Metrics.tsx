import { metrics } from '@/data/profile';

const notes = ['Tynari + Brand Labs', 'FastAPI and Node', 'github.com/gaurav10gg', 'Hatch · hatchmcp'];

const Metrics = () => (
  <section className="stats section--ruled" aria-label="At a glance">
    <div className="container">
      <div className="stats__head">
        <span className="eyebrow eyebrow--red">At a glance</span>
        <span className="mono stats__note">Second-year CSE · NIT Puducherry</span>
      </div>

      <div className="stats__grid">
        {metrics.map((metric, i) => (
          <div className="stats__item reveal" key={metric.label}>
            <span className="stats__value">
              {metric.value}
              {metric.unit}
            </span>
            <span className="mono stats__label">{metric.label}</span>
            <span className="mono stats__sub">{notes[i]}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Metrics;
