import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, CheckCircle, Phone, ArrowLeft, Calendar, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const RetirementPlans = () => {
  const retirementPlans = [
    {
      name: "LIC's Jeevan Akshay VII (Immediate Annuity)",
      description: "Immediate regular income for life with single premium payment",
      features: ["Immediate income from next month", "Life-long pension", "Various annuity options", "Joint life options available"],
      status: "Recently withdrawn",
      ageRange: "30-85 years",
      minPurchasePrice: "₹1 Lakh"
    },
    {
      name: "LIC's Jeevan Shanti (Deferred Annuity)", 
      description: "Deferred annuity plan with guaranteed income after retirement",
      features: ["Deferred annuity benefits", "Guaranteed regular income", "Death benefit during deferment", "Multiple income options"],
      status: "Recently withdrawn",
      ageRange: "30-79 years",
      minPurchasePrice: "₹1.5 Lakhs"
    },
    {
      name: "LIC's Saral Pension Plan",
      description: "Simple and standardized pension plan for retirement planning",
      features: ["Standardized features", "Regular premium payment", "Vesting age flexibility", "Annuity options"],
      status: "Recently withdrawn", 
      ageRange: "40-80 years",
      minPurchasePrice: "₹1 Lakh"
    }
  ];

  const alternativeOptions = [
    {
      name: "LIC's New Jeevan Anand",
      description: "Whole life plan that can serve retirement planning needs",
      features: ["Coverage till age 100", "Maturity benefit", "Loan facility", "Bonus participation"]
    },
    {
      name: "LIC's Jeevan Labh Plan", 
      description: "Limited premium endowment with good returns for retirement corpus",
      features: ["Limited premium payment", "High bonus potential", "Guaranteed additions", "Survival benefits"]
    },
    {
      name: "LIC's Single Premium Endowment Plan",
      description: "Lump sum investment for retirement with guaranteed returns",
      features: ["Single premium payment", "Guaranteed maturity", "Bonus additions", "Tax benefits"]
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
              <Users className="w-12 h-12 text-gold" />
              <h1 className="text-4xl md:text-5xl font-bold text-navy">
                Retirement Planning
              </h1>
            </div>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-navy/70 max-w-4xl mx-auto">
              Build a comfortable retirement corpus with annuity and pension plans designed for your golden years. Secure regular income post-retirement.
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-12 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-orange-800 mb-2">Important Update</h3>
                <p className="text-orange-700 mb-3">
                  Some of LIC's popular pension plans have been recently withdrawn from the market. However, I can help you with alternative retirement planning solutions using available LIC products.
                </p>
                <p className="text-orange-700 text-sm">
                  Contact me to discuss the best retirement planning strategy for your specific needs.
                </p>
              </div>
            </div>
          </div>

          {/* Recently Withdrawn Plans */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-6 text-center">Recently Withdrawn Pension Plans</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {retirementPlans.map((plan, index) => (
                <Card key={index} className="p-6 bg-gray-50 border-2 border-gray-200 opacity-80">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-700">{plan.name}</h3>
                  </div>
                  
                  <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                    {plan.status}
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {plan.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Entry Age:</span>
                      <span className="text-gray-700 font-semibold">{plan.ageRange}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Min Amount:</span>
                      <span className="text-gray-700 font-semibold">{plan.minPurchasePrice}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-700 text-sm mb-3">Features:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-gray-300 text-gray-600 cursor-not-allowed"
                    disabled
                  >
                    Plan Withdrawn
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Alternative Options */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-6 text-center">Alternative Retirement Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {alternativeOptions.map((plan, index) => (
                <Card key={index} className="p-6 hover:shadow-hero transition-all duration-300 hover:-translate-y-2 bg-white border-2 hover:border-gold/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-navy">{plan.name}</h3>
                  </div>
                  
                  <p className="text-navy/70 mb-6 leading-relaxed">
                    {plan.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-navy text-sm mb-3">Key Features:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="text-sm text-navy/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Retirement Planning Tips */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
            <h2 className="text-2xl font-bold text-navy text-center mb-8">
              Retirement Planning Essentials
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🕒</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">Start Early</h3>
                <p className="text-sm text-navy/70">The power of compounding works best over long periods</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">Plan Your Corpus</h3>
                <p className="text-sm text-navy/70">Calculate how much you'll need for comfortable retirement</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">Diversify</h3>
                <p className="text-sm text-navy/70">Mix different types of retirement products</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">Review Regularly</h3>
                <p className="text-sm text-navy/70">Adjust your plan as life circumstances change</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Build Your Retirement Plan Together
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Even with recent plan withdrawals, I can help you create a comprehensive retirement strategy using available LIC products and other investment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-3 rounded-lg shadow-gold transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = 'tel:+919876543210'}
              >
                <Phone className="w-4 h-4 mr-2" />
                Free Retirement Consultation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy"
                onClick={() => window.location.href = 'https://wa.me/919876543210?text=Hi, I need help with retirement planning'}
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

export default RetirementPlans;