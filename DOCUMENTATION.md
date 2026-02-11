# Documentation - Implémentation Avozono avec MCP Figma

## 📋 Vue d'ensemble

Ce document documente le processus complet d'implémentation test pour **Avozono** (avec test de messagerie front et gestion de dossiers) à partir de designs Figma, utilisant MCP (Model Context Protocol) Figma pour récupérer le contexte de design et le convertir en code.

---

## 🎯 Contexte Initial

### Fichier Figma Principal
- **URL**: https://www.figma.com/design/T91RSymFkaEaoJuxSXfhtO/Avozono
- **Nodes utilisés**:
  - `5013:9349` - Vue desktop complète (messagerie + filtre)
  - `5013:9158` - Vue mobile liste des dossiers
  - `5013:9254` - Vue mobile chat/messagerie

### Technologies Cibles
- **Framework**: Vite + TypeScript
- **Markup**: HTML5 Sémantique
- **Styling**: CSS3 (pas de Tailwind)
- **Icons**: Font Awesome 6.5.1
- **Typography**: Arial (Regular 400, Semibold 600, Bold 700)

---

## 📦 Étapes d'Implémentation

### **Étape 1: Récupération du Design Desktop**
**Date**: Initiale
**Node**: `5013:9349`

#### Processus
1. Utilisation de `mcp_figma_get_design_context()` pour récupérer le code React/Tailwind depuis Figma
2. Utilisation de `mcp_figma_get_screenshot()` pour prévisualiser le design

#### Résultat
- Structure complète du layout (header, sidebar, chat area)
- 3 colonnes: navigation + liste dossiers + zone messagerie
- Tous les éléments UI présents

#### Ajustements
- ✅ Conversion de React/Tailwind vers HTML/CSS pur
- ✅ Conversion de Tailwind classes vers CSS custom properties
- ✅ Structure sémantique HTML (header, aside, main)

---

### **Étape 2: Styling CSS Initial**

#### Implementation
```css
/* Color Palette */
--color-primary: #75e6a4       /* Vert Avozono */
--color-primary-dark: #52c890
--color-bg-light: #f9fafb      /* Fond light */
--color-border: #e5e7eb        /* Bordures */
--color-text-dark: #1d2833     /* Texte principal */
--color-text-secondary: #4a5565 /* Texte secondaire */
--color-text-muted: #6a7282    /* Texte atténué */
```

#### Composants Stylisés
- Header avec navigation et profil utilisateur
- Sidebar avec recherche, filtres, et liste de dossiers
- Chat area avec messages et input
- Responsive buttons et badges

---

### **Étape 3: Intégration des Icônes Font Awesome**

**Problema**: Les émojis n'étaient pas professionnels

#### Solution Implémentée
```html
<!-- CDN Font Awesome 6.5.1 -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
```

#### Icônes Remplacées
| Emoji | Font Awesome | Élément |
|-------|--------------|---------|
| 👤 | `fa-solid fa-user` | Navigation Compte |
| 📋 | `fa-solid fa-clipboard` | Navigation Suivi |
| 💳 | `fa-solid fa-credit-card` | Navigation Paiements |
| 💬 | `fa-solid fa-message` | Navigation Messages |
| 🔍 | `fa-solid fa-magnifying-glass` | Barre recherche |
| 📁 | `fa-solid fa-folder` | Dossiers |
| ⋮ | `fa-solid fa-ellipsis-vertical` | Menu utilisateur |
| 📎 | `fa-solid fa-paperclip` | Attachment button |
| ✈️ | `fa-solid fa-paper-plane` | Send button |
| ⬇️ | `fa-solid fa-download` | Download fichier |
| ← | `fa-solid fa-arrow-left` | Back mobile |
| ✕ | `fa-solid fa-times` | Close mobile |

#### CSS pour Icônes
```css
.nav-item i {
  font-size: 16px;
  width: 16px;
  text-align: center;
  color: inherit;
}

.input-btn i {
  font-size: 18px;
  color: inherit;
}
```

---

### **Étape 4: Typographie Arial**

**Problème Initial**: FontFamily par défaut system fonts, pas Arial spécifié

#### Implémentation Complète

```css
/* Font Stack Principal */
font-family: 'Arial', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

#### Poids de Police par Élément

| Élément | Size | Weight | Notes |
|---------|------|--------|-------|
| Logo | 18px | 700 | Bold |
| Nav Items | 14px | 400 | Regular |
| Titles (h2) | 20px | 600 | Semibold |
| Dossier Names | 16px | 600 | Semibold |
| Texte général | 14px | 400 | Regular |
| Badges | 12px | 400 | Regular |
| File names | 14px | 600 | Semibold |
| Timestamps | 12px | 400 | Regular |
| Input text | 16px | 400 | Regular |
| Buttons | 14-16px | 600/400 | Selon type |

#### Classes Mises à Jour
- `.logo` → 700 Bold
- `.nav-item` → 400 Regular
- `.user-name` → 600 Semibold
- `.user-role` → 400 Regular
- `.chat-title` → 600 Semibold
- `.message-bubble` → 400 Regular
- `.dossier-name` → 600 Semibold
- `.dossier-preview` → 400 Regular
- Tous inputs → 400 Regular + placeholders
- Tous buttons → 600 Semibold
- Tous timestamps → 400 Regular

---

### **Étape 5: Design Responsive Mobile**

**Fichiers Figma Mobiles**:
- `5013:9158` - Mobile dossier list view
- `5013:9254` - Mobile chat view

#### Breakpoints Implémentés

```css
/* Desktop */
@media (min-width: 769px) {
  /* Full layout: sidebar + chat */
}

/* Tablet & Mobile */
@media (max-width: 768px) {
  .sidebar {
    position: absolute;
    full-width, z-index: 50
  }
  
  .chat-area {
    position: absolute;
    full-width, z-index: 40
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  /* Extra optimizations */
}
```

#### Comportement Mobile

**Vue Initiale**: Liste des dossiers (Sidebar visible, Chat caché)
```
┌─────────────────────┐
│     AVOZONO         │
├─────────────────────┤
│ [Search]            │
│ Filtres             │
│ └─ ADE 352 (active) │
│ └─ TKZDF12983       │
│ └─ BRWTC86721       │
│ └─ WYUPQ39025       │
├─────────────────────┤
│ + Nouveau message   │
└─────────────────────┘
```

**Après clic dossier**: Vue chat (Chat visible, Sidebar caché)
```
┌─────────────────────┐
│ ← Dossier ADE 352 ✕ │
├─────────────────────┤
│ Messages...         │
│                     │
│ [Input message...]  │
│ [Attachment] [Send] │
└─────────────────────┘
```

#### Navigation Mobile JS
```typescript
// Afficher chat
function showChat() {
  sidebar.classList.add('hidden');
  chatArea.classList.add('active');
  chatBackBtn.style.display = 'flex';
  chatCloseX.style.display = 'flex';
}

// Retour liste
function showSidebar() {
  sidebar.classList.remove('hidden');
  chatArea.classList.remove('active');
  chatBackBtn.style.display = 'none';
  chatCloseX.style.display = 'none';
}
```

#### Interactions
| Action | Desktop | Mobile |
|--------|---------|--------|
| Click dossier | Change chat view | Transition vers chat |
| Back button | N/A | Retour liste |
| Close X | N/A | Retour liste |
| Resize | Adapte auto | Recalcule breakpoint |

---

### **Étape 6: Interactivité TypeScript**

#### Fonctionnalités Implémentées

```typescript
// Détection mobile
const isMobile = () => window.innerWidth <= 768;

// Sélection dossier
dossierItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('active');
    if (isMobile()) showChat();
  });
});

// Input message
messageInput.addEventListener('input', () => {
  // Auto-resize textarea
  messageInput.style.height = 'auto';
  messageInput.style.height = Math.min(messageInput.scrollHeight, 120) + 'px';
  
  // Toggle send button
  sendBtn.style.opacity = messageInput.value.trim() ? '1' : '0.5';
});

// Enter pour envoyer
messageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    if (messageInput.value.trim()) {
      console.log('Message envoyé:', messageInput.value);
      messageInput.value = '';
      messageInput.style.height = 'auto';
      sendBtn.style.opacity = '0.5';
    }
  }
});

// Navigation tabs
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(n => n.classList.remove('active'));
    item.classList.add('active');
  });
});
```

---

## 📐 Répartition des Fichiers

```
DesignFig/
├── index.html              # Structure HTML complète
├── src/
│   ├── main.ts             # Logique TypeScript (140 lignes)
│   ├── style.css           # Styles CSS (800+ lignes)
│   └── vite-env.d.ts       # Types Vite
├── package.json            # Dépendances (Vite, TypeScript)
├── tsconfig.json           # Config TypeScript
└── DOCUMENTATION.md        # Cette doc
```

### Taille des Fichiers
- **index.html**: ~202 lignes
- **src/style.css**: ~800 lignes + media queries
- **src/main.ts**: ~140 lignes
- **Font Awesome**: CDN externe

---

## 🎨 Palette de Couleurs

```css
--color-primary: #75e6a4
--color-primary-dark: #52c890
--color-bg-light: #f9fafb
--color-border: #e5e7eb
--color-text-dark: #1d2833
--color-text-secondary: #4a5565
--color-text-muted: #6a7282
--color-bg-badge-closed: #e5e7eb
--color-text-badge-closed: #6b7280
```

---

## 🔄 Processus de Conversion Figma → Code

```
1. Récupérer Design MCP Figma
   ↓
2. Analyser structure React/Tailwind
   ↓
3. Convertir en HTML5 sémantique
   ↓
4. Convertir Tailwind → CSS custom
   ↓
5. Remplacer emojis → Font Awesome
   ↓
6. Ajouter typographie Arial
   ↓
7. Implémenter responsive design
   ↓
8. Ajouter interactivité TypeScript
   ↓
9. Tester sur tous les breakpoints
   ↓
✅ Application finale complète
```

---

## 🚀 Points Clés de l'Implémentation

### ✅ Design System
- Design tokens en CSS variables
- Palette de couleurs centralisée
- Typographie stricte Arial

### ✅ Iconographie Professionnelle
- Font Awesome 6.5.1 via CDN
- 12 icônes implémentées
- Styling cohérent

### ✅ Responsive Design
- Desktop: 2-column layout
- Mobile: full-width toggle layout
- Smooth transitions et animations

### ✅ Sémantique HTML
- Structure correcte (header, aside, main)
- Accessibilité basique
- Forms avec labels appropriés

### ✅ TypeScript Interactif
- Détection mobile automatique
- Navigation fluide
- Gestion d'état simple

---

## 📊 Comparaison Figma ↔ Code

| Aspect | Figma | Code |
|--------|-------|------|
| **Layouts** | 3 frames | 1 HTML adaptif |
| **Couleurs** | Inline | CSS Variables |
| **Typography** | Arial specs | Font-family + weights |
| **Icons** | SVGs/Images | Font Awesome |
| **Responsive** | 3 fichiers | 1 fichier + media queries |
| **JavaScript** | N/A | TypeScript ~140 lignes |

---

## 🔍 Résolution de Problèmes Rencontrés

### Problème 1: Emojis non professionnels
**Solution**: Font Awesome CDN avec 12 icônes sélectionnées

### Problème 2: Typographie par défaut
**Solution**: Arial explicite pour tous les éléments avec poids spécifiés

### Problème 3: Design pas responsive
**Solution**: Media queries 768px + 480px breakpoints

### Problème 4: Navigation mobile complexe
**Solution**: Classes CSS `.hidden` et `.active` + JavaScript simple

---

## 📝 Checklist d'Implémentation

- [x] Récupération design Figma MCP
- [x] Conversion HTML/CSS de React/Tailwind
- [x] Implémentation couleurs design system
- [x] Remplacement emojis → Font Awesome
- [x] Typographie Arial complète
- [x] Responsive design mobile
- [x] Media queries (768px, 480px)
- [x] Interactivité TypeScript
- [x] Navigation mobile fluide
- [x] Messages auto-resize
- [x] Sélection dossier active
- [x] Filtres dynamiques
- [x] État send button
- [x] Back/Close buttons mobile

---

## 🎯 Résultat Final

**Application complète Avozono** avec:
- ✅ Design pixel-perfect du Figma
- ✅ Support desktop et mobile
- ✅ Iconographie professionnelle
- ✅ Typographie cohérente Arial
- ✅ Interactions fluides
- ✅ Code maintenable et sémantique

---

## 📚 Références

- **Figma File**: https://www.figma.com/design/T91RSymFkaEaoJuxSXfhtO/Avozono
- **Node IDs**: 5013:9349, 5013:9158, 5013:9254
- **Font Awesome**: https://fontawesome.com
- **MCP Protocol**: Model Context Protocol pour Figma

---

**Document généré**: 11 Février 2026  
**Version**: 1.0  
**Status**: ✅ Complet
