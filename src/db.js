import sqlite3 from 'sqlite3';
const db = new sqlite3.Database(':memory:')

// Execute SQL statements from strings
db.exec(`
    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        first_name TEXT,
        last_name TEXT,
        is_admin BOOLEAN DEFAULT 0,
        email CITEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        made_at TIMESTAMPTZ DEFAULT now()
    )
`)


db.exec(`
    CREATE TABLE enterprise (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ent_rif TEXT UNIQUE,
        ent_name TEXT,
        ent_address TEXT,
        ent_phone_number TEXT CHECK (phone ~ '^\+\d{1,15}$'),
        retention_percentage BOOLEAN DEFAULT 0,
        invoice_serial_num TEXT
    )
`)


db.exec(`
    CREATE TABLE invoices (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        vendor_rif TEXT,
        vendor_name TEXT,
        vendor_address TEXT,
        vendor_phone_number TEXT CHECK (phone ~ '^\+\d{1,15}$'),
        receipt_number INTEGER,
        receipt_file_name TEXT,
        receipt_file_url TEXT,
        debit_note NUMERIC,
        credit_note NUMERIC,
        affected_receipt_num INTEGER,
        vat_free_amount NUMERIC,
        control_number INTEGER,
        taxable_base NUMERIC,
        vat_percentage INTEGER,
        total NUMERIC,
        excel_file_url TEXT,
        sent_to TEXT,
        emitted_at TIMESTAMPTZ DEFAULT now(),
        FOREIGN KEY(user_id) REFERENCES users(id)
    )
`)


db.exec(`
    CREATE TABLE contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        contact_type BOOLEAN DEFAULT 0,
        contact_name TEXT UNIQUE,
        contact_email CITEXT NOT NULL UNIQUE,
        contact_phone_number TEXT CHECK (phone ~ '^\+\d{1,15}$'),
    )
`)

export default db