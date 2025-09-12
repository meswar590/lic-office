import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Award, Users, Calendar } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left text-white">
            <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5 text-gold" />
              <span className="text-gold font-medium">100+ Awards Winner</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
              30+ Years of
              <span className="block text-gold">Securing Lives</span>
              <span className="block text-lg md:text-xl font-normal text-white/90 mt-2">
                2000+ Families Protected
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Your trusted LIC agent in Chimakurthy, dedicated to building secure financial futures 
              for families across Andhra Pradesh.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calendar className="w-6 h-6 text-gold" />
                  <span className="text-3xl font-bold">30+</span>
                </div>
                <p className="text-white/80">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-6 h-6 text-gold" />
                  <span className="text-3xl font-bold">2000+</span>
                </div>
                <p className="text-white/80">Families Secured</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-6 h-6 text-gold" />
                  <span className="text-3xl font-bold">100+</span>
                </div>
                <p className="text-white/80">Awards Won</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-3 rounded-lg shadow-gold transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <div className="bg-white rounded-lg px-6 py-3 shadow-lg">
                <a 
                  href="tel:+919248426946" 
                  className="text-navy font-bold text-lg hover:text-gold transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 text-gold" />
                  +91 92484 26946
                </a>
              </div>
            </div>
          </div>
          
          {/* Professional Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-80 h-96 md:w-96 md:h-[480px] rounded-2xl overflow-hidden shadow-hero">
                <img 
                  src="/lovable-uploads/692ae274-6920-4f39-bb94-d9d0187b22cf.png" 
                  alt="Professional LIC Agent - 30+ Years Experience" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;