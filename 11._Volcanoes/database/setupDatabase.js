import db from "./connection.js";


const isDeleteMode = process.argv.includes('delete');

if (isDeleteMode) {
    await db.run(`DROP TABLE IF EXISTS volcanoes;`);
    await db.run(`DROP TABLE IF EXISTS villages;`);
}

// DDL

await db.exec(`CREATE TABLE IF NOT EXISTS volcanoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    is_active BOOLEAN,
    type TEXT CHECK( type IN ('Caldera', 'Underwater', 'Flat', 'Underground', 'Super')),
    elevation INT
)`);

await db.exec(`CREATE TABLE IF NOT EXISTS villages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    volcano_id INTEGER,
    FOREIGN KEY (volcano_id) REFERENCES villages (id)
)
`);



// DML
// seeding
if (isDeleteMode) {
    await db.run(`INSERT INTO volcanoes (name, is_active, type, elevation)
    VALUES 
    ('Acamarachi', '1', 'Caldera', 6046),
    ('Adwa', '1', 'Flat', 1689),
    ('Carrizozo', '0', 'Underwater', 1730);
    `);

    await db.run(`INSERT INTO villages (name, volcano_id) 
    VALUES
    ('Ching', 1),
    ('Fling', 2),
    ('Ching', 1);
    `);
}
