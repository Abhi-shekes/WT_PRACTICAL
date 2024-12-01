import React from "react";
import "./FacultyInfo.css";

const facultyMembers = [
  {
    name: "Prof. Dr. Dhananjay Kalbande",
    title: "Head Of Department",
    link: "https://linkedin.com/in/dhananjaykalbande",
    photo: "https://via.placeholder.com/50",
  },
  {
    name: "Prof. Dr. Pooja Raundale",
    title: "Professor",
    link: "https://linkedin.com/in/poojaraundale",
    photo: "https://via.placeholder.com/50",
  },
  {
    name: "Prof. Dr. Aarti Karande",
    title: "Assistant Professor",
    link: "https://linkedin.com/in/aartikarande",
    photo: "https://via.placeholder.com/50",
  },
  {
    name: "Prof. Harshil Kanakia",
    title: "Assistant Professor",
    link: "https://linkedin.com/in/harshilkanakia",
    photo: "https://via.placeholder.com/50",
  },
  {
    name: "Prof. Nikhita Mangaonkar",
    title: "Assistant Professor",
    link: "https://linkedin.com/in/nikhitamangaonkar",
    photo: "https://via.placeholder.com/50",
  },
  {
    name: "Prof. Sakina Shaikh",
    title: "Assistant Professor",
    link: "https://linkedin.com/in/sakinashaikh",
    photo: "https://via.placeholder.com/50",
  },
  {
    name: "Prof. Pallavi Thakur",
    title: "Assistant Professor",
    link: "https://linkedin.com/in/pallavithakur",
    photo: "https://via.placeholder.com/50",
  },
];

function FacultyInfo() {
  return (
    <section className="faculty-info">
      <h2>Faculty Information</h2>
      <ul>
        {facultyMembers.map((faculty, index) => (
          <li key={index} className="faculty-member">
            <div className="faculty-member-content">
              <img src={faculty.photo} alt={faculty.name} />
              <div className="faculty-member-details">
                <h3>{faculty.name}</h3>
                <p>{faculty.title}</p>
              </div>
            </div>
            <a href={faculty.link} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FacultyInfo;
