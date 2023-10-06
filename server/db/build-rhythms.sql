-- build the Rhythm Code database
--

DROP TABLE IF EXISTS rhythms;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS regions;
DROP TABLE IF EXISTS mappings;
DROP TABLE IF EXISTS rhythm_codes;

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
    mapping_id     INTEGER,
    region_id      INTEGER,
    CONSTRAINT     loc_mapping_fk FOREIGN KEY (mapping_id) REFERENCES mappings (id),
    CONSTRAINT     loc_region_fk  FOREIGN KEY (region_id) REFERENCES regions(id)
);

CREATE TABLE rhythms (
    id		        SERIAL NOT NULL PRIMARY KEY,
    rhythm_code_id  INTEGER,
    location_id     INTEGER,
    rhythm	        VARCHAR(255),
    language        VARCHAR(255),
    year_start      INTEGER,
    year_end        INTEGER,
    video		    VARCHAR(512),
    audio           VARCHAR(512),
    description     TEXT,
    CONSTRAINT      rhy_rhythm_code_fk FOREIGN KEY (rhythm_code_id) REFERENCES rhythm_codes (id),
    CONSTRAINT      rhy_location_fk  FOREIGN KEY (location_id) REFERENCES locations (id)
);

