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
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-courses",
          title: "courses",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/courses/";
          },
        },{id: "nav-submenus",
          title: "submenus",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/_pages/dropdown/";
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
      },{id: "post-first-post",
        
          title: "First Post",
        
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
          section: "News",},{id: "news-i-m-awarded-a-sura-for-summer-2025",
          title: 'I’m awarded a SURA for Summer 2025',
          description: "",
          section: "News",},{id: "news-i-attented-canada-s-biggest-hackathon-hackthenorth-2025-at-the-university-of-waterloo-check-out-our-project-cogniverse-making-every-idea-teachable",
          title: 'I attented Canada’s biggest hackathon - HackTheNorth 2025 at the University of Waterloo....',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
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
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/adityash23", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/aditya-sharma-b9b35228a", "_blank");
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
