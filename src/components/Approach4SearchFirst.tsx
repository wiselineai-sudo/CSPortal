import { useState, useMemo } from 'react';
import { ArrowLeft, Search, TrendingUp, Clock } from 'lucide-react';
import AnalysisPanel from './AnalysisPanel';
import RequestForm from './RequestForm';

interface Approach4Props {
  onBack: () => void;
}

const requestTypes = [
  { id: 't2-product', title: 'T2/Technical Support - Product Issue', category: 'Support', keywords: ['technical', 'support', 't2', 'product', 'issue', 'problem', 'broken', 'not working'], popular: true },
  { id: 't2-service', title: 'T2/Technical Support - Service Issue', category: 'Support', keywords: ['technical', 'support', 't2', 'service', 'issue', 'downtime', 'outage'], popular: false },
  { id: 'resource-request', title: 'Resource Request', category: 'Request Forms', keywords: ['resource', 'request', 'access', 'permission', 'allocation'], popular: true },
  { id: 'imei-inquiry', title: 'IMEI Inquiry', category: 'Request Forms', keywords: ['imei', 'inquiry', 'device', 'identifier', 'lookup'], popular: true },
  { id: 'new-features', title: 'New Features', category: 'Product', keywords: ['feature', 'request', 'enhancement', 'new', 'capability'], popular: false },
  { id: 'general-enquiries', title: 'General Enquiries', category: 'Support', keywords: ['general', 'enquiry', 'question', 'help', 'information'], popular: false },
  { id: 'change-request', title: 'Change Request', category: 'Business Operations', keywords: ['change', 'modify', 'update', 'alter', 'account'], popular: true },
  { id: 'billing-dispute', title: 'Billing Dispute', category: 'Business Operations', keywords: ['billing', 'dispute', 'invoice', 'charge', 'payment', 'refund'], popular: true },
  { id: 'short-term-vad', title: 'Short Term VAD', category: 'Business Operations', keywords: ['vad', 'value added', 'dealer', 'short term'], popular: false },
  { id: 'plans-modifications', title: 'Plans Modifications', category: 'Business Operations', keywords: ['plan', 'modification', 'subscription', 'tier', 'upgrade', 'downgrade'], popular: false },
  { id: 'migrations', title: 'Migrations', category: 'Business Operations', keywords: ['migration', 'transfer', 'move', 'relocate'], popular: false },
  { id: 'product-dev-hardware', title: 'Product Development - Hardware', category: 'Product Development', keywords: ['hardware', 'device', 'physical', 'equipment', 'product dev'], popular: false },
  { id: 'product-dev-software', title: 'Product Development - Software', category: 'Product Development', keywords: ['software', 'application', 'app', 'code', 'product dev'], popular: false },
  { id: 'product-dev-integration', title: 'Product Development - Integration', category: 'Product Development', keywords: ['integration', 'api', 'connect', 'interface', 'product dev'], popular: false }
];

const recentSearches = ['Billing issue', 'IMEI lookup', 'Technical support'];

export default function Approach4SearchFirst({ onBack }: Approach4Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const filteredRequests = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return requestTypes
      .filter(request =>
        request.title.toLowerCase().includes(query) ||
        request.category.toLowerCase().includes(query) ||
        request.keywords.some(keyword => keyword.includes(query))
      )
      .slice(0, 8);
  }, [searchQuery]);

  const popularRequests = requestTypes.filter(r => r.popular);

  const handleSearchSelect = (requestId: string) => {
    setSelectedRequest(requestId);
    setSearchQuery('');
    setIsFocused(false);
  };

  const handleQuickSelect = (title: string) => {
    setSearchQuery(title);
    setIsFocused(true);
  };

  const selectedRequestData = requestTypes.find(r => r.id === selectedRequest);

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
                <p className="text-slate-600">Search for the type of request you want to submit</p>
              </div>

              <div className="relative mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    placeholder="Type to search (e.g., 'billing', 'IMEI', 'technical support')..."
                    className="w-full pl-12 pr-4 py-4 text-lg border-2 border-slate-200 rounded-lg focus:border-violet-500 focus:outline-none transition-colors"
                  />
                </div>

                {(isFocused && (filteredRequests.length > 0 || searchQuery.trim())) && (
                  <div className="absolute w-full mt-2 bg-white rounded-lg shadow-xl border border-slate-200 max-h-96 overflow-y-auto z-10">
                    {filteredRequests.length > 0 ? (
                      <div className="py-2">
                        {filteredRequests.map((request) => (
                          <button
                            key={request.id}
                            onClick={() => handleSearchSelect(request.id)}
                            className="w-full px-4 py-3 text-left hover:bg-violet-50 transition-colors border-b border-slate-100 last:border-b-0"
                          >
                            <div className="font-medium text-slate-900">{request.title}</div>
                            <div className="text-sm text-slate-500">{request.category}</div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="px-4 py-6 text-center text-slate-500">
                        No matching request types found. Try different keywords.
                      </div>
                    )}
                  </div>
                )}
              </div>

              {!selectedRequest && (
                <>
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-5 h-5 text-violet-500 mr-2" />
                      <h2 className="font-semibold text-slate-900">Popular Requests</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {popularRequests.map((request) => (
                        <button
                          key={request.id}
                          onClick={() => handleSearchSelect(request.id)}
                          className="p-4 rounded-lg border border-slate-200 hover:border-violet-400 hover:shadow-md text-left transition-all"
                        >
                          <div className="font-medium text-slate-900 mb-1">{request.title}</div>
                          <div className="text-xs text-slate-500">{request.category}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <Clock className="w-5 h-5 text-slate-400 mr-2" />
                      <h2 className="font-semibold text-slate-900">Recent Searches</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((search, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuickSelect(search)}
                          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm text-slate-700 transition-colors"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {selectedRequest && (
                <div className="animate-fadeIn">
                  <div className="mb-4 p-4 bg-violet-50 rounded-lg border border-violet-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900">{selectedRequestData?.title}</div>
                        <div className="text-sm text-slate-600">{selectedRequestData?.category}</div>
                      </div>
                      <button
                        onClick={() => setSelectedRequest(null)}
                        className="text-sm text-violet-600 hover:text-violet-700 font-medium"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                  <RequestForm
                    category={selectedRequestData?.category || ''}
                    subOption={selectedRequestData?.title}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <AnalysisPanel
              approach="4"
              title="Search-First with Suggestions"
              pros={[
                'Fastest for experienced users who know what they want',
                'Natural language input feels intuitive',
                'Smart suggestions guide users to correct option',
                'Works excellently on all devices',
                'Reduces clicks to absolute minimum (type + click)',
                'Popular and recent items provide shortcuts',
                'Scales well with growing number of request types'
              ]}
              cons={[
                'Requires good search implementation with synonyms',
                'May be unclear for first-time users',
                'Search quality depends on keyword mapping',
                'Users must know general terminology',
                'Empty search results can be frustrating'
              ]}
              implementation={[
                'Implement client-side fuzzy search (e.g., Fuse.js)',
                'Build keyword dictionary for each request type',
                'Use Power Portal web templates for suggestions dropdown',
                'Store popular requests based on usage analytics',
                'Implement debouncing for search input (300ms)',
                'Cache recent searches in browser local storage',
                'Track analytics to improve keyword matching',
                'Consider integrating Azure Cognitive Search for advanced scenarios'
              ]}
              bestFor="Portals with many request types (15+) and experienced partners who submit requests frequently. Ideal when request type names are distinctive and searchable. Perfect for power users."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
