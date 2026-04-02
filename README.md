# Finance Dashboard

A comprehensive and interactive finance dashboard built with React, TypeScript, and Vite. This application provides users with a clean interface to track and understand their financial activity with role-based access control, data visualizations, and responsive design.

## 🚀 Features

### Core Dashboard Features
- **Financial Overview**: Summary cards showing total balance, income, expenses, and savings rate
- **Interactive Charts**: Balance trend line chart and spending breakdown pie chart
- **Transaction Management**: Full CRUD operations with filtering and sorting capabilities
- **Financial Insights**: Automated analytics including spending patterns and trends
- **Role-Based Access**: Viewer (read-only) and Admin (full access) roles
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices

### Advanced Features
- **Smart Filtering**: Search transactions by description, filter by category and type
- **Dynamic Sorting**: Sort transactions by date, amount, or description
- **Real-time Calculations**: Automatic updates to financial summaries
- **Data Persistence**: State management with Context API
- **Type Safety**: Full TypeScript implementation

## 🛠️ Technology Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Custom CSS with responsive design
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: Lucide React
- **State Management**: React Context API with useReducer
- **Date Handling**: date-fns

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd finance-bank
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🎯 Usage Guide

### Role-Based Access Control

**Viewer Role:**
- View all financial data and summaries
- Browse and filter transactions
- Access insights and charts
- Cannot add, edit, or delete transactions

**Admin Role:**
- All Viewer permissions
- Add new transactions
- Edit existing transactions
- Delete transactions
- Full data management capabilities

### Dashboard Sections

#### 1. Summary Cards
- **Total Balance**: Current financial balance with monthly change indicator
- **Total Income**: Sum of all income transactions
- **Total Expenses**: Sum of all expense transactions
- **Savings Rate**: Percentage of income saved

#### 2. Visualizations
- **Balance Trend**: Monthly balance, income, and expense trends
- **Spending Breakdown**: Categorical expense distribution

#### 3. Transactions Section
- **Search**: Real-time search by description or category
- **Filters**: Category and transaction type filters
- **Sorting**: Date, amount, or description sorting
- **CRUD Operations**: Add, view, and manage transactions (Admin only)

#### 4. Financial Insights
- **Highest Spending Category**: Top expense category
- **Average Transaction**: Mean transaction amount
- **7-Day Net**: Recent week's net income/loss
- **Total Transactions**: Overall transaction count
- **Savings Rate**: Current savings percentage
- **Monthly Change**: Month-over-month variation

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Header with role switcher and dark mode
│   ├── SummaryCards.tsx        # Financial summary cards
│   ├── Charts.tsx              # Balance trend and spending charts
│   ├── TransactionsSection.tsx # Transaction list with controls
│   ├── InsightsSection.tsx     # Financial analytics
│   └── AddTransactionModal.tsx # Add transaction form
├── context/
│   └── DashboardContext.tsx    # Global state management
├── types/
│   └── types.ts                # TypeScript type definitions
├── data/
│   └── mockData.ts             # Sample data and constants
├── styles/
│   └── dashboard.css           # Custom styling
├── App.tsx                     # Main application component
└── main.tsx                    # Application entry point
```

## 🎨 Design Principles

### UI/UX Features
- **Clean Interface**: Minimalist design with clear visual hierarchy
- **Intuitive Navigation**: Logical flow and easy-to-use controls
- **Visual Feedback**: Hover states, transitions, and micro-interactions
- **Accessibility**: Semantic HTML and ARIA labels
- **Color Coding**: Green for income, red for expenses, neutral for balances

### Responsive Design
- **Mobile-First Approach**: Optimized for mobile devices
- **Flexible Grids**: Adaptive layouts for different screen sizes
- **Touch-Friendly**: Appropriate touch targets for mobile interaction

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

### Code Quality
- **TypeScript**: Full type safety and IntelliSense support
- **ESLint**: Code quality and consistency checks
- **Component Architecture**: Modular and reusable components
- **State Management**: Centralized state with Context API

## 📊 Data Model

### Transaction Structure
```typescript
interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
}
```

### Supported Categories
- Salary, Freelance, Investment (Income)
- Food, Transportation, Utilities, Entertainment
- Health, Education, Shopping, Other (Expenses)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
The build output in `dist/` can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## 🔮 Future Enhancements

### Planned Features
- [ ] Data persistence with localStorage
- [ ] CSV/JSON export functionality
- [ ] Advanced filtering and grouping
- [ ] Transaction categories management
- [ ] Budget tracking and alerts
- [ ] Multi-currency support
- [ ] Transaction import from bank APIs
- [ ] Advanced analytics and reporting

### Technical Improvements
- [ ] Unit and integration tests
- [ ] End-to-end testing with Playwright
- [ ] Performance optimization
- [ ] Progressive Web App (PWA) features
- [ ] Offline functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with React and TypeScript
- Charts powered by Chart.js
- Icons from Lucide React
- Styled with custom CSS

---

**Note**: This project is for evaluation purposes and demonstrates frontend development capabilities. The application uses mock data and does not connect to real banking APIs.
