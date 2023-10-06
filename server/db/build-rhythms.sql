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

INSERT INTO rhythm_codes (rhythm_code) VALUES('Rumba'), ('Gwo-Ka'), ('Second Line'), ('Gwo-Ka'), ('Blues / Early Jazz / Trad Jazz'), ('Swing');
INSERT INTO mappings (lon, lat) VALUES(570, 795), (570, 620);
INSERT INTO regions (region) VALUES('Carribean'), ('USA');
INSERT INTO locations (location) VALUES('Cuba'), ('Guadeloupe'), ('NOLA'), ('Washington DC');
INSERT INTO rhythms (rhythm, language, year_start, year_end, video, description) VALUES('Columbia', 'Spanish', 1880, 2020, 'https://youtu.be/W4aMl4HpKIQ','Columbia: rápida y solo para hombres, solo tambores y no se canta');
INSERT INTO rhythms (rhythm, language, year_start, year_end, video, description) VALUES('Yambu', 'Spanish', 1880, 2020, 'https://youtu.be/Mux8ibZWbrg','Yambu: más lento, en pareja (and heteronormative) but traditionally not touching');
INSERT INTO rhythms (rhythm, language, year_start, year_end, video, description) VALUES('Guaguanco', 'Spanish', 1880, 2020, 'https://youtu.be/gJVT_5swkhA','Guaguanco: faster, most popular and well known : similar flirtatious narrative and motifs to Yambu');
INSERT INTO rhythms (rhythm, language, year_start, year_end, video, description) VALUES('Habanera', 'Spanish', 1880, 2020, 'https://youtu.be/iLGuLEqtq7g','Habanera: more baile de salon');
INSERT INTO rhythms (rhythm, language, year_start, year_end, audio, description) VALUES('Graj', 'French', 1880, 2020, 'https://drive.google.com/file/d/1MoZXjAO2cqPU3IssoP40PYrAsshT4PVm/view','The graj accompanies the agricultural work');
