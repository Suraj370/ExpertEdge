import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui-elements/Button";
import {
  List,
  Grid2X2,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { cn } from "../lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";


// Define category data interface
interface Category {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
  mentorCount: number;
  color: string;
}

// Sample category data
const categoriesData: Category[] = [
  {
    id: 1,
    name: "Software Development",
    icon: <List className="h-5 w-5" />,
    description:
      "Learn coding, software architecture, and development best practices",
    mentorCount: 142,

    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    id: 2,
    name: "Design",
    icon: <Grid2X2 className="h-5 w-5" />,
    description: "Master UI/UX design, graphic design, and creative workflows",
    mentorCount: 87,
  
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    id: 3,
    name: "Business & Marketing",
    icon: <List className="h-5 w-5" />,
    description:
      "Grow your business with marketing, sales and strategy expertise",
    mentorCount: 95,
 
    color: "from-green-500/20 to-green-600/20",
  },
  {
    id: 4,
    name: "Career Development",
    icon: <Grid2X2 className="h-5 w-5" />,
    description:
      "Advance your professional growth with career guidance and skill development",
    mentorCount: 116,
    
    color: "from-yellow-500/20 to-yellow-600/20",
  },
  {
    id: 5,
    name: "Product Management",
    icon: <List className="h-5 w-5" />,
    description:
      "Learn product strategy, roadmapping, and execution from experts",
    mentorCount: 73,
   
    color: "from-red-500/20 to-red-600/20",
  },
  {
    id: 6,
    name: "Startup Advice",
    icon: <Grid2X2 className="h-5 w-5" />,
    description: "Get guidance on launching and growing your startup",
    mentorCount: 58,
  
    color: "from-teal-500/20 to-teal-600/20",
  },
];

// Filter options for sorting
const sortOptions = [
  "Most Popular",
  "Newest First",
  "Alphabetical (A-Z)",
  "Most Mentors",
];

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Most Popular");

  return (
    <div className="min-h-screen bg-dark-300 text-white">
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Browse Categories
            </h1>
            <p className="text-light-200 max-w-3xl mb-8">
              Explore our diverse range of mentorship categories and find
              guidance in your area of interest
            </p>

            {/* Search and filter bar */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-8">
              <div className="relative flex-1">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-light-300/50"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search categories..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg glass bg-white/5 text-light-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2">
                <Select value={selectedSort} onValueChange={setSelectedSort}>
                  <SelectTrigger className="glass bg-white/5 border-none focus:ring-2 focus:ring-blue-400 min-w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="glass backdrop-blur-xl bg-dark-400/95">
                    {sortOptions.map((option) => (
                      <SelectItem
                        key={option}
                        value={option}
                        className="focus:bg-white/10"
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex rounded-lg glass bg-white/5 p-1">
                  <button
                    className={cn(
                      "p-2 rounded-md transition-colors",
                      viewMode === "grid" ? "bg-white/10" : ""
                    )}
                    onClick={() => setViewMode("grid")}
                    aria-label="Grid view"
                  >
                    <Grid2X2 size={20} />
                  </button>
                  <button
                    className={cn(
                      "p-2 rounded-md transition-colors",
                      viewMode === "list" ? "bg-white/10" : ""
                    )}
                    onClick={() => setViewMode("list")}
                    aria-label="List view"
                  >
                    <List size={20} />
                  </button>
                </div>

                <Button
                  variant="ghost"
                  className="flex items-center gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter size={18} />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                  {showFilters ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </Button>
              </div>
            </div>

            {/* Filters panel */}
            {showFilters && (
              <div className="glass mb-8 p-4 rounded-lg animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">
                      Primary Categories
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "All",
                        "Technical",
                        "Creative",
                        "Business",
                        "Personal",
                      ].map((category) => (
                        <button
                          key={category}
                          className={cn(
                            "text-xs px-3 py-1.5 rounded-full",
                            category === "All"
                              ? "bg-blue-500 text-white"
                              : "bg-white/5 text-light-300 hover:bg-white/10"
                          )}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2">Mentor Count</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Any", "10+", "50+", "100+"].map((count) => (
                        <button
                          key={count}
                          className={cn(
                            "text-xs px-3 py-1.5 rounded-full",
                            count === "Any"
                              ? "bg-blue-500 text-white"
                              : "bg-white/5 text-light-300 hover:bg-white/10"
                          )}
                        >
                          {count}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2">
                      Experience Level
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "All Levels",
                        "Beginners",
                        "Intermediate",
                        "Advanced",
                      ].map((level) => (
                        <button
                          key={level}
                          className={cn(
                            "text-xs px-3 py-1.5 rounded-full",
                            level === "All Levels"
                              ? "bg-blue-500 text-white"
                              : "bg-white/5 text-light-300 hover:bg-white/10"
                          )}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Categories Section */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoriesData.map((category) => (
                <Card
                  key={category.id}
                  className={cn(
                    "animate-float glass ",
                    viewMode === "grid" ? "h-auto" : "h-auto"
                  )}
                >
                  <CardContent
                    className={cn(
                      "p-5 relative",
                      viewMode === "list" ? "flex items-center gap-4" : ""
                    )}
                  >
                    <div
                      className={cn(
                        "p-4 w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br mb-4",
                        category.color,
                        viewMode === "list" ? "mb-0 shrink-0" : ""
                      )}
                    >
                      {category.icon}
                    </div>

                    <div className={viewMode === "list" ? "flex-1" : ""}>
                      <h3 className="font-semibold text-xl mb-2">
                        {category.name}
                      </h3>
                      <p className="text-light-300/70 text-sm mb-3">
                        {category.description}
                      </p>

                      <div className="flex items-center justify-between mb-3">
                        <span className="text-light-200 text-sm">
                          {category.mentorCount} mentors
                        </span>

                      </div>

                      <Button variant="outline" size="sm" className="w-full">
                        Browse Mentors
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

export default Categories;
