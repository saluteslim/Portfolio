/**
 * Portfolio component
 */
import React from "react";
import image from "../images/computer.jpg";

const imageAltText = "cloud engineering workspace";

const projectList = [
  {
    title: "Integrating AWS Secrets Manager with Kubernetes",
    description:
      "A practical guide to synchronizing secrets securely with External Secrets Operator.",
    url: "https://medium.com/hostspaceng/integrating-aws-secrets-manager-with-kubernetes-using-external-secrets-operator-9a909e32ccf8",
  },
  {
    title: "Creating Datadog Monitors and Alerts as Code",
    description:
      "How to manage Kubernetes monitoring and alerting through repeatable infrastructure code.",
    url: "https://medium.com/hostspaceng/creating-datadog-monitors-and-alert-by-code-on-kubernetes-e6c682b5aaff",
  },
  {
    title: "Deploying Cluster Autoscaler on Amazon EKS",
    description:
      "A GitOps-focused walkthrough using ArgoCD and Helm to run Cluster Autoscaler on EKS.",
    url: "https://medium.com/hostspaceng/deploying-cluster-autoscaler-on-eks-using-argocd-and-helm-5635acc3c81b",
  },
  {
    title: "Open-Source Work and Cloud Projects",
    description:
      "Explore my repositories, infrastructure experiments, and contributions on GitHub.",
    url: "https://github.com/saluteslim",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Featured Work</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "3rem",
        }}
      >
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
