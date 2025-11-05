import { Award, TrendingUp, Users, Zap } from 'lucide-react';

export default function RecommendationSummary() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="bg-white rounded-xl shadow-2xl p-8 border border-slate-200">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full mb-4">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Expert Recommendation
          </h1>
          <p className="text-slate-600">
            Based on your requirements and Power Portal capabilities
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-2 border-emerald-300 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-emerald-900 mb-3">
              Primary Recommendation: Approach 1 + Approach 4 Hybrid
            </h2>
            <p className="text-emerald-800 mb-4">
              Combine the Smart Wizard (Approach 1) with Search-First capabilities (Approach 4)
              to serve both new and experienced users effectively.
            </p>

            <div className="bg-white rounded-lg p-4 border border-emerald-200">
              <h3 className="font-semibold text-slate-900 mb-3">Why This Hybrid Approach Wins:</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Serves All User Types:</strong> Search bar for power users who know what they want, wizard for those who need guidance</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Minimal Clicks:</strong> Search reduces to 1-2 clicks, wizard keeps it at 2-3 clicks vs. current 4-6 clicks</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Scales Effortlessly:</strong> As you add more request types, search becomes more valuable while wizard remains clear</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Implementation Strategy</h2>
            <div className="space-y-3">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <div className="font-semibold text-slate-900 mb-1">Phase 1: Core Wizard (Week 1-2)</div>
                <p className="text-sm text-slate-700">
                  Implement Approach 1 Smart Wizard using Power Portal conditional visibility and JavaScript.
                  This immediately solves the multi-page navigation problem.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <div className="font-semibold text-slate-900 mb-1">Phase 2: Add Search Layer (Week 3-4)</div>
                <p className="text-sm text-slate-700">
                  Add search bar above the wizard with fuzzy search and keyword matching.
                  Store popular requests and recent selections in browser storage.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <div className="font-semibold text-slate-900 mb-1">Phase 3: Optimize & Learn (Week 5+)</div>
                <p className="text-sm text-slate-700">
                  Track analytics to identify most-used request types. Surface these as quick-access cards
                  above the wizard. Continuously improve search keywords based on failed searches.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Alternative Scenarios</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">If Budget/Time Constrained</h3>
                <p className="text-sm text-slate-600 mb-2">
                  <strong>Choose: Approach 1 (Smart Wizard) alone</strong>
                </p>
                <p className="text-xs text-slate-500">
                  Fastest to implement, lowest risk, immediate 50% click reduction.
                  Add search later when resources allow.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">If Mostly Desktop Users</h3>
                <p className="text-sm text-slate-600 mb-2">
                  <strong>Consider: Approach 5 (Tab-Based)</strong>
                </p>
                <p className="text-xs text-slate-500">
                  Excellent information architecture with persistent context.
                  Best for desktop-heavy partner base.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">If Highly Visual Brand</h3>
                <p className="text-sm text-slate-600 mb-2">
                  <strong>Consider: Approach 3 (Card-Based)</strong>
                </p>
                <p className="text-xs text-slate-500">
                  Modern, engaging interface with strong visual identity.
                  Requires more design resources but creates premium feel.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">If 20+ Request Types</h3>
                <p className="text-sm text-slate-600 mb-2">
                  <strong>Choose: Approach 4 (Search-First) alone</strong>
                </p>
                <p className="text-xs text-slate-500">
                  Search becomes essential with many options.
                  Wizard fallback for failed searches.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Success Metrics to Track</h2>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-slate-900 mb-1">Efficiency Metrics</div>
                <ul className="text-slate-600 space-y-1">
                  <li>• Average clicks to form</li>
                  <li>• Time to submission</li>
                  <li>• Abandonment rate</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-slate-900 mb-1">Usage Patterns</div>
                <ul className="text-slate-600 space-y-1">
                  <li>• Search vs wizard usage</li>
                  <li>• Most-used categories</li>
                  <li>• Mobile vs desktop</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-slate-900 mb-1">User Satisfaction</div>
                <ul className="text-slate-600 space-y-1">
                  <li>• Portal satisfaction score</li>
                  <li>• Support ticket reduction</li>
                  <li>• Partner feedback</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
              <Award className="w-5 h-5 text-amber-600 mr-2" />
              Final Thoughts
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              The hybrid approach (Wizard + Search) provides the best balance of usability,
              implementation complexity, and long-term scalability for partner portal.
              It reduces cognitive load for new users while accelerating experienced users, and it's
              fully achievable within Power Portal's capabilities. Start with the wizard foundation
              and layer in search capabilities to create a best-in-class partner experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
