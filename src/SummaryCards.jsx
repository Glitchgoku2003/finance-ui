import { useDashboard } from './DashboardContext.jsx';

export function SummaryCards() {
  const { getFinancialSummary } = useDashboard();
  const summary = getFinancialSummary();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatPercentage = (value) => {
    return `${value >= 0 ? '+' : ''}${value.toFixed(1)}%`;
  };

  return (
    <div className="summary-cards">
      <div className="card neon">
        <div className="card-title">Total Balance</div>
        <div className="card-value">{formatCurrency(summary.totalBalance)}</div>
        <div className={`card-change ${summary.monthlyChange >= 0 ? 'positive' : 'negative'}`}>
          <span>{summary.monthlyChange >= 0 ? '🚀' : '📉'}</span>
          <span>{formatPercentage(summary.monthlyChange)} from last month</span>
        </div>
      </div>

      <div className="card neon">
        <div className="card-title">Total Income</div>
        <div className="card-value">{formatCurrency(summary.totalIncome)}</div>
        <div className="card-change positive">
          <span>💎</span>
          <span>All time earnings</span>
        </div>
      </div>

      <div className="card neon">
        <div className="card-title">Total Expenses</div>
        <div className="card-value">{formatCurrency(summary.totalExpenses)}</div>
        <div className="card-change negative">
          <span>🔥</span>
          <span>All time spending</span>
        </div>
      </div>

      <div className="card neon">
        <div className="card-title">Savings Rate</div>
        <div className="card-value">
          {summary.totalIncome > 0 
            ? `${((summary.totalIncome - summary.totalExpenses) / summary.totalIncome * 100).toFixed(1)}%`
            : '0%'
          }
        </div>
        <div className="card-change positive">
          <span>🏆</span>
          <span>Of total income</span>
        </div>
      </div>
    </div>
  );
}
