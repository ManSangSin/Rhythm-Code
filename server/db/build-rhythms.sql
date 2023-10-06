-- build the Rhythm Code database
--

DROP TABLE IF EXISTS rhythms;

CREATE TABLE regions (
    id              SERIAL NOT NULL PRIMARY KEY,
    region          VARCHAR(255)
);

CREATE TABLE locations (
    id             SERIAL NOT NULL PRIMARY KEY,
    location       VARCHAR(255),
    region_id      INTEGER REFERENCES regions (id)
);

CREATE TABLE rhythms (
    id		        SERIAL NOT NULL PRIMARY KEY,
    location_id     INTEGER REFERENCES locations (id),
    rhythm	        VARCHAR(255),
    date            YEAR,
    video		    VARCHAR(512),
    audio           VARCHAR(512),
    description     TEXT
);

