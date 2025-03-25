import React from 'react'
import Footer from '../components/Footer'
import { Award, BookOpen, Target, Users, Workflow } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen bg-dark-300 text-white">
        
    <main className="pt-24">
      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl  font-bold mb-6 text-gradient ">About ExpertEdge</h1>
          <p className="text-light-200 text-lg max-w-3xl mx-auto">
            Connecting passionate mentors with ambitious mentees for growth, learning, and success.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="glass p-8 rounded-2xl mb-16  max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-light-200 leading-relaxed">
            Our mission is to democratize access to mentorship, making it accessible to everyone 
            regardless of their background or location. We believe that personalized guidance can 
            transform careers and lives, bridging the gap between where you are and where you want to be.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
          {[
            {
              icon: <Users className="text-blue-400 mb-4" size={32} />,
              title: "Community First",
              description: "We're building a vibrant community where knowledge sharing is celebrated and relationships flourish."
            },
            {
              icon: <Award className="text-blue-400 mb-4" size={32} />,
              title: "Quality Mentorship",
              description: "We carefully curate our platform to ensure high-quality mentors who are passionate about helping others grow."
            },
            {
              icon: <Workflow className="text-blue-400 mb-4" size={32} />,
              title: "Continuous Growth",
              description: "We believe in lifelong learning and continuous improvement for both mentors and mentees."
            },
            {
              icon: <Target className="text-blue-400 mb-4" size={32} />,
              title: "Actionable Guidance",
              description: "Our mentors provide practical, actionable advice that can be immediately applied."
            },
            {
              icon: <BookOpen className="text-blue-400 mb-4" size={32} />,
              title: "Knowledge Sharing",
              description: "We foster an environment where expertise is shared openly and generously."
            },
            {
              icon: <Users className="text-blue-400 mb-4" size={32} />,
              title: "Inclusive Access",
              description: "We're committed to making mentorship accessible across diverse backgrounds and experience levels."
            }
          ].map((value, index) => (
            <div 
              key={index} 
              className="glass p-6 rounded-xl"
            >
              {value.icon}
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-light-200/70">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-light-200 max-w-3xl mx-auto">
              Meet the passionate individuals behind Mentor, dedicated to creating 
              the best mentorship platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
                bio: "Former tech executive with a passion for education and mentorship."
              },
              {
                name: "Maya Rodriguez",
                role: "Head of Community",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
                bio: "Community builder who believes in the power of connections and knowledge sharing."
              },
              {
                name: "David Chen",
                role: "Chief Technology Officer",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
                bio: "Tech innovator focused on creating intuitive and powerful platforms."
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="glass p-6 rounded-xl text-center "
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-blue-400 mb-2">{member.role}</p>
                <p className="text-light-200/70">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="glass p-8 rounded-2xl max-w-4xl mx-auto opacity-0">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="text-light-200 space-y-4">
            <p>
              Mentor was born out of a simple observation: finding the right guidance at the right time 
              can completely transform a career journey. Our founder, Alex, experienced firsthand how 
              proper mentorship accelerated his professional growth.
            </p>
            <p>
              What started as a small community of tech professionals helping each other has evolved 
              into a comprehensive platform connecting mentors and mentees across dozens of industries 
              and disciplines.
            </p>
            <p>
              Today, we're proud to facilitate thousands of mentorship connections every month, 
              helping professionals worldwide reach their full potential through personalized guidance 
              and support.
            </p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
  )
}

export default About