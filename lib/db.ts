import Database from "better-sqlite3";
import path from "path";

const DB_PATH = process.env.DATABASE_PATH || path.join(process.cwd(), "data", "goon.db");

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!db) {
    const fs = require("fs");
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    db = new Database(DB_PATH);
    db.pragma("journal_mode = WAL");
    initSchema(db);
  }
  return db;
}

function initSchema(database: Database.Database) {
  database.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL DEFAULT '',
      password_hash TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS survey_responses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER REFERENCES users(id),
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      experience_rating INTEGER NOT NULL CHECK(experience_rating >= 1 AND experience_rating <= 5),
      what_worked TEXT NOT NULL DEFAULT '',
      friction_points TEXT NOT NULL DEFAULT '',
      feature_requests TEXT NOT NULL DEFAULT '',
      recommend_rating INTEGER NOT NULL CHECK(recommend_rating >= 1 AND recommend_rating <= 10),
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);
}

export interface User {
  id: number;
  email: string;
  name: string;
  password_hash: string;
  created_at: string;
}

export interface SurveyResponse {
  id: number;
  user_id: number | null;
  name: string;
  email: string;
  experience_rating: number;
  what_worked: string;
  friction_points: string;
  feature_requests: string;
  recommend_rating: number;
  created_at: string;
}

export function getUserByEmail(email: string): User | undefined {
  const database = getDb();
  return database.prepare("SELECT * FROM users WHERE email = ?").get(email) as User | undefined;
}

export function getUserById(id: number): User | undefined {
  const database = getDb();
  return database.prepare("SELECT * FROM users WHERE id = ?").get(id) as User | undefined;
}

export function createUser(email: string, name: string, passwordHash: string): User {
  const database = getDb();
  const stmt = database.prepare(
    "INSERT INTO users (email, name, password_hash) VALUES (?, ?, ?)"
  );
  const result = stmt.run(email, name, passwordHash);
  return getUserById(result.lastInsertRowid as number)!;
}

export function verifyPassword(password: string, hash: string): boolean {
  const bcrypt = require("bcryptjs");
  return bcrypt.compareSync(password, hash);
}

export function saveSurveyResponse(data: {
  userId?: number;
  name: string;
  email: string;
  experienceRating: number;
  whatWorked: string;
  frictionPoints: string;
  featureRequests: string;
  recommendRating: number;
}): SurveyResponse {
  const database = getDb();
  const stmt = database.prepare(
    `INSERT INTO survey_responses (user_id, name, email, experience_rating, what_worked, friction_points, feature_requests, recommend_rating)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
  );
  const result = stmt.run(
    data.userId || null,
    data.name,
    data.email,
    data.experienceRating,
    data.whatWorked,
    data.frictionPoints,
    data.featureRequests,
    data.recommendRating
  );
  return database
    .prepare("SELECT * FROM survey_responses WHERE id = ?")
    .get(result.lastInsertRowid) as SurveyResponse;
}

export function getAllSurveyResponses(): SurveyResponse[] {
  const database = getDb();
  return database
    .prepare("SELECT * FROM survey_responses ORDER BY created_at DESC")
    .all() as SurveyResponse[];
}
