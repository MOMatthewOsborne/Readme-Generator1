function renderBadge(license) {
  if (license === "MIT") {
    return "[![MIT](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)"
  }
  else{
    return ""
  }
}
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderBadge(data.license)}

# Description
 ${data.description}

# Usage
 ${data.usage}

# Installation
 ${data.installation}

# License
${data.license}

# Contribution
${data.contribution}

# Tests 
${data.test}

# Questions 
${data.questions}
`;
}

module.exports = generateMarkdown;
