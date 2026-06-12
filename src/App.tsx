import InteractiveBackground from './components/InteractiveBackground';
import MetaSection from './components/MetaSection';
import GoogleSection from './components/GoogleSection';
import Audiovisual from './components/Audiovisual';
import InfluencerSection from './components/InfluencerSection';
import Automation from './components/Automation';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <InteractiveBackground />
      <main className="relative z-10">
        <MetaSection />
        <GoogleSection />
        <Audiovisual />
        <InfluencerSection />
        <Automation />
      </main>
    </div>
  );
}
