import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Header, ImageHolder } from "../../components";
import projectsData from "../../data/Projects.json";
import * as Asset from "../../assets";
import styles from "./Projects.module.css";
import {
  SiNestjs, SiMysql, SiFlutter, SiBootstrap, SiReact, SiHtml5, SiCss3, SiFirebase, SiFlask, SiNumpy, SiPython, SiPytorch, SiGithub, SiGoogle, SiJupyter, SiMicrosoftexcel, SiPandas, SiGraphql, SiPowerbi, SiDjango, SiPycharm, SiChartdotjs, SiR, SiRstudio
} from "react-icons/si";

const assets = {
  "Student Management System": (
    <ImageHolder
      primarySource={Asset.StudentManagementSystem}
      secondarySource={Asset.FallbackStudentManagementSystem}
      alt="Student Management System"
      className={styles.cardImg}
    />
  ),
  "Cyclistic Bike-Share Analysis": (
    <ImageHolder
      primarySource={Asset.Cyclistic}
      secondarySource={Asset.FallbackCyclistic}
      alt="Cyclistic"
      className={styles.cardImg}
    />
  ),
  "Customer Segmentation": (
    <ImageHolder
      primarySource={Asset.CustomerSegmentation}
      secondarySource={Asset.FallbackCustomerSegmentation}
      alt="Customer Segmentation"
      className={styles.cardImg}
    />
  ),
  "Waze Customer Churn Analysis": (
    <ImageHolder
      primarySource={Asset.WazeCustomerChurnAnalysis}
      secondarySource={Asset.FallbackWazeCustomerChurnAnalysis}
      alt="Waze Customer Churn Analysis"
      className={styles.cardImg}
    />
  ),
  "Tiktok Claims Classification": (
    <ImageHolder
      primarySource={Asset.TiktokClaimsClassification}
      secondarySource={Asset.FallbackTiktokClaimsClassification}
      alt="Tiktok Claims Classification"
      className={styles.cardImg}
    />
  ),
  "Sales Analysis Dashboard": (
    <ImageHolder
      primarySource={Asset.SalesAnalysisDashboard}
      secondarySource={Asset.FallbackSalesAnalysisDashboard}
      alt="Sales Analysis Dashboard"
      className={styles.cardImg}
    />
  ),
  "AutomatiData": (
    <ImageHolder
      primarySource={Asset.AutomatiData}
      secondarySource={Asset.FallbackAutomatiData}
      alt="AutomatiData"
      className={styles.cardImg}
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
  Matplotlib: <SiGraphql className={styles.icon} style={{ color: "#E5A542" }} />,
  PowerBI: <SiPowerbi className={styles.icon} style={{ color: "#F2C811" }} />,
  Django: <SiDjango className={styles.icon} style={{ color: "#092E20" }} />,
  PyCharm: <SiPycharm className={styles.icon} style={{ color: "#21D789" }} />,
  Seaborn: <SiChartdotjs className={styles.icon} style={{ color: "#3498DB" }} />,
  R: <SiR className={styles.icon} style={{ color: "#276DC3" }} />,
  RStudio: <SiRstudio className={styles.icon} style={{ color: "#75AADB" }} />
};

const Projects = () => {
  return (
    <React.Fragment>
      <Header title="Projects" />
      <Container fluid className={`${styles.container} ${styles.containerSize}`}>
        <p className={styles.pageTagline}>
          <span className={styles.stylishCursive}>A collection </span>of my personal and professional projects where I applied my skills in Data Science, Analysis, and Development.
        </p>
        <Row className="justify-content-center">
          {projectsData.map((obj, index) => (
            <Col xs={12} md={6} lg={4} className="d-flex align-items-stretch mb-4" key={index}>
              <Card className={styles.card}>
                {assets[obj.title]}
                <Card.Body className={styles.cardBody}>
                  <Card.Title className={styles.cardTitle}>{obj.title}</Card.Title>
                  <Card.Text className={styles.techStack}>
                    {obj.techStack.map((tech, index) => (
                      <span key={index}>{icons[tech]}</span>
                    ))}
                  </Card.Text>
                  <Card.Text className={styles.cardText}>{obj.content}</Card.Text>
                  <div className={styles.buttons}>
                    {obj.blogUrl && (
                      <Button
                        className={styles.button}
                        variant="dark"
                        href={obj.blogUrl}
                        target="_blank"
                      >
                        <SiGoogle className={styles.buttonIcon} /> Blog
                      </Button>
                    )}
                    {obj.gitHubUrl && (
                      <Button
                        className={styles.button}
                        variant="dark"
                        href={obj.gitHubUrl}
                        target="_blank"
                      >
                        <SiGithub className={styles.buttonIcon} /> GitHub
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Projects;
