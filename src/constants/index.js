import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    frontend,
    backendDev,
    mongo,
    todolist,
    notescape,
    portfolio,
    threejs,
    web3,
    responsive,
    dynamic,
    intuitive
  } from "../assets";
  
  export const navLinks = [
    {
      id: "#about",
      title: "About",
    },
    {
      id: "#work",
      title: "Work",
    },
    {
      id: "#contact",
      title: "Contact",
    },
    {
      id: "https://drive.google.com/drive/u/1/folders/1I91UKIyNG014Ntrk7X_fyJKZQVoOxPk_",
      title: "Download CV"
    }
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Curator",
      icon: mobile,
    },
    {
      title: "Open Source Contributer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Technologies",
      company_name: "From Web Development Bootcamp by Angela Yu on Udemy",
      icon: frontend,
      iconBg: "#383E56",
      date: "december 2022 - march 2023",
      points: [
        "Started off by learning the basics of HTML and CSS in the 1st month and progressively advanced to more complex concepts later. ",
        " Also learned ot make responsive webpages by using frameworks like bootstrap and tailwind.",
        "Created a few projects using html , css and bootstrap such as a CV Webpage ,a birthday invite and Tindog which was taught along the course and are present in my github profile.",
        "Dedicated 2 months on learning the basics of javascript and Jquery and progressively advanced to more complex concepts. Created projects such as Dice Game , Drum-Kit and Simon game. ",
      ],
    },
    {
      title: "Backend Technologies",
      company_name: "From Web Development Bootcamp by Angela Yu on Udemy",
      icon: backendDev,
      iconBg: "#E6DEDD",
      date: "April 2023 - june 2023",
      points: [
        "Started my journey of learning backend technologies by learning Node js and framework such as express js.",
        "Later leaned Git, Github and Version Control and meanwhile created small projects such as superhero name generator.",
        "Moving along the course learned the basics of APIs such as making server-side API requested using Axios and also learned API authentication and REST APIs.",
        "Created certain projects using the concepts learned such as Superhero name generator , Secrets and few more present in my Github profile.",
      ],
    },
    {
      title: "Database Technologies Such as mySQL and MongoDB",
      company_name: "From Udemy and Youtube",
      icon: mongo,
      iconBg: "#383E56",
      date: "july 2023 - august 2023",
      points: [
        "Achieved a deep understanding of both relational and NoSQL databases, showcasing proficiency in database management systems.",
        "Developed a fully functional blog site, demonstrating advanced database management skills in database schema design, complex queries, and efficient data handling.",
        "Also created a dynamic ToDoList application with MongoDB and hosted it using mongoDB atlas, showcasing adaptability and practical application of diverse database paradigms.",
      ],
    },
    {
      title: "React and three.js",
      company_name: "From Udemy and JsMastery",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "september 2023 - october 2023",
      points: [
        "Started learning ReactJs which is a frontend library based on Javascript for building responsive websites.",
        "Created a project named Notescape using React to put the learning in use.",
        "Later started learning framer-moiton and threejs for using 3D object in websites and providing motion to different components and using the same built this portfolio website.",
        
      ],
    },
    {
      title: "PassportJs and Web3",
      company_name: "From Udemy",
      icon: web3,
      iconBg: "#E6DEDD",
      date: "November 2023",
      points: [
        "Started learning about Authentication and Security : concepts such as hashing , salting , bcrypt.",
        "Learned about creating and handling cookies and sessions using passportJs.",
        "Learned how to create sign in with google using OAuth 2.0.",
        "Also created a project named Secrets implementing the OAuth 2.0 sign in feature.",
        "Then Started learning about the newage Web3 technology and created a few projects such as DBank which is a decentralised Finance application and a crypto token."
      ],
    },
  ];
  
  const testimonials = [
    { title:"Responsive",
      testimonial:
        "I specialize in creating responsive websites using Bootstrap, media queries, Tailwind, and other cutting-edge technologies. With a focus on user-centric design, I ensure a seamless experience across diverse devices.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: responsive,
    },
    {title:"Dynamic" ,
      testimonial:
        " I excel at crafting dynamic websites using JavaScript, Node.js, and other backend technologies. With a focus on seamless user experiences and real-time functionalities, I bring a dynamic edge to web development.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: dynamic ,
    },
    { title:"Intuitive",
      testimonial:
        "I have a strong preference for easy to use designs that prioritize user experience,I ensure that every design is user-friendly and seamlessly guides users through an engaging and intuitive journey.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: intuitive,
    },
  ];
  
  const projects = [
    {
      name: "To Do List",
      description:
        "Meet To Do List, a streamlined web app built with HTML, CSS, JavaScript, Node.js, and MongoDB. Simplify your task management with an intuitive interface for creating and organizing reminders. Tick the checkbox next to completed tasks for quick deletion, keeping your list concise and your focus sharp. Stay organized effortlessly with the simplicity and efficiency of the To Do List application.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodeJs",
          color: "pink-text-gradient",
        },
      ],
      image: todolist,
      source_code_link: "https://github.com/Harshkr75/todolist",
    },
    {
      name: "NoteScape",
      description:
        "Introducing NoteScape, a user-friendly web app for creating and managing notes. Built with React, Node.js, HTML, CSS, and ICP, NoteScape allows you to effortlessly jot down reminders and ideas. With a streamlined interface, creating and deleting notes is quick and intuitive. Experience efficient note-taking with NoteScape – where organization meets simplicity. This project by inspired by the Keepers project by Angela Yu.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "icp",
          color: "pink-text-gradient",
        },
      ],
      image: notescape,
      source_code_link: "https://github.com/Harshkr75/noteScape",
    },
    {
      name: "Portfolio Project",
      description:
        "Presenting my latest creation, a stunning 3D Animated Portfolio crafted with React.js, Tailwind CSS, and Three.js. This immersive portfolio project showcases the fusion of technology and design, featuring captivating animations powered by React libraries like Framer Motion. Explore a dynamic and visually engaging presentation of my work, seamlessly blending creativity with modern web development.",
      tags: [
        {
          name: "reactJs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
        {
          name: "threeJs",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Harshkr75/noteScape",
    },
    ,
  ];
  
  export { services, technologies, experiences, testimonials, projects };