BEGIN;

INSERT INTO instruktor.korisnik (korisnicko_ime,lozinka,tip_korisnika) VALUES
('anahorvat@instruktor.com','horvat123','instruktor'),
('markokovac@instruktor.com','kovač123','instruktor'),
('marijajuric@instruktor.com','jurić123','instruktor'),
('ivannovak@instruktor.com','novak123','instruktor'),
('miaradic@kandidat.com','radić123','kandidat'),
('lukatomic@kandidat.com','tomić123','kandidat'),
('petrasimic@kandidat.com','šimić123','kandidat'),
('filipkralj@kandidat.com','kralj123','kandidat'),
('ivanapavic@kandidat.com','pavić123','kandidat'),
('matematic@kandidat.com','matić123','kandidat'),
('antonijababic@kandidat.com','babić123','kandidat'),
('lovrovukovic@kandidat.com','vuković123','kandidat'),
('katarinaperic@kandidat.com','perić123','kandidat'),
('nikolakovacevic@kandidat.com','kovačević123','kandidat'),
('leacorak@kandidat.com','čorak123','kandidat'),
('jakovhorvat@kandidat.com','horvat123','kandidat'),
('sarabaric@kandidat.com','barić123','kandidat'),
('ivangrgic@kandidat.com','grgić123','kandidat'),
('lanamaras@kandidat.com','maras123','kandidat'),
('fransaric@kandidat.com','šarić123','kandidat'),
('leonavidovic@kandidat.com','vidović123','kandidat'),
('domagojknezevic@kandidat.com','knežević123','kandidat'),
('emarukavina@kandidat.com','rukavina123','kandidat'),
('brunosertic@kandidat.com','sertić123','kandidat');

INSERT INTO instruktor.instruktor (ime,prezime,korisnik_id) VALUES
('Ana','Horvat',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='anahorvat@instruktor.com')),
('Marko','Kovač',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='markokovac@instruktor.com')),
('Marija','Jurić',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='marijajuric@instruktor.com')),
('Ivan','Novak',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='ivannovak@instruktor.com'));

INSERT INTO instruktor.kandidat (ime,prezime,korisnik_id,datum_upisa) VALUES
('Mia','Radić',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='miaradic@kandidat.com'),'2023-12-10'),
('Luka','Tomić',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='lukatomic@kandidat.com'),'2023-12-10'),
('Petra','Šimić',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='petrasimic@kandidat.com'),'2023-12-10'),
('Filip','Kralj',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='filipkralj@kandidat.com'),'2023-12-10'),
('Ivana','Pavić',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='ivanapavic@kandidat.com'),'2023-12-10'),
('Mate','Matić',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='matematic@kandidat.com'),'2023-12-10'),
('Antonija','Babić',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='antonijababic@kandidat.com'),'2023-12-10'),
('Lovro','Vuković',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='lovrovukovic@kandidat.com'),'2023-12-10'),
('Katarina','Perić',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='katarinaperic@kandidat.com'),'2023-12-10'),
('Nikola','Kovačević',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='nikolakovacevic@kandidat.com'),'2023-12-10'),
('Lea','Čorak',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='leacorak@kandidat.com'),'2023-12-10'),
('Jakov','Horvat',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='jakovhorvat@kandidat.com'),'2023-12-10'),
('Sara','Barić',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='sarabaric@kandidat.com'),'2023-12-10'),
('Ivan','Grgić',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='ivangrgic@kandidat.com'),'2023-12-10'),
('Lana','Maras',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='lanamaras@kandidat.com'),'2023-12-10'),
('Fran','Šarić',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='fransaric@kandidat.com'),'2023-12-10'),
('Leona','Vidović',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='leonavidovic@kandidat.com'),'2023-12-10'),
('Domagoj','Knežević',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='domagojknezevic@kandidat.com'),'2023-12-10'),
('Ema','Rukavina',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='emarukavina@kandidat.com'),'2023-12-10'),
('Bruno','Sertić',(SELECT korisnik_id FROM instruktor.korisnik WHERE korisnicko_ime='brunosertic@kandidat.com'),'2023-12-10');

COMMIT;