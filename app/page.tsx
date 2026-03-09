"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <section className="py-20 px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            By the <span className="text-purple-400">numbers</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "3+", label: "Internships Completed", icon: "💼" },
              { number: "10+", label: "AI Projects Built", icon: "🚀" },
              { number: "2", label: "National Awards", icon: "🏆" },
              { number: "85%", label: "RAG System Accuracy", icon: "📈" },
            ].map((stat, index) => (
              <div key={stat.label}
                className="bg-[#10132E] border border-white/10
                rounded-2xl p-6 text-center hover:border-purple-500
                transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}>
                <p className="text-3xl mb-2">{stat.icon}</p>
                <p className="text-4xl font-bold text-purple-400 mb-2">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
