import React from 'react';
import MetaSection from './components/MetaSection';
import GoogleSection from './components/GoogleSection';
import InfluencerSection from './components/InfluencerSection';
import Automation from './components/Automation';
import Audiovisual from './components/Audiovisual';

export default function App() {
  return (
    // scroll-smooth activa el comportamiento de scroll suave nativo en el contenedor.
    // h-screen y overflow-y-auto habilitan que el scroll ocurra limpiamente a nivel de la App.
    <div className="h-screen w-full overflow-y-auto scroll-smooth bg-[#0e0f11]">
      
      {/* Primera Sección: Redes Sociales */}
      <MetaSection />
      <GoogleSection />
      <Audiovisual />
      <InfluencerSection />
      <Automation />

    </div>
  );
}