function renderBadge(license) {
  if (license === "MIT") {
    return "[![MIT](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)"
  } else if (license === "GPL") {
    return "[![GPL](https://img.shields.io/badge/License-GPL-gray)](https://opensource.org/licenses/GPL-3.0)"
  } else if (license === "Apache 2.0") {
    return "[![Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else{
    return ""
  }
}
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderBadge(data.license)}


 ${data.description}
# Table of Contents
- [Usage](#usage)
- [Installation](#installation)
- [License](#installation)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

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
