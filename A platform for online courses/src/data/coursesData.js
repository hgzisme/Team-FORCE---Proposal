// Mock data for courses
export const coursesData = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        instructor: "Sarah Johnson",
        instructorImage: "https://i.pravatar.cc/150?img=1",
        price: 89.99,
        originalPrice: 129.99,
        rating: 4.8,
        reviews: 12453,
        students: 45230,
        duration: "42 hours",
        lectures: 285,
        level: "Beginner",
        category: "Web Development",
        thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
        description: "Master web development from scratch with HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and become a full-stack developer.",
        whatYouLearn: [
            "Build responsive websites with HTML5 and CSS3",
            "Master JavaScript and ES6+ features",
            "Create dynamic web apps with React",
            "Build REST APIs with Node.js and Express",
            "Work with MongoDB and databases",
            "Deploy applications to production"
        ],
        curriculum: [
            {
                section: "Introduction to Web Development",
                lectures: 12,
                duration: "2h 30m"
            },
            {
                section: "HTML5 Fundamentals",
                lectures: 24,
                duration: "4h 15m"
            },
            {
                section: "CSS3 and Responsive Design",
                lectures: 32,
                duration: "5h 45m"
            },
            {
                section: "JavaScript Essentials",
                lectures: 45,
                duration: "8h 20m"
            },
            {
                section: "React Framework",
                lectures: 38,
                duration: "7h 30m"
            },
            {
                section: "Backend with Node.js",
                lectures: 42,
                duration: "6h 45m"
            }
        ],
        requirements: [
            "A computer with internet connection",
            "No prior programming experience needed",
            "Enthusiasm to learn"
        ]
    },
    {
        id: 2,
        title: "Data Science and Machine Learning A-Z",
        instructor: "Dr. Michael Chen",
        instructorImage: "https://i.pravatar.cc/150?img=12",
        price: 94.99,
        originalPrice: 149.99,
        rating: 4.9,
        reviews: 8920,
        students: 32145,
        duration: "38 hours",
        lectures: 245,
        level: "Intermediate",
        category: "Data Science",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
        description: "Complete guide to Data Science and Machine Learning with Python, Pandas, NumPy, Matplotlib, Scikit-Learn, and TensorFlow.",
        whatYouLearn: [
            "Python for Data Science",
            "Data Analysis with Pandas and NumPy",
            "Data Visualization with Matplotlib and Seaborn",
            "Machine Learning algorithms",
            "Deep Learning with TensorFlow",
            "Real-world data science projects"
        ],
        curriculum: [
            {
                section: "Python Programming Basics",
                lectures: 28,
                duration: "5h 20m"
            },
            {
                section: "Data Analysis with Pandas",
                lectures: 35,
                duration: "6h 45m"
            },
            {
                section: "Data Visualization",
                lectures: 25,
                duration: "4h 30m"
            },
            {
                section: "Machine Learning Fundamentals",
                lectures: 48,
                duration: "9h 15m"
            },
            {
                section: "Deep Learning",
                lectures: 38,
                duration: "7h 40m"
            }
        ],
        requirements: [
            "Basic programming knowledge helpful but not required",
            "Computer with at least 8GB RAM",
            "Willingness to practice"
        ]
    },
    {
        id: 3,
        title: "AWS Cloud Practitioner Certification",
        instructor: "James Williams",
        instructorImage: "https://i.pravatar.cc/150?img=33",
        price: 79.99,
        originalPrice: 119.99,
        rating: 4.7,
        reviews: 15672,
        students: 52340,
        duration: "28 hours",
        lectures: 198,
        level: "Beginner",
        category: "Cloud Computing",
        thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop",
        description: "Prepare for AWS Cloud Practitioner certification. Learn cloud computing fundamentals, AWS services, security, and best practices.",
        whatYouLearn: [
            "AWS Cloud fundamentals",
            "Core AWS services (EC2, S3, RDS, Lambda)",
            "Cloud security and compliance",
            "AWS pricing and billing",
            "Cloud architecture best practices",
            "Pass the AWS certification exam"
        ],
        curriculum: [
            {
                section: "Cloud Computing Basics",
                lectures: 18,
                duration: "3h 30m"
            },
            {
                section: "AWS Core Services",
                lectures: 45,
                duration: "8h 20m"
            },
            {
                section: "Security and Compliance",
                lectures: 32,
                duration: "5h 45m"
            },
            {
                section: "Pricing and Support",
                lectures: 25,
                duration: "4h 15m"
            },
            {
                section: "Practice Exams",
                lectures: 28,
                duration: "6h 10m"
            }
        ],
        requirements: [
            "Basic IT knowledge",
            "No prior AWS experience needed"
        ]
    },
    {
        id: 4,
        title: "Digital Marketing Masterclass 2024",
        instructor: "Emily Roberts",
        instructorImage: "https://i.pravatar.cc/150?img=5",
        price: 69.99,
        originalPrice: 99.99,
        rating: 4.6,
        reviews: 9834,
        students: 28765,
        duration: "32 hours",
        lectures: 215,
        level: "Beginner",
        category: "Marketing",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
        description: "Master digital marketing strategies including SEO, social media marketing, email marketing, content marketing, and paid advertising.",
        whatYouLearn: [
            "SEO and content marketing strategies",
            "Social media marketing on all platforms",
            "Email marketing campaigns",
            "Google Ads and Facebook Ads",
            "Analytics and conversion optimization",
            "Build a complete marketing strategy"
        ],
        curriculum: [
            {
                section: "Digital Marketing Fundamentals",
                lectures: 22,
                duration: "4h 20m"
            },
            {
                section: "SEO Mastery",
                lectures: 38,
                duration: "6h 45m"
            },
            {
                section: "Social Media Marketing",
                lectures: 42,
                duration: "7h 30m"
            },
            {
                section: "Paid Advertising",
                lectures: 35,
                duration: "5h 50m"
            },
            {
                section: "Analytics and Optimization",
                lectures: 28,
                duration: "4h 35m"
            }
        ],
        requirements: [
            "No prior marketing experience needed",
            "A computer and internet connection"
        ]
    },
    {
        id: 5,
        title: "iOS App Development with Swift",
        instructor: "David Kim",
        instructorImage: "https://i.pravatar.cc/150?img=14",
        price: 84.99,
        originalPrice: 124.99,
        rating: 4.8,
        reviews: 6721,
        students: 19832,
        duration: "36 hours",
        lectures: 228,
        level: "Intermediate",
        category: "Mobile Development",
        thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop",
        description: "Learn to build native iOS applications using Swift and SwiftUI. Create beautiful, functional apps for iPhone and iPad.",
        whatYouLearn: [
            "Swift programming language",
            "SwiftUI framework for UI development",
            "iOS app architecture patterns",
            "Networking and APIs integration",
            "Core Data for local storage",
            "Submit apps to the App Store"
        ],
        curriculum: [
            {
                section: "Swift Programming",
                lectures: 35,
                duration: "6h 30m"
            },
            {
                section: "SwiftUI Basics",
                lectures: 42,
                duration: "7h 45m"
            },
            {
                section: "Advanced SwiftUI",
                lectures: 38,
                duration: "6h 50m"
            },
            {
                section: "Working with APIs",
                lectures: 32,
                duration: "5h 40m"
            },
            {
                section: "App Store Deployment",
                lectures: 21,
                duration: "3h 45m"
            }
        ],
        requirements: [
            "Mac computer required",
            "Basic programming knowledge helpful",
            "Xcode installed"
        ]
    },
    {
        id: 6,
        title: "UI/UX Design Complete Course",
        instructor: "Lisa Anderson",
        instructorImage: "https://i.pravatar.cc/150?img=9",
        price: 74.99,
        originalPrice: 109.99,
        rating: 4.9,
        reviews: 11234,
        students: 35678,
        duration: "30 hours",
        lectures: 192,
        level: "Beginner",
        category: "Design",
        thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
        description: "Master UI/UX design principles, tools like Figma and Adobe XD, and create stunning user interfaces and experiences.",
        whatYouLearn: [
            "UI/UX design fundamentals",
            "Design thinking and user research",
            "Wireframing and prototyping",
            "Master Figma and Adobe XD",
            "Design systems and style guides",
            "Portfolio-ready design projects"
        ],
        curriculum: [
            {
                section: "Design Fundamentals",
                lectures: 25,
                duration: "4h 30m"
            },
            {
                section: "User Research",
                lectures: 28,
                duration: "5h 15m"
            },
            {
                section: "Wireframing and Prototyping",
                lectures: 35,
                duration: "6h 20m"
            },
            {
                section: "Visual Design",
                lectures: 38,
                duration: "7h 10m"
            },
            {
                section: "Design Tools Mastery",
                lectures: 32,
                duration: "5h 45m"
            }
        ],
        requirements: [
            "No prior design experience needed",
            "Computer with Figma access"
        ]
    },
    {
        id: 7,
        title: "Cybersecurity Fundamentals",
        instructor: "Robert Taylor",
        instructorImage: "https://i.pravatar.cc/150?img=15",
        price: 89.99,
        originalPrice: 134.99,
        rating: 4.7,
        reviews: 7845,
        students: 23456,
        duration: "34 hours",
        lectures: 218,
        level: "Intermediate",
        category: "IT & Security",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=450&fit=crop",
        description: "Learn cybersecurity essentials, network security, ethical hacking, cryptography, and how to protect systems from threats.",
        whatYouLearn: [
            "Network security fundamentals",
            "Ethical hacking techniques",
            "Cryptography and encryption",
            "Security tools and technologies",
            "Incident response and forensics",
            "Security best practices"
        ],
        curriculum: [
            {
                section: "Cybersecurity Basics",
                lectures: 28,
                duration: "5h 20m"
            },
            {
                section: "Network Security",
                lectures: 42,
                duration: "7h 40m"
            },
            {
                section: "Ethical Hacking",
                lectures: 45,
                duration: "8h 15m"
            },
            {
                section: "Security Tools",
                lectures: 38,
                duration: "6h 30m"
            },
            {
                section: "Advanced Topics",
                lectures: 32,
                duration: "5h 45m"
            }
        ],
        requirements: [
            "Basic networking knowledge",
            "Computer with virtualization support"
        ]
    },
    {
        id: 8,
        title: "Python Programming: From Zero to Hero",
        instructor: "Amanda White",
        instructorImage: "https://i.pravatar.cc/150?img=20",
        price: 64.99,
        originalPrice: 94.99,
        rating: 4.8,
        reviews: 18923,
        students: 67891,
        duration: "26 hours",
        lectures: 182,
        level: "Beginner",
        category: "Programming",
        thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=450&fit=crop",
        description: "Complete Python programming course from basics to advanced. Learn Python for web development, data science, automation, and more.",
        whatYouLearn: [
            "Python fundamentals and syntax",
            "Object-oriented programming",
            "Working with files and databases",
            "Web scraping and automation",
            "Building projects with Python",
            "Python best practices"
        ],
        curriculum: [
            {
                section: "Python Basics",
                lectures: 32,
                duration: "5h 40m"
            },
            {
                section: "Data Structures",
                lectures: 28,
                duration: "4h 50m"
            },
            {
                section: "OOP in Python",
                lectures: 35,
                duration: "6h 20m"
            },
            {
                section: "Advanced Python",
                lectures: 38,
                duration: "6h 45m"
            },
            {
                section: "Real Projects",
                lectures: 25,
                duration: "4h 15m"
            }
        ],
        requirements: [
            "No programming experience required",
            "A computer with Python installed"
        ]
    }
];

export const categories = [
    { name: "Web Development", icon: "Code", count: 1234 },
    { name: "Data Science", icon: "BarChart", count: 856 },
    { name: "Cloud Computing", icon: "Cloud", count: 645 },
    { name: "Marketing", icon: "TrendingUp", count: 923 },
    { name: "Mobile Development", icon: "Smartphone", count: 534 },
    { name: "Design", icon: "Palette", count: 1089 },
    { name: "IT & Security", icon: "Shield", count: 467 },
    { name: "Programming", icon: "Terminal", count: 2134 }
];
