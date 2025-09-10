import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, CheckCircle, Phone, ArrowLeft, Shield, Users, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthPlans = () => {
  const healthBenefits = [
    {
      icon: <Shield className="w-8 h-8 text-gold" />,
      title: "Cashless Hospitalization",
      description: "Get treatment at network hospitals without paying upfront",
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "Family Coverage",
      description: "Protect your entire family under one comprehensive plan",
    },
    {
      icon: <Heart className="w-8 h-8 text-gold" />,
      title: "Critical Illness Cover",
      description: "Financial support for major health conditions and treatments",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-gold" />,
      title: "Pre & Post Hospitalization",
      description: "Coverage for medical expenses before and after hospitalization",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex justify-center items-center gap-4 mb-6">
              <Heart className="w-12 h-12 text-gold" />
              <h1 className="text-4xl md:text-5xl font-bold text-navy">
                Health Insurance Plans
              </h1>
            </div>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-navy/70 max-w-4xl mx-auto">
              Comprehensive health coverage for you and your family's medical expenses and emergencies. Protect against rising healthcare costs with the right health insurance.
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-12 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">LIC Health Insurance Partnership</h3>
                <p className="text-blue-700 mb-3">
                  While LIC primarily focuses on life insurance, they have strategic partnerships for health insurance products. As your trusted LIC agent, I can guide you to the best health insurance options available.
                </p>
                <p className="text-blue-700 text-sm">
                  Let me help you find comprehensive health coverage that complements your LIC life insurance portfolio.
                </p>
              </div>
            </div>
          </div>

          {/* Health Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {healthBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-hero transition-all duration-300 hover:-translate-y-2 bg-white border-2 hover:border-gold/30">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                  <p className="text-navy/70 leading-relaxed">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Health Coverage Types */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
            <h2 className="text-2xl font-bold text-navy text-center mb-8">
              Types of Health Coverage Available
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍⚕️</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Individual Health Plans</h3>
                <p className="text-navy/70">Personal health coverage with customizable benefits and sum insured amounts</p>
                <ul className="mt-4 text-sm text-navy/60 space-y-1">
                  <li>• Personal medical coverage</li>
                  <li>• Flexible sum insured</li>
                  <li>• Affordable premiums</li>
                  <li>• Preventive care benefits</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Family Floater Plans</h3>
                <p className="text-navy/70">Comprehensive coverage for entire family under one policy with shared benefits</p>
                <ul className="mt-4 text-sm text-navy/60 space-y-1">
                  <li>• Family members covered</li>
                  <li>• Shared sum insured</li>
                  <li>• Cost-effective solution</li>
                  <li>• Newborn baby coverage</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏥</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Critical Illness Plans</h3>
                <p className="text-navy/70">Specialized coverage for major illnesses like cancer, heart disease, stroke</p>
                <ul className="mt-4 text-sm text-navy/60 space-y-1">
                  <li>• Lump sum payout</li>
                  <li>• Covers major diseases</li>
                  <li>• Income replacement</li>
                  <li>• Treatment flexibility</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Health Insurance is Essential */}
          <div className="bg-gradient-subtle rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-navy text-center mb-8">
              Why Health Insurance is Essential Today
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-navy mb-4">Rising Healthcare Costs</h3>
                <ul className="space-y-2 text-navy/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    Medical inflation rate of 10-15% annually
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    ICU costs can be ₹15,000-₹50,000 per day
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    Major surgeries cost ₹3-15 lakhs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    Cancer treatment can cost ₹10-30 lakhs
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy mb-4">Financial Protection Benefits</h3>
                <ul className="space-y-2 text-navy/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    Protects your life savings from medical emergencies
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    Tax benefits under Section 80D
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    No compromise on quality of treatment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    Peace of mind for you and family
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get the Right Health Insurance for Your Family
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Don't let medical expenses drain your savings. Let me help you find comprehensive health insurance that fits your budget and covers your family's healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-3 rounded-lg shadow-gold transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = 'tel:+919876543210'}
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Health Insurance Consultation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy"
                onClick={() => window.location.href = 'https://wa.me/919876543210?text=Hi, I need health insurance for my family'}
              >
                WhatsApp Now
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HealthPlans;