# ToolVerse - Next.js Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables
```bash
cp .env.example .env.local
# Edit .env.local with your database and auth credentials
```

### 3. Setup Database
```bash
# Push schema to database
npm run db:push

# Generate Prisma Client
npm run db:generate
```

### 4. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## 📁 Project Structure

```
ToolVerse/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # Dynamic locale routing
│   │   ├── layout.tsx            # Locale layout
│   │   └── page.tsx              # Home page
│   ├── api/                      # API Routes
│   │   ├── tools/                # Tools endpoints
│   │   ├── categories/           # Categories endpoints
│   │   └── cpge/                 # CPGE endpoints
│   └── globals.css               # Global styles
│
├── components/                   # React components
│   └── Navbar.tsx                # Navigation component
│
├── lib/                          # Utility functions
│   ├── auth.ts                   # NextAuth configuration
│   ├── prisma.ts                 # Prisma client singleton
│   └── utils.ts                  # Helper functions
│
├── prisma/                       # Prisma ORM
│   └── schema.prisma             # Database schema
│
├── messages/                     # i18n translations
│   ├── fr.json                   # French translations
│   └── en.json                   # English translations
│
├── types/                        # TypeScript types
│   └── index.ts                  # Type definitions
│
├── i18n/                         # i18n configuration
│   └── config.ts                 # next-intl config
│
├── middleware.ts                 # Next.js middleware for i18n
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS config
├── tsconfig.json                 # TypeScript config
└── package.json                  # Dependencies
```

## 🗄️ Database Models

### Core Models
- **User**: Authentication and user profiles
- **Category**: Tool categories with translations
- **Tool**: Main resource with translations
- **Tag**: Categorization tags with translations
- **ToolAlternative**: Tool alternatives/competitors
- **Favorite**: User favorite tools
- **Comment**: User reviews and comments
- **Rating**: User ratings (1-5 stars)
- **Comparison**: Tool comparison lists
- **CPGEResource**: CPGE exam resources

## 🌍 Internationalization

- **Locales**: French (fr), English (en)
- **Default Locale**: French
- **URL Structure**: `/fr/...`, `/en/...`
- **Auto-detection**: Browser language preference
- **Extensible**: Easy to add more languages

## 🔐 Authentication

- **Provider**: NextAuth.js
- **Strategies**: Credentials (expandable for OAuth)
- **Features**: Login, Logout, User session management

## 🎨 Styling

- **Framework**: Tailwind CSS
- **Dark Mode**: Supported
- **Responsive**: Mobile-first design

## 📡 API Endpoints

- `GET /api/tools` - List all tools
- `GET /api/tools/[id]` - Get tool details
- `GET /api/categories` - List all categories
- `GET /api/cpge` - List CPGE resources

## 🔄 Next Steps

1. **Homepage Implementation**
   - Category cards
   - Featured tools section
   - Search functionality

2. **Tools Directory**
   - Tools listing page
   - Advanced filtering
   - Search with autocomplete

3. **Authentication**
   - User registration
   - Login/Logout
   - User profiles

4. **Admin Panel**
   - Tool management (CRUD)
   - Category management
   - Comment moderation

5. **CPGE Section**
   - CPGE exams listing
   - Advanced filtering by exam/stream/year
   - Resource management

## 🚀 Deployment

- **Hosting**: Vercel (recommended for Next.js)
- **Database**: Heroku PostgreSQL or managed PostgreSQL
- **Environment Variables**: Set on hosting platform

## 📚 Useful Commands

```bash
# Development
npm run dev                # Start dev server
npm run build              # Build for production
npm run start              # Start production server
npm run lint               # Run ESLint

# Database
npm run db:push            # Push schema to database
npm run db:generate        # Generate Prisma Client
npm run db:studio          # Open Prisma Studio UI
```

## 🤝 Contributing

See CONTRIBUTING.md for guidelines.

## 📄 License

MIT
