# ToolVerse 🎓

La plus grande plateforme mondiale d'annuaire d'outils pour étudiants.

## 🌍 Objectif

Créer une plateforme web mondiale, moderne, scalable et professionnelle regroupant :
- Logiciels
- Sites web
- Applications
- Extensions
- IA
- Ressources en ligne

Destinés à tous les étudiants du monde entier.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL + Prisma ORM
- **Authentication**: NextAuth.js
- **Internationalization**: next-intl (FR/EN)

## 📋 Installation

### Prérequis
- Node.js 18+
- PostgreSQL 14+
- npm ou yarn

### Setup

1. Clone le repository:
```bash
git clone https://github.com/ayadiimane09-spec/ToolVerse.git
cd ToolVerse
```

2. Installe les dépendances:
```bash
npm install
```

3. Configure les variables d'environnement:
```bash
cp .env.example .env.local
# Édite .env.local avec tes configurations
```

4. Configure la base de données:
```bash
npm run db:push
```

5. Démarre le serveur de développement:
```bash
npm run dev
```

Accède à http://localhost:3000

## 📁 Structure du projet

```
ToolVerse/
├── app/                    # App Router Next.js
│   ├── [locale]/          # Layout par langue
│   ├── api/               # API routes
│   └── globals.css        # Styles globaux
├── components/            # Composants React réutilisables
├── lib/                   # Utilities et fonctions
├── prisma/                # Schéma et migrations
├── messages/              # Traductions i18n
├── public/                # Assets statiques
├── types/                 # Types TypeScript
└── middleware.ts          # Middleware Next.js
```

## 🎯 Roadmap

### Phase 1: Foundation
- [x] Configuration Next.js
- [x] Setup Prisma
- [x] Configuration i18n
- [ ] Homepage
- [ ] Navbar et layout global

### Phase 2: Core Features
- [ ] Annuaire des outils
- [ ] Système de recherche et filtres
- [ ] Fiches outils détaillées
- [ ] Système de favoris
- [ ] Comparateur d'outils

### Phase 3: Utilisateurs
- [ ] Authentification
- [ ] Profils utilisateurs
- [ ] Système de commentaires
- [ ] Système de notation

### Phase 4: Admin
- [ ] Admin panel
- [ ] Gestion des outils
- [ ] Gestion des catégories
- [ ] Modération

### Phase 5: CPGE
- [ ] Section annales CPGE
- [ ] Filtres spécialisés
- [ ] Ressources prépa

## 📝 Licence

MIT
