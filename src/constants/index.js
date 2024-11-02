export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Experience',
        href: '#experience',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Exepnse Tracker App',
        desc: 'This is basic expense tracker app made using basic CRUD features. The additional twist is that I have added filter options along with login and sign up method. This is a full stack project with frontend, backend and a database integrity in the project.',
        subdesc:
            'Made using React as a frontend js, node + express js as backend and MySQL to store record as the database.',
        // href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
        texture: '/textures/project/expense.mp4',
        logo: '/assets/budget.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'NodeJS',
                path: '/assets/node_js.png',
            },
            {
                id: 3,
                name: 'MySQL',
                path: '/assets/mysql.png',
            },
        ],
    },
    {
        title: 'Emotion Detection Classifier',
        desc: 'This a ML project where we detect the emotions portrayed by a sentence. This model analyzes the text by breaking it into tokens and with the help of Naive Bayes Classifier it identifies whether a sentence represents joy, anger, sadness, love, fear or surprise',
        subdesc:
            'Made with python in a jupyter notebook. Dataset obtained from kaggle. Classifier used is the Naive Bayes Classifier. Data preprocessing applied is tokenization and lametization.',
        // href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        texture: '/textures/project/emotion_detection.mp4',
        logo: '/assets/python.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.png',
            },
            {
                id: 2,
                name: 'Kaggle',
                path: 'assets/kaggle.png',
            },
        ],
    },
    {
        title: 'Medical Record system using Blockchain',
        desc: 'A data storage system which blockchain technology to store the records of patient. With the help of blockchain technology it ensures security and reliability of data records since they are immutable. Due to smart contracts it is easier to execute such systems while ensuring privacy and successful execution.',
        subdesc:
            'I made the smart contract in solidity language on RemixIDE. Connected it with my metamask account and deployed the smart contract.',
        // href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        texture: '/textures/project/remix_ide.mp4',
        logo: '/assets/health-report.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Solidity',
                path: '/assets/solidity.png',
            },
            {
                id: 2,
                name: 'Remix IDE',
                path: 'assets/remix_ide.png',
            },
            {
                id: 3,
                name: 'MetaMask',
                path: '/assets/MetaMask.svg',
            },
        ],
    },
    {
        title: 'My Portfolio Website',
        desc: 'This is by far my biggest and personal favorite project. My own portfolio website which allows me to showcase my skills. It also allows others to see my projects, know more about me and contact me in just a brief moment.',
        subdesc:
            'I built this with ThreeJS, React Three Fiber, React Three drei and ReactJs as the main libraries. I also used GSAP animations for many 3d components. I also used other tools such as Ready Me Player to make my avatar, Mixamo to rig the avatar and get some animations for the same.',
        // href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
        texture: '/textures/project/myportfolio.mp4',
        logo: '/portfolio.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'ThreeJS',
                path: 'assets/threejs.png',
            },
            {
                id: 3,
                name: 'Mixamo',
                path: '/assets/mixamo.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -4, 2] : isMobile ? [5, -4, 2] : isTablet ? [6, -5, 0] : [9, -6, 0],
        holoGlobePosition: isSmall ? [4, 2, 0] : isMobile ? [5, 2, 0] : isTablet ? [6, 1.5, 0] : [9, 1.5, 0],
        reactPosition: isSmall ? [-4, 3, 0] : isMobile ? [-5.8, 3, 0] : isTablet ? [-7, 2.3, 0] : [-9, 2.3, 0],
        headsetPosition: isSmall ? [-5, -9, -10] : isMobile ? [-8, -7, -10] : isTablet ? [-11, -8, -10] : [-13, -9, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Stralto Global',
        pos: 'Full Stack Intern',
        duration: '3rd June 2024 - 12th July 2024',
        title: "During my time at Stralto Global, I developed and deployed a robust backend system, crafting APIs and databases from scratch to support their mobile app’s functionality. Additionally, I designed an intuitive Admin Panel to streamline app management for administrators. I was also responsible for unit testing to ensure code quality and reliability, implementing best practices for maintainable and scalable solutions.",
        icon: '/assets/stralto_global.jpg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'MeshBA Solutions LLP',
        pos: 'Database Management & Design Intern',
        duration: '28th February 2024 - 31st March 2024',
        title: "At MeshBA Solutions, I honed my skills in database management and design, focusing on building efficient data systems. As part of a self-driven project, I designed a comprehensive Movie Ticket Booking System, integrating core principles of data structuring, storage optimization, and retrieval efficiency to enhance user experience and system performance.",
        icon: '/assets/meshba.jpg',
        animation: 'clapping',
    },
    // {
    //     id: 3,
    //     name: 'Notion',
    //     pos: 'Junior Web Developer',
    //     duration: '2019 - 2020',
    //     title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    //     icon: '/assets/notion.svg',
    //     animation: 'salute',
    // },
];