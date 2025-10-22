import React, { useMemo, useState } from "react";
import { Search, Filter, Github, ExternalLink } from "lucide-react";

const projectsData = [
  {
    title: "Quick Code Review (AI Web App)",
    description:
      "AI-powered review generator that helps users get concise, intelligent summaries and feedback in real time.",
    liveLink: "https://quick-code-review.vercel.app/",
    repoLink: "https ",
    category: "AI Web App",
    tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Gemini API"],
    year: 2025,
  },
  {
    title: "Perplexity (AI Web App)",
    description:
      "AI-powered platform that provides clear, real-time summaries and actionable feedback with a modern MERN stack architecture.",
    liveLink: "https://perplexity-clone-nu.vercel.app/",
    repoLink: "https ",
    category: "AI Web App",
    tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Gemini API"],
    year: 2025,
  },
  {
    title: "E‑commerce Platform",
    description:
      "Full‑stack style front‑end with product gallery, filters, cart, and checkout flow. Focus on performance and accessibility.",
    liveLink: "https://shopify-e-commerce-sigma.vercel.app//",
    repoLink: "https://github.com/Parthgit9519/Shopify-e-commerce.git",
    category: "Web App",
    tech: ["React", "TailwindCSS", "Context API", "Router"],
    year: 2025,
  },
  {
    title: "Expense Tracker",
    description:
      "Track expenses by category with charts, persistent storage, and monthly insights.",
    liveLink: "https://expense-tracker-nu-beige.vercel.app/",
    repoLink: "https://github.com/Parthgit9519/Expense-tracker.git",
    category: "Web App",
    tech: ["JavaScript", "LocalStorage", "Charts", "TailwindCss"],
    year: 2025,
  },
  {
    title: "NeuralMind -AI Tools Directory",
    description:
      "An 'AI-pedia' style website to explore and categorize the latest AI tools. Features a dynamic grid, search, and upvote system.",
    liveLink: "https://neural-mind-mauve.vercel.app/",
    repoLink: "https://github.com/Parthgit9519/NeuralMind.git",
    category: "Landing Page",
    tech: [
      "React",
      "TailwindCSS",
      "Firebase",
      "Redux Toolkit",
      "Replicate API",
    ],
    year: 2025,
  },
  // {
  //   title: "Blogify - Blogs Reading ",
  //   description:
  //     "Modern agency template with services, case studies, and testimonial carousel.",
  //   liveLink: "https://agenci-website-nu.vercel.app/",
  //   repoLink: "https://github.com/Deepak-thakur-321/Agenci-Website",
  //   category: "Landing Page",
  //   tech: ["React", "TailwindCSS"],
  //   year: 2025,
  // },
  {
    title: "Gaming Website",
    description:
      "Interactive gaming front‑end with hover cards, match listings, and animated sections.",
    liveLink: "https://tailwind-gaming-website.vercel.app/",
    repoLink: "https:",
    category: "Landing Page",
    tech: ["React", "TailwindCSS", "GSAP"],
    year: 2025,
  },
  {
    title: "Youtube Clone",
    description:
      "A responsive YouTube clone featuring a dynamic video feed, search functionality, and API integration.",
    liveLink: "https://youtube-clone-blush-nine.vercel.app/",
    repoLink: "https://github.com/Parthgit9519/Youtube-Clone.git",
    category: "Landing Page",
    tech: ["React", "YouTube v3 API", "react-player", "TailwindCSS"],
    year: 2024,
  },
  {
    title: "Netflix Clone",
    description:
      "A streaming platform clone using React and the TMDB (The Movie Database) API to fetch and display movie/show categories.",
    liveLink: "https://youtube-clone-blush-nine.vercel.app/",
    repoLink: "https://github.com/Parthgit9519/Youtube-Clone.git",
    category: "Landing Page",
    tech: [
      "React",
      "TailwindCSS",
      "TMDB (The Movie Database) API",
      "react-slick",
    ],
    year: 2024,
  },
  {
    title: "Task Tracker",
    description:
      "Create, complete, and filter tasks by due date and status; responsive and snappy UI.",
    liveLink: "https://task-tracker-chi-two.vercel.app/",
    repoLink: "https://github.com/Parthgit9519/Task-Tracker.git",
    category: "Web App",
    tech: ["JavaScipt", "LocalStorage", "TailwindCSS"],
    year: 2024,
  },
  {
    title: "Bookmark Extension",
    description:
      "Chrome extension to save and organize links with tags and quick search.",
    liveLink: "https://bookmark-extension-sepia.vercel.app/",
    repoLink: "https://github.com/Parthgit9519/Bookmark-extension.git",
    category: "Browser Extension",
    tech: ["JavaScript", "Chrome APIs"],
    year: 2024,
  },
  {
    title: "LandPress Landing Page",
    description:
      "A landing page built to showcase services and generate clients for a business consultant.",
    liveLink: "https://parthgit9519.github.io/LandPress-/",
    repoLink: "https://github.com/Parthgit9519/LandPress-.git",
    category: "Landing Page",
    tech: ["JavaScipt", "Shadcn Ui", "TailwindCSS"],
    year: 2024,
  },
  {
    title: "Notes App",
    description:
      "Minimal notes app with CRUD, pinning, and keyboard shortcuts.",
    liveLink: "https://notes-project-ten.vercel.app/",
    repoLink: "https://github.com/Deepa-thakur-321/Notes-project",
    category: "Web App",
    tech: ["React", "LocalStorage"],
    year: 2024,
  },{
    title: "Admin-Dashboard",
    description:
      "administration-dashboard for admins ",
    liveLink: "https://admin-dashboard-rho-three-18.vercel.app/",
    repoLink: "https://github.com/Parthgit9519/Admin-Dashboard.git",
    category: "Web App",
    tech: ["React", "LocalStorage"],
    year: 2024,
  },
];

const categories = [
  "All",
  "Web App",
  "Landing Page",
  "Browser Extension",
  "AI Web App",
];

function classNames(...c) {
  return c.filter(Boolean).join(" ");
}

const Projects = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const filtered = useMemo(() => {
    let list = [...projectsData];

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.tech?.join(" ").toLowerCase().includes(q) ?? false)
      );
    }

    if (category !== "All") {
      list = list.filter((p) => p.category === category);
    }

    if (sortBy === "Newest")
      list.sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
    if (sortBy === "Oldest")
      list.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
    if (sortBy === "A‑Z") list.sort((a, b) => a.title.localeCompare(b.title));

    return list;
  }, [query, category, sortBy]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 py-20 overflow-hidden">
      <style>{`
            @keyframes fadeInDown {
               from {
                  opacity: 0;
                  transform: translateY(-30px);
               }
               to {
                  opacity: 1;
                  transform: translateY(0);
               }
            }
            @keyframes fadeInUp {
               from {
                  opacity: 0;
                  transform: translateY(30px);
               }
               to {
                  opacity: 1;
                  transform: translateY(0);
               }
            }
            @keyframes scaleIn {
               from {
                  opacity: 0;
                  transform: scale(0.95);
               }
               to {
                  opacity: 1;
                  transform: scale(1);
               }
            }
            @keyframes float {
               0%, 100% { transform: translateY(0px); }
               50% { transform: translateY(-8px); }
            }
            @keyframes iconSpin {
               from { transform: rotate(0deg); }
               to { transform: rotate(360deg); }
            }
            @keyframes iconSlide {
               from { transform: translateX(0) translateY(0); }
               to { transform: translateX(4px) translateY(-4px); }
            }
            .animate-fadeInDown { animation: fadeInDown 0.8s ease-out; }
            .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }
            .animate-scaleIn { animation: scaleIn 0.6s ease-out; }
            .animate-float { animation: float 3s ease-in-out infinite; }
            .project-card {
               animation: fadeInUp 0.6s ease-out backwards;
            }
            .stagger-item-1 { animation-delay: 0.1s; }
            .stagger-item-2 { animation-delay: 0.2s; }
            .stagger-item-3 { animation-delay: 0.3s; }
            .stagger-item-4 { animation-delay: 0.4s; }
            .stagger-item-5 { animation-delay: 0.5s; }
            .stagger-item-6 { animation-delay: 0.6s; }
            .stagger-item-7 { animation-delay: 0.7s; }
            .stagger-item-8 { animation-delay: 0.8s; }
            .stagger-item-9 { animation-delay: 0.9s; }
            .stagger-item-10 { animation-delay: 1s; }
            .stagger-item-11 { animation-delay: 1.1s; }
            .stagger-item-12 { animation-delay: 1.2s; }
            .icon-github {
               transition: all 0.3s ease;
            }
            .btn-github:hover .icon-github {
               animation: iconSpin 0.6s ease-in-out;
            }
            .icon-external {
               transition: all 0.3s ease;
            }
            .btn-live:hover .icon-external {
               animation: iconSlide 0.6s ease-in-out;
            }
         `}</style>

      <div className="container mx-auto">
        {/* Heading with animation */}
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-float">
              Projects
            </span>
          </h2>
          <p
            className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            A curated selection of my recent work. Explore live demos and source
            code.
          </p>
        </div>

        {/* Controls with staggered animations */}
        <div className="grid grid-cols-12 gap-4 items-center mb-12">
          {/* Search */}
          <div
            className="col-span-12 md:col-span-6 lg:col-span-5 animate-scaleIn"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-3 rounded-2xl border-2 border-slate-200 bg-white/80 backdrop-blur px-4 py-3 shadow-md hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <Search className="opacity-70 text-blue-500 transition-transform duration-300 w-5 h-5" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, tech, or description..."
                className="w-full outline-none text-slate-700 bg-transparent placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Category pills */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                style={{ animationDelay: `${0.3 + i * 0.08}s` }}
                className={classNames(
                  "px-4 py-2.5 rounded-full text-sm font-medium border-2 transition-all duration-300 animate-scaleIn",
                  category === c
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-600 shadow-lg shadow-blue-500/30 scale-105"
                    : "bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:shadow-md hover:scale-105"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div
            className="col-span-12 lg:col-span-2 flex justify-start lg:justify-end animate-scaleIn"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center gap-2 border-2 border-slate-300/60 bg-white/80 backdrop-blur px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:border-blue-400 transition-all duration-300">
              <Filter className="text-blue-500 transition-transform duration-300 w-4 h-4" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent outline-none text-slate-700 font-medium cursor-pointer focus:text-blue-600 transition-colors duration-300"
              >
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                <option value="A‑Z">A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-6">
          {filtered.map((project, idx) => (
            <article
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={classNames(
                "col-span-12 sm:col-span-6 lg:col-span-4 group relative overflow-hidden rounded-2xl border-2 bg-white shadow-lg transition-all duration-500 project-card",
                "hover:shadow-2xl hover:scale-105",
                `stagger-item-${(idx % 12) + 1}`,
                hoveredIdx === idx ? "border-blue-400" : "border-slate-200"
              )}
            >
              {/* Decorative gradient background */}
              <div
                className={classNames(
                  "absolute inset-x-0 -top-24 h-40 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-fuchsia-500/20 blur-3xl transition-all duration-500",
                  hoveredIdx === idx &&
                    "from-blue-500/40 via-indigo-500/40 to-fuchsia-500/40"
                )}
              />

              {/* Shine effect on hover */}
              <div className="absolute inset-0 -top-full group-hover:top-0 transition-top duration-500 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none" />

              <div className="relative p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-all duration-300 transform group-hover:scale-105 origin-left">
                  {project.title}
                </h3>
                <p className="mt-3 text-slate-600 min-h-[72px] flex-grow group-hover:text-slate-700 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tags with animation */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech?.map((t, i) => (
                    <span
                      key={t}
                      style={{ animationDelay: `${i * 0.05}s` }}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-110 cursor-default animate-scaleIn"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {project.category} • {project.year}
                  </span>

                  <div className="flex gap-3">
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-github inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        aria-label={`Open repository of ${project.title}`}
                      >
                        <Github className="icon-github w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-live inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-xl shadow-lg shadow-blue-500/30"
                        aria-label={`Visit live demo of ${project.title}`}
                      >
                        <ExternalLink className="icon-external w-4 h-4" />
                        <span>Live</span>
                      </a>
                    ) : (
                      <button
                        disabled
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-200 text-slate-500 text-sm font-medium cursor-not-allowed opacity-60"
                        title="Live link coming soon"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16 animate-fadeInUp">
            <p className="text-2xl font-semibold text-slate-500">
              No projects found
            </p>
            <p className="text-slate-400 mt-2">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

// import React from "react";

// const Project = () => {
//   return (
//     <div className="w-full min-h-screen  justify-center items-center flex">

//       <h1 className="lg:text-6xl text-4xl font-bold lg:ml-0 ml-7 text-blue-400">The page is under Development...😉 </h1>
//     </div>
//   );
// };

// export default Projects;
