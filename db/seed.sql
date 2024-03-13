-- db/seed.sql
\c authdb

INSERT INTO users (username, password_hash, email, created_at, updated_at)
VALUES 
('demo', '$2b$10$lQJkOObGXgmttt.OaovsvOMWbcXKUPTw23GSsZ04V6rWPMQxBUa8a', 'demo@example.com', NOW(), NOW());