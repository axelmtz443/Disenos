import InteractiveBackground from './components/InteractiveBackground';
import MetaSection from './components/MetaSection';
import GoogleSection from './components/GoogleSection';
import Audiovisual from './components/Audiovisual';
import InfluencerSection from './components/InfluencerSection';
import Automation from './components/Automation';
import HERO from './components/HERO';
import Barra from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen text-white isolate">
      <InteractiveBackground />
      <main className="relative z-10">
        

        <HERO />
        <MetaSection />
        <GoogleSection />
        <Audiovisual />
        <InfluencerSection />
        <Automation />
      </main>
    </div>
  );
}
