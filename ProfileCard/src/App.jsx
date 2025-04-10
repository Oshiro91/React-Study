import { useEffect, useState } from 'react'
import './App.css'
import './index.css'

const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#2662EA"
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
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#60DAFB"
  },
  {
    skill: "UI5",
    level: "advanced",
    color: "#FF3B00"
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