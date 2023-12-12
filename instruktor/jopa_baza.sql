CREATE DATABASE instruktor;
drop database instruktor;
USE instruktor;

CREATE TABLE korisnik (
	korisnik_id INT PRIMARY KEY AUTO_INCREMENT,
    korisnicko_ime VARCHAR(50) NOT NULL,
    lozinka VARCHAR(30) NOT NULL,
    tip_korisnika VARCHAR(50) NOT NULL
);

CREATE TABLE kandidat (
	kandidat_id INT PRIMARY KEY AUTO_INCREMENT,
    ime VARCHAR(50) NOT NULL,
    prezime VARCHAR(50) NOT NULL,
    korisnik_id INT NOT NULL,
    datum_upisa DATE DEFAULT (CURRENT_DATE()),
    FOREIGN KEY (korisnik_id) REFERENCES korisnik(korisnik_id) ON DELETE CASCADE
);

CREATE TABLE obavijest (
	obavijest_id INT PRIMARY KEY AUTO_INCREMENT,
    sadrzaj LONGTEXT NOT NULL,
    vrijeme DATETIME NOT NULL,
    korisnik_id INT NOT NULL,
    FOREIGN KEY (korisnik_id) REFERENCES korisnik(korisnik_id) ON DELETE CASCADE
);

CREATE TABLE instruktor (
	instruktor_id INT PRIMARY KEY AUTO_INCREMENT,
    ime VARCHAR(50) NOT NULL,
    prezime VARCHAR(50) NOT NULL,
    korisnik_id INT NOT NULL,
    FOREIGN KEY (korisnik_id) REFERENCES korisnik(korisnik_id) ON DELETE CASCADE
);

CREATE TABLE evidencija (
	evidencija_id INT PRIMARY KEY AUTO_INCREMENT,
    instruktor_id INT NOT NULL,
    ocjena INT CHECK(ocjena BETWEEN 1 AND 5),
    napomena LONGTEXT,
    FOREIGN KEY (instruktor_id) REFERENCES instruktor(instruktor_id) ON DELETE CASCADE
);

CREATE TABLE satovi_voznje (
	satovi_id INT PRIMARY KEY AUTO_INCREMENT,
    korisnik_id INT NOT NULL,
    evidencija_id INT NOT NULL,
    datum DATE NOT NULL,
    trajanje INT NOT NULL,
    FOREIGN KEY (korisnik_id) REFERENCES korisnik(korisnik_id) ON DELETE CASCADE,
    FOREIGN KEY (evidencija_id) REFERENCES evidencija(evidencija_id) ON DELETE CASCADE
);





