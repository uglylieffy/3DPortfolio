import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    mysql,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    r,
    seaborn,
    cpp,
    python,
    panda,
    scikitlearn,
    matplotlib,
    matlab,
    powerplannar,
    khsc,
    qu,
    ccic,
    vaxxsystem,
    smokingpredict,
    mri,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data Engineer",
      icon: mobile,
    },
    {
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "Clinical Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },     
    {
      name: "cpp",
      icon: cpp,
    },
     {
      name: "Python",
      icon: python,
    },
        {
      name: "R",
      icon: r,
    },
     {
      name: "panda",
      icon: panda,
    },
       {
      name: "Scikitlearn",
      icon: scikitlearn,
    },
     {
      name: "MatplotLib",
      icon: matplotlib,
    },
     {
      name: "Matlab",
      icon: matlab,
    },

  ];
  
  const experiences = [
    {
      title: "Data Engineer",
      company_name: "BareBone Dev.",
      icon: powerplannar,
      iconBg: "#383E56",
      date: "May 2023 - Present",
      points: [
        `Reduced 20% user churn by display high-traffic metrics on the first level page`,
        `Contributed to the development of backend systems, syncing 
        between local client and server using Entity Framework and SQL Server.`,
        `Assisted in documentation efforts on meetings, creating technical 
        documentation and meeting guides to aid end-users and colleagues 
        in understanding software functionality and providing updates.`,
      ],
    },
    {
      title: "Data Specialist",
      company_name: "Kingston Health & Science Center",
      icon: khsc,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - April 2023",
      points: [
        `Developed a scalable web-based reporting dashboard using JavaScript, CSS, ReactJS
         and ChartJS for the Pathology Department at Kingston General Hospital.`,
        `Utilized Python for data processing, transformation, quality check and 
        analysis of 2K+ medical data to streamline workflows.`,
        `Implemented a distributed web architecture, built relational databases with MySQL 
        with encryption techniques, deployed website to AWS Amplify Hosting, 
        achieved a remarkable 90% reduction in daily reporting time.`,
        `Collaborated with data scientiststo create an effective data schema, saving two weeks
         of project time.`,
        `Leveraged Power BI to develop 10+ interactive reports, 
        enabling agile decision-making.`,
      ],
    },
    {
      title: "Research Assistant",
      company_name: "Queen's University, Microbiology Department",
      icon: qu,
      iconBg: "#383E56",
      date: "Jan 2023 - May 2023",
      points: [
        `Conducted genomic research on the order Rhizobiales, visualizing data results
         using R (Ggplot2) for 20+ charts and defining metrics for family classification.`,
        `Utilized R and Linux commands BioInformatic tools for genomic similarity 
        analysis and phylogenetic tree generation.`,
        `Collaborated with graduate students and faculty members, aiding in the publication
         of research findings.`,
      ],
    },
    {
      title: "Database System R&D Intern",
      company_name: "CCIC Laboratory Services",
      icon: ccic,
      iconBg: "#E6DEDD",
      date: "May 2022 - Jan 2023",
      points: [
        `Managed SQL database setup, schema design, and query optimization as part of a 
         Laboratory Information Management System (LIMS), while collaborated with 
         cross-functional teams to design and develop a dynamic laboratory insights 
         dashboard using JavaScript and HTML/CSS.`,
        `Designed and implemented A/B testing to optimize interface interactions, 
          increased 45% navigation efficiency; reduced 20% user churn by 
          display high-traffic metrics on the first level page.`,
        `Built 5+ natural language data pipelines based on 200+ handwritten
         laboratory reports; improved data extraction for the building of 
         electronic laboratory notebook (ELN) efficiency by 47%. `,
        `Conducted code reviews and participated in knowledge-sharing
         sessions using Jira and Confluence, fostering a culture of collaboration
          and continuous improvement.`,
        `Complete data cleaning and headroom analysis on Python (NumPy & Pandas) t
         argeting on laboratory reports.`,
      ],
    },
  ];
  
  const projects = [
    {
      name: "Covid-19 Vaccination Management System",
      description:
        `Desktop application designed to facilitate the planning, 
        tracking, distribution, and management of COVID-19 
        vaccinations on a large scale. This system plays 
        a crucial role in coordinating the vaccination 
        efforts during a global pandemic, such as the COVID-19 crisis.`,
      tags: [
        {
          name: "Qt",
          color: "blue-text-gradient",
        },
        {
          name: "mySQL",
          color: "green-text-gradient",
        },
        {
          name: "C++",
          color: "pink-text-gradient",
        },
      ],
      image: vaxxsystem,
      source_code_link: "https://github.com/uglylieffy/InfoManagementSystem.git",
    },
    {
      name: "Smoking Status Analysis with Bodily Data",
      description:
        `this project is to classify people into three categories 
        (never smoked, did smoke but quit, still a smoker) based 
        on body composition data`,
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "green-text-gradient",
        },
        {
          name: "MS Excel & Seaborn",
          color: "pink-text-gradient",
        },
      ],
      image: smokingpredict,
      source_code_link: `https://docs.google.com/presentation/d/e/2PACX-1vT6LG8QluYqd0Wh5EZ3YhfpYHyJBXBjbOdMUSuMvLZMO8Gq3WxPVgnMTCGHVt9Fv8j3JghoST9_F3zl/pub?start=false&loop=false&delayms=3000`,
    },
    {
      name: "Weakly Supervised Registration of Prostate MRI Images",
      description:
      `Because normal tissue and cancer have modest variances, radiologists'
       interpretations of prostate MRIs are not always in accord. This problem
       is solved by image registration, which precisely overlays on MRI 
       the ground-truth cancer labels. By training deep learning models for 
       early prostate cancer diagnosis, radiologists may better interpret 
       MRIs by using cancer labels obtained from image registration.`,
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Scikit-learn",
          color: "green-text-gradient",
        },
        {
          name: " Seaborn & Matplotlib ",
          color: "pink-text-gradient",
        },
      ],
      image: mri,
      source_code_link: "https://github.com/uglylieffy/ProstateCancerPrediction.git/",
    },
  ];
  
  export { services, technologies, experiences, projects };