import Database from 'better-sqlite3';
import fs from 'node:fs';

fs.rmSync('data/checks.db', { force: true });
const db = new Database('data/checks.db');
db.exec(fs.readFileSync('data/seed.sql', 'utf8'));
const { rows } = db.prepare('SELECT COUNT(*) AS rows FROM search_checks').get();
console.log(rows, 'rows');
db.close();
