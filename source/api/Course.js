const Courses = [
    {
        id: 1,
        title: "Web Development",
        description: "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services",
        image: require("../../assets/web-development.jpg"),
        price: 1000,
        utility: [
            {
                id: 1,
                name: "HTML"
            },
            {
                id: 2,
                name: "CSS"
            },
            {
                id: 3,
                name: "JAVASCRIPT"
            }
        ]
    },
    {
        id: 2,
        title: "App Development",
        description: "Application development involves the process, life, and creation of the software aimed at helping users. Mobile Developers work closely with computer analysts and engineers in using languages such as Java and C++ to develop the necessary specifications for software",
        image: require("../../assets/app-development.png"),
        price: 2000,
        utility: [
            {
                id: 1,
                name: "JAVA"
            },
            {
                id: 2,
                name: "KOTLIN"
            },
            {
                id: 3,
                name: "FLUTTER"
            }
        ]
    },
    {
        id: 3,
        title: "Graphic Designing",
        description: "The Graphic Designer job description includes the entire process of defining ments, visualizing and creating graphics including illustrations, logos, layouts and photos. You'll be the one to shape the visual aspects of websites, books, magazines, product packaging, exhibitions and more",
        image: require("../../assets/graphic-designing.png"),
        price: 1500,
        utility: [
            {
                id: 1,
                name: "FIGMA"
            },
            {
                id: 2,
                name: "PHOTOSHOP"
            },
            {
                id: 3,
                name: "ADOBE XD"
            }
        ]
    },
    {
        id: 4,
        title: "Data Structures & Algorithms",
        description: "A data structure is a named location that can be used to store and organize data. And, an algorithm is a collection of steps to solve a particular problem. Learning data structures and algorithms allow us to write efficient and optimized computer programs",
        image: require("../../assets/data-structures-and-algorithms.jpg"),
        price: 1000,
        utility: [
            {
                id: 1,
                name: "JAVA"
            },
            {
                id: 2,
                name: "C++"
            },
            {
                id: 3,
                name: "C"
            }
        ]
    },
    {
        id: 5,
        title: "Api Designing",
        description: "API design refers to the process of developing application programming interfaces (APIs) that expose data and application functionality for use by developers and users. APIs are important to modern organizations, adding new capabilities to everything from their operations",
        image: require("../../assets/api-designing.png"),
        price: 1000,
        utility: [
            {
                id: 1,
                name: "JAVASCRIPT"
            },
            {
                id: 2,
                name: "PHP"
            },
            {
                id: 3,
                name: "NODEJS"
            }
        ]
    }
]

export default Courses