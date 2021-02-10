// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
## Description
${answers.description}  

## Installation:
${answers.installation}

## Contributors:
${answers.contributors}

## Email address: 
${answers.email}

## Github link: 
https://github.com/${answers.github}

![image](https://user-images.githubusercontent.com/75334749/107550520-c1770000-6b96-11eb-9e6b-4373da1a2ded.png)
`;
}

module.exports = generateMarkdown;
