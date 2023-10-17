-- build the Rhythm Code database
--

DROP TABLE IF EXISTS rhythms;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS regions;
DROP TABLE IF EXISTS mappings;
DROP TABLE IF EXISTS rhythm_codes;

CREATE TABLE rhythm_codes (
    id		        SERIAL NOT NULL PRIMARY KEY,
    rhythm_code     VARCHAR(255),
    region          VARCHAR(255),
    location        VARCHAR(255),
    leftpx          INTEGER,
    toppx           INTEGER
);

CREATE TABLE rhythms (
    id		        SERIAL NOT NULL PRIMARY KEY,
    rhythm_code_id  INTEGER,
    rhythm	        VARCHAR(255),
    language        VARCHAR(255),
    year_start      INTEGER,
    year_end        INTEGER,
    video		    VARCHAR(512),
    audio           VARCHAR(512),
    description     TEXT,
    CONSTRAINT      rhy_rhythm_code_fk FOREIGN KEY (rhythm_code_id) REFERENCES rhythm_codes (id)
);

INSERT INTO rhythm_codes (rhythm_code, location, region, leftpx, toppx) VALUES('Rumba', 'Cuba', 'Caribbean', 728.61, 742.22);
INSERT INTO rhythm_codes (rhythm_code, location, region, leftpx, toppx) VALUES('Gwo-Ka', 'Guadeloupe', 'Caribbean', 824.82, 772.72);
INSERT INTO rhythm_codes (rhythm_code, location, region, leftpx, toppx) VALUES('Second Line', 'NOLA', 'USA', 540, 120);
INSERT INTO rhythm_codes (rhythm_code, location, region, leftpx, toppx) VALUES('Gwo-Ka', 'Guadeloupe', 'Caribbean', 824.82, 772.72);
INSERT INTO rhythm_codes (rhythm_code, location, region, leftpx, toppx) VALUES('Blues / Early Jazz / Trad Jazz', 'NOLA', 'USA', 540, 120);
INSERT INTO rhythm_codes (rhythm_code, location, region, leftpx, toppx) VALUES('Swing', 'Washington DC', 'USA', 570, 120);

INSERT INTO rhythms (rhythm_code_id, rhythm, language, year_start, year_end, video, description) VALUES(1, 'Columbia', 'Spanish', 1880, 2020, 'https://youtu.be/W4aMl4HpKIQ','Columbia: rápida y solo para hombres, solo tambores y no se canta');
INSERT INTO rhythms (rhythm_code_id, rhythm, language, year_start, year_end, video, description) VALUES(1, 'Yambu', 'Spanish', 1880, 2020, 'https://youtu.be/Mux8ibZWbrg','Yambu: más lento, en pareja (and heteronormative) but traditionally not touching');
INSERT INTO rhythms (rhythm_code_id, rhythm, language, year_start, year_end, video, description) VALUES(1, 'Guaguanco', 'Spanish', 1880, 2020, 'https://youtu.be/gJVT_5swkhA','Guaguanco: faster, most popular and well known : similar flirtatious narrative and motifs to Yambu');
INSERT INTO rhythms (rhythm_code_id, rhythm, language, year_start, year_end, video, description) VALUES(1, 'Habanera', 'Spanish', 1880, 2020, 'https://youtu.be/iLGuLEqtq7g','Habanera: more baile de salon');
INSERT INTO rhythms (rhythm_code_id, rhythm, language, year_start, year_end, audio, description) VALUES(2, 'Graj', 'French', 1700, 2020, 'https://drive.google.com/file/d/1MoZXjAO2cqPU3IssoP40PYrAsshT4PVm','The graj accompanies the agricultural work');
INSERT INTO rhythms (rhythm_code_id, rhythm, language, year_start, year_end, audio, description) VALUES(2, 'Mende', 'French', 1850, 2020, 'https://drive.google.com/uc?id=1MoZXjAO2cqPU3IssoP40PYrAsshT4PVm','The mendé would have been the last rhythm to arrive in the islands, with the "Congos" under contract after the abolition, and symbolizes the collective celebration of carnival');
INSERT INTO rhythms (rhythm_code_id, rhythm, language, year_start, year_end, audio, description) VALUES(2, 'Pajabel', 'French', 1700, 2020, 'https://drive.google.com/uc?id=1MoZXjAO2cqPU3IssoP40PYrAsshT4PVm','The padjabèl is the cane cutting dance');
INSERT INTO rhythms (rhythm_code_id, rhythm, language, year_start, year_end, audio, description) VALUES(2, 'Lewoz', 'French', 1700, 2020, 'https://drive.google.com/uc?id=1MoZXjAO2cqPU3IssoP40PYrAsshT4PVm','The léwôz is the war rhythm, used to give rhythm the attacks against the plantations, but was also an incantation dance');
INSERT INTO rhythms (rhythm_code_id, rhythm, language, year_start, year_end, audio, description) VALUES(2, 'Tumbla', 'French', 1700, 2020, 'https://drive.google.com/uc?id=1MoZXjAO2cqPU3IssoP40PYrAsshT4PVm','The toumblak, like the kaladja, deals with the love theme, belly dance, fertility dance');
INSERT INTO rhythms (rhythm_code_id, rhythm, language, year_start, year_end, video, description) VALUES(3, 'Second Line', 'English', NULL, NULL, 'https://www.youtube.com/watch?v=QpKiuVVXXeA', NULL);
INSERT INTO rhythms (rhythm_code_id, rhythm, language, year_start, year_end, video, description) VALUES(4, 'One Step', 'English', 1870, 2020, 'https://www.youtube.com/watch?v=rF9y2qIbUqw','One step has a single walking rhythm');
INSERT INTO rhythms (rhythm_code_id, rhythm, language, year_start, year_end, video, description) VALUES(4, 'Two Step', 'English', 1900, 2020, NULL,'Two step combines two rhythms, typically quicks and slows');
INSERT INTO rhythms (rhythm_code_id, rhythm, language, year_start, year_end, video, description) VALUES(4, 'Tresillo', 'English', 1920, 1960, NULL,'Tresillo inherits from the Habanera rhythm and also has later links to the bo-diddly');
INSERT INTO rhythms (rhythm_code_id, rhythm, language, year_start, year_end, video, description) VALUES(5, 'DC Hand Dancing', 'English', NULL, NULL, NULL, NULL);
