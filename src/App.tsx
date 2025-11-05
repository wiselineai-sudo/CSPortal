import { useState } from 'react';
import ApproachSelector from './components/ApproachSelector';
import Approach1SmartWizard from './components/Approach1SmartWizard';
import Approach2MegaMenu from './components/Approach2MegaMenu';
import Approach3CardBased from './components/Approach3CardBased';
import Approach4SearchFirst from './components/Approach4SearchFirst';
import Approach5TabBased from './components/Approach5TabBased';

function App() {
  const [selectedApproach, setSelectedApproach] = useState<number | null>(null);

  const renderApproach = () => {
    switch (selectedApproach) {
      case 1:
        return <Approach1SmartWizard onBack={() => setSelectedApproach(null)} />;
      case 2:
        return <Approach2MegaMenu onBack={() => setSelectedApproach(null)} />;
      case 3:
        return <Approach3CardBased onBack={() => setSelectedApproach(null)} />;
      case 4:
        return <Approach4SearchFirst onBack={() => setSelectedApproach(null)} />;
      case 5:
        return <Approach5TabBased onBack={() => setSelectedApproach(null)} />;
      default:
        return <ApproachSelector onSelect={setSelectedApproach} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {renderApproach()}
    </div>
  );
}

export default App;
