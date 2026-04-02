import { useMemo } from 'react';
import { useDashboard } from './useDashboard';
import { TrendingUp, AlertCircle, DollarSign, Calendar } from 'lucide-react';

export function InsightsSection() {
  const { state, getFinancialSummary } = useDashboard();
  const summary = getFinancialSummary();

  // Calculate insights using useMemo to avoid impure function calls
  const insights = useMemo(() => {
    const expensesByCategory = state.transactions
      .filter(t => t.type === 'expense')
      .reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount;
        return acc;
      }, {} as Record<string, number>);

    const highestSpendingCategory = Object.entries(expensesByCategory)
      .sort(([, a], [, b]) => b - a)[0];

    const averageTransactionAmount = state.transactions.length > 0
      ? state.transactions.reduce((sum, t) => sum + t.amount, 0) / state.transactions.length
      : 0;

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const recentTransactions = state.transactions
      .filter(t => new Date(t.date) >= sevenDaysAgo)
      .reduce((sum, t) => sum + (t.type === 'income' ? t.amount : -t.amount), 0);

    return {
      highestSpendingCategory,
      averageTransactionAmount,
      recentTransactions,
    };
  }, [state.transactions]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="insights-section">
      <h3 className="chart-title">Financial Insights</h3>
      <div className="insights-grid">
        <div className="insight-item">
          <TrendingUp size={24} style={{ color: '#3b82f6', marginBottom: '8px' }} />
          <div className="insight-value">
            {insights.highestSpendingCategory ? insights.highestSpendingCategory[0] : 'N/A'}
          </div>
          <div className="insight-label">Highest Spending Category</div>
        </div>

        <div className="insight-item">
          <DollarSign size={24} style={{ color: '#10b981', marginBottom: '8px' }} />
          <div className="insight-value">
            {formatCurrency(insights.averageTransactionAmount)}
          </div>
          <div className="insight-label">Average Transaction</div>
        </div>

        <div className="insight-item">
          <Calendar size={24} style={{ color: '#f59e0b', marginBottom: '8px' }} />
          <div className="insight-value">
            {formatCurrency(Math.abs(insights.recentTransactions))}
          </div>
          <div className="insight-label">
            {insights.recentTransactions >= 0 ? 'Net Income (7 days)' : 'Net Loss (7 days)'}
          </div>
        </div>

        <div className="insight-item">
          <AlertCircle size={24} style={{ color: '#ef4444', marginBottom: '8px' }} />
          <div className="insight-value">
            {state.transactions.length}
          </div>
          <div className="insight-label">Total Transactions</div>
        </div>

        <div className="insight-item">
          <DollarSign size={24} style={{ color: '#8b5cf6', marginBottom: '8px' }} />
          <div className="insight-value">
            {summary.totalIncome > 0 
              ? `${((summary.totalIncome - summary.totalExpenses) / summary.totalIncome * 100).toFixed(1)}%`
              : '0%'
            }
          </div>
          <div className="insight-label">Savings Rate</div>
        </div>

        <div className="insight-item">
          <TrendingUp size={24} style={{ color: '#06b6d4', marginBottom: '8px' }} />
          <div className="insight-value">
            {summary.monthlyChange >= 0 ? '+' : ''}{summary.monthlyChange.toFixed(1)}%
          </div>
          <div className="insight-label">Monthly Change</div>
        </div>
      </div>
    </div>
  );
}
