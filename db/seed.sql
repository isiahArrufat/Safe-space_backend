-- db/seed.sql
\c authdb

INSERT INTO users (username, password_hash, email, created_at, updated_at)
VALUES 
('demoUser', '$2b$10$MOaSMD3eMMDK2jc4lBYHS.OF59aSr4uD4bfVFPqQz/zZn6XUfOYw', 'demo@example.com', NOW(), NOW());