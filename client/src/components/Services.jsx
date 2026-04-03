import React, { useState, useEffect, useRef } from 'react';
import { 
  FaCode, FaPalette, FaServer, FaDatabase, 
  FaMobile, FaRocket, FaShoppingCart, FaChartLine 
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const servicesData = [
    {
      id: 1,
      icon: <FaCode />,
      title: "Web Development",
      shortDesc: "Full-stack web applications",
      description: "Building responsive and scalable web applications using modern technologies like React, Node.js, and MongoDB. From concept to deployment, I create seamless user experiences.",
      features: [
        "Responsive Design",
        "RESTful APIs",
        "Database Integration",
        "Performance Optimization"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      color: "#61DAFB",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      icon: <FaPalette />,
      title: "UI/UX Design",
      shortDesc: "User-centered design solutions",
      description: "Crafting intuitive and visually appealing interfaces that enhance user engagement. I focus on creating designs that are both beautiful and functional.",
      features: [
        "Wireframing & Prototyping",
        "User Research",
        "Visual Design",
        "Interaction Design"
      ],
      technologies: ["Figma", "Adobe XD", "Tailwind CSS", "Material UI"],
      color: "#F24E1E",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      icon: <FaServer />,
      title: "API Development",
      shortDesc: "Robust backend solutions",
      description: "Developing secure and efficient RESTful APIs with proper authentication, error handling, and documentation. Built to scale and integrate seamlessly.",
      features: [
        "REST API Design",
        "Authentication & Authorization",
        "API Documentation",
        "Third-party Integrations"
      ],
      technologies: ["Node.js", "Express", "JWT", "Postman"],
      color: "#339933",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 4,
      icon: <FaDatabase />,
      title: "Database Design",
      shortDesc: "Efficient data architecture",
      description: "Designing and implementing optimized database schemas for both SQL and NoSQL databases. Ensuring data integrity, security, and performance.",
      features: [
        "Schema Design",
        "Query Optimization",
        "Data Modeling",
        "Migration & Backup"
      ],
      technologies: ["MongoDB", "MySQL", "Mongoose", "PostgreSQL"],
      color: "#47A248",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      id: 5,
      icon: <FaMobile />,
      title: "Mobile Responsive",
      shortDesc: "Cross-platform compatibility",
      description: "Creating mobile-first, responsive applications that work flawlessly across all devices and screen sizes. Focus on performance and user experience.",
      features: [
        "Mobile-First Design",
        "Cross-browser Testing",
        "Touch Optimization",
        "Progressive Web Apps"
      ],
      technologies: ["React", "CSS3", "Bootstrap", "Tailwind"],
      color: "#FF6B6B",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 6,
      icon: <FaRocket />,
      title: "Deployment & DevOps",
      shortDesc: "Cloud deployment solutions",
      description: "Managing application deployment on various cloud platforms with CI/CD pipelines. Ensuring high availability and scalability.",
      features: [
        "Cloud Deployment",
        "CI/CD Setup",
        "Performance Monitoring",
        "Server Configuration"
      ],
      technologies: ["Vercel", "Render", "GitHub Actions", "Docker"],
      color: "#FF9500",
      gradient: "linear-gradient(135deg, #f857a6 0%, #ff5858 100%)"
    },
    {
      id: 7,
      icon: <FaShoppingCart />,
      title: "E-Commerce Solutions",
      shortDesc: "Online store development",
      description: "Building complete e-commerce platforms with shopping cart, payment integration, and inventory management. Secure and user-friendly.",
      features: [
        "Shopping Cart System",
        "Payment Gateway Integration",
        "Order Management",
        "Admin Dashboard"
      ],
      technologies: ["React", "Stripe", "PayPal", "MongoDB"],
      color: "#9B59B6",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      id: 8,
      icon: <FaChartLine />,
      title: "Performance Optimization",
      shortDesc: "Speed & efficiency improvements",
      description: "Analyzing and optimizing application performance for faster load times and better user experience. Code splitting, lazy loading, and caching strategies.",
      features: [
        "Code Optimization",
        "Lazy Loading",
        "Caching Strategies",
        "Performance Audits"
      ],
      technologies: ["Lighthouse", "Webpack", "React.lazy", "Redis"],
      color: "#3498DB",
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    }
  ];

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="services-container">
        {/* Header */}
        <div className={`services-header ${isVisible ? 'animate' : ''}`}>
          <span className="section-tag">What I Offer</span>
          <h2 className="services-heading">
            My <span className="highlight">Services</span>
          </h2>
          <p className="services-description">
            Comprehensive solutions for your digital needs. From design to deployment,
            I provide end-to-end services to bring your ideas to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`services-grid ${isVisible ? 'animate' : ''}`}>
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${activeService === service.id ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="card-inner">
                {/* Front Side */}
                <div className="card-front">
                  <div 
                    className="service-icon" 
                    style={{ background: service.gradient }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-short-desc">{service.shortDesc}</p>
                  <div className="service-technologies">
                    {service.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <button className="learn-more-btn">
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                {/* Back Side (Hover) */}
                <div className="card-back" style={{ background: service.gradient }}>
                  <h3 className="service-title-back">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13.3 4.7L6 12L2.7 8.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="contact-btn">Get Started</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`services-cta ${isVisible ? 'animate' : ''}`}>
          <div className="cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's work together to create something amazing</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="#projects" className="btn btn-outline">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;