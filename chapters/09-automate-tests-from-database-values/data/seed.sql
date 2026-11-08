CREATE TABLE search_checks (
  term TEXT,
  expected TEXT
);

INSERT INTO search_checks (term, expected) VALUES
  ('pliers', 'Combination Pliers'),
  ('hammer', 'Thor Hammer'),
  ('drill', 'Cordless Drill 20V'),
  ('sander', 'Belt Sander');
