import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Trophy, Code, Figma, Smartphone, Globe, Send, Menu, X, UserCheck, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { fadeIn, staggerContainer, scaleIn, } from './animations';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isHovering, setIsHovering] = useState(false);
  // const targetRef = useRef<HTMLDivElement>(null);

 
// Replace your existing cursor useEffect with this:
 

  const services = [
    { 
      icon: <Figma className="w-8 h-8" />, 
      title: 'UI/UX Design', 
      description: 'Crafting seamless and visually compelling user experiences that enhance usability and engagement.' 
    },
    { 
      icon: <Code className="w-8 h-8" />, 
      title: 'Web Development', 
      description: 'Developing fast, responsive, and scalable websites with modern technologies to ensure a smooth user experience.' 
    },
    { 
      icon: <Smartphone className="w-8 h-8" />, 
      title: 'Mobile Design', 
      description: 'Designing intuitive, high-performance mobile interfaces for iOS and Android to maximize user satisfaction.' 
    },
    { 
      icon: <Globe className="w-8 h-8" />, 
      title: 'Brand Identity', 
      description: 'Creating strong and memorable brand identities that communicate your vision and connect with your audience.' 
    }
  ]
  

  const process = [
    { 
      number: '01', 
      title: 'Discovery', 
      description: 'Deeply understanding your goals, target audience, and project requirements to lay a strong foundation.' 
    },
    { 
      number: '02', 
      title: 'Strategy', 
      description: 'Crafting a tailored roadmap that aligns with your vision, ensuring a structured and efficient workflow.' 
    },
    { 
      number: '03', 
      title: 'Design', 
      description: 'Creating visually stunning and user-friendly interfaces that enhance engagement and usability.' 
    },
    { 
      number: '04', 
      title: 'Development', 
      description: 'Transforming designs into fully functional, high-performance digital experiences with clean, scalable code.' 
    }
  ];
  

  const navItems = ['Services', 'Process', 'Work', 'Contact'];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            <div className="logo">
              <img src="public/xvantage_logo_copy.png" alt="Company Logo" />
            </div>
          </motion.div>


            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'border-t border-white/10' : ''}`}
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen pt-16">
        <motion.div style={{}} className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent mix-blend-screen" 
            style={{ 
              transform: `translate(calc(var(--mouse-x) * 20px), calc(var(--mouse-y) * 20px))`,
              opacity: 0.5 
            }} 
          />
        </motion.div>

        <motion.header 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 min-h-[calc(100vh-4rem)] flex flex-col justify-center px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-2 mb-8"
            >
              <Sparkles className="w-6 h-6 text-purple-500" />
              {/* <span className="text-purple-500 font-medium">Award-winning design studio</span> */}
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold mb-8 leading-tight">
            Empowering Innovation  
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Digital Magic
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-12">
            We craft intelligent, future-ready solutions that drive businesses forward.  
            From AI-powered applications to seamless user experiences, we transform ideas into reality.
            </p>

             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="magnetic-button bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 text-base sm:text-lg font-semibold"
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Our Work <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="magnetic-button border border-white/20 bg-white/5 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 text-base sm:text-lg font-semibold"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in Touch
              </motion.button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
</div>
          </motion.div>
        </motion.header>
      </div>

      {/* Services Section */}
      <motion.section
        id="services"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-20 sm:py-32 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 text-center"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'tween', 0.2 + index * 0.1, 1)}
                className="service-card border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl"
              >
                <div className="text-purple-500 mb-4">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        id="process"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-20 sm:py-32 relative z-10 bg-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 text-center"
          >
            Our Process
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'tween', 0.2 + index * 0.1, 1)}
                className="relative"
              >
                <div className="mb-4">
                  <span className="text-4xl sm:text-6xl font-bold text-outline">{step.number}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full process-line" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-20 sm:py-32 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { number: '250+', label: 'Projects Completed', icon: <Trophy className="w-6 sm:w-8 h-6 sm:h-8" /> },
              { number: '120+', label: 'Happy Clients', icon: <Users className="w-6 sm:w-8 h-6 sm:h-8" /> },
              { number: '15+', label: 'Employees', icon: <UserCheck className="w-6 sm:w-8 h-6 sm:h-8" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'tween', 0.2 + index * 0.1, 1)}
                className="border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl"
              >
                <div className="text-purple-500 mb-4">{stat.icon}</div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="py-20 sm:py-32 bg-black-900 text-white relative z-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-4xl font-bold">Our Awesome Team</h2>
    <div className="flex justify-center my-4">
      <div className="w-16 h-1 bg-purple-500"></div>
    </div>
    <p className="text-gray-400 max-w-2xl mx-auto">
      Effective collaboration between developers and designers is key to delivering innovative and high-quality products. 
      By aligning technical expertise with creative vision, our team ensures a seamless and impactful user experience.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
      {[
  { 
    img: "/public/emploe1.png", 
    name: "Vipul Sapra", 
    position: "CEO & Founder", 
    description: "A visionary leader with a passion for innovation, John drives the company's strategic growth and fosters a culture of excellence." 
  },
  { 
    img: "/public/employ3.png", 
    name: "Rahul Sapra", 
    position: "CTO & Co-Founder", 
    description: "With a deep technical background, Michael spearheads the technology roadmap, ensuring cutting-edge solutions and scalable architectures." 
  },
  { 
    img: "/public/emply2.png", 
    name: "Harsh Patel", 
    position: "MERN Developer", 
    description: "A full-stack expert specializing in the MERN stack, Jane builds high-performance applications with seamless user experiences." 
  },
  { 
    img: "/public/emplo4.png", 
    name: "Rahul Kavani", 
    position: "UI/UX Designer", 
    description: "Emily blends creativity with functionality, crafting visually appealing and user-friendly designs that enhance digital experiences." 
  }
]
.map((member, index) => (
        <div key={index} className="bg-white/10 p-6 rounded-2xl text-center backdrop-blur-sm">
          <img src={member.img} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-purple-400">{member.position}</p>
          <p className="text-gray-400 mt-2">{member.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Featured Work */}
      <motion.section
        id="work"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-20 sm:py-32 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
            id="featured-work"
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 text-center"
          >
            Featured Work
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { 
                title: 'React',
                desc: 'Modern Farm platform with booking features',
                image: '/public/image (2).png',
                category: 'Nandanvan Farm',
                link: 'https://www.nandanvanfarm.com/'
              },
              {
                title: 'App Development',
                desc: 'Next-gen Age-Calc for count your perfect Age with Zodiac Sign',
                image: '/public/Group 63.png',
                category: 'Age Calc',
                link: 'https://apps.apple.com/us/app/agecalc-date-life-calculator/id6739868943'

              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'tween', 0.3 + index * 0.1, 1)}
              >
                <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block cursor-none"
          >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="space-y-2">
                  <p className="text-purple-500 font-medium">{project.category}</p>
                  <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-400">{project.desc}</p>
                </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
  id="contact"
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  className="py-20 sm:py-32 relative z-10 bg-white/5"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Let's Work Together</h2>
      <p className="text-lg sm:text-xl text-gray-400">
        Have a project in mind? Let's create something amazing.
      </p>
    </motion.div>
    <motion.form
      variants={scaleIn}
      onSubmit={(e) => {
        e.preventDefault();
        const message = e.target.elements.message.value;

        const subject = encodeURIComponent("New Contact Inquiry");
        const body = encodeURIComponent(`${message}`);

        window.location.href = `mailto:hr@xvantageinfotech.com?subject=${subject}&body=${body}`;

        // Clear the form
        e.target.reset();
      }}
      className="max-w-2xl mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />
        </div>
      </div>
      <div className="mb-6 sm:mb-8">
        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          required
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="magnetic-button w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 text-base sm:text-lg font-semibold cursor-none"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        Send Message <Send className="w-5 h-5" />
      </motion.button>
    </motion.form>
  </div>
</motion.section>

<footer className="border-t border-white/10 py-4 sm:py-8 px-4 sm:px-6 lg:px-8 relative z-10">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-8 sm:gap-12">
      
      {/* Footer Sections - Left side (3 columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 w-full">
        {/* Company Section */}
        <div>
          <h3 className="text-xl font-bold mb-2">Company</h3>
          <ul className="text-gray-400 space-y-1">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Our Pricing</a></li>
            <li><a href="#" className="hover:text-white">Latest News</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-xl font-bold mb-2">Support</h3>
          <ul className="text-gray-400 space-y-1">
            <li><a href="#" className="hover:text-white">FAQ's</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Team</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="text-xl font-bold mb-2">Address</h3>
          <ul className="text-gray-400 space-y-1">
            <li>350 Royale Arcade, Sarthana Jakatnaka, Surat, Gujarat.</li>
            <li><a href="mailto:hr@xvantageinfotech.com" className="hover:text-white">hr@xvantageinfotech.com</a></li>
            <li><a href="tel:+919409150636" className="hover:text-white">+91 9409150636</a></li>
          </ul>
        </div>
      </div>

      {/* Social Icons - Far Right Corner with increased gap */}
      <div className="flex gap-6 sm:ml-16">
        {[
          { 
            icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />, 
            href: 'https://github.com/XvantageInfotech',
            label: 'GitHub'
          },
          { 
            icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />, 
            href: 'https://www.linkedin.com/company/xvantage-infotech',
            label: 'LinkedIn'
          },
          { 
            icon: <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />, 
            href: 'https://www.instagram.com/xvantage_infotech/',
            label: 'Instagram'
          },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  </div>
</footer>


    </div>
  );
}

export default App;