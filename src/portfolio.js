/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";
import CSUEB from "./assets/images/csuebLogo.png";
import INU from "./assets/images/inuLogo.jpeg";
import SAILE from "./assets/images/saileLogo.png";
import CURIOUS5 from "./assets/images/curious5Logo.png";
import Stock from "./assets/images/stock-psychic.gif";
import IG from "./assets/images/parse2.gif";
import codepathLogo from "./assets/images/codepathLogo.png"

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Minsol Jeong",
  title: "Hi all, I'm Minsol",
  subTitle: emoji(
    "A passionate Full-Stack Software Developer 🚀 having an experience of building a strong Backend engineering with Python / C++ and Web applications with JavaScript / Reactjs."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1XXIJ0NkpU7LhMDwqXossMroGlIFdKP2V/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jminsol",
  linkedin: "https://www.linkedin.com/in/jminsol/",
  gmail: "jminsol0525@gmail.com",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly reliable Back end / Dynamically manage database"
    ),
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Integration of third party services such as AWS / Parse / HASURA"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-laptop"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "graphQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State University, East Bay",
      logo: CSUEB,
      // logo: require("./assets/images/csuebLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "January 2019 - December 2021",
      desc: "Always listed on Dean's List. Took courses about Software Engineering, Artificial Intelligence, Operating System",
      descBullets: [

        "2020-2021 Computer Science Department Scholarship, and Global Honor Scholarship",
        "2021-2022 College of Science Scholarship, and Ytha and Joanne Yu Scholarship",
        "2020 - Present Tau Sigma Honor Society"
      ]
    },
    {
      schoolName: "Incheon National University",
      logo: INU,
      // logo: require("./assets/images/inuLogo.jpeg"),
      subHeader: "Bachelor of Art in English Language and Literature",
      duration: "March 2013 - January 2019",
      desc: "Participated in Study Abroad to United States. Internship experience in 2018",
      descBullets: [
        "2016 Study Abroad to United States",
        "2018 Internship at a logistics company in United States"
    ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "50%"
    },
    {
      Stack: "Data Science / Machine Learning",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Fullstack Intern",
      company: "Saile, inc",
      companylogo: SAILE,
      // companylogo: require("./assets/images/saileLogo.png"),
      date: "June 2021 – August 2021",
      desc: "Worked on several full stack projects to deliver more functioanlities to end users by collaborating with CTO and VP.",
      descBullets: [
        "Email template updates - updated CRM management functionality for clients, design a better user interface ,and deployed template management system on internal server.",
        "Email sentiment analysis - Analayzed email sentiment sentence by sentence using BERT 2, and removed negative or unnecessary sentence for a filtering process."
      ]
    },
    {
      role: "Data Scientist Volunteer",
      company: "Curious Five",
      companylogo: CURIOUS5,
      // companylogo: require("./assets/images/curious5Logo.png"),
      date: "May 2021 – Present",
      desc: "Brainstormed the use cases for AI tutor and designed the intent and utterance for NLP using AWS Lex/Polly."
    },
    {
      role: "Learning Assistant for STEM",
      company: "CSU East Bay",
      companylogo: CSUEB,
      // companylogo: require("./assets/images/csuebLogo.png"),
      date: "Aug 2019 – Present",
      descBullets: ["Teach 40 students in Business Algebra and Python alongside professors, instructors, and teaching assistants.",
      "Use GitHub Classroom and PyCharm to check students’ assignments and help them to debug the codes.",
      "Hold virtual office hours and tutor students in-person and remotely to improve academic performance."
    ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal projects",
  subtitle: "After countless hours of hard work, I am finally able to share my featured projects with you. You can see the details of each project and check the actual codes on my GitHub. The projects are ranged from Machine learning to iOS development.",
  projects: [
    {
      image: Stock,
      // image: require("./assets/images/stock-psychic.gif"),
      projectName: "Stock Psychic",
      projectDesc: "Predict chosed stocks' closing price based on stock price history, COVID-19 cases and related KOSPI stock prices",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/jminsol/Stock_Psychic"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: IG,
      // image: require("./assets/images/parse2.gif"),
      projectName: "Parsetagram",
      projectDesc: "Clone Instagram using Parse database",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/jminsol/Parsetagram"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Codepath iOS Development",
      subtitle:
        "Took a 2021 Spring iOS developemnt and passed with Honor",
      image: codepathLogo,
      // image: require("./assets/images/codepathLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1n7vZSgjqOBV1-M__1cR3u4aXB3gYWoik/view"
        }
      ]
    },
    {
      title: "Dean's List",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: CSUEB,
        // image: require("./assets/images/csuebLogo.png"),
      footerLink: [
        {
          name: "2019 Spring Award",
          url: "https://www.credly.com/badges/a421411e-1ca9-4fc9-aa41-bcd968cca699"
        },
        {
          name: "2019 Fall Award",
          url: "https://www.credly.com/badges/f284411e-0275-42ad-8826-30041eb59d60"
        },
        {
          name: "2020 Spring Award",
          url: "https://www.credly.com/badges/caf66892-ba84-401b-8ca0-f994d9c6e0a9"
        },
        {
          name: "2020 Fall Award",
          url: "https://www.credly.com/badges/13a3f344-fed3-496f-86ad-b614899c3f76"
        },
        {
          name: "2021 Spring Award",
          url: "https://www.credly.com/badges/a8c7de37-0dff-4bc7-bd01-bc4d4dd7c60f/public_url"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Looking for a passionate entry SWE or just want to say hi? My Inbox is open for all.",
  number: "+1-510 499 0137",
  email_address: "jminsol05250@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "jminsol", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
