import { useState } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import AnalysisPanel from './AnalysisPanel';
import RequestForm from './RequestForm';

interface Approach5Props {
  onBack: () => void;
}

const tabs = [
  {
    id: 'support',
    label: 'Support',
    items: [
      { id: 't2-product', label: 'T2/Technical - Product', hasSubMenu: false },
      { id: 't2-service', label: 'T2/Technical - Service', hasSubMenu: false },
      { id: 'general', label: 'General Enquiries', hasSubMenu: false }
    ]
  },
  {
    id: 'requests',
    label: 'Requests',
    items: [
      { id: 'resource', label: 'Resource Request', hasSubMenu: false },
      { id: 'imei', label: 'IMEI Inquiry', hasSubMenu: false },
      { id: 'new-features', label: 'New Features', hasSubMenu: false }
    ]
  },
  {
    id: 'business',
    label: 'Business Operations',
    items: [
      { id: 'change', label: 'Change Request', hasSubMenu: false },
      { id: 'billing', label: 'Billing Dispute', hasSubMenu: false },
      { id: 'vad', label: 'Short Term VAD', hasSubMenu: false },
      { id: 'plans', label: 'Plans Modifications', hasSubMenu: false },
      { id: 'migrations', label: 'Migrations', hasSubMenu: false }
    ]
  },
  {
    id: 'product',
    label: 'Product Development',
    items: [
      { id: 'hardware', label: 'Hardware Support', hasSubMenu: false },
      { id: 'software', label: 'Software Support', hasSubMenu: false },
      { id: 'integration', label: 'Integration Support', hasSubMenu: false }
    ]
  }
];

export default function Approach5TabBased({ onBack }: Approach5Props) {
  const [activeTab, setActiveTab] = useState('support');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const currentTab = tabs.find(t => t.id === activeTab);

  const handleItemClick = (itemId: string) => {
    setSelectedItem(itemId);
    setExpandedItem(null);
  };

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
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-6">
                <h1 className="text-2xl font-bold text-white mb-1">Create Request</h1>
                <p className="text-slate-300">Navigate by category tabs, then select your request type</p>
              </div>

              <div className="border-b border-slate-200 bg-slate-50">
                <div className="flex overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setSelectedItem(null);
                      }}
                      className={`px-6 py-4 font-medium whitespace-nowrap transition-all ${
                        activeTab === tab.id
                          ? 'text-cyan-600 border-b-2 border-cyan-600 bg-white'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-slate-900 mb-4">
                    Select Request Type
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {currentTab?.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          selectedItem === item.id
                            ? 'border-cyan-500 bg-cyan-50 shadow-md'
                            : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                        }`}
                      >
                        <div className="font-medium text-slate-900">{item.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {selectedItem && (
                  <div className="pt-6 border-t animate-fadeIn">
                    <RequestForm
                      category={currentTab?.label || ''}
                      subOption={currentTab?.items.find(i => i.id === selectedItem)?.label}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <AnalysisPanel
              approach="5"
              title="Tab-Based Category Navigator"
              pros={[
                'Familiar tab pattern that users understand immediately',
                'Excellent information architecture and organization',
                'Persistent context - users always know where they are',
                'Easy to switch between categories without losing place',
                'Clean, uncluttered interface',
                'Works well on desktop and tablet',
                'Easy to add new categories (new tabs)'
              ]}
              cons={[
                'Limited number of top-level categories (4-6 tabs max)',
                'Mobile experience challenging with many tabs',
                'Still requires 2 clicks to reach form',
                'Horizontal scrolling may be needed on mobile',
                'Less visual than card-based approaches'
              ]}
              implementation={[
                'Standard Bootstrap or custom tab component',
                'Use Power Portal web templates for each tab content',
                'Load tab content via AJAX for better performance',
                'Store active tab in URL hash for bookmarking (#support)',
                'Implement keyboard navigation (arrow keys)',
                'Use CSS sticky positioning for tab bar on scroll',
                'Ensure ARIA attributes for accessibility',
                'Consider vertical tabs on mobile viewports'
              ]}
              bestFor="Portals with clear, distinct categories that naturally group request types. Ideal for organizations with well-defined departments. Best for desktop and tablet users. Great when you need to scale categories over time."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
