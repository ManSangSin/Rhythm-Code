-- build the Rhythm Code database
--

DROP TABLE IF EXISTS rhythms;

CREATE TABLE rhythm_codes (
    id		        SERIAL NOT NULL PRIMARY KEY,
    rhythm_code     VARCHAR(255)
);

CREATE TABLE mappings (
    id              SERIAL NOT NULL PRIMARY KEY,
    lon             INTEGER,
    lat             INTEGER
);

CREATE TABLE regions (
    id              SERIAL NOT NULL PRIMARY KEY,
    region          VARCHAR(255)
);

CREATE TABLE locations (
    id             SERIAL NOT NULL PRIMARY KEY,
    location       VARCHAR(255),
    mapping_id     INTEGER REFERENCES mappings (id),
    region_id      INTEGER REFERENCES regions (id)
);

CREATE TABLE rhythms (
    id		        SERIAL NOT NULL PRIMARY KEY,
    rhythm_code_id  INTEGER REFERENCES rhythm_codes (id),
    location_id     INTEGER REFERENCES locations (id),
    rhythm	        VARCHAR(255),
    language        VARCHAR(255),
    year_start      YEAR,
    year_end        YEAR,
    video		    VARCHAR(512),
    audio           VARCHAR(512),
    description     TEXT
);
