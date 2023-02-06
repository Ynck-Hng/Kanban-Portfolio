BEGIN;

DROP TABLE IF EXISTS "list", "card", "tag", "card_has_tag";

CREATE TABLE IF NOT EXISTS "list"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMPTZ DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "card"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "color" VARCHAR(50) DEFAULT '#000',
    "list_id" INT REFERENCES "list"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "tag"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL UNIQUE,
    "color" VARCHAR(50) DEFAULT '#000',
    "created_at" TIMESTAMPTZ DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "card_has_tag"(
    "card_id" INT REFERENCES "card"("id") ON DELETE CASCADE,
    "tag_id" INT REFERENCES "tag"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO "list" ("name") VALUES ('Tâches'), ('En cours'), ('Test'), ('Terminé');

INSERT INTO "card" ("name", "color", "list_id") VALUES 
    ('Devoirs', '#F0F', 1), 
    ('Trouver un nouveau projet', '#44bcd8', 1),
    ('Ajouts de nouvelles fonctionnalités', '#F0F', 2),
    ('Finir Kanban', '#000', 4),
    ('Création de liste', '#000', 3),
    ('Test de l''api', '#FF0000', 3),
    ('Modifier le nom d''une liste', '#FF8000', 3),
    ('Mise à jour VSC', '#000', 1);

INSERT INTO "tag"("name", "color") VALUES 
    ('API', '#800080'),
    ('Front', '#E6E6FA'),
    ('Back', '#DDA0DD'),
    ('Cours', '#808080');

INSERT INTO "card_has_tag"("card_id", "tag_id") VALUES
    (1, 4),
    (2, 2),
    (2, 3),
    (2, 1),
    (3, 2),
    (3, 3),
    (4, 1),
    (4, 2),
    (4, 3),
    (5, 1),
    (5, 2),
    (6, 2),
    (6, 3),
    (7, 1),
    (7, 2);

COMMIT;
