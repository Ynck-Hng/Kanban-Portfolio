# <p align=center> :tada:  Kanban Project :tada:  </p> 
---------

# :wave: Introduction

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
   
      - NodeJS & Express <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" width="20px" height="20px"> <img src="https://user-images.githubusercontent.com/115977341/213268782-c620c3a9-f321-4e08-90bd-d545336be168.png" width="20px" height="20px">
      - PostgreSQL <img src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png" width="20px" height="20px">
      - Sequelize <img src="https://sequelize.org/img/logo.svg" width="20px" height="20px">
      
-------
      
# :pencil2: Description du projet

- Ce projet a pour intention principale l'implémentation des fonctionnalités classiques d'un Kanban tels que : la création d'une nouvelle liste, de nouvelles cartes et de nouvelles catégories. Une carte peut être assignée à une liste et une catégorie peut être assignée à une carte.

- Au-delà de la création ainsi que l'assignation d'un élément à un autre, l'utilisateur est libre d'organiser son Kanban selon ses désirs en modifiant la position de la liste ou bien la position d'une carte dans une liste.

- Il peut aussi choisir de renommer une liste, une carte ou une catégorie (+ changer la couleur de leur bordure pour ces dernières) de manière intuitive en cliquant sur les boutons mis à disposition. Seules les listes et les catégories peuvent être renommées en double cliquant sur leur nom.

- De plus, l'utilisteur peut également choisir de supprimer une liste, une carte ou une catégorie ainsi que les données associées. Soyez vigilant lorsque vous supprimez ! :warning:

-------------

# :rocket:  Comment lancer ce projet ?

  1) Clonez dans un premier temps ce répertoire GitHub
  2) Assurez-vous d'avoir installé <a href="https://www.postgresql.org/download/" target="_blank"> PostgreSQL </a> <img src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png" width="20px" height="20px">
  3) Installez les dépendances en vous plançant dans le dossier `backend` puis tapez `npm install` dans le terminal
  4) Créez la base de donnée avec les commandes suivantes :
  
    a. `CREATE ROLE "username" WITH LOGIN PASSWORD 'password';`
    
    b. `CREATE DATABASE "dbname" OWNER "username";`
    
    c. Importez la base de donnée `psql -U "username" -d "dbname" -f ./data/create_db.sql;`
    
    d. Connectez vous à la base de donée `psql -U "username" -d "dbname";` puis entrez votre `password`
    
    e. Une fois connecté, entrez la commande `SELECT * FROM "list;`
    
    f. Si cela vous retourne un tableau avec des éléments à l'intérieur, féliciations vous avez importé la base de donnée !
    
    g. Sinon, répétez depuis l'étape C
    
  5) Créez un fichier `.env` en vous appuyant sur le fichier _template_ `env_example`. Assurez-vous de remplacer `username`, `password` et `dbname` par vos appellations. **_Remarque : Si vous n'utilisez pas le `PORT = 3000`, allez dans le fichier `frontend/js/utils.js` puis modifiez la valeur du port de la propriété `base_url`_**
  6) Lancez le serveur de l'API avec `node index.js` / `nodemon index.js` / `node-dev index.js`
  7) Ouvrez le fichier `index.html` dans le dossier `frontend` dans votre navigateur
  8) :tada: Vous avez désormais accès à un Kanban depuis votre machine en locale ! :tada:
  
