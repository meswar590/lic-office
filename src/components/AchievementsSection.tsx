import React from 'react';
import { Card } from '@/components/ui/card';
import { Trophy, Award, Medal, Star, Crown, Target } from 'lucide-react';

const AchievementsSection = () => {

  const achievements = [
    {
      icon: <Crown className="w-12 h-12 text-gold" />,
      title: "MDRT Qualifier",
      subtitle: "Million Dollar Round Table",
      year: "2020-2024",
      description: "Recognized globally for exceptional sales performance and professional excellence"
    },
    {
      icon: <Trophy className="w-12 h-12 text-gold" />,
      title: "Chairman's Club",
      subtitle: "Top Performer",
      year: "2019-2023",
      description: "Consistent top performer in LIC's prestigious Chairman's Club category"
    },
    {
      icon: <Star className="w-12 h-12 text-gold" />,
      title: "Best Agent Award",
      subtitle: "Regional Level",
      year: "2021-2022",
      description: "Outstanding performance in customer service and policy sales across the region"
    },
    {
      icon: <Medal className="w-12 h-12 text-gold" />,
      title: "Excellence in Service",
      subtitle: "Customer Satisfaction",
      year: "2018-2024",
      description: "Awarded for maintaining highest customer satisfaction and retention rates"
    },
    {
      icon: <Target className="w-12 h-12 text-gold" />,
      title: "100% Target Achievement",
      subtitle: "Consecutive Years",
      year: "2015-2024",
      description: "Consistently exceeding sales targets for over 9 consecutive years"
    },
    {
      icon: <Award className="w-12 h-12 text-gold" />,
      title: "Community Service",
      subtitle: "Social Impact",
      year: "2010-2024",
      description: "Recognized for outstanding contribution to community financial literacy"
    }
  ];

  const stats = [
    { number: "100+", label: "Awards Won", icon: <Trophy className="w-8 h-8 text-gold" /> },
    { number: "30+", label: "Years Experience", icon: <Medal className="w-8 h-8 text-gold" /> },
    { number: "2000+", label: "Families Secured", icon: <Star className="w-8 h-8 text-gold" /> },
    { number: "₹50Cr+", label: "Claims Settled", icon: <Crown className="w-8 h-8 text-gold" /> }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Awards &
            <span className="block text-gold">Recognition</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-navy/70 max-w-3xl mx-auto">
            Three decades of excellence recognized through numerous awards, 
            testimonials, and the trust of thousands of satisfied families.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-to-br from-yellow-100 to-blue-100 backdrop-blur-sm border-2 border-blue-500 shadow-lg hover:shadow-hero hover:border-blue-600 transition-all duration-300">
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-navy mb-2">{stat.number}</div>
              <div className="text-navy/70 font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="group p-6 bg-white/90 backdrop-blur-sm hover:shadow-hero transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-gold"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-navy mb-1">{achievement.title}</h3>
                  <p className="text-gold font-bold text-sm mb-1">{achievement.subtitle}</p>
                  <span className="text-xs font-bold bg-navy/10 text-navy px-2 py-1 rounded-full">
                    {achievement.year}
                  </span>
                </div>
              </div>
              <p className="text-navy/70 text-sm font-bold leading-relaxed">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>


        {/* Recognition Gallery */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-navy text-center mb-8 bg-white-200 px-6 py-3 rounded-lg center-block">Recognition Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { src: "/recognition/award-1.jpg", alt: "Award Recognition Ceremony" },
              { src: "/recognition/award-2.jpg", alt: "LIC Achievement Award" },
              { src: "/recognition/award-3.jpg", alt: "Award Ceremony with Officials" },
              { src: "/recognition/award-4.jpg", alt: "MDRT-23 Achievement" },
              { src: "/recognition/award-5.jpg", alt: "Dussehra Diwali Meet Award" },
              { src: "/recognition/award-6.jpg", alt: "LIC Branch Recognition" },
              { src: "/recognition/award-7.jpg", alt: "1 Crore Premium Achievement" },
              { src: "/recognition/award-8.jpg", alt: "Branch Award Recognition" },
              { src: "/recognition/award-9.jpg", alt: "Quarterly Achievement Award" },
              { src: "/recognition/award-10.jpg", alt: "Office Recognition Event" }
            ].map((award, index) => (
              <div 
                key={index} 
                className="aspect-square rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <img 
                  src={award.src} 
                  alt={award.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-navy/60 text-sm mt-6">
            30+ Years of Excellence - Awards and Recognition from LIC India
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;