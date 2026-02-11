Documentation du projet Avozono Web Messagerie Front
Introduction

Ce projet Avozono Web Messagerie Front est une application front-end légère et performante basée sur Vite (Vanilla JS) qui vise à fournir une interface de messagerie moderne. Le workflow a été pensé pour intégrer un design précis depuis Figma, une configuration serveur via MCP, et un développement optimisé dans VSCode.

Démarrage rapide

Avant toute chose, pour lancer le projet en mode développement :

npm install
npm run dev


Cela démarre un serveur local Vite avec rechargement automatique.

Étapes du développement front
1. Design et prototypage sur Figma

La phase initiale commence par la création du design et de la maquette interactive sur Figma.

Cela permet de visualiser l’interface utilisateur et de tester les flux de messagerie en contexte.

Les composants UI (boutons, champs, listes de messages) sont définis clairement.

2. Configuration MCP (Microservice Communication Proxy)

Le serveur MCP est configuré pour gérer les appels API du front vers les services back-end.

Exemple de configuration dans mcp.json :

{
  "servers": {
    "Figma": {
      "url": "https://mcp.figma.com/mcp",
      "type": "http"
    }
  },
  "inputs": []
}


MCP permet d’isoler la communication API, facilitant la maintenance et le test.

3. Mise en place du projet avec Vite Vanilla JS

Le projet front est initialisé avec Vite pour un build rapide et une expérience dev fluide.

Structure simple sans framework complexe pour garder la légèreté.

4. Développement dans VSCode

VSCode est utilisé pour éditer le code grâce à son autocomplete, linting, et intégration Git.

La configuration JSON de MCP est intégrée ici pour le proxy des API.

5. Ajout d’une bibliothèque d’icônes (Font Library)

Pour une UI cohérente, une bibliothèque d’icônes comme Font Awesome ou Material Icons est ajoutée via CDN ou npm.

Exemple avec Font Awesome via CDN dans index.html :

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>


Ces icônes permettent d’illustrer les actions dans la messagerie (envoyer, recevoir, notifications).

Contexte global du projet

Ce projet vise à construire une messagerie front-end qui soit à la fois légère et facilement maintenable. Le choix de Vite Vanilla permet une prise en main rapide et une personnalisation complète. Le design via Figma assure une UX/UI soignée, tandis que MCP garantit un découplage efficace entre front et back-end.
