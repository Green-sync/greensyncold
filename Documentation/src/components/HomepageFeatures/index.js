import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Agri IoT Tools",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Access to IoT devices/tools for easy management of farms and yield
        predictions
      </>
    ),
  },
  {
    title: "Farm Data Sync",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Sync All your farm data to the cloud which will help in making informed
        decisions on the operations of the farm
      </>
    ),
  },
  {
    title: "Easy to use",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        GreenSync is easy to use and has asimple design that suits every farmer
        or stakeholder
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
