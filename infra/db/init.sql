-- Runs once, the first time the database volume is created.
-- pgvector adds a `vector` column type and nearest-neighbour search operators.
CREATE EXTENSION IF NOT EXISTS vector;
