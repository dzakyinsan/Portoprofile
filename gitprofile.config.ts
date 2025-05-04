// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'dzakyinsan',
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        // projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      bioTitle: 'Hello There',
      bio: `I'm Dzaky, a frontend engineer with four years of experience, passionate about coding and crafting seamless user experiences. I thrive on learning, innovation, and tackling new challenges.`,
      header: 'Project',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Kloola Web App (Deprecated)',
          description: `This is a Kloola web app project where I participated in creating it, created using Reactjs, Typescript, GraphQL and Antd. To try it, you can use a trial account by entering the email txt@getnada.com and Clodeo123!`,
          imageUrl: 'https://i.ibb.co/drtywq5/Screenshot-2024-03-09-145532.png',
          link: 'https://app.kloola.id/',
        },
        {
          title: 'Shipdeo Web App',
          description: `This is a Shipdeo web app project where I participated in creating it, created using Reactjs, Javascript, Serstfull API and Antd. To try it, you can use a trial account by entering the email invoiceharian@getnada.com and 12345678`,
          imageUrl: 'https://i.ibb.co/WGvWVcq/Screenshot-2024-03-10-113118.png',
          link: 'https://portal.shipdeo.com/',
        },
        {
          title: 'Pajakind Web App',
          description: `PajakInd is a tax service platform that helps individuals and businesses in Indonesia manage tax reporting, payments, consultations, e-stamps, and business legality processes online through a secure and user-friendly dashboard, created using Reactjs, Redux saga and Material UI.`,
          imageUrl: 'https://i.ibb.co.com/CN5qBDr/Screenshot-2025-05-04-at-16-43-39.png',
          link: 'https://web.pajakind.com/dashboard',
        },
        {
          title: 'Pokemon App',
          description: `A simple pokemon app create using React js, typescript, graphql, scss and antd`,
          imageUrl: 'https://i.ibb.co.com/23FHRRCV/Screenshot-2025-05-04-at-16-45-53.png',
          link: 'https://pokemon-app-itypescript.vercel.app/',
        }
      ],
    },
  },
  seo: {
    title: "dzaky's porto",
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'dzakyinsan',
    email: 'dzakyinsan20@gmail.com',
  },
  // resume: {
  //   fileUrl:
  //     'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  // },
  skills: [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Next.js',
    'Node.js',
    'Git',
    'CSS',
    'Antd',
    'Graphql',
    'Restfull API',
  ],
  experiences: [
    {
      company: 'PT Tirta Medical Center',
      position: 'Frontend Engineer',
      from: 'Jul 2024',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Clodeo Indonesia Jaya',
      position: 'Frontend Engineer',
      from: 'May 2021',
      to: 'June 2024',
      companyLink: 'https://kloola.id/',
    },
    {
      company: 'Pajakind',
      position: 'Frontend Engineer',
      from: 'October 2020',
      to: 'May 2021',
      companyLink: 'https://www.pajakind.com/',
    },
  ],
  certifications: [
    {
      name: 'Web & Mobile Development',
      body: 'Purwadhika Coding School',
      year: '2020',
    },
    {
      name: 'Javascript Fundamental',
      body: 'Hactiv8',
      year: '2020',
    },
  ],
  educations: [
    {
      institution: 'Telkom University',
      degree: 'Business Administration',
      from: '2014',
      to: '2018',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      // 'light',
      // 'dark',
      'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      'dim',
      // 'nord',
      // 'sunset',
      // 'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: true,
};

export default CONFIG;
