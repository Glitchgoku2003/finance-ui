import { Transaction, MonthlyData, CategorySpending } from './types';

export const mockTransactions: Transaction[] = [
  { id: '1', date: '2024-01-15', description: 'Salary', amount: 5000, category: 'Salary', type: 'income' },
  { id: '2', date: '2024-01-16', description: 'Grocery Shopping', amount: 150, category: 'Food', type: 'expense' },
  { id: '3', date: '2024-01-18', description: 'Electric Bill', amount: 120, category: 'Utilities', type: 'expense' },
  { id: '4', date: '2024-01-20', description: 'Freelance Project', amount: 800, category: 'Freelance', type: 'income' },
  { id: '5', date: '2024-01-22', description: 'Restaurant', amount: 85, category: 'Food', type: 'expense' },
  { id: '6', date: '2024-01-25', description: 'Gas Station', amount: 60, category: 'Transportation', type: 'expense' },
  { id: '7', date: '2024-01-28', description: 'Online Course', amount: 199, category: 'Education', type: 'expense' },
  { id: '8', date: '2024-02-01', description: 'Salary', amount: 5000, category: 'Salary', type: 'income' },
  { id: '9', date: '2024-02-05', description: 'Netflix Subscription', amount: 15, category: 'Entertainment', type: 'expense' },
  { id: '10', date: '2024-02-08', description: 'Gym Membership', amount: 50, category: 'Health', type: 'expense' },
  { id: '11', date: '2024-02-12', description: 'Coffee Shop', amount: 25, category: 'Food', type: 'expense' },
  { id: '12', date: '2024-02-15', description: 'Freelance Project', amount: 1200, category: 'Freelance', type: 'income' },
  { id: '13', date: '2024-02-18', description: 'Phone Bill', amount: 45, category: 'Utilities', type: 'expense' },
  { id: '14', date: '2024-02-22', description: 'Clothing', amount: 200, category: 'Shopping', type: 'expense' },
  { id: '15', date: '2024-02-25', description: 'Investment Return', amount: 350, category: 'Investment', type: 'income' },
  { id: '16', date: '2024-03-01', description: 'Salary', amount: 5000, category: 'Salary', type: 'income' },
  { id: '17', date: '2024-03-05', description: 'Grocery Shopping', amount: 180, category: 'Food', type: 'expense' },
  { id: '18', date: '2024-03-08', description: 'Internet Bill', amount: 60, category: 'Utilities', type: 'expense' },
  { id: '19', date: '2024-03-12', description: 'Concert Tickets', amount: 150, category: 'Entertainment', type: 'expense' },
  { id: '20', date: '2024-03-15', description: 'Freelance Project', amount: 900, category: 'Freelance', type: 'income' },
  { id: '21', date: '2024-03-18', description: 'Pharmacy', amount: 35, category: 'Health', type: 'expense' },
  { id: '22', date: '2024-03-22', description: 'Uber Rides', amount: 45, category: 'Transportation', type: 'expense' },
  { id: '23', date: '2024-03-25', description: 'Books', amount: 80, category: 'Education', type: 'expense' },
  { id: '24', date: '2024-03-28', description: 'Dividend Payment', amount: 200, category: 'Investment', type: 'income' },
];

export const mockMonthlyData: MonthlyData[] = [
  { month: 'Jan', balance: 4500, income: 5800, expenses: 1300 },
  { month: 'Feb', balance: 5200, income: 6550, expenses: 1350 },
  { month: 'Mar', balance: 5800, income: 6100, expenses: 1300 },
];

export const mockCategorySpending: CategorySpending[] = [
  { category: 'Food', amount: 440, percentage: 25 },
  { category: 'Transportation', amount: 105, percentage: 6 },
  { category: 'Utilities', amount: 225, percentage: 13 },
  { category: 'Entertainment', amount: 165, percentage: 9 },
  { category: 'Health', amount: 85, percentage: 5 },
  { category: 'Education', amount: 279, percentage: 16 },
  { category: 'Shopping', amount: 200, percentage: 11 },
  { category: 'Other', amount: 251, percentage: 15 },
];

export const categories = [
  'All',
  'Salary',
  'Freelance',
  'Investment',
  'Food',
  'Transportation',
  'Utilities',
  'Entertainment',
  'Health',
  'Education',
  'Shopping',
  'Other',
];
