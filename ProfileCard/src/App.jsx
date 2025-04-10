import { useEffect, useState } from 'react'
import './App.css'
import './index.css'

const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#ea2626"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "#C3DCAF"
  },
  {
    skill: "SAP MII",
    level: "intermediate",
    color: "#0400f0"
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#89fb60"
  },
  {
    skill: "UI5",
    level: "advanced",
    color: "#00bfff"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./images/foto.jpg" alt="Fernando Oshiro" />;
}

function Intro() {
  return (
    <div>
      <h1>Fernando Oshiro</h1>
      <p>Front end developer, currently working at AFRY, just finished one project in one of the biggest beverages companies worldwide.</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

export default App