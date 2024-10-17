
import Database from 'better-sqlite3';
import { resolve } from 'path';

// Create or open the SQLite database file
const dbPath = resolve(process.cwd(), './data/database.sqlite');
const db = new Database(dbPath);

// Create an example table for companies if it does not already exist
db.exec(`
    CREATE TABLE IF NOT EXISTS companies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        founders TEXT,
        valuation REAL,
        investedAmount REAL,
        fundingRound TEXT,
        status TEXT,
        riskEvaluation INTEGER
    )
  `);

export default db;
