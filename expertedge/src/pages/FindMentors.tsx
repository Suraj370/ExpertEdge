
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui-elements/Button';
import { Search, Filter, Star, Calendar, Clock, ExternalLink, CheckCircle, X } from 'lucide-react';
import { cn } from '../lib/utils';

// Define mentor data interface
interface Mentor {
  id: number;
  name: string;
  role: string;
  company: string;
  imgUrl: string;
  rating: number;
  sessions: number;
  price: number;
  specialties: string[];
  availability: string;
  isVerified: boolean;
}

// Sample mentor data
const mentorsData: Mentor[] = [
  {
    id: 1,
    name: "Alexandra Chen",
    role: "Senior Product Designer",
    company: "Airbnb",
    imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 4.9,
    sessions: 124,
    price: 75,
    specialties: ["UX Design", "Product Strategy", "Career Advice"],
    availability: "Next available: Tomorrow",
    isVerified: true
  },
  {
    id: 2,
    name: "Michael Stevens",
    role: "Engineering Manager",
    company: "Google",
    imgUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 4.8,
    sessions: 86,
    price: 90,
    specialties: ["Frontend", "Leadership", "System Design"],
    availability: "Next available: This week",
    isVerified: true
  },
  {
    id: 3,
    name: "Sophia Williams",
    role: "Marketing Director",
    company: "Spotify",
    imgUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    rating: 4.7,
    sessions: 152,
    price: 65,
    specialties: ["Growth Strategy", "Branding", "Social Media"],
    availability: "Next available: Today",
    isVerified: true
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Data Scientist",
    company: "Netflix",
    imgUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    rating: 4.6,
    sessions: 78,
    price: 85,
    specialties: ["Machine Learning", "Python", "Data Analysis"],
    availability: "Next available: Tomorrow",
    isVerified: false
  },
  {
    id: 5,
    name: "Rebecca Taylor",
    role: "UX Research Lead",
    company: "Microsoft",
    imgUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 4.9,
    sessions: 132,
    price: 95,
    specialties: ["User Research", "Interface Design", "Prototyping"],
    availability: "Next available: This week",
    isVerified: true
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Startup Advisor",
    company: "Y Combinator",
    imgUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 4.8,
    sessions: 241,
    price: 120,
    specialties: ["Startup Strategy", "Fundraising", "Product-Market Fit"],
    availability: "Next available: Next week",
    isVerified: true
  }
];

// Filter options for categories
const categories = [
  "All Categories",
  "Software Development",
  "Design",
  "Marketing",
  "Career Development",
  "Product Management",
  "Data Science",
  "Startup"
];

// Filter options for availability
const availabilityOptions = [
  "Any Time",
  "Available Today",
  "Available This Week",
  "Available Next Week"
];

const FindMentors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedAvailability, setSelectedAvailability] = useState('Any Time');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-dark-300 text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Find Your Perfect Mentor</h1>
            <p className="text-light-200 max-w-3xl mx-auto mb-8">
              Connect with experienced professionals who can help you achieve your goals and advance your career
            </p>
            
            {/* Search bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="flex items-center relative">
                <Search className="absolute left-3 text-light-300/50" size={20} />
                <input 
                  type="text"
                  placeholder="Search by name, skill, or role..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg glass bg-white/5 text-light-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button 
                  variant="ghost"
                  className="ml-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter size={18} className="mr-2" /> 
                  Filters
                </Button>
              </div>
              
              {/* Filters */}
              {showFilters && (
                <div className="glass mt-3 p-4 rounded-lg animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Category</h3>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <button
                            key={category}
                            className={cn(
                              "text-xs px-3 py-1.5 rounded-full",
                              selectedCategory === category 
                                ? "bg-blue-500 text-white" 
                                : "bg-white/5 text-light-300 hover:bg-white/10"
                            )}
                            onClick={() => setSelectedCategory(category)}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-2">Availability</h3>
                      <div className="flex flex-wrap gap-2">
                        {availabilityOptions.map((option) => (
                          <button
                            key={option}
                            className={cn(
                              "text-xs px-3 py-1.5 rounded-full",
                              selectedAvailability === option 
                                ? "bg-blue-500 text-white" 
                                : "bg-white/5 text-light-300 hover:bg-white/10"
                            )}
                            onClick={() => setSelectedAvailability(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
          
          {/* Results section */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Available Mentors</h2>
              <div className="text-light-300 text-sm">
                Showing {mentorsData.length} mentors
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentorsData.map((mentor) => (
                <Card key={mentor.id} className="glass animate-float">
                  <CardContent className="p-5">
                    <div className="absolute -top-1 -right-1 bg-blue-400 text-xs font-semibold rounded-full px-2 py-1 text-white">
                      <span className="flex items-center">
                        <Star className="w-3 h-3 inline mr-1 fill-white" strokeWidth={0} />
                        {mentor.rating}
                      </span>
                    </div>
                    
                    <div className="flex gap-4 items-start mb-4">
                      <div className="relative">
                        <img 
                          src={mentor.imgUrl} 
                          alt={mentor.name} 
                          className="w-16 h-16 rounded-xl object-cover" 
                        />
                        {mentor.isVerified && (
                          <CheckCircle className="absolute -bottom-1 -right-1 w-5 h-5 text-blue-400 bg-dark-300 rounded-full" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{mentor.name}</h3>
                        <p className="text-light-300/70 text-sm">{mentor.role} at {mentor.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {mentor.specialties.map((specialty, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-white/5 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 text-xs text-light-300/70 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {mentor.sessions} sessions
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        60 min
                      </div>
                    </div>
                    
                    <div className="text-xs text-light-200 mb-4">
                      {mentor.availability}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="font-semibold">${mentor.price} <span className="text-light-300/50 text-xs">/ hour</span></span>
                      <Button size="sm" rightIcon={<ExternalLink className="w-3 h-3" />}>
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FindMentors;