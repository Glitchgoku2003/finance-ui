import { DashboardProvider } from './DashboardContext';
import { Header } from './Header';
import { SummaryCards } from './SummaryCards';
import { TransactionsSection } from './TransactionsSection';
import { AddTransactionModal } from './AddTransactionModal';
import { useEffect } from 'react';
import { useDashboard } from './DashboardContext';
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
