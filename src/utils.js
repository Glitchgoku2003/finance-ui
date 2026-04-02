import { Transaction, FinancialSummary } from './types';

export function calculateFinancialSummary(transactions: Transaction[]): FinancialSummary {
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalBalance = income - expenses;
  
  // Calculate monthly change (simplified - comparing last 30 days with previous 30 days)
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const sixtyDaysAgo = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);
  
  const recentTransactions = transactions.filter(
    t => new Date(t.date) >= thirtyDaysAgo
  );
  const olderTransactions = transactions.filter(
    t => new Date(t.date) >= sixtyDaysAgo && new Date(t.date) < thirtyDaysAgo
  );
  
  const recentBalance = recentTransactions.reduce((sum, t) => 
    sum + (t.type === 'income' ? t.amount : -t.amount), 0
  );
  const olderBalance = olderTransactions.reduce((sum, t) => 
    sum + (t.type === 'income' ? t.amount : -t.amount), 0
  );
  
  const monthlyChange = olderBalance !== 0 
    ? ((recentBalance - olderBalance) / Math.abs(olderBalance)) * 100 
    : 0;

  return {
    totalBalance,
    totalIncome: income,
    totalExpenses: expenses,
    monthlyChange,
  };
}

export function filterTransactions(
  transactions: Transaction[],
  filters: {
    searchTerm: string;
    category: string;
    type: 'all' | 'income' | 'expense';
    sortBy: 'date' | 'amount' | 'description';
    sortOrder: 'asc' | 'desc';
  }
): Transaction[] {
  let filtered = [...transactions];

  // Apply search filter
  if (filters.searchTerm) {
    filtered = filtered.filter(t =>
      t.description.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      t.category.toLowerCase().includes(filters.searchTerm.toLowerCase())
    );
  }

  // Apply category filter
  if (filters.category !== 'All') {
    filtered = filtered.filter(t => t.category === filters.category);
  }

  // Apply type filter
  if (filters.type !== 'all') {
    filtered = filtered.filter(t => t.type === filters.type);
  }

  // Apply sorting
  filtered.sort((a, b) => {
    let aValue: string | number | Date, bValue: string | number | Date;
    
    switch (filters.sortBy) {
      case 'date':
        aValue = new Date(a.date);
        bValue = new Date(b.date);
        break;
      case 'amount':
        aValue = a.amount;
        bValue = b.amount;
        break;
      case 'description':
        aValue = a.description.toLowerCase();
        bValue = b.description.toLowerCase();
        break;
      default:
        aValue = new Date(a.date);
        bValue = new Date(b.date);
    }

    if (filters.sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  return filtered;
}
