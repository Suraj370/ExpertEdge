import React from "react";
import { Star, Calendar, Clock, ExternalLink } from "lucide-react";
import { Button } from "./ui-elements/Button";
import { cn } from "../lib/utils";

interface MentorData {
  id: number;
  name: string;
  role: string;
  company: string;
  imgUrl: string;
  rating: number;
  sessions: number;
  price: number;
  specialties: string[];
}

const mentorsData: MentorData[] = [
  {
    id: 1,
    name: "Alexandra Chen",
    role: "Senior Product Designer",
    company: "Airbnb",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 4.9,
    sessions: 124,
    price: 75,
    specialties: ["UX Design", "Product Strategy", "Career Advice"],
  },
  {
    id: 2,
    name: "Michael Stevens",
    role: "Engineering Manager",
    company: "Google",
    imgUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 4.8,
    sessions: 86,
    price: 90,
    specialties: ["Frontend", "Leadership", "System Design"],
  },
  {
    id: 3,
    name: "Sophia Williams",
    role: "Marketing Director",
    company: "Spotify",
    imgUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    rating: 4.7,
    sessions: 152,
    price: 65,
    specialties: ["Growth Strategy", "Branding", "Social Media"],
  },
];

const MentorCard = ({
  mentor,
  index,
}: {
  mentor: MentorData;
  index: number;
}) => {
  return (
    <div className= {cn("relative glass rounded-2xl p-5  animate-scale-in",
        `animation-delay-${(index + 1) * 100}`)}>
      <div className="absolute -top-1 -right-1 bg-blue-400 text-xs font-semibold rounded-full px-2 py-1 text-white">
        <span className="flex items-center">
          <Star className="w-3 h-3 inline mr-1 fill-white" strokeWidth={0} />
          {mentor.rating}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
        <img
          src={mentor.imgUrl}
          alt={mentor.name}
          className="w-16 h-16 rounded-xl object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{mentor.name}</h3>
          <p className="text-light-300/70 text-sm">
            {mentor.role} at {mentor.company}
          </p>
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

      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <span className="font-semibold">
          ${mentor.price}{" "}
          <span className="text-light-300/50 text-xs">/ hour</span>
        </span>
        <Button size="sm" rightIcon={<ExternalLink className="w-3 h-3" />}>
          View Profile
        </Button>
      </div>
    </div>
  );
};

const FeaturedMentors = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Mentors</h2>
          <p className="text-light-300/70 max-w-2xl mx-auto">
            Learn from industry leaders with proven expertise and a passion for
            helping others succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentorsData.map((mentor, index) => (
            <MentorCard key={mentor.id} mentor={mentor} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Browse All Mentors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMentors;
