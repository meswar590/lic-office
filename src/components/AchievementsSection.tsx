import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Trophy, Award, Medal, Star, Crown, Target } from 'lucide-react';

const RecognitionGallery = () => {
  const [currentRecognitionIndex, setCurrentRecognitionIndex] = useState(0);
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);
  
  const recognitionImages = [
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
  ];

  // Placeholder certificates (will be replaced later)
  const certificateImages = [
    { src: "/recognition/award-1.jpg", alt: "Certificate 1" },
    { src: "/recognition/award-2.jpg", alt: "Certificate 2" },
    { src: "/recognition/award-3.jpg", alt: "Certificate 3" },
    { src: "/recognition/award-4.jpg", alt: "Certificate 4" },
    { src: "/recognition/award-5.jpg", alt: "Certificate 5" }
  ];

  // Recognition photos carousel (1.5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRecognitionIndex((prev) => (prev + 1) % recognitionImages.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [recognitionImages.length]);

  // Certificate photos carousel (2 seconds for variety)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCertificateIndex((prev) => (prev + 1) % certificateImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [certificateImages.length]);

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-card">
      <h3 className="text-2xl font-bold text-navy text-center mb-8 bg-white-200 px-6 py-3 rounded-lg center-block">Recognition Gallery</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Frame - Recognition Awards */}
        <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-xl p-6 border-2 border-blue-200">
          <h4 className="text-lg font-bold text-navy text-center mb-4">Recognition Awards</h4>
          <div className="relative w-full">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img 
                src={recognitionImages[currentRecognitionIndex].src} 
                alt={recognitionImages[currentRecognitionIndex].alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
            
            {/* Recognition indicators */}
            <div className="flex justify-center mt-4 space-x-1">
              {recognitionImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentRecognitionIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentRecognitionIndex ? 'bg-blue-600 scale-125' : 'bg-navy/30'
                  }`}
                />
              ))}
            </div>
            
            <p className="text-center text-navy/60 text-sm mt-3">
              {recognitionImages[currentRecognitionIndex].alt}
            </p>
          </div>
        </div>

        {/* Right Frame - Certificates & Other Photos */}
        <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-xl p-6 border-2 border-yellow-200">
          <h4 className="text-lg font-bold text-navy text-center mb-4">Certificates & Awards</h4>
          <div className="relative w-full">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img 
                src={certificateImages[currentCertificateIndex].src} 
                alt={certificateImages[currentCertificateIndex].alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
            
            {/* Certificate indicators */}
            <div className="flex justify-center mt-4 space-x-1">
              {certificateImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCertificateIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentCertificateIndex ? 'bg-yellow-600 scale-125' : 'bg-navy/30'
                  }`}
                />
              ))}
            </div>
            
            <p className="text-center text-navy/60 text-sm mt-3">
              {certificateImages[currentCertificateIndex].alt}
            </p>
          </div>
        </div>
      </div>
      
      <p className="text-center text-navy/60 text-sm mt-6">
        30+ Years of Excellence - Awards and Recognition from LIC India
      </p>
    </div>
  );
};

const LifetimeAchievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const achievements = [
    {
      image: "/src/assets/postal-stamp-award.jpg",
      caption: "Special recognition with a commemorative postal stamp – a rare honor acknowledging exceptional service to the insurance industry and the nation."
    },
    {
      image: "/src/assets/chairman-award.jpg", 
      caption: "A proud moment as Maddali Sreehari was honored and personally recognized by LIC Chairman Shri M. R. Kumar for his remarkable achievements."
    },
    {
      image: "/src/assets/zonal-manager-award.jpg",
      caption: "Honored by Zonal Manager Shri Jagannatham for achieving 10× MDRT – a milestone of excellence in the insurance industry."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [achievements.length]);

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-card mb-12">
      <h3 className="text-2xl font-bold text-navy text-center mb-8">Lifetime Achievements</h3>
      
      <div className="relative w-full max-w-3xl mx-auto">
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
          <img 
            src={achievements[currentIndex].image} 
            alt={`Achievement ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>
        
        <div className="flex justify-center mt-4 space-x-2">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-gold scale-125' : 'bg-navy/30'
              }`}
            />
          ))}
        </div>
        
        <p className="text-center text-navy/70 text-sm mt-4 max-w-2xl mx-auto">
          {achievements[currentIndex].caption}
        </p>
      </div>
    </div>
  );
};

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


        {/* Lifetime Achievements */}
        <LifetimeAchievements />

        {/* Recognition Gallery */}
        <RecognitionGallery />
      </div>
    </section>
  );
};

export default AchievementsSection;