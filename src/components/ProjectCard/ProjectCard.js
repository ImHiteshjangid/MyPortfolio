import React from "react";
import { Card, Button } from "react-bootstrap";
import { ImageHolder } from "..";
import * as Asset from "../../assets";
import {
  SiNestjs,
  SiMysql,
  SiFlutter,
  SiBootstrap,
  SiReact,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiFlask,
  SiNumpy,
  SiPython,
  SiPytorch,
  SiGithub,
  SiGoogle,
  SiJupyter,
  SiMicrosoftexcel,
  SiPandas,
  SiGraphql,   // Placeholder for Matplotlib
  SiPowerbi,
  SiDjango,
  SiPycharm,
  SiChartdotjs // Placeholder for Seaborn
} from "react-icons/si";
import styles from "./ProjectCard.module.css";

const assets = {
  "Student Management System": (
    <ImageHolder
      primarySource={Asset.StudentManagementSystem}
      secondarySource={Asset.FallbackStudentManagementSystem}
      alt="Student Management System"
      className="card-img"
    />
  ),
  "Customer Segmentation": (
    <ImageHolder
      primarySource={Asset.CustomerSegmentation}
      secondarySource={Asset.FallbackCustomerSegmentation}
      alt="Customer Segmentation"
      className="card-img"
    />
  ),
  "Waze Customer Churn Analysis": (
    <ImageHolder
      primarySource={Asset.WazeCustomerChurnAnalysis}
      secondarySource={Asset.FallbackWazeCustomerChurnAnalysis}
      alt="Waze Customer Churn Analysis"
      className="card-img"
    />
  ),
  "Tiktok Claims Classification": (
    <ImageHolder
      primarySource={Asset.TiktokClaimsClassification}
      secondarySource={Asset.FallbackTiktokClaimsClassification}
      alt="Tiktok Claims Classification"
      className="card-img"
    />
  ),
  "Sales Analysis Dashboard": (
    <ImageHolder
      primarySource={Asset.SalesAnalysisDashboard}
      secondarySource={Asset.FallbackSalesAnalysisDashboard}
      alt="Sales Analysis Dashboard"
      className="card-img"
    />
  ),
  "AutomatiData": (
    <ImageHolder
      primarySource={Asset.AutomatiData}
      secondarySource={Asset.FallbackAutomatiData}
      alt="AutomatiData"
      className="card-img"
    />
  ),
};

const icons = {
  Bootstrap: <SiBootstrap className={styles.icon} style={{ color: "#7952B3" }} />,
  CSS: <SiCss3 className={styles.icon} style={{ color: "#1572B6" }} />,
  Firebase: <SiFirebase className={styles.icon} style={{ color: "#FFCA28" }} />,
  Flask: <SiFlask className={styles.icon} style={{ color: "#000000" }} />,
  Flutter: <SiFlutter className={styles.icon} style={{ color: "#02569B" }} />,
  HTML: <SiHtml5 className={styles.icon} style={{ color: "#E34F26" }} />,
  MySQL: <SiMysql className={styles.icon} style={{ color: "#4479A1" }} />,
  NestJS: <SiNestjs className={styles.icon} style={{ color: "#E0234E" }} />,
  NumPy: <SiNumpy className={styles.icon} style={{ color: "#E10098" }} />,
  Python: <SiPython className={styles.icon} style={{ color: "#F2C811" }} />,
  PyTorch: <SiPytorch className={styles.icon} style={{ color: "#EE4C2C" }} />,
  React: <SiReact className={styles.icon} style={{ color: "#61DAFB" }} />,
  Jupyter: <SiJupyter className={styles.icon} style={{ color: "#F37626" }} />,
  Excel: <SiMicrosoftexcel className={styles.icon} style={{ color: "#217346" }} />,
  Pandas: <SiPandas className={styles.icon} style={{ color: "#7952B3" }} />,
  Matplotlib: <SiGraphql className={styles.icon} style={{ color: "#E10098" }} />,  // Placeholder
  PowerBI: <SiPowerbi className={styles.icon} style={{ color: "#F2C811" }} />,
  Django: <SiDjango className={styles.icon} style={{ color: "#F37626" }} />,
  PyCharm: <SiPycharm className={styles.icon} style={{ color: "#21D789" }} />,
  Seaborn: <SiChartdotjs className={styles.icon} style={{ color: "#FF6384" }} />,  // Placeholder
};

const ProjectCard = (props) => {
  return (
    <Card className={styles.card}>
      {assets[props.title]}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className={styles.techStack}>
          {props.techStack.map((tech, index) => (
            <span key={index}>{icons[tech]}</span>
          ))}
        </Card.Text>
        <Card.Text>{props.content}</Card.Text>
        <div className={styles.buttons}>
          {props.blogUrl && (
            <Button
              className={styles.button}
              variant="dark"
              href={props.blogUrl}
              target="_blank"
            >
              <SiGoogle className={styles.buttonIcon} /> Blog
            </Button>
          )}
          {props.gitHubUrl && (
            <Button
              className={styles.button}
              variant="dark"
              href={props.gitHubUrl}
              target="_blank"
            >
              <SiGithub className={styles.buttonIcon} /> GitHub
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
