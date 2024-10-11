# Recipe Finder

Une application web qui permet de rechercher, visualiser et ajouter des recettes à vos favoris.

## Table des Matières

- [Recipe Finder](#recipe-finder)
  - [Table des Matières](#table-des-matières)
  - [Fonctionnalités](#fonctionnalités)
  - [Technologies Utilisées](#technologies-utilisées)
  - [Installation](#installation)
  - [Utilisation](#utilisation)
  - [Pages de l'Application](#pages-de-lapplication)
    - [1. **Home**](#1-home)
    - [2. **Favorites**](#2-favorites)
    - [3. **Details**](#3-details)
    - [4. **RecipeItem**](#4-recipeitem)
  - [Contribuer](#contribuer)
  - [Auteurs](#auteurs)

## Fonctionnalités

- Recherche de recettes via une API.
- Affichage d'une liste de recettes avec des détails.
- Ajout et suppression de recettes aux favoris.
- Interface utilisateur réactive et conviviale.

## Technologies Utilisées

- **React** - Bibliothèque JavaScript pour construire des interfaces utilisateur.
- **React Router** - Pour la gestion de la navigation.
- **CSS** - Pour le style.
- **API Forkify** - Pour récupérer les données des recettes.

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/votre-utilisateur/recipe-finder.git
   ```

2. Accédez au dossier du projet :

   ```bash
   cd recipe-finder
   ```

3. Installez les dépendances :

   ```bash
   npm install
   ```

4. Démarrez l'application :

   ```bash
   npm start
   ```

## Utilisation

- Accédez à l'application dans votre navigateur à l'adresse `http://localhost:3000`.
- Utilisez la barre de recherche pour trouver des recettes.
- Cliquez sur une recette pour voir ses détails.
- Ajoutez des recettes à vos favoris en cliquant sur le bouton approprié.

## Pages de l'Application

### 1. **Home**

- Affiche une liste de recettes basées sur les recherches effectuées.
- Permet à l'utilisateur de voir un aperçu de chaque recette.

### 2. **Favorites**

- Affiche les recettes que l'utilisateur a ajoutées à ses favoris.
  
- Si aucun favori n'est présent, un message est affiché.

### 3. **Details**

- Affiche les détails d'une recette spécifique, y compris les ingrédients.
- Permet à l'utilisateur d'ajouter ou de retirer la recette de ses favoris.

### 4. **RecipeItem**

- Composant réutilisable qui affiche les informations de chaque recette dans la liste.

## Contribuer

Les contributions sont les bienvenues ! Veuillez suivre ces étapes :

1. Forkez le projet.
2. Créez votre branche (`git checkout -b feature/YourFeature`).
3. Commitez vos modifications (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`).
4. Poussez vers la branche (`git push origin feature/YourFeature`).
5. Ouvrez une Pull Request.

## Auteurs

- **Kengni Doriane** - [Kengni Doriane](https://github.com/kengnidoriane)
