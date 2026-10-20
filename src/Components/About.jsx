/**
 * About component
 */
import React from "react";
import image from "../images/teslim.jpg";

const imageAltText = "Teslim Salu";

const description =
  "Cloud & Platform Architect with 7+ years of experience designing, implementing, and optimizing scalable cloud-native systems and production platforms across AWS, Azure, Google Cloud, and DigitalOcean. I specialize in Kubernetes, infrastructure as code, CI/CD, observability, security, and high-availability systems.";

const skillsList = [
  "AWS, Azure, GCP & DigitalOcean",
  "Kubernetes: EKS, GKE & AKS",
  "Terraform, Ansible & Crossplane",
  "Docker, Helm & Kustomize",
  "ArgoCD, GitOps & CI/CD",
  "Prometheus, Grafana, Loki & ELK",
  "PostgreSQL, MySQL, MongoDB & Redis",
  "Python, Bash, Go & JavaScript",
  "IAM, Keycloak & Platform Security",
  "Reliability & High Availability",
];

const detailOrQuote =
  "I turn complex infrastructure and operational challenges into reliable, repeatable platforms. I also write practical technical guides about Kubernetes, monitoring, secrets management, and production reliability.";

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
