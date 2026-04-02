import React, { createContext, useContext, useReducer, type ReactNode } from 'react';

type UserRole = 'viewer' | 'admin';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
}

interface DashboardState {
  transactions: Transaction[];
  userRole: UserRole;
  isDarkMode: boolean;
  isAddModalOpen: boolean;
}

type DashboardAction =
  | { type: 'SET_USER_ROLE'; payload: UserRole }
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'OPEN_ADD_MODAL' }
  | { type: 'CLOSE_ADD_MODAL' }
  | { type: 'ADD_TRANSACTION'; payload: Transaction };

const initialState: DashboardState = {
  transactions: [
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
  ],
  userRole: 'viewer',
  isDarkMode: false,
  isAddModalOpen: false,
};

function dashboardReducer(state: DashboardState, action: DashboardAction): DashboardState {
  switch (action.type) {
    case 'SET_USER_ROLE':
      return { ...state, userRole: action.payload };
    case 'TOGGLE_DARK_MODE':
      return { ...state, isDarkMode: !state.isDarkMode };
    case 'OPEN_ADD_MODAL':
      return { ...state, isAddModalOpen: true };
    case 'CLOSE_ADD_MODAL':
      return { ...state, isAddModalOpen: false };
    case 'ADD_TRANSACTION':
      return { ...state, transactions: [action.payload, ...state.transactions] };
    default:
      return state;
  }
}

interface DashboardContextType {
  state: DashboardState;
  dispatch: React.Dispatch<DashboardAction>;
  getFinancialSummary: () => { totalBalance: number; totalIncome: number; totalExpenses: number; monthlyChange: number };
}

export const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  const getFinancialSummary = () => {
    const income = state.transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const expenses = state.transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const totalBalance = income - expenses;
    const monthlyChange = 12.5; // Mock data

    return { totalBalance, totalIncome: income, totalExpenses: expenses, monthlyChange };
  };

  return (
    <DashboardContext.Provider value={{ state, dispatch, getFinancialSummary }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}
