import { experiences } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <ol className="home-experience-timeline" aria-label="Professional experience timeline">
      {experiences.map((experience, index) => (
        <li className={`home-experience-item home-experience-item-${index + 1}`} key={`${experience.organisation}-${experience.role}`}>
          <div className="home-experience-period">{experience.period}</div>
          <div className="home-experience-track" aria-hidden="true"><span className="home-experience-node" /></div>
          <div className="home-experience-content">
            <span className="home-experience-index">0{index + 1}</span>
            <h3>{experience.role}</h3>
            <div className="home-experience-organisation">{experience.organisation}</div>
            <p>{experience.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
