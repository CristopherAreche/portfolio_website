import reactjs from "../utils/logos/react.svg";
import js from "../utils/logos/javascript.svg";
import html from "../utils/logos/html-5.svg";
import css from "../utils/logos/css-3.svg";
import redux from "../utils/logos/redux.svg";
import node from "../utils/logos/nodejs-icon.svg";
import express from "../utils/logos/express.svg";
import sequelize from "../utils/logos/sequelize.svg";
import postgre from "../utils/logos/postgresql.svg";
import postman from "../utils/logos/postman.svg";
import tailwind from "../utils/logos/tailwindcss-icon.svg";
import bootstrap from "../utils/logos/bootstrap.svg";
import git from "../utils/logos/git-icon.svg";
import github from "../utils/logos/github-icon.svg";
import trello from "../utils/logos/trello.svg";
import vscode from "../utils/logos/visual-studio-code.svg";
import pokemon from "../images/pokemon_wp.jpeg";
import randm from "../images/rickmorty_wp.jpeg";
import crm from "../images/crm.jpeg";
import cooperativa from "../images/cooperativa.jpeg";
import businessBox from "../images/businessBox.jpeg";
import dental from "../images/dental.jpeg";

export const devtools = [
  [
    "Front-end",
    {
      image: html,
      title: "HTML",
    },
    {
      image: css,
      title: "CSS",
    },
    {
      image: js,
      title: "JavaScript",
    },
    {
      image: reactjs,
      title: "React Js",
    },
    {
      image: redux,
      title: "Redux-Toolkit",
    },
    {
      image: bootstrap,
      title: "Bootstrap",
    },
    {
      image: tailwind,
      title: "Tailwind",
    },
  ],
  [
    "Back-end",
    { image: node, title: "Node.js" },
    { image: express, title: "Express" },
    { image: sequelize, title: "Sequelize" },
    { image: postgre, title: "PostgreSQL" },
    { image: postman, title: "Postman" },
  ],
  [
    "Collaboration Tools",
    { image: vscode, title: "VS Code" },
    { image: github, title: "Github" },
    { image: git, title: "Git" },
    { image: trello, title: "Trello" },
  ],
];
export const projects = [
  {
    image: pokemon,
    name: "Pokemon",
    description:
      "An online platform dedicated to providing information and resources about the world of Pokémon, including details about the different types and the option to create your own Pokémon.",
    stack: [reactjs, js, css, html, postgre, sequelize, node, express],
    source_code: "https://github.com/CristopherAreche/pokemon-website",
    deploy: "https://pokemon-lemon-two.vercel.app/",
  },
  {
    image: randm,
    name: "Rick & Morty",
    description:
      "This website allows users to search and learn more information about the characters of the animated series Rick & Morty online easily and safely.",
    stack: [reactjs, js, css, html, bootstrap],
    source_code: "https://github.com/CristopherAreche/rick_and_morty_website",
    deploy: "https://cristopherareche.github.io/rick_and_morty_website/",
  },
  {
    image: crm,
    name: "CRM",
    description:
      "A work tool designed so that companies can have a better organization and performance with their products, employees and customers.",
    stack: [
      reactjs,
      js,
      css,
      html,
      tailwind,
      postgre,
      sequelize,
      node,
      express,
    ],
    source_code: "https://github.com/CristopherAreche/crm-front",
    deploy: "https://crm-henry-34b.vercel.app/",
  },
  {
    image: cooperativa,
    name: "Cooperative",
    description:
      "A freelance project website build for a small business in the Dominican Republic.",
    stack: [reactjs, js, css, html],
    source_code: "https://github.com/CristopherAreche/cooperative_landing_page",
    deploy: "https://cristopherareche.github.io/cooperative_landing_page/",
  },
  {
    image: businessBox,
    name: "Business Box",
    description:
      "An adaptive personal project build for a small business focused on the food industry.",
    stack: [reactjs, js, css, html, bootstrap, node],
    source_code: false,
    deploy: "https://business-box-git-main-jdaniel96.vercel.app/",
  },
  {
    image: dental,
    name: "Dental Center",
    description:
      "Project developed during my internship at Makisan Tech focused on the Health care sector.",
    stack: [reactjs, js, css, html, bootstrap, node],
    source_code: false,
    deploy: "https://odontologia-front.vercel.app/",
  },
];
