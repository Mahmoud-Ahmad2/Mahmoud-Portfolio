import {
  frontend,
  backend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  graphql,
  aws,
  nestjs,
  nextjs,
  mysql,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Engineer',
    icon: frontend,
  },
  {
    title: 'Backend Engineer',
    icon: backend,
  },
  {
    title: 'Cloud Computing',
    icon: "https://github.com/user-attachments/assets/42dbab04-6885-428c-8c41-01333bb905c2",
  },
  {
    title: 'Database Management',
    icon: 'https://github.com/user-attachments/assets/37506eda-4c67-4d30-ad98-4fa52b416cd2',
  },
];

const technologies = [
  // Backend, Database, and Hosting
  {
    name: 'Node JS',
    icon: nodejs,
    url: 'https://nodejs.org/',
  },
  {
    name: 'NestJS',
    icon: nestjs,
    url: 'https://nestjs.com/',
  },
  {
    name: 'GraphQL',
    icon: graphql,
    url: 'https://graphql.org/',
  },
  {
    name: 'MySQL',
    icon: mysql,
    url: 'https://www.mysql.com/',
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
    url: 'https://www.postgresql.org/',
  },
  {
    name: 'Docker',
    icon: docker,
    url: 'https://www.docker.com/',
  },
  {
    name: 'AWS',
    icon: aws,
    url: 'https://aws.amazon.com/',
  },
  
  // Frontend
  {
    name: 'HTML 5',
    icon: html,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS 3',
    icon: css,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'JavaScript',
    icon: javascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'TypeScript',
    icon: typescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'React JS',
    icon: reactjs,
    url: 'https://reactjs.org/',
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
    url: 'https://redux-toolkit.js.org/',
  },
  {
    name: 'Next.js',
    icon: nextjs,
    url: 'https://nextjs.org/',
  },
  
  // Tools
  {
    name: 'Git',
    icon: git,
    url: 'https://git-scm.com/',
  },
  {
    name: 'Figma',
    icon: figma,
    url: 'https://www.figma.com/',
  }
];


const experiences = [
  {
    title: 'Backend Developer',
    company_name: 'Bitlab',
    icon: "https://media.licdn.com/dms/image/v2/C560BAQHIoneLkWITaw/company-logo_200_200/company-logo_200_200/0/1660044861251/bitlab_co_logo?e=1738800000&v=beta&t=zJYEbaDMVHrtFO8odpXREOSDIM-Mn5ZzYiJMuDdd5X8", // replace with the actual icon variable or path
    iconBg: '#333333',
    date: 'June 2022 - April 2024',
  },
  {
    title: 'Backend Engineer',
    company_name: 'Boka',
    icon: "https://media.licdn.com/dms/image/v2/D4D0BAQEX7tzaQNlCHA/company-logo_200_200/company-logo_200_200/0/1727388880052/booka_inc_logo?e=1738800000&v=beta&t=Y3rKfIsYKd5Wvek2ig1HZNajc-fhXFD_GhgUY09yg5w", // replace with the actual icon variable or path
    iconBg: '#333333',
    date: 'June 2022 - April 2024',
  },
  {
    title: 'Backend Engineer',
    company_name: 'LaunchTrip',
    icon: "https://media.licdn.com/dms/image/v2/C4E0BAQE-jAKLHJQGHw/company-logo_200_200/company-logo_200_200/0/1630629287987/launchtrip_logo?e=1738800000&v=beta&t=Q2lvaocPmzaQmk594NLNSDE2bfKNpIyhRSseH8fk2JM", // replace with the actual icon variable or path
    iconBg: '#333333',
    date: 'October 2022 - January 2023',
  },
  {
    title: 'Backend Engineer',
    company_name: 'MonMedX',
    icon: "https://media.licdn.com/dms/image/v2/C560BAQGA5IU7Aj8j4g/company-logo_200_200/company-logo_200_200/0/1630648676825?e=1738800000&v=beta&t=VpOO4JnG3Vi_eQ62q7pT2mmbpuug6I9V9fzi0zwHswo", // replace with the actual icon variable or path
    iconBg: '#333333',
    date: 'January 2023 - June 2023',
  },
  {
    title: 'Full Stack Engineer',
    company_name: 'Tabla',
    icon: "https://torontotabla.com/wp-content/uploads/2024/07/TTE-30-LOGO-WHITE-BLACK-WIDE-01-copy.jpg", // replace with the actual icon variable or path
    iconBg: '#333333',
    date: 'Recent project',
    description: 'Developed a class management system using Firebase for real-time data handling, integrated Stripe for payment management, and built features to streamline class organization.',
  },
];


const projects = [
  {
    id: 'project-1',
    name: 'Boka',
    description: 'A multi-vendor e-store platform for beauty and wellness bookings, built with a microservices architecture to improve scalability and efficiency.',
    tags: [
      {
        name: 'nestjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'aws',
        color: 'pink-text-gradient',
      },
    ],
    image: "https://media.licdn.com/dms/image/v2/D4D0BAQEX7tzaQNlCHA/company-logo_200_200/company-logo_200_200/0/1727388880052/booka_inc_logo?e=1738800000&v=beta&t=Y3rKfIsYKd5Wvek2ig1HZNajc-fhXFD_GhgUY09yg5w", // replace with the actual image variable or path
    demo: 'https://www.justbooka.com/', // replace with actual demo URL
  },
  {
    id: 'project-2',
    name: 'MonMedX',
    description:
      'An integrated medical platform connecting healthcare providers and IoT health devices, serving over 500,000 patients with multi-tenant database architecture.',
    tags: [
      {
        name: 'aws',
        color: 'blue-text-gradient',
      },
      {
        name: 'nestjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'multi-tenant',
        color: 'green-text-gradient',
      },
      {
        name: 'serverless',
        color: 'pink-text-gradient',
      },
      {
        name: 'graphql',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient',
      },
    ],
    image: "https://media.licdn.com/dms/image/v2/C560BAQGA5IU7Aj8j4g/company-logo_200_200/company-logo_200_200/0/1630648676825?e=1738800000&v=beta&t=VpOO4JnG3Vi_eQ62q7pT2mmbpuug6I9V9fzi0zwHswo", // replace with the actual image variable or path
    demo: 'https://monmedx.com/', // replace with actual demo URL
  },
  {
    id: 'project-3',
    name: 'LaunchTrip',
    description: 'A travel tech platform designed to streamline travel bookings with optimized search performance and serverless video processing for user engagement.',
    tags: [
      {
        name: 'nestjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'aws',
        color: 'green-text-gradient',
      },
      {
        name: 'serverless',
        color: 'pink-text-gradient',
      },
    ],
    image: "https://media.licdn.com/dms/image/v2/C4E0BAQE-jAKLHJQGHw/company-logo_200_200/company-logo_200_200/0/1630629287987/launchtrip_logo?e=1738800000&v=beta&t=Q2lvaocPmzaQmk594NLNSDE2bfKNpIyhRSseH8fk2JM", // replace with the actual image variable or path
    demo: 'http://launchtrip.com/', // replace with actual demo URL
  },
  {
    id: 'project-4',
    name: 'Tabla',
    description: `A class management system to help organize classes and manage monthly payments using Stripe, developed with Firebase for real-time data handling.`,
    tags: [
      {
        name: 'firebase',
        color: 'blue-text-gradient',
      },
      {
        name: 'stripe',
        color: 'green-text-gradient',
      },
      {
        name: 'react',
        color: 'pink-text-gradient',
      },
      {
        name: 'serverless',
        color: 'pink-text-gradient',
      },
      {
        name: 'express',
        color: 'green-text-gradient',
      }
    ],
    image: "https://torontotabla.com/wp-content/uploads/2024/07/TTE-30-LOGO-WHITE-BLACK-WIDE-01-copy.jpg", // replace with the actual image variable or path
  },
];


export { services, technologies, experiences, projects };
