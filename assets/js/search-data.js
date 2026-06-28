// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-courses",
          title: "courses",
          description: "relevant coursework",
          section: "Navigation",
          handler: () => {
            window.location.href = "/courses/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "my teaching experiences",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-awards",
          title: "awards",
          description: "my academic achievements",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-angular-introduction",
        
          title: "Angular - Introduction",
        
        description: "an introduction to some basic functionalities in angular",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/angular-introduction/";
          
        },
      },{id: "post-reinforcement-learning-basics",
        
          title: "Reinforcement Learning Basics",
        
        description: "exploring some key concepts in rl",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/reinforcement-learning-basics/";
          
        },
      },{id: "post-bandits-in-reinforcement-learning",
        
          title: "Bandits in Reinforcement Learning",
        
        description: "exploring some bandit algorithms",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/bandits-in-rl/";
          
        },
      },{id: "post-network-science",
        
          title: "Network Science",
        
        description: "exploring the world of networks",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/network-science/";
          
        },
      },{id: "post-information-theory-amp-encoding",
        
          title: "Information Theory &amp; Encoding",
        
        description: "diving into the limits of data compression",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/information-theory-encoding/";
          
        },
      },{id: "post-theory-of-computation",
        
          title: "Theory of Computation",
        
        description: "fun facts about computation",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/theory-of-computation/";
          
        },
      },{id: "post-bloom-filters",
        
          title: "Bloom Filters",
        
        description: "exploring one of my favorite data structures",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/bloom-filters/";
          
        },
      },{id: "post-finite-difference-vs-backpropagation",
        
          title: "Finite Difference vs Backpropagation",
        
        description: "comparison between two gradient computation techniques in machine learning",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/finite-diff-vs-back-prop/";
          
        },
      },{id: "post-code-to-give-2025",
        
          title: "Code to Give 2025",
        
        description: "attending the hackathon organized by Morgan Stanley",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/code-to-give-2025/";
          
        },
      },{id: "post-max-flow-vs-max-flow-value",
        
          title: "Max Flow vs Max Flow Value",
        
        description: "clarifying two concepts often misunderstood",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/max-flow-vs-max-flow-value/";
          
        },
      },{id: "post-hack-the-north-2025",
        
          title: "Hack the North 2025",
        
        description: "attending Canada&#39;s biggest hackathon",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/hack-the-north-2025/";
          
        },
      },{id: "post-ford-fulkerson-and-edmonds-karp",
        
          title: "Ford-Fulkerson and Edmonds-Karp",
        
        description: "some of the fascinating things about max. flow computation",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ford-fulkerson-and-edmonds-karp/";
          
        },
      },{id: "post-the-science-of-interstellar",
        
          title: "The Science of Interstellar",
        
        description: "my favorite parts from this awesome book",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/the-science-of-interstellar/";
          
        },
      },{id: "post-rag-vs-cag",
        
          title: "RAG vs CAG",
        
        description: "comparison between 2 augmented generation techniques",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/rag-vs-cag/";
          
        },
      },{id: "post-exploring-rag-and-its-components",
        
          title: "Exploring RAG and its components",
        
        description: "intro to RAG technology",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/rag-and-its-components/";
          
        },
      },{id: "post-sustainable-machine-learning",
        
          title: "Sustainable Machine Learning",
        
        description: "intro to energy consumption of ML models",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/sustainable-ml/";
          
        },
      },{id: "post-steps-for-customization",
        
          title: "Steps for customization",
        
        description: "setting up your website",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/text/";
          
        },
      },{id: "books-a-french-woven-mystery",
          title: 'A French Woven Mystery',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/a_french_woven_mystery/";
            },},{id: "books-the-adventures-of-sherlock-holmes",
          title: 'The Adventures Of sherlock Holmes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/sherlock/";
            },},{id: "news-my-project-translateasl-won-first-place-in-the-maishacks-2025-try-it-out",
          title: 'My project translateASL won First Place in the MAISHacks 2025. Try it out!...',
          description: "",
          section: "News",},{id: "news-i-m-awarded-a-sura-merit-based-research-award-for-summer-2025-and-will-be-working-in-disl",
          title: 'I’m awarded a SURA, merit-based research award, for Summer 2025 and will be...',
          description: "",
          section: "News",},{id: "news-i-attented-canada-s-biggest-hackathon-hackthenorth-2025-at-the-university-of-waterloo-check-out-our-project-cogniverse-making-every-idea-teachable",
          title: 'I attented Canada’s biggest hackathon - HackTheNorth 2025 at the University of Waterloo....',
          description: "",
          section: "News",},{id: "news-i-have-been-awarded-the-mr-chan-chee-keung-and-mrs-chan-au-yuk-bing-memorial-scholarship-by-the-faculty-of-science-scholarships-committee-on-the-basis-of-academic-merit",
          title: 'I have been awarded the Mr. Chan Chee Keung and Mrs. Chan Au...',
          description: "",
          section: "News",},{id: "news-i-have-been-named-to-the-dean-s-honour-list-at-mcgill-university-for-2025-in-recognition-of-academic-excellence-ranking-among-the-top-10-of-students-by-gpa",
          title: 'I have been named to the Dean’s Honour List at McGill University for...',
          description: "",
          section: "News",},{id: "news-i-participated-in-the-code-to-give-hackathon-2025-organized-by-morgan-stanley-where-i-helped-solve-a-real-world-problem-for-a-non-profit-partner",
          title: 'I participated in the Code to Give Hackathon 2025 organized by Morgan Stanley,...',
          description: "",
          section: "News",},{id: "news-i-have-been-awarded-the-richard-tomlinson-undergraduate-award-for-my-tutoring-contributions-in-comp-251-algorithms-and-data-structures",
          title: 'I have been awarded the Richard Tomlinson Undergraduate Award for my tutoring contributions...',
          description: "",
          section: "News",},{id: "news-i-attented-mcgill-university-s-biggest-hackathon-mchacks-13-check-out-our-project-sustainify-making-online-shopping-sustainable",
          title: 'I attented McGill University’s biggest hackathon - McHacks 13. Check out our project...',
          description: "",
          section: "News",},{id: "news-i-presented-at-the-undergraduate-science-showcase-organized-by-the-office-of-science-education-explore-my-poster",
          title: 'I presented at the Undergraduate Science Showcase organized by the Office of Science...',
          description: "",
          section: "News",},{id: "news-my-team-and-i-won-the-brim-challenge-at-claude-builders-ai-hackathon-check-out-our-devpost",
          title: 'My team and I won the Brim challenge at Claude Builders AI Hackathon....',
          description: "",
          section: "News",},{id: "news-i-have-been-awarded-the-harpp-undergraduate-award-for-my-tutoring-contributions-in-comp-250-introduction-to-computer-science",
          title: 'I have been awarded the Harpp Undergraduate Award for my tutoring contributions in...',
          description: "",
          section: "News",},{id: "news-i-m-joining-morgan-stanley-as-a-summer-analyst-intern",
          title: 'I’m joining Morgan Stanley as a Summer Analyst Intern.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/aditya-sharma-b9b35228a", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/adityash23", "_blank");
        },
      },{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/1068195563666931832", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%64%69%74%79%61.%73%68%61%72%6D%61%33@%6D%61%69%6C.%6D%63%67%69%6C%6C.%63%61", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
