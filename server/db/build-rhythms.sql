-- build the Rhythm Code database
--

DROP TABLE IF EXISTS rhythms;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS regions;
DROP TABLE IF EXISTS mappings;
DROP TABLE IF EXISTS rhythm_codes;

-- map_id refers to the id of the dot inside the DotMap component

CREATE TABLE rhythm_codes (
    id		        SERIAL NOT NULL PRIMARY KEY,
    rhythm_code     VARCHAR(255),
    region          VARCHAR(255),
    location        VARCHAR(255),
    map_id          VARCHAR(255)
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
    image           VARCHAR(512),
    description     TEXT,
    CONSTRAINT      rhy_rhythm_code_fk FOREIGN KEY (rhythm_code_id) REFERENCES rhythm_codes (id)
);

INSERT INTO rhythm_codes (rhythm_code, location, region, map_id) VALUES('Rumba', 'Cuba', 'Caribbean', 'dot1822');
INSERT INTO rhythm_codes (rhythm_code, location, region, map_id) VALUES('Gwo-Ka', 'Guadeloupe', 'Caribbean', 'dot1872');
INSERT INTO rhythm_codes (rhythm_code, location, region, map_id) VALUES('Second Line', 'NOLA', 'USA', 'dot1466');
INSERT INTO rhythm_codes (rhythm_code, location, region, map_id) VALUES('Blues / Early Jazz / Trad Jazz', 'NOLA', 'USA', 'dot1607');
INSERT INTO rhythm_codes (rhythm_code, location, region, map_id) VALUES('Swing', 'Washington DC', 'USA', 'dot1307');
INSERT INTO rhythm_codes (rhythm_code, location, region, map_id) VALUES('Ring shout', 'Gulla Geechee country, the Carolinas, Georgia Sea Islands', 'USA', 'dot1567');
INSERT INTO rhythm_codes (rhythm_code, location, region, map_id) VALUES('Djelidon', 'Mande Empire  (Mali, Ivory Coast, Burkina Faso, Guinea, Senegambia)', 'West Africa', 'dot2034');
INSERT INTO rhythm_codes (rhythm_code, location, region, map_id) VALUES('Numuw', 'Mande Empire  (Mali, Ivory Coast, Burkina Faso, Guinea, Senegambia)', 'West Africa', 'dot1914');
INSERT INTO rhythm_codes (rhythm_code, location, region, map_id) VALUES('Komo', 'Mande Empire  (Mali, Ivory Coast, Burkina Faso, Guinea, Senegambia)', 'West Africa', 'dot2028');
INSERT INTO rhythm_codes (rhythm_code, location, region, map_id) VALUES('Baulé', 'Akan', 'Ivory Coast, Togo, Benin, Ghana', 'dot2075');
INSERT INTO rhythm_codes (rhythm_code, location, region, map_id) VALUES('Agni', 'Akan', 'Ivory Coast, Togo, Benin, Ghana', 'dot1702');





INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(1, 'Columbia', 'https://youtu.be/W4aMl4HpKIQ', NULL, NULL, 'Columbia: rápida y solo para hombres, solo tambores y no se canta', 'Spanish', 1880, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(1, 'Yambu', 'https://youtu.be/Mux8ibZWbrg', NULL, NULL, 'Yambu: más lento, en pareja (and heteronormative) but traditionally not touching,', 'Spanish', 1880, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(1, 'Guaguanco', 'https://youtu.be/gJVT_5swkhA', NULL, NULL, 'Guaguanco: faster, most popular and well known : similar flirtatious narrative and motifs to Yambu', 'Spanish', 1880, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(1, 'Habanera', 'https://youtu.be/iLGuLEqtq7g', NULL, NULL, 'Habanera: more baile de salon', 'Spanish', 1880, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(2, 'Graj', NULL, NULL, NULL, 'The graj accompanies the agricultural work', 'French', 1700, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(2, 'Mende', NULL, '/assets/audio/mende.mp3', NULL, 'The mendé would have been the last rhythm to arrive in the islands, with the "Congos" under contract after the abolition, and symbolises the collective celebration of carnival', 'French', 1850, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(2, 'Pajabel', NULL, NULL, NULL, 'The padjabèl is the cane cutting dance', 'French', 1700, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(2, 'Lewoz', NULL, '/assets/audio/lewoz.mp3', NULL, 'The léwôz is the war rhythm, used to give rhythm the attacks against the plantations, but was also an incantation dance', 'French', 1700, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(2, 'Toumblak', NULL, '/assets/audio/toumblak.mp3', NULL, 'The toumblak, like the kaladja, deals with the love theme, belly dance, fertility dance', 'French', 1700, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(2, 'Woule', NULL, '/assets/audio/woule.mp3', NULL, NULL, NULL, 1700, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(3, 'Second Line', 'https://www.youtube.com/watch?v=QpKiuVVXXeA', NULL, NULL, NULL, NULL, 1700, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(4, 'One Step', 'https://www.youtube.com/watch?v=rF9y2qIbUqw', NULL, NULL, 'One step has a single walking rhythm', NULL, 1870, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(4, 'Two Step', NULL, NULL, NULL, 'Two step combines two rhythms, typically quicks and slows', NULL, 1900, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(4, 'Tresillo', NULL, NULL, NULL, 'Tresillo inherits from the Habanera rhythm and also has later links to the bo-diddly', NULL, 1920, 1960);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(5, 'DC Hand Dancing', NULL, NULL, NULL, NULL, NULL, 1920, 1960);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(6, 'Ring shout ', NULL, '/assets/audio/ring_shout.mp3', NULL, 'Tresillo rhythm dominates, amid polyrhythms in claps and vocal. Continuity with African culture in the unity dance and music, also the unity of lyric imagery with embodied dance gestures/storytelling. Ring Shout Audio Credits:

Lead Vocal: Alyria Salazar
Vocal, percussion:  
Aurelie Capelle-Sigière, Deirdre Molloy, Karamoko Sanogo, Socha

Sound Engineer: Adrien Halfon, MJC Roguet
Post-production: Thiago Gondim, Gerador. Deirdre Molloy.

Musical arrangement & choreography: Deirdre Molloy
Informed by culture-bearer recordings: McIntosh County Shouters, Georgia Sea Island Singers, and the Seniorlites. 

2023.10 Recorded in Toulouse, France.
', NULL, 1700, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(7, 'Dja(n)', NULL, NULL, NULL, 'Danse des griots: Source: Karamako Kone & Amelie Fereol', 'Malinke, Bambara, Soussou', 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(7, 'Sanja', NULL, '/assets/audio/sanja.mp3', NULL, 'Malinke rhythm, performed by Karamoko Sanogo. Producer/copyright: Deirdre Molloy. Informed by workshops attended with Karamoko Kone and Amelie Ferreol.', NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(8, 'Numudon', NULL, '/assets/audio/numudon.mp3', NULL, 'Don=danse Numuw = metal smiths. Danse des forgerons (numuw) traditionally danced with a hatchet or a scarf in the hands. Malinke rhythm of iron-smiths, performed on multiple drums and bells by Karamoko Sanogo. Producer/copyright: Deirdre Molloy. Informed by workshops attended with culture bearers: Dramane & Manu Sissoko (Mali).', NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(8, 'Balakulandya', NULL, '/assets/audio/balakulandya.mp3', NULL, 'A harvest ritual rhythm: Source: Guinea style w Karamako Kone and Melissa Habibi.', NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(9, 'Koroduga', NULL, '/assets/audio/koroduga.mp3', NULL, 'Bambara peoples: Male secret society version> female version > bamako theatre version. Original male only version has "Komo" mask. Informed by workshops attended with culture bearers : Brahima dit Bandjouguou Coulibaly dancer, percussion: Kako Kone and Aruna Kone. Tansolé: dance Gaelle Roussillon & djembe: Kako Kone. This performance, all drums performed by Karamoko Sanogo. Producer/copyright: Deirdre Molloy. ', NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(9, 'Maracadon', NULL, NULL, NULL, 'Source: Clement Assemian', NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(9, 'Mandiani', NULL, NULL, NULL, 'Source: Karamoko "Kako" Kone', NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(9, 'Grine', NULL, NULL, NULL, NULL, NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(9, 'Koukou', NULL, NULL, NULL, 'Source: Clement Assemian', NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(9, 'Dansa', NULL, NULL, NULL, 'Sources: Kako & Gaelle R', NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(9, 'Sofa', NULL, NULL, NULL, 'Source: Clement Assemian', NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(9, 'Soli', NULL, NULL, NULL, 'Source: Karamoko "Kako" Kone Interview, published on decodenoir.org', NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(9, 'Chi Wara', NULL, NULL, 'https://drive.google.com/file/d/1DQWSIyUbAAnBwimjt_SOJF6XA1IKSGHW/view', 'Yes', NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(10, 'Goli', NULL, NULL, NULL, 'Masked dance. Clement Assemian: dancer from Cote d Ivoire', NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(10, 'Adjoss', NULL, NULL, NULL, 'similar to Agni Abodan', NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(11, 'Abodan', 'https://drive.google.com/file/d/1c3EqBhcRQ53HzJi8ifJyxlnw5jDdInup', NULL, NULL, 'Source: Interview w Clement, performance video with Clem and live percussion by Manu, Olivier and Ladji Sanogo: 2023.07. Animist peoples whose dance imagery and footwork honours ancestors the ground, according to interview with Karamoko Kone. This interpretation is supported by a BBC doco touching on Asante cosmology, and sacred forest sites of ancestral spirits. A popular traditional dance.', NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(11, 'Grolo', NULL, NULL, NULL, 'Associative dance', NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(11, 'Mbapali', NULL, NULL, NULL, NULL, NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(11, 'Siabotam', NULL, NULL, NULL, NULL, NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(11, 'Adjakon', NULL, NULL, NULL, NULL, NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(11, 'Aossi', NULL, NULL, NULL, NULL, NULL, 1600, 2020);
INSERT INTO rhythms (rhythm_code_id, rhythm, video, audio, image, description, language, year_start, year_end) VALUES(11, 'Comien', NULL, NULL, NULL, 'Source: Clement Assemian. Dance of fetish-woman "fetisuese" transmitted by heredity & intiation both. healing gift or vocation. coded, for initiated only', NULL, 1600, 2020);