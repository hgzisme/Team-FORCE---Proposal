# DocuVerse - Document-Based Learning Platform

A revolutionary document-based learning platform built with React and AWS serverless architecture. DocuVerse transforms reading from a passive act into an active, focused journey with integrated Focus Mode, Pomodoro timer, smart note-taking, and seamless Google Calendar integration.

## 🌟 Features

### Core Features
- **Focus Mode**: Distraction-free reading environment designed for deep concentration
- **Smart Note-Taking**: Highlight passages and attach notes/to-dos directly to text
- **Pomodoro Timer**: Integrated timer to structure study sessions effectively
- **Calendar Integration**: Connect with Google Calendar to schedule learning time
- **Document Library**: Browse e-books, research papers, and study guides
- **Advanced Search & Filtering**: Find documents by category, type, author, and topic
- **Reading Progress Tracking**: Monitor your reading journey and retention
- **Secure Document Access**: AWS-powered secure document delivery
- **User Authentication**: AWS Cognito-based secure login and signup

### Design Features
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, distraction-free interface optimized for reading
- **Intuitive Navigation**: Easy-to-use navigation with clear visual hierarchy
- **Accessible**: Built with accessibility best practices

## 🚀 Technologies Used

### Frontend
- **React 19** - Modern UI library
- **React Router** - Client-side routing
- **Lucide React** - Modern icon system
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling with modern features

### AWS Serverless Architecture (Planned)
- **Amazon S3** - Secure document storage
- **Amazon DynamoDB** - User data, notes, highlights, and tasks
- **AWS Lambda** - Document processing and secure link generation
- **Amazon API Gateway** - Backend API management
- **Amazon Cognito** - User authentication and authorization
- **AWS WAF + CloudFront** - Global delivery and security
- **CloudWatch** - Monitoring and logging
- **AWS Amplify** - Frontend hosting

## 📦 Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit: `http://localhost:5174`

## 📂 Project Structure

```
src/
├── components/           # Reusable components
│   ├── Navbar.jsx       # Navigation bar with search
│   ├── Footer.jsx       # Site footer
│   ├── DocumentCard.jsx # Document display card
│   └── FocusMode.jsx    # Focus Mode reading interface
├── pages/               # Page components
│   ├── Home.jsx         # Landing page
│   ├── Library.jsx      # Document library with filters
│   ├── DocumentDetail.jsx # Individual document page
│   ├── DocumentReader.jsx # Document reader with Focus Mode
│   ├── Login.jsx        # Login page
│   ├── Signup.jsx       # Registration page
│   ├── Dashboard.jsx    # User dashboard (My Documents)
│   └── Cart.jsx         # Shopping cart
├── data/                # Mock data
│   └── documentsData.js # Document and category data
└── styles/              # CSS modules
```

## 🎯 Key Features

### 1. Home Page
- Hero section highlighting Focus Mode and smart learning
- Featured documents showcase
- Category exploration grid (E-books, Research Papers, Study Guides)
- Benefits of active reading and retention
- Call-to-action section

### 2. Library Page
- Advanced filtering (document type, category, topic, author)
- Real-time search functionality
- Multiple sorting options
- Responsive document grid
- Mobile-friendly filters

### 3. Document Detail Page
- Comprehensive document information
- Preview capability
- Table of contents
- Author profile and credentials
- Reader reviews and ratings
- Sticky purchase card

### 4. Document Reader (Focus Mode)
- **Distraction-free reading interface**
- **Integrated Pomodoro timer** for time management
- **Highlight and note-taking** directly on text
- **To-do items linked to passages**
- **Progress tracking** by page/section
- **Google Calendar integration** for scheduling
- Clean typography optimized for reading
- Adjustable font size and reading preferences

### 5. User Dashboard (My Documents)
- Reading progress tracking for purchased documents
- Reading completion percentages
- All notes and highlights in one place
- Active to-do items from reading sessions
- Reading statistics and time spent
- Quick access to continue reading

### 6. Shopping Cart
- Multiple document purchase management
- Price breakdown with discounts
- Promo code support
- Secure payment info
- Recommended documents section

## 🎨 Design Principles

1. **Clarity**: Clean interface with clear visual hierarchy
2. **Consistency**: Unified design language
3. **Accessibility**: WCAG compliant
4. **Responsiveness**: Works on all screen sizes
5. **Performance**: Optimized and fast
6. **Modern**: Contemporary UI trends

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 💡 DocuVerse Philosophy

DocuVerse is built on the belief that reading should be an active, engaging experience—not a passive scroll. Our platform:

1. **Enhances Retention**: Active reading with notes and highlights leads to better memory and understanding
2. **Respects Focus**: Focus Mode eliminates distractions so you can truly absorb knowledge
3. **Connects Ideas**: Link your thoughts and tasks directly to the text that inspired them
4. **Manages Time**: Built-in Pomodoro timer and calendar integration help you build consistent learning habits
5. **Scales Effortlessly**: Serverless AWS architecture ensures security, speed, and low operational costs

## 🔐 Security & Infrastructure

Built on AWS serverless architecture with:
- **Least privilege access** - Minimized permissions across all services
- **Encrypted storage** - All documents securely stored in S3
- **Temporary access links** - Time-limited document access URLs
- **MFA support** - Multi-factor authentication via Cognito
- **WAF protection** - Web Application Firewall against common threats
- **Automatic backups** - S3 versioning and DynamoDB point-in-time recovery

## 📈 Operational Excellence

- **Monthly costs**: < $100 with pay-per-use pricing
- **Auto-scaling**: Handles traffic spikes automatically
- **99.9% uptime**: Built on AWS infrastructure
- **Global CDN**: Fast document delivery via CloudFront
- **Monitoring**: Real-time health checks and alerts via CloudWatch

---

**Built with ❤️ for focused learners worldwide**

*Transform your reading. Enhance your learning. Welcome to DocuVerse.*
