# Web-Automation-cypress

The provided project is an automation framework crafted using Cypress and incorporates best practices in JavaScript. It has been designed to address specific modules outlined in a comprehensive test plan for [AutomationExercise](https://automationexercise.com/)

# Test Plan, Design, & strategy
Test cases are currently documented on *Test Plan, Design & Strategy for AutomationExercise.com.pdf* which is located at the root of this project.


## Tech Stack

[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
[![GitHubActions](https://img.shields.io/badge/github%20actions-%23161616.svg?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/about/)
[![Cypress](https://img.shields.io/badge/-Cypress-orange)](https://www.cypress.io/)
[![Prettier](https://img.shields.io/badge/Prettier-grey)](https://prettier.io/)
[![cypress-mochawesome-reporter](https://img.shields.io/badge/cypress-mochawesome-grey)](https://www.npmjs.com/package/cypress-mochawesome-reporter)

## Installation

1. Clone the repo
```bash
git clone https://github.com/AlfredPolanco/web-automation-cypress
```

2. Install dependencies and packages required for the project
```bash
npm i
```

## Usage

- To run Cypress tests using GUI just run the following command.
```
npx cypress open
```

- To run Cypress headless tests just run the following command. Once done running, a report will be generated on `cypress/reports/html`
```
npm run test
```