import { ThumbsUp, ThumbsDown, Code, Target } from 'lucide-react';

interface AnalysisPanelProps {
  approach: string;
  title: string;
  pros: string[];
  cons: string[];
  implementation: string[];
  bestFor: string;
}

export default function AnalysisPanel({ approach, title, pros, cons, implementation, bestFor }: AnalysisPanelProps) {
  return (
    <div className="space-y-4 sticky top-8">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
        <div className="mb-4">
          <div className="text-sm font-medium text-slate-500 mb-1">Approach {approach}</div>
          <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center mb-2">
              <ThumbsUp className="w-4 h-4 text-emerald-500 mr-2" />
              <h3 className="font-semibold text-slate-900">Pros</h3>
            </div>
            <ul className="space-y-1">
              {pros.map((pro, idx) => (
                <li key={idx} className="text-sm text-slate-600 pl-6 relative">
                  <span className="absolute left-0 text-emerald-500">+</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <ThumbsDown className="w-4 h-4 text-orange-500 mr-2" />
              <h3 className="font-semibold text-slate-900">Cons</h3>
            </div>
            <ul className="space-y-1">
              {cons.map((con, idx) => (
                <li key={idx} className="text-sm text-slate-600 pl-6 relative">
                  <span className="absolute left-0 text-orange-500">-</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <Code className="w-4 h-4 text-blue-500 mr-2" />
              <h3 className="font-semibold text-slate-900">Power Portal Implementation</h3>
            </div>
            <ul className="space-y-1">
              {implementation.map((item, idx) => (
                <li key={idx} className="text-sm text-slate-600 pl-6 relative">
                  <span className="absolute left-0 text-blue-500">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t">
            <div className="flex items-center mb-2">
              <Target className="w-4 h-4 text-violet-500 mr-2" />
              <h3 className="font-semibold text-slate-900">Best For</h3>
            </div>
            <p className="text-sm text-slate-600">{bestFor}</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 rounded-lg p-4 text-xs text-slate-600 border border-slate-200">
        <strong>Note:</strong> This is an interactive prototype. Click around to experience the user flow. Each approach is fully functional to demonstrate real-world usage patterns.
      </div>
    </div>
  );
}
