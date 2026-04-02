import { useState } from 'react';
import { useDashboard } from './DashboardContext';

export function TransactionsSection() {
  const { state, dispatch } = useDashboard();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'income' | 'expense'>('all');

  const filteredTransactions = state.transactions
    .filter(t => {
      const matchesSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === 'all' || t.type === filterType;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleAddTransaction = () => {
    dispatch({ type: 'OPEN_ADD_MODAL' });
  };

  return (
    <div className="transactions-section">
      <div className="section-header">
        <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#fff', textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
          💫 Transaction History
        </h3>
        <div className="controls">
          <input
            type="text"
            placeholder="🔍 Search transactions..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <select
            className="filter-select"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as 'all' | 'income' | 'expense')}
          >
            <option value="all">✨ All Types</option>
            <option value="income">💰 Income</option>
            <option value="expense">💸 Expenses</option>
          </select>

          {state.userRole === 'admin' && (
            <button
              className="add-transaction-btn pulse"
              onClick={handleAddTransaction}
            >
              <span>⚡</span>
              Add Transaction
            </button>
          )}
        </div>
      </div>

      <div className="transactions-list">
        {filteredTransactions.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', color: 'rgba(255, 255, 255, 0.6)', fontSize: '18px' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
            <div>No transactions found</div>
            <div style={{ fontSize: '14px', marginTop: '8px', opacity: 0.7 }}>
              Try adjusting your search or filters
            </div>
          </div>
        ) : (
          filteredTransactions.map((transaction, index) => (
            <div 
              key={transaction.id} 
              className="transaction-item"
              style={{
                animation: `slideUp 0.3s ease ${index * 0.1}s both`
              }}
            >
              <div className="transaction-info">
                <div className="transaction-date">{formatDate(transaction.date)}</div>
                <div className="transaction-description">
                  {transaction.description}
                  {transaction.type === 'income' && ' 💰'}
                  {transaction.type === 'expense' && ' 💸'}
                </div>
                <span className="transaction-category">{transaction.category}</span>
              </div>
              <div className={`transaction-amount ${transaction.type === 'income' ? 'amount-income' : 'amount-expense'}`}>
                {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
