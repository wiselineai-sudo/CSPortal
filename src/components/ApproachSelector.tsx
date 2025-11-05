import { Sparkles, Menu, LayoutGrid, Search, Layers } from 'lucide-react';
import RecommendationSummary from './RecommendationSummary';

interface ApproachSelectorProps {
  onSelect: (approach: number) => void;
}

const approaches = [
  {
    id: 1,
    name: 'Smart Wizard with Progressive Disclosure',
    description: 'Dynamic single-page wizard that adapts based on user selections',
    icon: Sparkles,
    color: 'from-blue-500 to-blue-600',
    features: ['Contextual form rendering', 'Minimal cognitive load', 'Clear progress indication']
  },
  {
    id: 2,
    name: 'Mega Menu with Inline Forms',
    description: 'Expandable category menu with forms appearing in-place',
    icon: Menu,
    color: 'from-emerald-500 to-emerald-600',
    features: ['Zero navigation', 'Visual hierarchy', 'Quick category scanning']
  },
  {
    id: 3,
    name: 'Card-Based Selection Grid',
    description: 'Visual card grid with smart filtering and instant form display',
    icon: LayoutGrid,
    color: 'from-orange-500 to-orange-600',
    features: ['Visual recognition', 'Filter by category', 'Scannable layout']
  },
  {
    id: 4,
    name: 'Search-First with Suggestions',
    description: 'Intelligent search bar with categorized suggestions and shortcuts',
    icon: Search,
    color: 'from-violet-500 to-violet-600',
    features: ['Natural language', 'Smart suggestions', 'Fastest for returning users']
  },
  {
    id: 5,
    name: 'Tab-Based Category Navigator',
    description: 'Horizontal tabs with collapsible subcategories and inline forms',
    icon: Layers,
    color: 'from-cyan-500 to-cyan-600',
    features: ['Familiar pattern', 'Organized categories', 'Persistent context']
  }
];

export default function ApproachSelector({ onSelect }: ApproachSelectorProps) {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
             Partner Portal UX Optimization
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Explore 5 different UI/UX approaches to transform your multi-step navigation into a streamlined single-screen experience. Click any approach to see an interactive prototype.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((approach) => {
            const Icon = approach.icon;
            return (
              <button
                key={approach.id}
                onClick={() => onSelect(approach.id)}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-slate-200 hover:border-slate-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${approach.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Approach {approach.id}: {approach.name}
                </h3>

                <p className="text-slate-600 mb-4 text-sm">
                  {approach.description}
                </p>

                <div className="space-y-1">
                  {approach.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-sm font-medium text-blue-600 flex items-center">
                  View Interactive Demo
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Prototype</h2>
            <p className="text-slate-600 mb-4">
              Each approach demonstrates a different interaction pattern designed to eliminate the multi-screen navigation problem in your Power Portal. The prototypes include:
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>Working interactions showing how users would navigate and select options</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>Sample forms for each request type to demonstrate the final user flow</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>Pros, cons, and implementation considerations for Power Portal</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>Best use case scenarios to help you make an informed decision</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8 shadow-sm border-2 border-amber-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">!</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Expert Recommendation</h2>
            </div>
            <p className="text-slate-700 mb-4">
              After analyzing all approaches, I recommend a <strong>hybrid solution combining Approach 1 (Smart Wizard) with Approach 4 (Search-First)</strong>.
            </p>
            <p className="text-sm text-slate-600 mb-4">
              This combination serves both new and experienced users, reduces clicks by 50-70%, and scales as your request types grow.
            </p>
            <a
              href="#recommendation"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg"
            >
              View Full Recommendation
            </a>
          </div>
        </div>

        <div id="recommendation" className="mt-6">
          <RecommendationSummary />
        </div>
      </div>
    </div>
  );
}
