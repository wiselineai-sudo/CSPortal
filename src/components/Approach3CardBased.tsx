import { useState } from 'react';
import { ArrowLeft, FileText, Headphones, Sparkles, MessageSquare, Briefcase, Code2, Filter } from 'lucide-react';
import AnalysisPanel from './AnalysisPanel';
import RequestForm from './RequestForm';

interface Approach3Props {
  onBack: () => void;
}

const cards = [
  { id: 't2-support', icon: Headphones, title: 'T2/Technical Support', description: 'Product or service technical issues', category: 'support', subOptions: ['Product Issue', 'Service Issue'] },
  { id: 'resource-request', icon: FileText, title: 'Resource Request', description: 'Request additional resources', category: 'request', subOptions: null },
  { id: 'imei-inquiry', icon: FileText, title: 'IMEI Inquiry', description: 'Inquire about IMEI information', category: 'request', subOptions: null },
  { id: 'new-features', icon: Sparkles, title: 'New Features', description: 'Request new product features', category: 'product', subOptions: null },
  { id: 'general-enquiries', icon: MessageSquare, title: 'General Enquiries', description: 'General questions and inquiries', category: 'support', subOptions: null },
  { id: 'change-request', icon: Briefcase, title: 'Change Request', description: 'Request account or service changes', category: 'business', subOptions: null },
  { id: 'billing-dispute', icon: Briefcase, title: 'Billing Dispute', description: 'Dispute billing issues', category: 'business', subOptions: null },
  { id: 'short-term-vad', icon: Briefcase, title: 'Short Term VAD', description: 'Value-added dealer requests', category: 'business', subOptions: null },
  { id: 'plans-modifications', icon: Briefcase, title: 'Plans Modifications', description: 'Modify existing plans', category: 'business', subOptions: null },
  { id: 'migrations', icon: Briefcase, title: 'Migrations', description: 'Migration support requests', category: 'business', subOptions: null },
  { id: 'product-dev', icon: Code2, title: 'Product Development', description: 'Hardware, software, integration support', category: 'product', subOptions: ['Hardware Question', 'Software Question', 'Integration Support'] }
];

const filters = [
  { id: 'all', label: 'All Requests', color: 'slate' },
  { id: 'support', label: 'Support', color: 'blue' },
  { id: 'request', label: 'Requests', color: 'emerald' },
  { id: 'business', label: 'Business', color: 'orange' },
  { id: 'product', label: 'Product', color: 'violet' }
];

export default function Approach3CardBased({ onBack }: Approach3Props) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedSubOption, setSelectedSubOption] = useState<string | null>(null);
  const [showSubOptions, setShowSubOptions] = useState(false);

  const filteredCards = selectedFilter === 'all'
    ? cards
    : cards.filter(card => card.category === selectedFilter);

  const handleCardClick = (cardId: string) => {
    const card = cards.find(c => c.id === cardId);
    if (card?.subOptions) {
      setSelectedCard(cardId);
      setShowSubOptions(true);
      setSelectedSubOption(null);
    } else {
      setSelectedCard(cardId);
      setShowSubOptions(false);
      setSelectedSubOption(null);
    }
  };

  const handleSubOptionSelect = (option: string) => {
    setSelectedSubOption(option);
    setShowSubOptions(false);
  };

  const selectedCardData = cards.find(c => c.id === selectedCard);

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
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Create Request</h1>
                <p className="text-slate-600">Select a request type from the cards below</p>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                <Filter className="w-5 h-5 text-slate-400 mr-1" />
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedFilter === filter.id
                        ? `bg-${filter.color}-500 text-white shadow-md`
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {filteredCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <button
                      key={card.id}
                      onClick={() => handleCardClick(card.id)}
                      className={`p-5 rounded-lg border-2 text-left transition-all hover:shadow-lg hover:-translate-y-1 ${
                        selectedCard === card.id
                          ? 'border-orange-500 bg-orange-50 shadow-md'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <Icon className={`w-8 h-8 mb-3 ${
                        selectedCard === card.id ? 'text-orange-500' : 'text-slate-400'
                      }`} />
                      <h3 className="font-semibold text-slate-900 mb-1">{card.title}</h3>
                      <p className="text-xs text-slate-600">{card.description}</p>
                    </button>
                  );
                })}
              </div>

              {showSubOptions && selectedCardData?.subOptions && (
                <div className="mb-8 p-6 bg-slate-50 rounded-lg border border-slate-200 animate-fadeIn">
                  <h3 className="font-semibold text-slate-900 mb-4">Select Specific Type:</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedCardData.subOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSubOptionSelect(option)}
                        className="p-3 bg-white rounded-lg border border-slate-200 hover:border-orange-400 hover:shadow-sm text-left transition-all"
                      >
                        <span className="text-sm font-medium text-slate-900">{option}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {selectedCard && !showSubOptions && (
                <div className="animate-fadeIn">
                  <RequestForm
                    category={selectedCardData?.title || ''}
                    subOption={selectedSubOption}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <AnalysisPanel
              approach="3"
              title="Card-Based Selection Grid"
              pros={[
                'Highly visual and scannable layout',
                'All options visible at once (with filtering)',
                'Icons provide quick visual recognition',
                'Filtering reduces cognitive load',
                'Great for returning users who recognize icons',
                'Modern, engaging interface'
              ]}
              cons={[
                'Requires more screen real estate',
                'Can be overwhelming initially with many cards',
                'Mobile layout requires careful consideration',
                'May need pagination or virtualization for many options',
                'Icon selection must be intuitive'
              ]}
              implementation={[
                'Use CSS Grid for responsive card layout',
                'Implement filter buttons with JavaScript state management',
                'Lazy load forms on card selection',
                'Use Power Portal entity lists with custom templates',
                'Store request types as configuration records',
                'Implement CSS animations for smooth transitions',
                'Consider virtual scrolling for 20+ cards'
              ]}
              bestFor="Visually-oriented users and returning partners who prefer to scan options quickly. Excellent for portals with distinct, recognizable request types. Best on tablets and desktops."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
