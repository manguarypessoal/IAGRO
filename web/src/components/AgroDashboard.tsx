import React, { useState } from 'react';
import { Tractor, Map, Sprout, ShieldCheck } from 'lucide-react';

const AgroDashboard = () => {
  const [activeTab, setActiveTab] = useState('machines');

  const tabs = [
    { id: 'machines', label: 'Ativos Mecânicos', icon: <Tractor size={20} /> },
    { id: 'land', label: 'Land Intelligence', icon: <Map size={20} /> },
    { id: 'crops', label: 'Safra & Commodities', icon: <Sprout size={20} /> },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">IAGRO</h1>
          <p className="text-slate-500">Inteligência de Dados para Valuation Rural</p>
        </div>
        <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
          <ShieldCheck size={18} /> Compliance Ativo
        </div>
      </header>

      {/* Navegação por Abas Dinâmicas */}
      <div className="flex border-b border-slate-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-all ${
              activeTab === tab.id 
              ? 'border-b-4 border-green-600 text-green-700' 
              : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Conteúdo da Aba */}
      <main className="bg-white rounded-xl shadow-sm border border-slate-100 p-10">
        {activeTab === 'machines' && (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-xl font-semibold mb-4 text-slate-800">Valuation de Maquinário</h2>
            {/* Componente de formulário aqui */}
            <p className="text-slate-600">Insira as horas de uso e modelo para cálculo de depreciação dinâmica.</p>
          </div>
        )}
        {/* Outras abas seguem o mesmo padrão... */}
      </main>
    </div>
  );
};

export default AgroDashboard;
