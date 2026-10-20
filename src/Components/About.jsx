/**
 * About component
 */
import React from "react";
import image from "../images/teslim.jpg";

const imageAltText = "Teslim Salu";

const description =
  "I build and operate reliable cloud infrastructure, Kubernetes platforms, delivery pipelines, and observability systems. My work focuses on turning operational problems into repeatable automation using AWS, Terraform, Kubernetes, Helm, ArgoCD, and GitOps.";

const skillsList = [
  "AWS",
  "Linux & Networking",
  "Terraform & Infrastructure as Code",
  "Docker & Kubernetes",
  "Helm & ArgoCD",
  "CI/CD & GitHub Actions",
  "Observability & Incident Response",
  "PostgreSQL & Managed Databases",
  "IAM & Secrets Management",
  "Scripting & Automation",
];

const detailOrQuote =
  "I also write practical guides about Kubernetes, monitoring, secrets management, and production reliability, and I enjoy contributing to useful open-source work.";

const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Me</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
