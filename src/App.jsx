import { DashboardProvider } from './DashboardContext.jsx';
import { Header } from './Header.jsx';
import { SummaryCards } from './SummaryCards.jsx';
import { Charts } from './Charts.jsx';
import { TransactionsSection } from './TransactionsSection.jsx';
import { AddTransactionModal } from './AddTransactionModal.jsx';
import { useEffect } from 'react';
import { useDashboard } from './DashboardContext.jsx';
import './dashboard.css';

function AppContent() {
  const { state } = useDashboard();

  useEffect(() => {
    if (state.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [state.isDarkMode]);

  return (
    <div className="dashboard">
      <Header />
      
      <SummaryCards />
      
      <Charts />
      
      <TransactionsSection />
      
      <AddTransactionModal />
    </div>
  );
}

function App() {
  return (
    <DashboardProvider>
      <AppContent />
    </DashboardProvider>
  );
}

export default App;
