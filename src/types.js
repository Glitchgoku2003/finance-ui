export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
}

export interface MonthlyData {
  month: string;
  balance: number;
  income: number;
  expenses: number;
}

export interface CategorySpending {
  category: string;
  amount: number;
  percentage: number;
}

export interface FinancialSummary {
  totalBalance: number;
  totalIncome: number;
  totalExpenses: number;
  monthlyChange: number;
}

export type UserRole = 'viewer' | 'admin';

export interface DashboardFilters {
  searchTerm: string;
  category: string;
  type: 'all' | 'income' | 'expense';
  sortBy: 'date' | 'amount' | 'description';
  sortOrder: 'asc' | 'desc';
}
