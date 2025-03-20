
export const portfolioProjects = [
  {
    id: 1,
    title: 'AR Shopping Experience',
    description: 'A Flutter-based AR shopping application that allows users to visualize products in their own space before purchase.',
    image: 'placeholder.svg',
    tags: ['Flutter', 'ARKit', 'ARCore', 'Firebase'],
    links: {
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    fullDescription: `
      Developed a cutting-edge AR shopping experience that revolutionizes how users interact with products online. 
      
      The application allows users to place virtual furniture, decor, and other items in their actual living space using augmented reality technology. This helps customers make more informed purchasing decisions by seeing how products would look and fit in their homes before buying.
      
      Key features include:
      • Real-time 3D product visualization with accurate scaling
      • Integration with product catalog containing thousands of items
      • Save and share AR screenshots with friends and family
      • Product customization (colors, materials) in AR view
      • Seamless checkout process within the application
      
      Technical highlights:
      • Built with Flutter for cross-platform compatibility
      • Utilized ARKit on iOS and ARCore on Android for AR capabilities
      • Implemented Firebase for authentication, storage, and analytics
      • Optimized 3D models for mobile performance
      • Incorporated custom shaders for realistic rendering
    `,
    challenges: [
      "Ensuring accurate scale and placement of 3D models in diverse environments",
      "Optimizing 3D assets for mobile performance while maintaining visual quality",
      "Creating an intuitive AR interface for users unfamiliar with AR technology",
      "Implementing cross-platform AR features with consistent behavior"
    ],
    results: [
      "30% increase in customer conversion rates for products with AR features",
      "25% reduction in product returns due to better pre-purchase visualization",
      "4.8/5 average user rating on app stores",
      "Featured by Apple in 'Apps We Love Right Now' section"
    ],
    screenshots: [
      "placeholder.svg",
      "placeholder.svg",
      "placeholder.svg"
    ]
  },
  {
    id: 2,
    title: 'AI Fitness Coach',
    description: 'A mobile fitness application with real-time pose estimation and AI-powered workout recommendations.',
    image: 'placeholder.svg',
    tags: ['Android', 'TensorFlow', 'Jetpack Compose', 'ML Kit'],
    links: {
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    fullDescription: `
      Created an innovative fitness application that serves as a personal AI coach, helping users perform exercises correctly and track their progress over time.
      
      The app uses the device's camera to analyze user movements in real-time, offering form corrections and personalized feedback during workouts. It also adapts to the user's progress, suggesting appropriate exercise modifications and intensity levels.
      
      Key features include:
      • Real-time pose estimation and form correction
      • Personalized workout plans based on user goals and performance
      • Detailed analytics and progress tracking
      • Voice-guided instructions and feedback
      • Offline functionality for workouts without internet access
      
      Technical highlights:
      • Developed for Android using Kotlin and Jetpack Compose
      • Implemented TensorFlow Lite for on-device ML inference
      • Created custom pose detection models optimized for mobile
      • Designed architecture for low-latency real-time processing
      • Built comprehensive analytics dashboard using MPAndroidChart
    `,
    challenges: [
      "Achieving real-time pose estimation with low latency on mid-range devices",
      "Developing accurate exercise recognition algorithms for diverse body types",
      "Balancing battery consumption with continuous camera and ML processing",
      "Creating intuitive visual feedback that doesn't distract from workouts"
    ],
    results: [
      "Users report 40% better form during exercises compared to video-only instruction",
      "Average 22 minutes of daily app usage, significantly higher than industry average",
      "Featured in multiple fitness and technology publications",
      "Over 500,000 downloads in first six months after launch"
    ],
    screenshots: [
      "placeholder.svg",
      "placeholder.svg",
      "placeholder.svg"
    ]
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    description: 'A comprehensive financial management app with interactive charts, budget tracking, and investment insights.',
    image: 'placeholder.svg',
    tags: ['Flutter', 'Firebase', 'GraphQL', 'Charts'],
    links: {
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    fullDescription: `
      Designed and developed a comprehensive financial management dashboard that gives users complete visibility into their personal finances with powerful visualization and analysis tools.
      
      The application aggregates data from multiple financial accounts, categorizes transactions automatically using ML, and provides actionable insights to help users improve their financial health.
      
      Key features include:
      • Unified dashboard for bank accounts, investments, loans, and credit cards
      • Interactive charts and graphs for expense analysis
      • Budget creation and tracking with customizable categories
      • Investment portfolio performance and allocation visualization
      • Automated savings recommendations based on spending patterns
      
      Technical highlights:
      • Built with Flutter for a consistent cross-platform experience
      • Implemented secure API connections to financial institutions
      • Utilized GraphQL for efficient data retrieval and updates
      • Designed responsive charts using FL Chart library
      • Created a robust offline-first architecture with local data persistence
    `,
    challenges: [
      "Ensuring highest security standards for sensitive financial data",
      "Connecting to various financial APIs with different authentication methods",
      "Creating intuitive visualizations for complex financial concepts",
      "Building an architecture that handles synchronization of offline changes"
    ],
    results: [
      "Users report average savings of 12% after 3 months of active app usage",
      "91% user retention rate after 30 days, far exceeding industry standards",
      "Featured in \"Best Financial Apps\" by multiple technology reviewers",
      "Successfully passed independent security audit with zero critical findings"
    ],
    screenshots: [
      "placeholder.svg",
      "placeholder.svg",
      "placeholder.svg"
    ]
  },
  {
    id: 4,
    title: 'Smart Home Controller',
    description: 'An IoT mobile application for controlling and monitoring smart home devices with voice commands and automations.',
    image: 'placeholder.svg',
    tags: ['Android', 'IoT', 'MQTT', 'Voice Recognition'],
    links: {
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    fullDescription: `
      Developed a comprehensive smart home control system that unifies various IoT devices under a single, intuitive interface. The application enables users to control their entire home environment through manual controls, voice commands, or automated routines.
      
      The app connects to multiple IoT ecosystems including Google Home, Amazon Alexa, and proprietary systems, providing a centralized control point regardless of device manufacturer.
      
      Key features include:
      • Universal control panel for all connected home devices
      • Voice command system with natural language processing
      • Customizable automation routines based on time, location, or device states
      • Real-time energy usage monitoring and optimization suggestions
      • Secure remote access to control devices from anywhere
      
      Technical highlights:
      • Developed for Android using Kotlin with a clean architecture approach
      • Implemented MQTT protocol for efficient IoT communication
      • Created a local processing system for privacy-sensitive voice commands
      • Designed a flexible plugin architecture to support new device types
      • Built comprehensive device state synchronization system
    `,
    challenges: [
      "Integrating with multiple IoT ecosystems with different protocols and authentication methods",
      "Creating a unified interface that accommodates diverse device capabilities",
      "Ensuring low-latency control even in homes with many connected devices",
      "Balancing automation power with simplicity for non-technical users"
    ],
    results: [
      "Reduced average home energy consumption by 16% through smart monitoring",
      "Expanded from supporting 3 IoT ecosystems at launch to 12 within one year",
      "97% positive ratings for interface usability in user surveys",
      "Selected as the default control app by two major smart home device manufacturers"
    ],
    screenshots: [
      "placeholder.svg",
      "placeholder.svg",
      "placeholder.svg"
    ]
  },
  {
    id: 5,
    title: 'Experimental AR Navigation',
    description: 'An experimental AR navigation system that guides users through complex indoor environments.',
    image: 'placeholder.svg',
    tags: ['Flutter', 'ARCore', 'Experiments', 'Navigation'],
    links: {
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    fullDescription: `
      Created an experimental augmented reality navigation system designed to help users navigate complex indoor environments like shopping malls, airports, and conference centers where GPS is unreliable.
      
      The application uses a combination of visual positioning, inertial sensing, and Bluetooth beacons to create accurate indoor positioning, then overlays directional guidance in AR directly in the user's field of view.
      
      Key features include:
      • Turn-by-turn AR navigation with visual waypoints
      • Point-of-interest discovery with contextual information
      • Offline map support for navigation without internet connection
      • Accessibility features including audio guidance
      • Crowd-sourced map improvements and updates
      
      Technical highlights:
      • Built with Flutter and custom C++ modules for performance-critical components
      • Implemented ARCore's visual positioning system with custom enhancements
      • Created a hybrid localization algorithm that fuses multiple data sources
      • Designed a memory-efficient vector map system for large venues
      • Developed custom path-finding algorithms optimized for indoor navigation
    `,
    challenges: [
      "Achieving precise indoor positioning without relying on infrastructure changes",
      "Handling diverse lighting conditions that affect visual positioning accuracy",
      "Creating intuitive AR guidance that works across different viewing angles",
      "Optimizing battery usage while maintaining real-time AR functionality"
    ],
    results: [
      "Successfully deployed in 3 major shopping centers as pilot program",
      "Users reached destinations 43% faster compared to traditional signage",
      "Received innovation award at Mobile World Congress",
      "Technology being evaluated by major transportation hubs for implementation"
    ],
    screenshots: [
      "placeholder.svg",
      "placeholder.svg",
      "placeholder.svg"
    ]
  },
  {
    id: 6,
    title: 'Voice Controlled Game',
    description: 'An experimental game that can be played entirely through voice commands.',
    image: 'placeholder.svg',
    tags: ['Android', 'Experiments', 'Voice AI', 'Game'],
    links: {
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    fullDescription: `
      Designed and developed an innovative voice-controlled adventure game that explores new interaction paradigms in gaming. The entire game can be played using only voice commands, making it both a fun experience and an accessibility pioneer.
      
      Players navigate a rich narrative world by speaking to characters, casting spells with voice commands, solving puzzles through audio cues, and making decisions that affect the storyline.
      
      Key features include:
      • Fully voice-controlled gameplay with natural language understanding
      • Adaptive audio environment that responds to player actions
      • Branching narrative with multiple endings based on player choices
      • Voice-profile recognition for personalized gameplay experience
      • Accessibility features for various user needs
      
      Technical highlights:
      • Developed for Android using a custom game engine built on OpenGL ES
      • Implemented on-device speech recognition for low-latency responses
      • Created a sophisticated natural language processing system for command interpretation
      • Designed an adaptive audio system using procedural generation
      • Built an emotion detection system to influence story outcomes
    `,
    challenges: [
      "Creating a speech recognition system that works reliably in various environments",
      "Designing intuitive voice interaction without visual command references",
      "Building a game flow that accommodates the variable pace of voice interaction",
      "Developing natural, contextual responses to a wide range of possible player commands"
    ],
    results: [
      "Featured as a case study in accessibility at Google I/O",
      "Praised by accessibility advocates as a breakthrough in inclusive gaming",
      "Average play session time of 45 minutes, exceeding target by 80%",
      "Techniques developed have been adopted by two major game studios"
    ],
    screenshots: [
      "placeholder.svg",
      "placeholder.svg",
      "placeholder.svg"
    ]
  }
];
