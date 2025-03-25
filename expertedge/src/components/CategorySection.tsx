import React from 'react';
import { CodeIcon, Palette, LineChart, BriefcaseIcon, Globe, RocketIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface Category {
  id: number;
  name: string;
  icon: React.ReactNode;
  count: number;
  color: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Software Development",
    icon: <CodeIcon />,
    count: 142,
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    id: 2,
    name: "Design",
    icon: <Palette />,
    count: 87,
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    id: 3,
    name: "Business & Marketing",
    icon: <LineChart />,
    count: 95,
    color: "from-green-500/20 to-green-600/20"
  },
  {
    id: 4,
    name: "Career Development",
    icon: <BriefcaseIcon />,
    count: 116,
    color: "from-yellow-500/20 to-yellow-600/20"
  },
  {
    id: 5,
    name: "Product Management",
    icon: <Globe />,
    count: 73,
    color: "from-red-500/20 to-red-600/20"
  },
  {
    id: 6,
    name: "Startup Advice",
    icon: <RocketIcon />,
    count: 58,
    color: "from-teal-500/20 to-teal-600/20"
  }
];

const CategorySection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute -bottom-40 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-light-300/70 max-w-2xl mx-auto">
            Find the right mentor for your specific goals and interests
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className={cn(
                "group relative rounded-2xl overflow-hidden bg-gradient-to-br p-6 hover:shadow-lg transition-all duration-300 glass cursor-pointer  animate-float",
                `animation-delay-${(index % 3) * 100 + 100}`,
                category.color
              )}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/10 text-white">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-blue-300 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-light-300/70 text-sm">{category.count} mentors</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;