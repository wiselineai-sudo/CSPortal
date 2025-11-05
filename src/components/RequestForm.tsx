import { Send } from 'lucide-react';

interface RequestFormProps {
  category: string;
  subOption: string | null;
}

export default function RequestForm({ category, subOption }: RequestFormProps) {
  return (
    <div className="space-y-6">
      <div className="border-l-4 border-blue-500 pl-4">
        <h3 className="font-semibold text-slate-900 mb-1">Request Form</h3>
        <p className="text-sm text-slate-600">
          {category} {subOption && `› ${subOption}`}
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Request Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Brief description of your request"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Priority <span className="text-red-500">*</span>
          </label>
          <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Detailed Description <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={5}
            placeholder="Please provide detailed information about your request..."
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Attachments
          </label>
          <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-slate-400 transition-colors cursor-pointer">
            <div className="text-slate-500 text-sm">
              Click to upload or drag and drop files here
            </div>
            <div className="text-slate-400 text-xs mt-1">
              PDF, PNG, JPG up to 10MB
            </div>
          </div>
        </div>

        {category.toLowerCase().includes('business') && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Account Reference
            </label>
            <input
              type="text"
              placeholder="Enter account or reference number"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        )}

        {category.toLowerCase().includes('technical') && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Device/Product ID
            </label>
            <input
              type="text"
              placeholder="Enter device or product identifier"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        )}

        <div className="flex items-center">
          <input
            type="checkbox"
            id="urgent"
            className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="urgent" className="ml-2 text-sm text-slate-700">
            This is an urgent request requiring immediate attention
          </label>
        </div>
      </div>

      <div className="flex gap-3 pt-4 border-t">
        <button
          type="button"
          className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
        >
          <Send className="w-4 h-4 mr-2" />
          Submit Request
        </button>
        <button
          type="button"
          className="px-6 py-3 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition-colors"
        >
          Save Draft
        </button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
        <strong>Note:</strong> This is a demonstration form. In the actual Power Portal implementation, fields would be dynamically configured based on the Dataverse entity and form customization.
      </div>
    </div>
  );
}
