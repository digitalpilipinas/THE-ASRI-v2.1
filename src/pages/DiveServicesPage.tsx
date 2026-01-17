import React from 'react'
import { Award, Camera, Compass, Shield, LucideIcon } from 'lucide-react'
import NeumorphicButton from '@/components/NeumorphicButton'
import NeumorphicCard from '@/components/NeumorphicCard'
import { resortImages } from '@/data/mockData'
import { Link } from 'react-router-dom'

interface Course {
  id: number
  name: string
  price: string
  duration: string
  icon: LucideIcon
  features: string[]
}

const DiveServicesPage: React.FC = () => {
  const courses: Course[] = [
    { id: 1, name: "Discover Scuba Diving", price: "3,500", duration: "Half Day", icon: Award, features: ["Pool session", "1 shallow dive", "All equipment", "No cert required"] },
    { id: 2, name: "PADI Open Water Diver", price: "22,000", duration: "3-4 Days", icon: Award, features: ["eLearning included", "5 pool dives", "4 open water dives", "International cert"] },
    { id: 3, name: "PADI Advanced Open Water", price: "18,000", duration: "2-3 Days", icon: Compass, features: ["5 adventure dives", "Deep dive 30m", "Navigation dive", "3 elective dives"] },
    { id: 4, name: "PADI Rescue Diver", price: "20,000", duration: "3 Days", icon: Shield, features: ["Emergency training", "Rescue scenarios", "First aid skills", "EFR cert"] },
    { id: 5, name: "PADI Divemaster", price: "45,000", duration: "2-3 Weeks", icon: Award, features: ["Professional level", "Leadership training", "Work as dive guide", "Internship options"] },
    { id: 6, name: "Underwater Photography", price: "12,000", duration: "2 Days", icon: Camera, features: ["Camera techniques", "Macro photography", "2 guided dives", "Photo review"] }
  ]

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${resortImages.hero.diveServices})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D7070]/70 to-[#0D7070]/80"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-white mb-6">
            Start Your Diving Journey
          </h1>
          <p className="font-lato text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            PADI 5-Star training in Anilao warm, calm waters with expert instructors who genuinely care about your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-3">
              <p className="font-lato text-white font-bold">1:3 Instructor Ratio</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-3">
              <p className="font-lato text-white font-bold">100% Safety Record</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-3">
              <p className="font-lato text-white font-bold">eLearning Included</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332] mb-4">
              PADI Courses and Certifications
            </h2>
            <p className="font-lato text-lg text-[#4A5568]">
              From first breath underwater to professional divemaster - we will guide you every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => {
              const IconComponent = course.icon
              return (
                <NeumorphicCard key={course.id} className="flex flex-col h-full">
                  <div className="bg-gradient-to-br from-[#0D7070] to-[#0a5555] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">{course.name}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-lato font-bold text-2xl text-[#FF6B6B]">{course.price} PHP</span>
                    <span className="font-lato text-sm text-[#718096]">{course.duration}</span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="font-lato text-sm text-[#718096]">• {feature}</li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <NeumorphicButton variant="primary" size="md" className="w-full">Enroll Now</NeumorphicButton>
                  </Link>
                </NeumorphicCard>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-[#1A2332] mb-4">
              Fun Dives and Pricing
            </h2>
            <p className="font-lato text-lg text-[#4A5568]">
              Already certified? Join us for guided dives at Puerto Galera best sites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NeumorphicCard padding="md">
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">Single Dive</h3>
              <p className="font-lato font-bold text-3xl text-[#0D7070] mb-2">1,400 PHP</p>
              <p className="font-lato text-sm text-[#718096]">Boat dive, tank, weights, guide</p>
            </NeumorphicCard>

            <NeumorphicCard padding="md">
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">3-Dive Package</h3>
              <p className="font-lato font-bold text-3xl text-[#FF6B6B] mb-2">3,900 PHP</p>
              <p className="font-lato text-sm text-[#718096]">Save 300 PHP | Valid 3 days</p>
            </NeumorphicCard>

            <NeumorphicCard padding="md">
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-2">10-Dive Package</h3>
              <p className="font-lato font-bold text-3xl text-[#FF6B6B] mb-2">12,500 PHP</p>
              <p className="font-lato text-sm text-[#718096]">Save 1,500 PHP | Valid 30 days</p>
            </NeumorphicCard>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F1E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#1A2332] mb-6">
            Ready to Dive In?
          </h2>
          <p className="font-lato text-lg text-[#4A5568] mb-8">
            Book your course or fun dives today. Our team is here to make your diving dreams come true.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rates">
              <NeumorphicButton variant="coral" size="lg">View Dive Packages</NeumorphicButton>
            </Link>
            <Link to="/contact">
              <NeumorphicButton variant="outline" size="lg">Contact Us</NeumorphicButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DiveServicesPage