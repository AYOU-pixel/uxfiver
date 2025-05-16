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
  Settings 
} from "lucide-react";
import Navigation from "@/components/Navigation";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import PricingCard from "@/components/PricingCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Make your site more interactive and smooth with{" "}
              <span className="gradient-text">user experience optimization tools!</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              A smart solution that helps you analyze user behavior, detect design problems, 
              and suggest improvements that will make your site more attractive and user-friendly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Start User Experience Analysis now — It's Free!
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                See how your site can be improved →
              </Button>
            </div>
          </div>
          {/* Hero Image */}
          <div className="mt-16 relative animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-transparent h-20 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="UX Analysis Dashboard" 
              className="rounded-xl shadow-2xl border border-slate-200 w-full max-w-5xl mx-auto"
            />
            <div className="absolute bottom-0 bg-gradient-to-t from-slate-50 to-transparent h-20 w-full z-10"></div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful UX Analysis Tools
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our comprehensive toolkit helps you understand user behavior and optimize your website for the best experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Heatmap Analysis"
              description="Understand where users click, scroll, and interact the most on your site."
              icon={BarChart2}
              className="animate-fade-in-up [animation-delay:100ms]"
            />
            <FeatureCard
              title="Session Recordings"
              description="Replay user navigation to spot confusing UI or bugs that affect your site."
              icon={Camera}
              className="animate-fade-in-up [animation-delay:200ms]"
            />
            <FeatureCard
              title="UX Improvement Suggestions"
              description="Get AI-powered best practices to enhance usability and engagement."
              icon={TrendingUp}
              className="animate-fade-in-up [animation-delay:300ms]"
            />
            <FeatureCard
              title="Mobile Optimization"
              description="Ensure your site works smoothly on all screen sizes and mobile devices."
              icon={Smartphone}
              className="animate-fade-in-up [animation-delay:400ms]"
            />
            <FeatureCard
              title="Real-time Monitoring"
              description="Track user interactions as they happen and identify bottlenecks."
              icon={Eye}
              className="animate-fade-in-up [animation-delay:500ms]"
            />
            <FeatureCard
              title="Performance Analytics"
              description="Monitor page load times and optimize for speed across all devices."
              icon={Clock}
              className="animate-fade-in-up [animation-delay:600ms]"
            />
            <FeatureCard
              title="Conversion Tracking"
              description="See exactly where users drop off in your conversion funnel."
              icon={Search}
              className="animate-fade-in-up [animation-delay:700ms]"
            />
            <FeatureCard
              title="Custom Reports"
              description="Create tailored reports for stakeholders with actionable insights."
              icon={Settings}
              className="animate-fade-in-up [animation-delay:800ms]"
            />
          </div>
        </div>
      </section>
      
      {/* Special Offer Section */}
      <section className="py-20 px-4 gradient-bg text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Special Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6 mt-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-4xl font-bold mb-4">🎁</div>
              <h3 className="text-2xl font-semibold mb-4">
                Free UX Report
              </h3>
              <p className="mb-6">
                Get a comprehensive UX report for your first site analysis, completely free!
              </p>
              <Button variant="secondary" size="lg" className="w-full">
                Get Free Report
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-4xl font-bold mb-4">🔥</div>
              <h3 className="text-2xl font-semibold mb-4">
                25% Off Annual Plan
              </h3>
              <p className="mb-6">
                Enjoy 25% off our annual plan — valid for the first 100 users!
              </p>
              <Button variant="secondary" size="lg" className="w-full">
                Claim Discount
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our users have achieved with our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <TestimonialCard
              content="The session replays and heatmaps helped us fix a navigation issue and increase engagement by 40%."
              author="Sara M."
              position="Frontend Developer"
              className="animate-fade-in-up"
            />
            <TestimonialCard
              content="Finally a UX tool that's both powerful and easy to use. We identified critical UX issues in our checkout process that we were completely unaware of."
              author="Marcus L."
              position="UX Designer"
              className="animate-fade-in-up [animation-delay:200ms]"
            />
            <TestimonialCard
              content="The mobile optimization suggestions doubled our conversion rate on smartphones. This tool paid for itself within the first month."
              author="Jessica W."
              position="E-commerce Manager"
              className="animate-fade-in-up [animation-delay:400ms]"
            />
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the plan that works best for your needs with our straightforward pricing options.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Starter"
              price="Free"
              description="Great for small personal websites"
              features={[
                "Basic heatmap analysis",
                "5 session recordings / month",
                "Single website",
                "7-day data history",
              ]}
              ctaText="Get Started Free"
            />
            <PricingCard
              title="Professional"
              price="$49"
              description="Perfect for growing businesses"
              features={[
                "Advanced heatmaps & analytics",
                "500 session recordings / month",
                "Up to 3 websites",
                "30-day data history",
                "UX improvement suggestions",
                "Mobile optimization reports"
              ]}
              isPopular={true}
              ctaText="Start 14-Day Free Trial"
            />
            <PricingCard
              title="Enterprise"
              price="$129"
              description="For large sites and teams"
              features={[
                "Unlimited heatmaps & analytics",
                "10,000 session recordings / month",
                "Unlimited websites",
                "12-month data history",
                "Priority support",
                "Custom reporting",
                "API access"
              ]}
              ctaText="Contact Sales"
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faqs" className="py-20 px-4 bg-slate-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to know about our UX optimization tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl mx-auto">
            {[
              {
                q: "How does the heatmap analysis work?",
                a: "Our heatmap technology captures user clicks, mouse movements, and scrolling behavior, then generates visual reports showing the most active areas of your pages."
              },
              {
                q: "Is there a limit to the number of websites I can analyze?",
                a: "The Free plan allows 1 website, Professional allows up to 3, and Enterprise offers unlimited websites."
              },
              {
                q: "How do session recordings respect user privacy?",
                a: "All sensitive data like passwords, credit card information, and personal data is automatically blocked from recordings."
              },
              {
                q: "Do I need to add any code to my website?",
                a: "Yes, you'll need to add a small JavaScript snippet to your site. We provide easy integration guides for all popular platforms."
              },
              {
                q: "Can I cancel my subscription anytime?",
                a: "Yes, you can cancel your subscription at any time. We offer a 30-day money-back guarantee if you're not satisfied."
              },
              {
                q: "How accurate are the UX improvement suggestions?",
                a: "Our suggestions are based on established UX principles and real user behavior on your site, providing highly relevant optimization insights."
              }
            ].map((faq, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to optimize your user experience?
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Join thousands of developers and designers who are creating better web experiences with our UX optimization tools.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Start Your Free Analysis Today
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img
                src="/logos.jpg"
                alt="UXOptimize Logo"
                className="w-12 h-12 mb-4 rounded"
              />
              <h3 className="text-xl font-bold text-white mb-4">UXOptimize</h3>
              <p className="mb-4">Making the web more user-friendly, one site at a time.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p>&copy; 2023 UXOptimize. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
