import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronRight } from 'lucide-react';
import AnalysisPanel from './AnalysisPanel';
import RequestForm from './RequestForm';

interface Approach2Props {
  onBack: () => void;
}

const menuItems = [
  {
    id: 't2-support',
    label: 'T2/Technical Support',
    items: ['Product Issue', 'Service Issue']
  },
  {
    id: 'request-forms',
    label: 'Request Forms',
    items: ['Resource Request', 'IMEI Inquiry']
  },
  {
    id: 'new-features',
    label: 'New Features',
    items: null
  },
  {
    id: 'general-enquiries',
    label: 'General Enquiries',
    items: null
  },
  {
    id: 'business-ops',
    label: 'Business Operations',
    items: ['Change Request', 'Billing Dispute', 'Short Term VAD', 'Plans Modifications', 'Migrations']
  },
  {
    id: 'product-dev',
    label: 'Product Development Support',
    items: ['Hardware Question', 'Software Question', 'Integration Support']
  }
];

export default function Approach2MegaMenu({ onBack }: Approach2Props) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState<string | null>(null);

  const handleMenuClick = (menuId: string, hasSubItems: boolean) => {
    if (hasSubItems) {
      setExpandedMenu(expandedMenu === menuId ? null : menuId);
    } else {
      setSelectedCategory(menuId);
      setSelectedSubItem(null);
      setExpandedMenu(null);
    }
  };

  const handleSubItemClick = (menuId: string, subItem: string) => {
    setSelectedCategory(menuId);
    setSelectedSubItem(subItem);
    setExpandedMenu(null);
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
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-6">
                <h1 className="text-2xl font-bold text-white mb-1">Create Request</h1>
                <p className="text-emerald-100">Select a category to expand options and access the form</p>
              </div>

              <div className="p-6">
                <div className="space-y-2">
                  {menuItems.map((menu) => (
                    <div key={menu.id} className="border border-slate-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => handleMenuClick(menu.id, menu.items !== null)}
                        className="w-full p-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                      >
                        <span className="font-semibold text-slate-900">{menu.label}</span>
                        {menu.items ? (
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 transition-transform ${
                              expandedMenu === menu.id ? 'rotate-180' : ''
                            }`}
                          />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-slate-400" />
                        )}
                      </button>

                      {menu.items && expandedMenu === menu.id && (
                        <div className="bg-slate-50 border-t border-slate-200">
                          <div className="grid sm:grid-cols-2 gap-2 p-4">
                            {menu.items.map((item) => (
                              <button
                                key={item}
                                onClick={() => handleSubItemClick(menu.id, item)}
                                className="p-3 bg-white rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-sm text-left transition-all"
                              >
                                <span className="text-sm font-medium text-slate-900">{item}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {selectedCategory && (
                  <div className="mt-8 pt-8 border-t animate-fadeIn">
                    <RequestForm
                      category={menuItems.find(m => m.id === selectedCategory)?.label || ''}
                      subOption={selectedSubItem}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <AnalysisPanel
              approach="2"
              title="Mega Menu with Inline Forms"
              pros={[
                'Zero navigation required - everything on one page',
                'Clear visual hierarchy of categories and sub-options',
                'Fast category scanning with expand/collapse',
                'Form appears immediately below selection',
                'Users can easily switch between categories',
                'Familiar accordion pattern'
              ]}
              cons={[
                'Can feel cluttered with many categories',
                'Scrolling required if form is long',
                'Mobile experience may be challenging with many options',
                'Some users may not realize items are expandable'
              ]}
              implementation={[
                'Use JavaScript accordion component with smooth transitions',
                'Implement with Bootstrap collapse or custom JS',
                'Load forms via AJAX to reduce initial page weight',
                'Use Power Portal web templates for dynamic form injection',
                'Conditional visibility rules for form sections',
                'Session state to remember last selection'
              ]}
              bestFor="Portals with moderate number of categories (5-8) where users need to quickly compare options or submit multiple requests in one session. Good for desktop-first experiences."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
