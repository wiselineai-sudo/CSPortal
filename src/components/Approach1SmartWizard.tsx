import { useState } from 'react';
import { ArrowLeft, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';
import AnalysisPanel from './AnalysisPanel';
import RequestForm from './RequestForm';

interface Approach1Props {
  onBack: () => void;
}

const categories = [
  { id: 't2-support', label: 'T2/Technical Support', hasSubOptions: true },
  { id: 'request-forms', label: 'Request Forms', hasSubOptions: true },
  { id: 'new-features', label: 'New Features', hasSubOptions: false },
  { id: 'general-enquiries', label: 'General Enquiries', hasSubOptions: false },
  { id: 'business-ops', label: 'Business Operations', hasSubOptions: true },
  { id: 'product-dev', label: 'Product Development Support', hasSubOptions: true }
];

const subOptions: Record<string, string[]> = {
  't2-support': ['Product Issue', 'Service Issue'],
  'request-forms': ['Resource Request', 'IMEI Inquiry'],
  'business-ops': ['Change Request', 'Billing Dispute', 'Short Term VAD', 'Plans Modifications', 'Migrations'],
  'product-dev': ['Hardware Question', 'Software Question', 'Integration Support']
};

export default function Approach1SmartWizard({ onBack }: Approach1Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubOption, setSelectedSubOption] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubOption(null);
    setShowForm(false);

    const category = categories.find(c => c.id === categoryId);
    if (!category?.hasSubOptions) {
      setShowForm(true);
    }
  };

  const handleSubOptionSelect = (option: string) => {
    setSelectedSubOption(option);
    setShowForm(true);
  };

  const currentSubOptions = selectedCategory ? subOptions[selectedCategory] || [] : [];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-slate-600 hover:text-slate-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Overview
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Create Request</h1>
                <p className="text-slate-600">Select your request type below to get started</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Step 1: Select Request Category
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategorySelect(category.id)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          selectedCategory === category.id
                            ? 'border-blue-500 bg-blue-50 shadow-md'
                            : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-slate-900">{category.label}</span>
                          {selectedCategory === category.id ? (
                            <CheckCircle2 className="w-5 h-5 text-blue-500" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-slate-400" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {selectedCategory && currentSubOptions.length > 0 && (
                  <div className="animate-fadeIn">
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      Step 2: Select Specific Type
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {currentSubOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleSubOptionSelect(option)}
                          className={`p-4 rounded-lg border-2 text-left transition-all ${
                            selectedSubOption === option
                              ? 'border-emerald-500 bg-emerald-50 shadow-md'
                              : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-slate-900">{option}</span>
                            {selectedSubOption === option ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-slate-400" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {showForm && (
                  <div className="animate-fadeIn pt-6 border-t">
                    <RequestForm
                      category={categories.find(c => c.id === selectedCategory)?.label || ''}
                      subOption={selectedSubOption}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <AnalysisPanel
              approach="1"
              title="Smart Wizard with Progressive Disclosure"
              pros={[
                'Minimal cognitive load - only shows relevant options',
                'Clear progress indication through steps',
                'Familiar wizard pattern users understand',
                'Easy to implement in Power Portal using conditional visibility',
                'Works well on mobile with stacked layout'
              ]}
              cons={[
                'Still requires 2-3 clicks for complex requests',
                'Users can\'t see all options at once',
                'May feel slower for experienced users who know what they want',
                'Requires going back to change category selection'
              ]}
              implementation={[
                'Use Power Portal\'s conditional visibility rules on form sections',
                'Implement with JavaScript to show/hide sections dynamically',
                'Store selection state in session/local storage',
                'Use web templates with Liquid for dynamic rendering',
                'Single entity form with multiple tabs (hidden/shown programmatically)'
              ]}
              bestFor="Partners who are new to the portal or submit different types of requests infrequently. The guided approach reduces errors and provides confidence."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
