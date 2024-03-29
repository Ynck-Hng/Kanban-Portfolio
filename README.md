# <p align=center> :tada:  Kanban Project :tada:  </p> 
---
# :memo: Sommaire :memo:

- :wave: [Introduction](#introduction)

- :pencil2: [Description du projet](#description)

- :rocket: [Comment lancer ce projet ?](#start)

- :art: [Schéma de la base de donnée](#mcd)
  - [Code Mocodo](#mocodo)
  
- :desktop_computer: [Constitution de l'API](#api) 

- :confetti_ball: [Conclusion](#conclusion)
---
# :wave: <a id="introduction"></a> Introduction

Bienvenue sur ce projet Kanban ! Celui-ci a été réalisé en vu de mettre en avant et consolider mes acquis depuis le début de la formation Fullstack JS (31/10/22).

- Les aspects techniques de ce projet sont :
  - Mettre en place un serveur **NodeJS (Architecture MVC)** :white_check_mark: 
  - Concevoir et gérer une base de donnée relationnelle **(MCD, MLD)** :white_check_mark: 
  - La conception et la consommation d'une **API REST** :white_check_mark: 
  - Veiller à la **sécurité** des intéractions avec cette **API** contre les tentatives de **XSS** :white_check_mark: 
  - **_Clean code_** :white_check_mark: 
  - Préparation de **_wireframes_**
  - Intégration d'une page web _responsive_ :white_check_mark: 
  - Projet de type **_Single Page Application (SPA)_** lié à une API :white_check_mark: 
  - Approche autodidacte en s'appuyant sur la documentation :white_check_mark: 
  
- L'environnement technique de ce projet :
  - **Front-end** :
    - JavaScript _vanilla_ <img src="https://user-images.githubusercontent.com/115977341/217671341-d883f8f0-29ce-456f-822c-84f60c101a2c.png" width="20px" height="20px">
    - HTML & CSS <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" width="20px" height="20px"> <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" width="20px" height="20px"> 
    - Sass <img src="https://cdn-icons-png.flaticon.com/512/919/919831.png" width="20px" height="20px">
   
   - **Back-end** :
   
      - NodeJS & Express <img src="https://user-images.githubusercontent.com/115977341/213268794-13c5eba2-47b4-4e6b-bd35-e680dc25d850.png" width="20px" height="20px"> <img src="https://user-images.githubusercontent.com/115977341/213268782-c620c3a9-f321-4e08-90bd-d545336be168.png" width="20px" height="20px">
      - PostgreSQL <img src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png" width="20px" height="20px">
      - Sequelize <img src="https://sequelize.org/img/logo.svg" width="20px" height="20px">
      
-------
      
# :pencil2: <a id="description"></a> Description du projet

- Ce projet a pour intention principale l'implémentation des fonctionnalités classiques d'un Kanban tels que : la création d'une nouvelle liste, de nouvelles cartes et de nouvelles catégories. Une carte peut être assignée à une liste et une catégorie peut être assignée à une carte.

- Au-delà de la création ainsi que l'assignation d'un élément à un autre, l'utilisateur est libre d'organiser son Kanban selon ses désirs en modifiant la position de la liste ou bien la position d'une carte dans une liste.

- Il peut aussi choisir de renommer une liste, une carte ou une catégorie (+ changer la couleur de leur bordure pour ces dernières) de manière intuitive en cliquant sur les boutons mis à disposition. Seules les listes et les catégories peuvent être renommées en double cliquant sur leur nom.

- De plus, l'utilisteur peut également choisir de supprimer une liste, une carte ou une catégorie ainsi que les données associées. Soyez vigilant lorsque vous supprimez ! :warning:

-------------

# :rocket: <a id="start"></a> Comment lancer ce projet ?

  1) Clonez dans un premier temps ce répertoire GitHub
  
  2) Assurez-vous d'avoir installé <a href="https://www.postgresql.org/download/" target="_blank"> PostgreSQL </a> <img src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png" width="20px" height="20px">
  3) Installez les dépendances en vous plançant dans le dossier `backend` puis tapez `npm install` dans le terminal
  4) Créez la base de donnée avec les commandes suivantes :
  
```sql
a. CREATE ROLE "username" WITH LOGIN PASSWORD 'password';

b. CREATE DATABASE "dbname" OWNER "username";

-- Importez la base de donnée --

c. psql -U "username" -d "dbname" -f ./data/create_db.sql;

-- Connectez vous à la base de donnée --

d. psql -U "username" -d "dbname";` -- puis entrez votre 'password'

-- Une fois connecté, entrez la commande --

e. SELECT * FROM "list";

-- Si cela vous retourne un tableau avec des éléments à l'intérieur, féliciations vous avez importé la base de donnée ! --

-- Sinon, répétez depuis l'étape C --
```
  
# <a id="mcd"></a> :art: MCD de la base de donnée

![image](https://github.com/Ynck-Hng/Kanban-Portfolio/assets/115977341/7e6d2bc3-155e-40a0-8f1c-fc46c140e178)

### <a id="mocodo"></a> • Code Mocodo

```
List: code_list (INT), name (VARCHAR), position (INT), created_at (DATE), updated_at (DATE)
contain, 11 Card, 0N List
Card: code_card (INT), name (VARCHAR), color(VARCHAR), position (INT), created_at (DATE), updated_at (DATE)
:

::
associated, 0N Card, 0N Tag: code_card, code_tag
Tag: code_tag (INT), _name (VARCHAR), color (VARCHAR), created_at (DATE), updated_at (DATE)
```
---

# <a id="api"></a> :desktop_computer: Constitution de l'API
|  Routes/Méthodes | GET | POST | PATCH | PUT | DELETE |
|---|---|---|---|---|---|
| `/lists` | Renvoie toutes les listes   | Ajoute une liste | <div align="center">:x:</div> | <div align="center">:x:</div> | <div align="center">:x:</div> |
| `/lists/:listId` | Renvoie une liste  | <div align="center">:x:</div> | Met à jour une liste | <div align="center">:x:</div> | Supprime une liste |
| `/cards` | Renvoie toutes les cartes  | Créé une carte | <div align="center">:x:</div>  | <div align="center">:x:</div> | <div align="center">:x:</div> |
| `/cards/:cardId` | Renvoie une carte | <div align="center">:x:</div> | Met à jour une carte  | <div align="center">:x:</div> | Supprime une carte |
| `/cards/:cardId/tags`  | <div align="center">:x:</div> | Assigne une catégorie à une carte  | <div align="center">:x:</div> | <p align="center">:x:</div>  | <div align="center">:x:</div> |
| `/cards/:cardId/tags/:tagId`  | <div align="center">:x:</div> | <div align="center">:x:</div> | <div align="center">:x:</div> | <div align="center">:x:</div> | Retire une catégorie à une carte |
| `/tags`  | Renvoie toutes les catégories  | Créé une catégorie  | <div align="center">:x:</div>  | <div align="center">:x:</div> | <div align="center">:x:</div> |
| `/tags/:tagId` | Renvoie une catégorie | <div align="center">:x:</div> | Met à jour une catégorie | <div align="center">:x:</div> | Supprime une catégorie |

----
# <a id="conclusion"></a> <p align="center"> :confetti_ball: Conclusion :confetti_ball:  </p>

Voilà qui conclut la présentation et la mise en marche de ce projet. Ce Kanban a été très instructif et amusant à concevoir du début à la fin, malgré les heures de formations intensives où il a fallu persévérer pour s'organiser afin de mener ce projet jusqu'au bout. 

Merci beaucoup pour votre temps si vous êtes arrivé jusque là :muscle: ! En espérant que vous avez apprécié ce projet et à bientôt pour de nouvelles aventures ! :wave: 
