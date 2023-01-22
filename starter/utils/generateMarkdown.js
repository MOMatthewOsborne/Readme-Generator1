// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# 

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
