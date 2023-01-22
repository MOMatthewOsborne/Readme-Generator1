// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# ${answers.title}

# Description
 ${answers.description}

# Usage
 ${answers.usage}

# Installation
 ${answers.installation}

# License
${answers.license}

# Contribution
${answers.contribution}

# Tests 
${answers.test}

# Questions 
${answers.questions}
`;
}

module.exports = generateMarkdown;
