// src/db.js
import { neon } from "@neondatabase/serverless";

// Initialize connection once
export const sql = neon("postgresql://neondb_owner:npg_CFMXp95Bowhz@ep-sparkling-resonance-af9wuajq-pooler.c-2.us-west-2.aws.neon.tech/database?sslmode=require");

