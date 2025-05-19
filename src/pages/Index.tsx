import React from "react";
import { Button } from "@/components/ui/button";
import {
  BarChart2,
  Camera,
  Eye,
  Smartphone,
  TrendingUp,
  Clock,
  Search,
  Settings,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import PricingCard from "@/components/PricingCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-gray-900">
              Elevate Your Site with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                UX Optimization Tools
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Analyze user behavior, identify design flaws, and implement AI-driven improvements for a seamless, engaging website experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
                aria-label="Start Free UX Analysis"
              >
                Start Free Analysis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full font-semibold transition-all duration-200"
                aria-label="View UX Improvement Demo"
              >
                See Demo →
              </Button>
            </div>
          </div>
          {/* Hero Image */}
          <div className="mt-12 relative">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="UX Analysis Dashboard"
              className="rounded-2xl shadow-xl border border-gray-200 w-full max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
              Powerful UX Analysis Toolkit
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Understand user behavior and optimize your website with our comprehensive tools.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Heatmap Analysis",
                description: "Visualize clicks, scrolls, and interactions to optimize user engagement.",
                icon: BarChart2,
              },
              {
                title: "Session Recordings",
                description: "Replay user journeys to identify UI issues and improve navigation.",
                icon: Camera,
              },
              {
                title: "UX Suggestions",
                description: "AI-driven insights to boost usability and engagement.",
                icon: TrendingUp,
              },
              {
                title: "Mobile Optimization",
                description: "Ensure seamless performance across all devices.",
                icon: Smartphone,
              },
              {
                title: "Real-time Monitoring",
                description: "Track interactions live to spot bottlenecks instantly.",
                icon: Eye,
              },
              {
                title: "Performance Analytics",
                description: "Optimize page speed for a faster, smoother experience.",
                icon: Clock,
              },
              {
                title: "Conversion Tracking",
                description: "Pinpoint drop-off points in your conversion funnel.",
                icon: Search,
              },
              {
                title: "Custom Reports",
                description: "Generate actionable insights for stakeholders.",
                icon: Settings,
              },
            ].map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                className="transform hover:scale-[1.02] transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Exclusive Offers</h2>
          <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Kickstart your UX optimization journey with these limited-time deals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transform hover:scale-[1.02] transition-all duration-300">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-2xl font-semibold mb-4">Free UX Report</h3>
              <p className="mb-6 leading-relaxed">
                Receive a detailed UX report for your first site analysis at no cost.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="w-full bg-white text-blue-600 hover:bg-gray-100 rounded-full"
                aria-label="Claim Free UX Report"
              >
                Claim Free Report
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transform hover:scale-[1.02] transition-all duration-300">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-2xl font-semibold mb-4">25% Off Annual Plan</h3>
              <p className="mb-6 leading-relaxed">
                Save 25% on our annual plan—exclusive for the first 100 users.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="w-full bg-white text-blue-600 hover:bg-gray-100 rounded-full"
                aria-label="Claim 25% Discount"
              >
                Claim Discount
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
              Trusted by Our Users
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Hear how our platform has transformed user experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                content:
                  "Heatmaps and session replays boosted our engagement by 40% by fixing navigation issues.",
                author: "Sara M.",
                position: "Frontend Developer",
              },
              {
                content:
                  "A powerful yet intuitive UX tool. We uncovered critical checkout issues we didn’t know existed.",
                author: "Marcus L.",
                position: "UX Designer",
              },
              {
                content:
                  "Mobile optimization doubled our smartphone conversions. Worth every penny.",
                author: "Jessica W.",
                position: "E-commerce Manager",
              },
            ].map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                position={testimonial.position}
                className="transform hover:scale-[1.02] transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
              Transparent Pricing
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Select a plan tailored to your needs with clear, upfront pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Starter",
                price: "Free",
                description: "Ideal for personal websites",
                features: [
                  "Basic heatmap analysis",
                  "5 session recordings/month",
                  "1 website",
                  "7-day data history",
                ],
                ctaText: "Get Started Free",
              },
              {
                title: "Professional",
                price: "$49",
                description: "Best for growing businesses",
                features: [
                  "Advanced heatmaps & analytics",
                  "500 session recordings/month",
                  "Up to 3 websites",
                  "30-day data history",
                  "UX improvement suggestions",
                  "Mobile optimization reports",
                ],
                isPopular: true,
                ctaText: "Start 14-Day Free Trial",
              },
              {
                title: "Enterprise",
                price: "$129",
                description: "For large teams and sites",
                features: [
                  "Unlimited heatmaps & analytics",
                  "10,000 session recordings/month",
                  "Unlimited websites",
                  "12-month data history",
                  "Priority support",
                  "Custom reporting",
                  "API access",
                ],
                ctaText: "Contact Sales",
              },
            ].map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                ctaText={plan.ctaText}
                isPopular={plan.isPopular}
                className="transform hover:scale-[1.02] transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Answers to common questions about our UX optimization tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl mx-auto">
            {[
              {
                q: "How does heatmap analysis work?",
                a: "Our technology tracks clicks, mouse movements, and scrolls, creating visual reports of high-interaction areas.",
              },
              {
                q: "Is there a website analysis limit?",
                a: "Free: 1 website; Professional: up to 3; Enterprise: unlimited.",
              },
              {
                q: "How are session recordings privacy-compliant?",
                a: "Sensitive data like passwords and payment info is automatically masked.",
              },
              {
                q: "Do I need to add code to my site?",
                a: "Yes, a small JavaScript snippet is required. We provide easy integration guides.",
              },
              {
                q: "Can I cancel my subscription anytime?",
                a: "Yes, cancel anytime with a 30-day money-back guarantee.",
              },
              {
                q: "How accurate are UX suggestions?",
                a: "Suggestions are based on UX best practices and real user data, ensuring relevance.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-900">
              Transform Your User Experience
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
              Join thousands of creators building better web experiences with our UX tools.
            </p>
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
              aria-label="Start Free UX Analysis"
            >
              Start Free Analysis
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-extrabold text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                UXOptimize
              </h3>
              <p className="mb-4 text-gray-400 leading-relaxed">
                Enhancing the web, one user-friendly site at a time.
              </p>
              <div className="flex space-x-4">
                {["Twitter", "LinkedIn", "GitHub"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                    aria-label={`Visit UXOptimize on ${platform}`}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
            {[
              {
                title: "Product",
                links: [
                  { name: "Features", href: "#features" },
                  { name: "Pricing", href: "#pricing" },
                  { name: "Case Studies", href: "#" },
                  { name: "Integrations", href: "#" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { name: "Documentation", href: "#" },
                  { name: "Blog", href: "#" },
                  { name: "FAQs", href: "#faqs" },
                  { name: "Support", href: "#" },
                ],
              },
              {
                title: "Company",
                links: [
                  { name: "About Us", href: "#" },
                  { name: "Careers", href: "#" },
                  { name: "Privacy Policy", href: "#" },
                  { name: "Terms of Service", href: "#" },
                ],
              },
            ].map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="hover:text-white transition-colors duration-200 text-gray-400"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2025 UXOptimize. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
