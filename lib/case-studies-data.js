export const caseStudies = [
    {
        slug: "ecommerce-experience",
        title: "E-Commerce Experience",
        liveLink: "https://biswakarmagold.com/",
        shortDescription: "A high-conversion online store built with Next.js, featuring seamless checkout and dynamic product filtering.",
        industry: "E-Commerce",
        techStack: ["Next.js", "Tailwind CSS", "Stripe", "Node.js", "MongoDB"],
        image: "/assets/Case-study.jpg",
        overview: "Our client, a rapidly growing retail brand, needed a scalable e-commerce platform that could handle high traffic during seasonal sales while providing a frictionless shopping experience. We delivered a custom solution that prioritized speed, mobile responsiveness, and conversion optimization.",
        problem: "The client was using a legacy platform that was slow, hard to manage, and had a high cart abandonment rate (over 75%). Their mobile experience was practically non-existent, leading to missed opportunities as 60% of their traffic came from mobile devices.",
        solution: "We rebuilt the entire store from scratch using Next.js for its lightning-fast performance and SEO advantages. We implemented a headless commerce architecture, integrating Stripe for secure, single-tap payments and a custom MongoDB backend for flexible product management.",
        features: [
            {
                title: "Advanced Search & Filtering",
                points: ["Elasticsearch integration", "Multi-attribute filtering", "Instant results"],
                icon: "Search"
            },
            {
                title: "Optimized Checkout Flow",
                points: ["One-page checkout", "Guest login support", "Multiple payment gateways"],
                icon: "ShoppingCart"
            },
            {
                title: "Real-time Inventory",
                points: ["Live stock updates", "Low stock alerts", "Automated reordering"],
                icon: "Package"
            },
            {
                title: "Mobile-First UX",
                points: ["PWA capabilities", "Touch-optimized UI", "Fast loading on 3G"],
                icon: "Smartphone"
            },
            {
                title: "Smart Recommendations",
                points: ["AI-based product pairing", "Frequently bought together", "Personalized discounts"],
                icon: "Sparkles"
            }
        ],
        process: [
            {
                stage: "Research",
                description: "Analyzing user behavior on the old site and identifying friction points in the checkout journey.",
                points: ["User Flow Audit", "Competitor Analysis", "Performance Benchmarking"]
            },
            {
                stage: "UI/UX Design",
                description: "Creating a modern, clean aesthetic with a 'mobile-first' focus and intuitive navigation.",
                points: ["Wireframe Creation", "Visual Prototyping", "Accessibility Design"]
            },
            {
                stage: "Development",
                description: "Building the frontend with React/Next.js and the backend with a scalable Node.js architecture.",
                points: ["Headless Integration", "API Development", "Cart Logic Setup"]
            },
            {
                stage: "Testing",
                description: "Rigorous cross-browser testing and performance auditing via Lighthouse.",
                points: ["Unit/Integration Tests", "Security Auditing", "Speed Optimization"]
            },
            {
                stage: "Deployment",
                description: "Launching on Vercel with CI/CD pipelines and real-time monitoring.",
                points: ["CI/CD Pipeline", "Edge Edge Caching", "Post-Launch Monitoring"]
            }
        ],
        results: [
            { metric: "Conversion Rate", value: "+35%" },
            { metric: "Mobile Sales", value: "2x Increase" },
            { metric: "Page Load Time", value: "< 1.2s" },
            { metric: "Cart Abandonment", value: "-40%" }
        ],
        screenshots: [
            { title: "Homepage", url: "/assets/Case-study.jpg" },
            { title: "Product Page", url: "/assets/Case-study.jpg" },
            { title: "Mobile Experience", url: "/assets/Case-study.jpg" },
            { title: "Analytics Dashboard", url: "/assets/Case-study.jpg" }
        ]
    },
    {
        slug: "finance-dashboard",
        title: "Finance Dashboard",
        shortDescription: "Modern analytics dashboard tailored for enterprise data, highlighting key metrics with intuitive visualizations.",
        industry: "FinTech",
        techStack: ["React", "D3.js", "Express", "PostgreSQL", "AWS"],
        image: "/assets/Case-study.jpg",
        overview: "This project involved creating a high-performance financial analytics dashboard for an investment firm. The goal was to visualize complex market data in real-time, allowing analysts to make data-driven decisions quickly.",
        problem: "The firm's analysts were manually compiling data from dozens of spreadsheets, leading to errors and delays. They needed a unified 'source of truth' that could handle millions of data points without lagging.",
        solution: "We developed a custom dashboard with D3.js for intricate data visualizations and a robust Express backend. The system pulls data from multiple external APIs and consolidates it into a clean, interactive UI.",
        features: [
            {
                title: "Real-time Data Streaming",
                points: ["WebSocket integration", "Sub-second updates", "Multi-source aggregation"],
                icon: "Activity"
            },
            {
                title: "Custom Data Visuals",
                points: ["D3.js specialized charts", "Interactive drill-downs", "Exportable reports"],
                icon: "BarChart3"
            },
            {
                title: "Predictive Analytics",
                points: ["Market trend forecasting", "Risk assessment models", "Anomaly detection"],
                icon: "TrendingUp"
            },
            {
                title: "Secure Data Access",
                points: ["Role-based permissions", "End-to-end encryption", "Audit logging"],
                icon: "ShieldCheck"
            },
            {
                title: "Automated Workflows",
                points: ["Report generation", "Alerting system", "API integrations"],
                icon: "Zap"
            }
        ],
        process: [
            { stage: "Research", description: "Deep-dive into the technical requirements of financial data processing and compliance." },
            { stage: "UI/UX Design", description: "Focusing on information density without clutter, using dark mode to reduce eye strain." },
            { stage: "Development", description: "Implementing high-frequency data updates using WebSockets." },
            { stage: "Testing", description: "Stress testing the system with massive datasets to ensure continuous 60fps performance." },
            { stage: "Deployment", description: "Deploying on AWS with auto-scaling and high-availability clusters." }
        ],
        results: [
            { metric: "Analysis Speed", value: "10x Faster" },
            { metric: "Error Reduction", value: "99%" },
            { metric: "Data Freshness", value: "Real-time" },
            { metric: "User Satisfaction", value: "4.9/5" }
        ],
        screenshots: [
            { title: "Main Dashboard", url: "/assets/Case-study.jpg" },
            { title: "Market Analysis", url: "/assets/Case-study.jpg" },
            { title: "Portfolio View", url: "/assets/Case-study.jpg" }
        ]
    },
    {
        slug: "multivendor-e-commerce",
        title: "E-Commerce Website",
        liveLink: "https://shopaholicapp.shop/",
        shortDescription: "Shopaholic is a modern e-commerce platform designed to provide a seamless online shopping experience for fashion and lifestyle products. The platform focuses on performance optimization, secure payments, and an intuitive user interface to maximize conversions and customer retention.",
        industry: "E-Commerce",
        techStack: ["React", "Laravel", "MYSQL", "AWS", "DigitalOcean"],
        image: "/assets/Case-study.png",
        overview: "Shopaholic is a next-generation multivendor marketplace that empowers vendors to sell their products while providing customers with a high-performance, secure shopping environment. The solution includes robust seller dashboards, real-time analytics, and a lightning-fast frontend.",
        problem: "The previous multivendor system was plagued by slow load times and a confusing checkout process, leading to low vendor enrollment and high customer churn.",
        solution: "We developed a scalable architecture using Laravel and React, implementing advanced caching strategies and a streamlined checkout flow that increased conversion rates by 45%.",
        features: [
            {
                title: "Vendor Dashboard",
                points: ["Real-time sales tracking", "Inventory management", "Order fulfillment"],
                icon: "Layout"
            },
            {
                title: "Secure Payments",
                points: ["Multiple gateways", "Fraud detection", "Instant payouts"],
                icon: "CreditCard"
            },
            {
                title: "Customer Insights",
                points: ["Behavior tracking", "Personalized offers", "Churn analysis"],
                icon: "Users"
            },
            {
                title: "Mobile App Integration",
                points: ["Push notifications", "App-to-web sync", "Offline browsing"],
                icon: "Smartphone"
            },
            {
                title: "Automated Tax & Shipping",
                points: ["Global tax calculation", "Carrier integration", "Dynamic rates"],
                icon: "Truck"
            }
        ],
        process: [
            { stage: "Research", description: "Market analysis to identify top-requested vendor features and customer pain points." },
            { stage: "UI/UX Design", description: "Designing a high-conversion checkout flow and intuitive vendor portals." },
            { stage: "Development", description: "Building a scalable multivendor engine with Laravel and React." },
            { stage: "Testing", description: "Load testing and security auditing to ensure platform stability under high traffic." },
            { stage: "Deployment", description: "Cloud deployment on AWS with auto-scaling and global CDN." }
        ],
        results: [
            { metric: "Conversion Rate", value: "+45%" },
            { metric: "Vendor Enrollment", value: "3x Growth" },
            { metric: "Loading Speed", value: "2.5s -> 0.8s" },
            { metric: "Market Share", value: "+12%" }
        ],
        screenshots: [
            { title: "Patient Records", url: "/assets/Case-study.jpg" },
            { title: "Appointment Calendar", url: "/assets/Case-study.jpg" },
            { title: "Mobile Doctor App", url: "/assets/Case-study.jpg" }
        ]
    },
    {
        slug: "pos-software",
        title: "Retail POS & Safe Drop Management System",
        showDemo: false,
        // liveLink: "https://mohini.cloud/",
        shortDescription: "A centralized Retail Point-of-Sale (POS) and Safe Drop Management System designed to streamline daily sales tracking, secure cash handling, supplier management, and administrative reporting.",
        industry: "POS + Inventory Management",
        techStack: ["Next.js", "Node.js", "Tailwind CSS", "MongoDB", "RBAC"],
        image: "/assets/mohini_pos.png",
        overview: "A secure, role-based retail management platform that enables store managers and administrators to monitor transactions, track expenses, manage inventory, and maintain audit-ready financial records in real-time. The system centralizes daily operations, reducing manual errors and improving financial transparency.",
        problem: "Retail operations faced multiple challenges: manual cash handling errors, no centralized safe drop tracking, difficulty reconciling daily balances, poor inventory visibility, lack of structured supplier management, and no audit-ready reporting system. This resulted in financial discrepancies and operational inefficiencies.",
        solution: "We developed a secure, role-based retail management system featuring counter sales recording, safe drop in/out transaction tracking, automated daily balance reporting, expense logging and categorization, supplier and stock management modules, and an admin dashboard with detailed sales insights. The system ensures secure financial tracking and full operational transparency.",
        features: [
            {
                title: "Sales & Transaction Management",
                points: ["Counter sales tracking", "Detailed sales reports", "Real-time sales listing"],
                icon: "ShoppingCart"
            },
            {
                title: "Safe Drop Monitoring",
                points: ["Safe Drop In/Out transactions", "Secure logging with timestamps", "Audit trail for compliance"],
                icon: "ShieldCheck"
            },
            {
                title: "Financial Reporting & Audits",
                points: ["Daily balance report", "Expense tracking", "Detailed sales breakdown"],
                icon: "BarChart3"
            },
            {
                title: "Inventory & Supplier Management",
                points: ["Stock level management", "Supplier management", "Stock movement tracking"],
                icon: "Package"
            },
            {
                title: "Role-Based Administration",
                points: ["Admin panel", "User management", "System configuration"],
                icon: "Users"
            }
        ],
        process: [
            {
                stage: "Research",
                description: "Understood retail store workflows and cash management processes to map out essential system requirements.",
                points: ["Store workflow audit", "Cash flow analysis", "Compliance requirements"]
            },
            {
                stage: "UI/UX Design",
                description: "Built a clean, fast dashboard interface optimized for daily retail operations.",
                points: ["Wireframe design", "Dashboard layout", "Responsive UI"]
            },
            {
                stage: "Development",
                description: "Developed a secure, scalable backend and intuitive frontend using modern MERN stack technologies.",
                points: ["API development", "RBAC integration", "Transaction engine"]
            },
            {
                stage: "Testing",
                description: "Load testing and security auditing to validate financial accuracy and system performance.",
                points: ["Security auditing", "Load testing", "Reconciliation checks"]
            },
            {
                stage: "Deployment",
                description: "Deployed the system with optimized VPS/cloud hosting and provided operational guidance to the team.",
                points: ["VPS deployment", "CI/CD pipeline", "User training"]
            }
        ],
        results: [
            { metric: "Cash Discrepancies", value: "-60%" },
            { metric: "Reconciliation Speed", value: "+40% Faster" },
            { metric: "Stock Visibility", value: "Real-time" },
            { metric: "Audit Readiness", value: "100%" }
        ],
        screenshots: [
            { title: "POS Dashboard", url: "/assets/mohini_pos.png" },
            { title: "Safe Drop View", url: "/assets/mohini_pos.png" },
            { title: "Admin Reports", url: "/assets/mohini_pos.png" }
        ]
    },
    {
        slug: "thirty30-media",
        title: "Thirty30 Media",
        liveLink: "https://thirty30media.co.uk/",
        shortDescription: "High-Performance Creative & Digital Agency Website",
        industry: "Design & Marketing Agency",
        techStack: ["WordPress", "Elementor", "Custom CSS", "Lighthouse", "Managed Hosting"],
        image: "/assets/Thirty30.png",
        overview: "Thirty30 Media is a UK-based creative and digital marketing agency focused on brand storytelling, content production, and performance marketing. Delivered a fully customized, performance-optimized WordPress solution tailored to the client’s brand identity and conversion goals.",
        problem: "The client faced several challenges with their previous web presence: Outdated design that didn’t reflect premium brand positioning, poor mobile responsiveness, slow loading times affecting engagement, weak lead conversion structure, and no structured service showcase. This was limiting brand authority and reducing inbound inquiries.",
        solution: "We developed a modern, conversion-focused agency website featuring: Bold, animation-driven UI, fully responsive mobile-first layout, optimized performance and asset loading, clear service segmentation, strong call-to-action placement, and lead capture forms with streamlined UX. The result was a visually impactful website aligned with the agency’s creative identity.",
        features: [
            {
                title: "Modern Creative UI",
                points: ["Bold typography", "Smooth scroll animations", "Dynamic section transitions", "High-impact hero layout"],
                icon: "Sparkles"
            },
            {
                title: "Performance Optimization",
                points: ["Optimized image delivery", "Reduced JavaScript load", "Lazy loading assets", "Clean code structure"],
                icon: "Zap"
            },
            {
                title: "Conversion-Focused Structure",
                points: ["Clear service pages", "Strategic CTA placements", "Contact flow optimization", "Lead capture integration"],
                icon: "TrendingUp"
            },
            {
                title: "Responsive Design",
                points: ["Fully mobile optimized", "Tablet-friendly layout", "Cross-browser compatibility"],
                icon: "Smartphone"
            },
            {
                title: "Scalable Architecture",
                points: ["Modular component structure", "Easy content updates", "Future-ready service expansion"],
                icon: "Layout"
            }
        ],
        process: [
            {
                stage: "Discovery & Brand Analysis",
                description: "Understood Thirty30 Media’s brand voice, creative direction, and target audience.",
                points: ["Brand Voice Understanding", "Creative Direction Alignment", "Target Audience Research"]
            },
            {
                stage: "UI/UX Strategy",
                description: "Designed a modern, visually immersive layout focused on clarity and lead generation.",
                points: ["High-Impact Hero Design", "Clean Section Structuring", "Wireframing & Layout Planning", "Mobile-First UX Approach"]
            },
            {
                stage: "Development",
                description: "Developed a fully customized WordPress solution with performance-focused implementation.",
                points: ["Custom WordPress Theme Development", "Advanced CSS Styling", "Interactive UI Elements", "SEO-Optimized Structure", "Responsive Layout Architecture", "Elementor Page Builder Customization"]
            },
            {
                stage: "Testing & Optimization",
                description: "Performed comprehensive testing to ensure speed, responsiveness, and cross-browser compatibility.",
                points: ["Performance Optimization", "Image Compression & Lazy Loading", "Mobile & Tablet Testing", "Cross-Browser Compatibility Checks", "UX Refinement"]
            },
            {
                stage: "Deployment",
                description: "Launched with optimized WordPress hosting and post-launch performance tuning.",
                points: ["Managed WordPress Hosting Setup", "Caching Configuration", "Security Hardening", "Post-Launch Monitoring", "Backup & Maintenance Setup"]
            }
        ],
        results: [
            { metric: "Loading Speed", value: "55% Faster" },
            { metric: "Mobile Score", value: "90+" },
            { metric: "Inquiry Conversion", value: "Higher" },
            { metric: "Brand Authority", value: "Improved" }
        ],
        screenshots: [
            { title: "Homepage Hero", url: "/assets/Thirty30.png" },
            { title: "Services Section", url: "/assets/Thirty30.png" },
            { title: "Mobile Experience", url: "/assets/Thirty30.png" }
        ]
    },
    {
        slug: "vridez",
        title: "",
        liveLink: "https://www.vridez.com/",
        shortDescription: "Managed Mobility & Transportation Fleet Services Digital Platform",
        industry: "Mobility & Transportation",
        techStack: ["WordPress", "HTML5", "CSS3", "JavaScript", "Managed Hosting"],
        image: "/assets/VRIDEZ.png",
        overview: "Vridez is a comprehensive mobility and managed transportation service provider offering a wide range of fleet rental and commuting solutions. The brand focuses on delivering safe, reliable, affordable, and comfortable transportation experiences for individuals and businesses. The objective was to build a digital presence that reflects trust, professionalism, and operational scale while making service inquiries seamless and conversion-driven.",
        problem: "Before development, the business needed: A strong brand presence reflecting credibility, clear communication of multiple transport services, structured service presentation for corporate clients, mobile-optimized browsing experience, high-converting inquiry system, and professional visual identity matching industry standards. The website needed to position Vridez as a serious mobility partner not just a rental listing platform.",
        solution: "We delivered a fully structured, performance-optimized WordPress website focused on authority and lead generation. Key deliverables included: Corporate-grade service layout, structured fleet service presentation, clean conversion-driven CTA placement, mobile-first responsive architecture, speed-optimized performance setup, and a trust-building UI with strong branding.",
        features: [
            {
                title: "Mobility Services Presentation",
                points: ["Managed transportation solutions", "Fleet rental services", "Corporate commuting support", "On-demand vehicle services"],
                icon: "Package"
            },
            {
                title: "Trust & Authority Building",
                points: ["Safety-focused messaging", "Reliability-driven brand tone", "Professional layout structure", "Clear service differentiation"],
                icon: "ShieldCheck"
            },
            {
                title: "Conversion Optimization",
                points: ["Clear “Get a Quote” CTA flow", "Contact & inquiry forms", "Lead-focused page structure", "Conversion-oriented section hierarchy"],
                icon: "TrendingUp"
            },
            {
                title: "Performance & Usability",
                points: ["Fast loading architecture", "Optimized images", "Mobile-first responsive design", "Clean navigation flow"],
                icon: "Zap"
            }
        ],
        process: [
            {
                stage: "Discovery & Brand Analysis",
                description: "We analyzed Vridez’s positioning as a managed mobility provider rather than a simple rental service.",
                points: ["Brand voice alignment (professional & trustworthy)", "Audience mapping (corporate & individual commuters)", "Competitor analysis within mobility sector"]
            },
            {
                stage: "UI/UX Strategy",
                description: "Designed a structured, corporate-grade layout balancing clarity with modern aesthetics.",
                points: ["Service segmentation planning", "Wireframing", "Trust-driven UI hierarchy", "Mobile-first layout planning"]
            },
            {
                stage: "Development",
                description: "Built a fully customized WordPress solution focused on scalability and performance.",
                points: ["Custom WordPress theme", "Responsive CSS architecture", "SEO-structured layout", "Optimized service page templates", "Secure contact & inquiry system"]
            },
            {
                stage: "Testing & Optimization",
                description: "Ensured performance stability across devices.",
                points: ["Mobile & tablet responsiveness testing", "Page speed optimization", "UX refinement", "Cross-browser compatibility checks"]
            },
            {
                stage: "Deployment",
                description: "Launched with optimized hosting configuration ensuring reliable performance.",
                points: ["WordPress hosting setup", "Caching configuration", "Security hardening", "Post-launch performance review"]
            }
        ],
        results: [
            { metric: "Brand Positioning", value: "Stronger" },
            { metric: "Mobile Engagement", value: "Improved" },
            { metric: "Inquiry Potential", value: "Higher" },
            { metric: "Service Structure", value: "Clearer" }
        ],
        screenshots: [
            { title: "Homepage Layout", url: "/assets/VRIDEZ.png" },
            { title: "Services Section", url: "/assets/VRIDEZ.png" },
            { title: "Mobile Experience", url: "/assets/VRIDEZ.png" }
        ]
    },
    {
        slug: "sahasra-ai",
        title: "",
        liveLink: "https://www.sahasraai.com/",
        shortDescription: "Intelligent Chatbot & Conversational AI Platform",
        industry: "Enterprise Software & AI",
        techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
        image: "/assets/Sahasra.png",
        overview: "Sahasra AI is a next-generation AI-powered chatbot platform designed to enhance digital conversations and transform how users interact, learn, and engage with businesses. The platform focuses on delivering intelligent, seamless, and context-aware chatbot solutions across multiple industries improving customer experience and operational efficiency. The goal was to develop a modern, scalable, and tech-forward digital presence that reflects innovation and AI leadership.",
        problem: "Before development, the client required: A strong AI-focused brand identity, clear communication of chatbot capabilities, trust-building messaging around AI technology, modern SaaS-style UI, structured presentation of features & use cases, and a lead-focused onboarding and inquiry system. The website needed to position Sahasra AI as a serious AI solution provider not just a basic chatbot service.",
        solution: "We designed and developed a modern, conversion-focused digital platform that clearly communicates AI chatbot capabilities, highlights industry use cases, uses clean SaaS-inspired UI patterns, establishes authority in conversational AI, and encourages demo requests and inquiries. The result was a professional AI platform website aligned with innovation and trust.",
        features: [
            {
                title: "AI-Powered Chatbot Solutions",
                points: ["Intelligent conversational flows", "Context-aware responses", "Multi-industry adaptability", "Automated engagement systems"],
                icon: "Bot"
            },
            {
                title: "Modern SaaS UI Architecture",
                points: ["Clean hero messaging", "Feature-based content segmentation", "Structured value proposition sections", "Conversion-driven layout"],
                icon: "Layout"
            },
            {
                title: "Lead & Conversion Optimization",
                points: ["Clear 'Request Demo' / 'Get Started' CTAs", "Optimized contact flow", "User-focused messaging", "Trust-building content blocks"],
                icon: "TrendingUp"
            },
            {
                title: "Performance & Responsiveness",
                points: ["Mobile-first design", "Optimized load performance", "Lightweight UI structure", "Cross-device compatibility"],
                icon: "Zap"
            }
        ],
        process: [
            {
                stage: "Discovery & AI Positioning Strategy",
                description: "We analyzed the AI chatbot market and positioned Sahasra AI as a future-ready conversational platform.",
                points: ["Brand voice alignment (innovative & intelligent)", "Target audience analysis (businesses, startups, enterprises)", "Competitive positioning research"]
            },
            {
                stage: "UI/UX Strategy",
                description: "Created a SaaS-inspired layout focused on clarity, innovation, and conversion.",
                points: ["Wireframing", "User journey mapping", "Feature hierarchy planning", "CTA optimization"]
            },
            {
                stage: "Development",
                description: "Built a scalable and responsive Next.js-based solution.",
                points: ["Modern React/Next.js Architecture", "Tailwind CSS styling", "Optimized frontend structure", "SEO-structured content layout", "Secure inquiry system integration"]
            },
            {
                stage: "Testing & Optimization",
                description: "Ensured performance stability and seamless user experience.",
                points: ["Mobile responsiveness testing", "Performance optimization via Lighthouse", "UX refinement", "Cross-browser compatibility checks"]
            },
            {
                stage: "Deployment",
                description: "Launched with Vercel cloud hosting and security configuration.",
                points: ["Vercel hosting setup", "Caching configuration", "Security hardening", "Post-launch performance monitoring"]
            }
        ],
        results: [
            { metric: "AI Branding", value: "Stronger" },
            { metric: "Engagement", value: "Improved" },
            { metric: "Feature Presentation", value: "Structured" },
            { metric: "Scalability", value: "Future-Ready" }
        ],
        screenshots: [
            { title: "Homepage Hero", url: "/assets/Sahasra.png" },
            { title: "Chatbot Features", url: "/assets/Sahasra.png" },
            { title: "SaaS Value Props", url: "/assets/Sahasra.png" }
        ]
    },
    {
        slug: "j2-wealth",
        title: "J2 Wealth Financial Growth & Wealth Management Platform",
        liveLink: "https://j2wealth.co.in/",
        shortDescription: "A growing wealth management and financial services firm dedicated to helping individuals, families, and businesses achieve long-term financial growth.",
        industry: "Wealth Management & Financial Services",
        techStack: ["React.js", "Tailwind CSS", "WordPress", "SEO", "Vercel"],
        image: "/assets/J2wealth.png",
        overview: "J2 Wealth needed a professional digital platform to establish trust and authority in the wealth management sector. We built a high-performance, SEO-optimized website that communicates their expertise in financial growth and simplifies lead generation for high-net-worth clients.",
        problem: "The client lacked a modern digital presence, making it difficult to compete with established firms and capture digital-first investors. Their services were not clearly articulated, and there was no structured way for potential clients to request consultations.",
        solution: "We developed a bespoke React-based platform with a WordPress backend for content management. The solution features a clean, professional UI, industry-specific service modules, and a conversion-optimized consultation flow.",
        features: [
            {
                title: "Wealth Management Modules",
                points: ["Personalized financial planning", "Investment portfolio showcase", "Risk assessment tools"],
                icon: "BarChart3"
            },
            {
                title: "Trust-Based UI/UX",
                points: ["Professional aesthetic", "Client testimonial integration", "Security-first messaging"],
                icon: "ShieldCheck"
            },
            {
                title: "SEO Strategy",
                points: ["Local search optimization", "Financial keyword targeting", "High-speed performance"],
                icon: "TrendingUp"
            },
            {
                title: "Responsive Lead Capture",
                points: ["Multistep consultation forms", "WhatsApp integration", "CRM data mapping"],
                icon: "Smartphone"
            }
        ],
        process: [
            { stage: "Strategy", description: "Analyzing the financial services landscape and defining J2 Wealth's unique value proposition." },
            { stage: "Design", description: "Creating a premium, trust-building visual identity and user interface." },
            { stage: "Technical Setup", description: "Building the core engine with React and integrating WordPress for seamless content updates." },
            { stage: "Optimization", description: "Implementing advanced SEO and performance tuning for maximum reach." },
            { stage: "Launch", description: "Deployment on Vercel with automated CI/CD and security monitoring." }
        ],
        results: [
            { metric: "Digital Inquiries", value: "3x Increase" },
            { metric: "Trust Factor Score", value: "High" },
            { metric: "Organic Reach", value: "+120%" },
            { metric: "Site Speed", value: "95/100" }
        ],
        screenshots: [
            { title: "Dashboard Overview", url: "/assets/J2wealth.png" },
            { title: "Service Details", url: "/assets/J2wealth.png" },
            { title: "Contact Page", url: "/assets/J2wealth.png" }
        ]
    },
    {
        slug: "legacy-marketplace",
        title: "Legacy Marketplace Sustainable Event Sourcing Platform",
        liveLink: "https://marketplace.legacy-events.com//",
        shortDescription: "Legacy Marketplace revolutionised sustainable event sourcing by combining speed, automation and verified eco-conscious suppliers into one seamless digital platform.",
        industry: "Events / Marketplace / B2B Platform",
        techStack: ["PHP", "CodeIgniter", "Bootstrap", "MySQL", "HubSpot Chat"],
        image: "/assets/b2b.png",
        overview: "Legacy Marketplace is an award-winning UK-based sustainable sourcing platform that enables event organisers to find and purchase eco-conscious venues, products, gifts, and services in one seamless digital ecosystem. The platform combines sustainability expertise, supplier automation, and marketplace efficiency to simplify responsible event planning without compromising quality or speed.",
        problem: "Event organisers faced multiple challenges: Difficulty finding verified sustainable suppliers, Fragmented sourcing process across venues, products, and services, Lack of transparent environmental impact data, Time-consuming manual coordination, and Sustainability trade-offs between cost, quality, and compliance.",
        solution: "We helped build a modern digital marketplace platform that connects organisers with verified eco-conscious suppliers, enables instant browsing, comparison & purchasing, integrates automation for fast sourcing, simplifies sustainability data access, and supports B-Corp aligned ethical standards.",
        features: [
            {
                title: "Advanced Marketplace System",
                points: ["Multi-category listing (Venues, Products, Services, Merchandise)"],
                icon: "ShoppingBag"
            },
            {
                title: "Sustainable Supplier Verification",
                points: ["Lower environmental impact filtering", "Verified eco-conscious partners"],
                icon: "ShieldCheck"
            },
            {
                title: "Smart Search & Discovery",
                points: ["Optimized search system for quick sourcing", "High-speed filtering"],
                icon: "Search"
            },
            {
                title: "Instant Payment & Automation",
                points: ["Upfront pricing", "Automated supplier workflows"],
                icon: "CreditCard"
            }
        ],
        process: [
            { stage: "Discovery", description: "Understanding sustainable sourcing ecosystem and mapping user personas (Organisers & Suppliers)." },
            { stage: "UX Architecture", description: "Designing intuitive marketplace browsing experience and balancing sustainability messaging with usability." },
            { stage: "Development", description: "Custom listing management, search optimization, and supplier onboarding system." },
            { stage: "Testing", description: "Mobile optimization, load time improvements, and marketplace stress testing." },
            { stage: "Launch", description: "Optimized UK hosting, post-launch monitoring, and ongoing marketplace scaling." }
        ],
        results: [
            { metric: "Award-winning", value: "M&IT Silver 2022" },
            { metric: "Positioning", value: "B-Corp Certified" },
            { metric: "Engagement", value: "High S-O ecosystem" },
            { metric: "Visibility", value: "Press & Media" }
        ],
        awards: [
            "M&IT Silver Award – Best Sustainable Initiative (2022)",
            "Featured in CNBC",
            "Recognised in Vision 2025"
        ],
        screenshots: [
            { title: "Marketplace Overview", url: "/assets/b2b.png" }
        ]
    },
    {
        slug: "mural-story",
        title: "The Mural Story™ Custom Wall Mural E-Commerce Platform",
        liveLink: "https://www.themuralstory.com/",
        shortDescription: "The Mural Story™ is a premium custom wall-mural e-commerce platform delivering personalized luxury design through a seamless dimension-based ordering experience.",
        industry: "Interior Design / Home Decor / E-Commerce",
        techStack: ["Shopify", "HTML5", "CSS3", "JavaScript"],
        image: "/assets/TMS.png",
        overview: "The Mural Story™ is a premium homegrown wall-mural brand with a global outlook, focused on delivering luxury-quality custom wallpapers with accessible pricing. The objective was to create a visually immersive, conversion-focused e-commerce platform that reflects luxury while simplifying the customization and ordering process.",
        problem: "The client required a luxury brand presentation with strong visual storytelling, a custom dimension-based wallpaper ordering system, sample ordering workflow, easy measurement & installation guidance, and a seamless checkout experience. The biggest challenge was integrating product customization without complicating the buying process.",
        solution: "We developed a structured and visually immersive e-commerce platform that allows custom wall dimension input, provides real-time preview resizing, supports A4 sample ordering, and offers structured measuring & installation guides, all while maintaining a premium brand feel.",
        features: [
            {
                title: "Custom Size Ordering System",
                points: ["Dynamic width & height input", "Real-time print preview adjustment", "Auto price calculation logic"],
                icon: "Layers"
            },
            {
                title: "Sample Ordering Workflow",
                points: ["A4 sample product system", "Simple checkout flow", "Texture & color preview assistance"],
                icon: "Package"
            },
            {
                title: "Guided Buying Experience",
                points: ["Measuring guide", "Ordering guide", "Installation guide"],
                icon: "Search"
            },
            {
                title: "Luxury Visual UI",
                points: ["High-resolution imagery", "Minimal typography", "Clean product focus layout"],
                icon: "Monitor"
            }
        ],
        process: [
            { stage: "Discovery", description: "Understood the brand’s luxury positioning and accessibility mission, including brand tone alignment and competitor research." },
            { stage: "UX Strategy", description: "Focused on simplifying customization with product personalization flow design and conversion-first layout hierarchy." },
            { stage: "Development", description: "Built a responsive and scalable e-commerce architecture with custom dimension input logic and secure payment integration." },
            { stage: "Testing", description: "Ensured smooth functionality across devices with mobile testing, checkout flow testing, and speed optimization." },
            { stage: "Deployment", description: "Optimized hosting and post-launch performance monitoring including server optimization and caching setup." }
        ],
        results: [
            { metric: "Experience", value: "Seamless Custom" },
            { metric: "Positioning", value: "Luxury Brand" },
            { metric: "Guidance", value: "Structured" },
            { metric: "Mobile", value: "Improved" }
        ],
        screenshots: [
            { title: "Home Page", url: "/assets/TMS.png" }
        ]
    },
    {
        slug: "activelink-support-app",
        title: "Activlink Support App",
        shortDescription: "A robust workforce management solution designed specifically for the NDIS and community care industry.",
        industry: "Community Care & Workforce Management",
        techStack: ["Flutter", "Laravel", "iOS", "Android", "MySQL", "REST API"],
        image: "/assets/activelink.png",
        showDemo: false,
        overview: "Activlink Support App is a robust workforce management solution designed specifically for the NDIS and community care industry. The platform simplifies shift management, staff rostering, and calendar coordination helping care organizations operate efficiently without administrative hassle. Built as a cross-platform mobile application with a powerful backend system, Activlink streamlines scheduling, team coordination, and operational visibility.",
        problem: "Community care organizations faced several challenges: Manual shift allocation processes, complex staff scheduling, poor visibility of team availability, time-consuming coordination, lack of a centralized management system, and limited mobile accessibility for staff. The client needed a digital system to automate and simplify these operations.",
        solution: "We developed a scalable mobile and backend ecosystem that enables easy shift creation & assignment, provides calendar-based scheduling, improves team coordination, offers real-time shift updates, and reduces administrative workload. The solution works seamlessly on both iOS and Android, ensuring smoother workforce operations.",
        features: [
            {
                title: "Smart Shift Management",
                points: ["Create & assign shifts", "Track shift status", "Real-time updates"],
                icon: "Zap"
            },
            {
                title: "Advanced Rostering System",
                points: ["Drag-and-drop scheduling", "Calendar-based management", "Staff availability tracking"],
                icon: "Calendar"
            },
            {
                title: "Cross-Platform Mobile App",
                points: ["Built with Flutter", "iOS & Android compatibility", "Consistent UI across devices"],
                icon: "Smartphone"
            },
            {
                title: "Admin Backend System",
                points: ["Laravel-powered backend", "Secure authentication", "Role-based access control"],
                icon: "Layout"
            },
            {
                title: "User Experience Focus",
                points: ["Clean, intuitive interface", "Easy navigation", "Mobile-first usability"],
                icon: "Sparkles"
            }
        ],
        process: [
            {
                stage: "Discovery & Workflow Analysis",
                description: "Analyzed NDIS operational workflows and shift management challenges.",
                points: ["Industry compliance considerations", "User persona mapping", "Feature prioritization"]
            },
            {
                stage: "UX Strategy",
                description: "Focused on simplicity and speed with mobile-first wireframes and calendar-based UX structure.",
                points: ["Mobile-first wireframes", "Calendar-based UX", "Navigation hierarchy"]
            },
            {
                stage: "Development",
                description: "Built a scalable app-backend architecture using Flutter and Laravel.",
                points: ["Flutter development", "Laravel API system", "Role-based auth", "Shift logic automation"]
            },
            {
                stage: "Testing & Optimization",
                description: "Ensured reliability and performance through cross-device testing and API optimization.",
                points: ["Cross-device testing", "API performance", "Load handling validation"]
            },
            {
                stage: "Deployment",
                description: "Prepared app for production release on iOS and Android stores with security configuration.",
                points: ["App store readiness", "Backend hosting setup", "Security hardening", "Post-launch monitoring"]
            }
        ],
        results: [
            { metric: "Shift Allocation", value: "Streamlined" },
            { metric: "Manual Coordination", value: "Reduced" },
            { metric: "Scheduling Visibility", value: "Improved" },
            { metric: "Accessibility", value: "iOS & Android" }
        ],
        screenshots: [
            { title: "App Interface", url: "/assets/activelink.png" }
        ]
    },
    {
        slug: "agriculture-task-app",
        title: "Purelife - Agriculture Mobile App (Flutter)",
        shortDescription: "A Flutter-based mobile application developed to support farmers and agricultural stakeholders with real-time data, essential farming tools, and actionable insights.",
        industry: "AgriTech & Task Management",
        techStack: ["Flutter", "Dart", "Firebase", "Firestore", "Node.js"],
        image: "/assets/Purelife.jpeg",
        showDemo: false,
        overview: "Purelife is a Flutter-based mobile application developed to support farmers and agricultural stakeholders with real-time data, essential farming tools, and actionable insights. The platform bridges the information gap by delivering weather forecasts, crop guidance, and agricultural updates directly to users through a user-friendly mobile interface. The objective was to build a scalable, intuitive, and data-driven mobile solution tailored for the agriculture sector.",
        problem: "Farmers often face limited access to real-time weather data, a lack of structured crop information, difficulty accessing digital agricultural insights, and complex or non-intuitive technology platforms. Additionally, poor internet connectivity in rural areas was a significant hurdle. The solution needed to be lightweight, easy to use, and reliable.",
        solution: "We developed a cross-platform mobile application that provides real-time weather forecasts, delivers crop-related insights & guidance, supports secure authentication, and enables cloud-based data storage. The application ensures smooth performance on both Android & iOS, serving as a digital assistant for modern farming.",
        features: [
            {
                title: "Real-Time Weather Integration",
                points: ["Live weather forecasts", "Location-based data", "Farming decision support"],
                icon: "Zap"
            },
            {
                title: "Crop Information Hub",
                points: ["Crop best practices", "Seasonal guidance", "Agricultural insights"],
                icon: "Package"
            },
            {
                title: "Secure User Authentication",
                points: ["Firebase Authentication", "Secure login/signup flow"],
                icon: "ShieldCheck"
            },
            {
                title: "Cloud-Based Data Management",
                points: ["Firestore database", "Real-time data syncing", "Scalable cloud infrastructure"],
                icon: "Layout"
            },
            {
                title: "Cross-Platform Mobile App",
                points: ["Flutter development", "Single codebase for Android & iOS", "Consistent UI/UX"],
                icon: "Smartphone"
            }
        ],
        process: [
            {
                stage: "Requirement Analysis",
                description: "Understood farmer pain points and rural usability challenges.",
                points: ["User persona research", "Feature prioritization", "Connectivity consideration"]
            },
            {
                stage: "UX Strategy",
                description: "Focused on simplicity and clarity with a minimal learning curve.",
                points: ["Clean mobile-first layout", "Easy navigation structure", "UX-focused wireframes"]
            },
            {
                stage: "Development",
                description: "Built a scalable mobile-cloud ecosystem using Flutter and Firebase.",
                points: ["Flutter app development", "Firebase integration", "Weather API integration", "Node.js backend logic"]
            },
            {
                stage: "Testing & Optimization",
                description: "Ensured smooth real-world performance and reliable data sync.",
                points: ["Device compatibility testing", "API response optimization", "Data sync validation"]
            },
            {
                stage: "Deployment",
                description: "Prepared for production readiness with cloud configuration and monitoring.",
                points: ["Cloud configuration", "Security rule setup", "Post-launch monitoring"]
            }
        ],
        results: [
            { metric: "Access to Insights", value: "Improved" },
            { metric: "Weather Support", value: "Real-time" },
            { metric: "Accessibility", value: "Mobile-first" },
            { metric: "Scalability", value: "Cloud-ready" }
        ],
        screenshots: [
            { title: "App Interface", url: "/assets/Purelife.jpeg" }
        ]
    },
    {
        slug: "tap-shake-walk",
        title: "TapShakeWalk - Real Rewards Fitness App",
        shortDescription: "A modern move-to-earn fitness application built using React Native (Expo) that transforms physical activity into rewarding experiences.",
        industry: "Fitness & Healthcare",
        techStack: ["React Native", "Expo", "JavaScript", "Health Tracking API", "Sensors"],
        image: "/assets/Healthcare.jpeg",
        showDemo: false,
        overview: "TapShakeWalk is a modern move-to-earn fitness application built using React Native (Expo). The app transforms daily physical activity into a rewarding and engaging experience by allowing users to earn coins through walking, shaking, and completing fitness challenges. The goal was to design a scalable, gamified ecosystem that motivates users to stay active while maintaining a clean, bold, and highly intuitive mobile interface.",
        problem: "The fitness app market is highly competitive. Key challenges included creating sustained user motivation, making fitness tracking engaging, designing a simple but addictive reward mechanism, and ensuring smooth performance across diverse devices with scalable architecture.",
        solution: "We developed a move-to-earn ecosystem that tracks steps, distance, and activity while rewarding users with in-app coins. The system features level progression, challenge participation, and a seamless reward redemption flow, all delivered through a bold, modern UI designed for high retention.",
        features: [
            {
                title: "Activity Tracking System",
                points: ["Step tracking", "Distance monitoring", "Calorie calculation", "Level progression"],
                icon: "Activity"
            },
            {
                title: "Move-to-Earn Reward Engine",
                points: ["Coin generation logic", "Activity-based earning", "Daily & challenge bonuses"],
                icon: "Zap"
            },
            {
                title: "Gamification Architecture",
                points: ["User levels & milestones", "Achievement tracking", "Engagement loops"],
                icon: "Trophy"
            },
            {
                title: "Reward Redemption Flow",
                points: ["Coin wallet system", "Reward listing", "Redemption workflow"],
                icon: "ShoppingCart"
            },
            {
                title: "Modern Mobile UI",
                points: ["Clean and bold interface", "Intuitive navigation", "High usability focus"],
                icon: "Smartphone"
            }
        ],
        process: [
            {
                stage: "Concept & Engagement Strategy",
                description: "Designed the gamification framework and retention loops.",
                points: ["Reward psychology research", "Retention loop planning", "User behavior mapping"]
            },
            {
                stage: "UX & Interface Design",
                description: "Focused on bold, engaging visuals and progress-first UI.",
                points: ["Clean dashboard layout", "Progress-first UI", "Simple redemption flow"]
            },
            {
                stage: "Development",
                description: "Built a scalable React Native application with sensor integration.",
                points: ["Expo-based architecture", "Sensor integration", "Reward calculation logic", "Performance optimization"]
            },
            {
                stage: "Testing & Optimization",
                description: "Ensured accurate tracking and smooth cross-device performance.",
                points: ["Step accuracy validation", "Battery usage optimization", "UI performance tuning"]
            },
            {
                stage: "Scalability Planning",
                description: "Prepared for future growth with modular components and API-ready architecture.",
                points: ["Expandable reward system", "API-ready architecture", "Monetization structure"]
            }
        ],
        results: [
            { metric: "Motivation", value: "Increased" },
            { metric: "Experience", value: "Gamified" },
            { metric: "Architecture", value: "Scalable" },
            { metric: "Performance", value: "Mobile-first" }
        ],
        screenshots: [
            { title: "Dashboard", url: "/assets/Healthcare.jpeg" }
        ]
    },
    {
        slug: "accuster-patient-management",
        title: "Accuster Technologies Patient Management App",
        shortDescription: "A robust Android application built to streamline patient registration, screening workflows, and instant report generation for medical data management.",
        industry: "Healthcare Screening & Patient Record App",
        techStack: ["Kotlin", "Node.js", "MySQL", "REST API", "Android Native"],
        image: "/assets/Accuster.jpeg",
        showDemo: false,
        overview: "Accuster Technologies’ mobile application is a comprehensive solution designed to streamline patient registration, test screening, instant report generation, and medical data management for healthcare providers. This solution significantly improves operational efficiency in medical setups and enhances data accessibility for clinicians through a user-friendly mobile interface for medical professionals.",
        problem: "Healthcare facilities typically faced manual patient data entry, time-consuming test result reporting, and a lack of centralized medical records. Additionally, poor integration between mobile tools and backend systems made accessing historical screening data difficult. The client needed a reliable, digitized patient record system to core medical workflows.",
        solution: "We developed a scalable and efficient mobile health application that provides secure patient registration, test screening capture, and instant report generation. The app includes a backend database for consolidated medical records and transforms patient record-keeping into a digital, faster, and error-resistant process.",
        features: [
            {
                title: "Patient Registration System",
                points: ["Create & store patient profiles", "Secure medical data", "Quick history access"],
                icon: "Users"
            },
            {
                title: "Screening Test Workflow",
                points: ["Digitized test forms", "Capture biomedical readings", "Automated processing"],
                icon: "Activity"
            },
            {
                title: "Instant Report Generation",
                points: ["Real-time report creation", "Downloadable formats", "Structured medical layout"],
                icon: "FileText"
            },
            {
                title: "Medical Data Management",
                points: ["Backend storage", "Search & filtering", "Structured organization"],
                icon: "Database"
            },
            {
                title: "Mobile Implementation",
                points: ["Smooth Android performance", "Intuitive Healthcare UI", "Reliable data sync"],
                icon: "Smartphone"
            }
        ],
        process: [
            {
                stage: "Discovery & Workflow Analysis",
                description: "Aligned app requirements with real clinical workflows and screening standards.",
                points: ["Patient registration mapping", "Screening standards", "Reporting formats"]
            },
            {
                stage: "UI/UX Strategy",
                description: "Designed a clean, productivity-focused interface for healthcare professionals.",
                points: ["Easy patient entry", "Clear workflow navigation", "Quick report access"]
            },
            {
                stage: "Development",
                description: "Built robust mobile + backend architecture using Kotlin and Node.js.",
                points: ["Kotlin Android development", "Node.js API development", "Secure medical schema"]
            },
            {
                stage: "Testing & Optimization",
                description: "Ensured reliable performance, data integrity, and usability for staff.",
                points: ["Functional testing", "Data integrity checks", "Usability validation"]
            },
            {
                stage: "Deployment & Support",
                description: "Prepared the app for production use with backend hosting and scaling.",
                points: ["API scaling setup", "Performance monitoring", "Maintenance planning"]
            }
        ],
        results: [
            { metric: "Onboarding", value: "Faster" },
            { metric: "Workflows", value: "Streamlined" },
            { metric: "Report Access", value: "Instant" },
            { metric: "Productivity", value: "Improved" }
        ],
        screenshots: [
            { title: "App Interface", url: "/assets/Accuster.jpeg" }
        ]
    },
    {
        slug: "kamutalk",
        title: "Kamutalk - Real-Time Social & Dating Platform",
        shortDescription: "A modern dating and social networking application designed to help users connect through real-time interaction.",
        industry: "Dating App With Real-Time Communication",
        techStack: ["React Native", "Agora", "Node.js", "MongoDB", "Real-Time Communication"],
        image: "/assets/Kamutalk1.png",
        showDemo: false,
        overview: "Kamutalk is a modern dating and social networking application designed to help users connect through real-time interaction. The platform goes beyond traditional messaging by integrating live audio and video communication, enabling meaningful digital connections. Built with a scalable mobile architecture and Node.js backend, Kamutalk supports high engagement and real-time communication.",
        problem: "Developing a dating platform requires high user engagement, smooth real-time calling, and secure privacy. The key challenge was integrating live communication via Agora without affecting performance and stability while handling concurrent users on a scalable backend.",
        solution: "We developed a complete real-time dating ecosystem featuring matchmaking, Agora-powered audio/video calls, and a scalable Node.js backend. The optimized React Native interface ensures an engaging experience, while a custom admin panel allows for structured moderation.",
        features: [
            {
                title: "Profile & Matchmaking",
                points: ["User profiles", "Discovery & matching", "Interactive connection flow"],
                icon: "Users"
            },
            {
                title: "Live Audio & Video Calling",
                points: ["Agora API integration", "One-to-one live calls", "Low-latency streaming"],
                icon: "Video"
            },
            {
                title: "Real-Time Messaging",
                points: ["Instant chat system", "Media sharing", "Push notifications"],
                icon: "Zap"
            },
            {
                title: "Admin Panel & Moderation",
                points: ["Management dashboard", "Report & block functionality", "Analytics tools"],
                icon: "ShieldCheck"
            },
            {
                title: "Scalable Architecture",
                points: ["Node.js REST APIs", "Token-based auth", "Cloud-ready deployment"],
                icon: "Layout"
            }
        ],
        process: [
            {
                stage: "Product Strategy",
                description: "Planned engagement mechanics and communication workflows.",
                points: ["User journey mapping", "Match interaction design", "Real-time feature planning"]
            },
            {
                stage: "UI/UX Design",
                description: "Focused on a modern, clean, and interaction-focused mobile interface.",
                points: ["Simple navigation", "Call-focused design", "Engagement layout"]
            },
            {
                stage: "Development",
                description: "Built a scalable architecture integrating Agora SDK and Node.js.",
                points: ["React Native development", "Agora SDK integration", "Node.js backend", "Admin dashboard"]
            },
            {
                stage: "Testing & Optimization",
                description: "Ensured stability, smooth calls, and multi-device compatibility.",
                points: ["Real-time call testing", "Load testing", "Security validation"]
            },
            {
                stage: "Deployment & Scaling",
                description: "Prepared the system for growth with cloud hosting and database optimization.",
                points: ["Cloud configuration", "Database optimization", "Performance monitoring"]
            }
        ],
        results: [
            { metric: "Communication", value: "Real-time" },
            { metric: "Engagement", value: "High" },
            { metric: "Stability", value: "Low-latency" },
            { metric: "Moderation", value: "Admin-level" }
        ],
        screenshots: [
            { title: "App Interface", url: "/assets/Kamutalk1.png" }
        ]
    },
    {
        slug: "macau-nutrition",
        title: "Macau Nutrition Mobile Commerce & Rewards App",
        shortDescription: "A React Native-powered mobile commerce application with secure MPay integration, OTP authentication, and a loyalty rewards system.",
        industry: "Nutrition - E-Commerce Mobile app",
        techStack: ["React Native", "PHP", "MPay", "OTP Auth", "REST API"],
        image: "/assets/macauntrition.jpg",
        showDemo: false,
        overview: "Macau Nutrition is a cross-platform mobile commerce application designed to deliver a seamless and secure shopping experience for nutrition and wellness products. The app enables users to browse products freely, shop securely, earn loyalty rewards, and manage their accounts—all within a clean, intuitive mobile interface. The objective was to create a scalable retail ecosystem for customer engagement and retention.",
        problem: "The client required a frictionless shopping experience with secure MPay integration and a loyalty system. Key challenges included allowing browsing without forced registration, implementing secure OTP-based authentication, and ensuring cross-platform compatibility while balancing ease-of-use with secure transaction handling.",
        solution: "We developed a mobile commerce platform that supports guest browsing, secure OTP authentication, and MPay payment gateway integration. The app features 'Add to Cart' and 'Buy Now' functionality, a robust loyalty rewards program, and cross-platform performance optimized for both Android and iOS.",
        features: [
            {
                title: "Product Browsing Experience",
                points: ["Browse without registration", "Category-based structure", "Clean product listing"],
                icon: "Search"
            },
            {
                title: "Secure Checkout & Payments",
                points: ["MPay gateway integration", "Secure transaction flow", "OTP-based authentication"],
                icon: "ShieldCheck"
            },
            {
                title: "Cart & Instant Purchase",
                points: ["Add to Cart functionality", "Buy Now capability", "Order history tracking"],
                icon: "ShoppingCart"
            },
            {
                title: "Loyalty & Rewards Program",
                points: ["Points earning system", "Reward tracking", "Retention strategy"],
                icon: "Trophy"
            },
            {
                title: "Member Account Management",
                points: ["Profile management", "Secure login system", "Reward history"],
                icon: "Users"
            }
        ],
        process: [
            {
                stage: "Business & Commerce Flow Planning",
                description: "Mapped complete customer shopping journey and reward logic.",
                points: ["Browsing flow optimization", "Cart-to-checkout mapping", "Reward logic structuring"]
            },
            {
                stage: "UX & Interface Design",
                description: "Focused on conversion, simplicity, and reward visibility.",
                points: ["Clean product layout", "Easy checkout interaction", "Reward visibility"]
            },
            {
                stage: "Development",
                description: "Built scalable mobile commerce architecture with MPay integration.",
                points: ["React Native development", "PHP backend API", "MPay integration", "Loyalty logic"]
            },
            {
                stage: "Testing & Security Validation",
                description: "Ensured safe and stable transactions and authentication.",
                points: ["Payment flow testing", "OTP validation", "Performance tuning"]
            },
            {
                stage: "Deployment & Optimization",
                description: "Prepared for production release on Play Store and App Store.",
                points: ["App Store readiness", "Cloud configuration", "Performance tracking"]
            }
        ],
        results: [
            { metric: "Engagement", value: "High" },
            { metric: "Retention", value: "Loyalty-driven" },
            { metric: "Payments", value: "Secure MPay" },
            { metric: "Performance", value: "Cross-platform" }
        ],
        screenshots: [
            { title: "App Interface", url: "/assets/macauntrition.jpg" }
        ]
    }
];

