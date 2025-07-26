# IPO Web App - Bluestock Fintech

A comprehensive web application for managing Initial Public Offerings (IPOs) with modern UI/UX design. Built with React, Tailwind CSS, and Lucide React icons.

## 🚀 Features

### Core Functionality
- **IPO Admin Dashboard** - Overview of IPO statistics and management
- **IPO Upcoming Screen** - Track and analyze upcoming IPOs
- **IPO Subscription Management** - Manage IPO subscriptions and applications
- **IPO Allotment Tracking** - Monitor allotment status and results
- **Project Management** - Manage projects and related activities

### Key Components
- **Modern UI/UX** - Clean, responsive design with Tailwind CSS
- **Real-time Notifications** - System notifications and alerts
- **Interactive Charts** - Visual data representation for IPO statistics
- **Search & Filter** - Advanced search and filtering capabilities
- **Bookmark System** - Save and organize favorite IPOs
- **Export Functionality** - Download reports and data

## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar.js          # Main navigation sidebar
│   ├── IpoDetails.js       # IPO details modal component
│   ├── IpoChart.js         # Chart components for statistics
│   └── Notification.js     # Notification system
├── pages/
│   ├── AdminDashboard.js   # Main admin dashboard
│   ├── IpoUpcoming.js      # IPO upcoming screen
│   ├── IpoSubscription.js  # IPO subscription management
│   ├── IpoAllotment.js     # IPO allotment tracking
│   ├── ProjectManagement.js # Project management
│   ├── Login.js            # Authentication page
│   └── ...                 # Other pages
├── contexts/
│   └── AuthContext.js      # Authentication context
└── index.css               # Global styles
```

## 🎨 UI Components

### Admin Dashboard
- IPO statistics overview with visual indicators
- Quick links to external resources (NSE, BSE, SEBI, Money Control)
- Main Board IPO visualization
- Department statistics and recent activities
- System health monitoring

### IPO Upcoming Screen
- Comprehensive list of upcoming IPOs
- Search and filter functionality
- Bookmark and share features
- Detailed IPO information display
- Category-based organization

### IPO Subscription
- Subscription status tracking
- Application management
- Status indicators (Subscribed, Pending, Rejected)
- Export and download capabilities
- Financial data visualization

### IPO Allotment
- Allotment status monitoring
- Success rate calculations
- Ratio and oversubscription data
- Listing date tracking
- Performance analytics

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Notifications**: React Hot Toast

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Full-Stack-WebAPP
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Usage

### Navigation
- Use the sidebar to navigate between different sections
- The admin dashboard provides an overview of all IPO activities
- Each section has its own search and filter capabilities

### IPO Management
1. **View Upcoming IPOs**: Navigate to "IPO Upcoming" to see all upcoming IPOs
2. **Subscribe to IPOs**: Use the "IPO Subscription" section to manage applications
3. **Track Allotments**: Monitor allotment status in the "IPO Allotment" section
4. **Bookmark IPOs**: Click the bookmark icon to save IPOs for later reference

### Features
- **Search**: Use the search bar to find specific IPOs
- **Filter**: Apply filters to narrow down results
- **Export**: Download data and reports
- **Notifications**: Stay updated with real-time notifications

## 🎯 Key Features

### Responsive Design
- Mobile-friendly interface
- Adaptive layouts for different screen sizes
- Touch-friendly interactions

### Data Visualization
- Interactive charts and graphs
- Color-coded status indicators
- Progress bars and statistics

### User Experience
- Intuitive navigation
- Fast loading times
- Smooth animations and transitions
- Accessibility features

## 🔧 Customization

### Styling
The app uses Tailwind CSS for styling. You can customize the design by:
- Modifying the `tailwind.config.js` file
- Updating component styles in `src/index.css`
- Adding custom CSS classes

### Components
All components are modular and reusable. You can:
- Modify existing components
- Create new components
- Extend functionality as needed

## 📊 Data Structure

### IPO Object
```javascript
{
  id: 1,
  companyName: "TechCorp Solutions Ltd",
  symbol: "TECHCORP",
  priceRange: "₹450 - ₹500",
  lotSize: "30 shares",
  issueSize: "₹1,250 Cr",
  openDate: "2024-02-15",
  closeDate: "2024-02-18",
  status: "upcoming",
  category: "Technology",
  rating: 4.5,
  isBookmarked: false,
  description: "Company description..."
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔮 Future Enhancements

- Real-time data integration
- Advanced analytics dashboard
- Mobile app development
- API integration with stock exchanges
- Machine learning predictions
- Multi-language support

---

**Note**: This is a frontend-only implementation. Backend integration and real data sources need to be implemented for production use. 