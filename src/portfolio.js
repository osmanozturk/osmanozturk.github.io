const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://osmanozturk.github.io/cleanfolio',
  title: 'OÖ',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Osman Öztürk',
  role: 'Full Stack Engineer',
  description: `As a Full Stack Web Developer, I am driven by my desire to create elegant and user-friendly web
  applications. My ability to seamlessly integrate front-end designs with powerful back-end
  functionalities sets me apart. With a focus on teamwork and effective communication, I thrive in
  collaborative environments and aim to exceed project expectations.`,
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/osmanoeztuerk',
    github: 'https://github.com/osmanozturk',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  // {
  //   name: 'Project 1',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'TypeScript',
  'MSSQL',
  'PostgreSQL',
  '.NET Core',
  'ExpressJS',
  'NestJS',
  'HTML',
  'CSS',
  'SASS',
  'Tailwind',
  'Entity Framework Core',
  'React',
  'Vue',
  'NextJS',
  'Docker & Microservices'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'osmanozturkk16@outlook.com',
}

export { header, about, projects, skills, contact }
