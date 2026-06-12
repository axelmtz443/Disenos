import MetaSection from './components/MetaSection';
import GoogleSection from './components/GoogleSection';
import Audiovisual from './components/Audiovisual';
import InfluencerSection from './components/InfluencerSection';
import Automation from './components/Automation';

export default function App() {
  return (
    <div className="h-screen w-full overflow-y-auto scroll-smooth bg-[#0e0f11]">
      <MetaSection />
      <GoogleSection />
      <Audiovisual />
      <InfluencerSection />
      <Automation />
    </div>
  );
}