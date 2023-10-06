-- build the Rhythm Code database
--

DROP TABLE IF EXISTS rhythms;

CREATE TABLE rhythms (
    id		        SERIAL NOT NULL PRIMARY KEY,
    rhythm	        VARCHAR(255),
    date            YEAR,
    video		    VARCHAR(512),
    audio           VARCHAR(512),
    description     TEXT
);

