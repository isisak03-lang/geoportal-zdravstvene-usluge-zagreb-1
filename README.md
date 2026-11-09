# Geoportal prostorne dostupnosti zdravstvenih usluga u Gradu Zagrebu

Web karta koja prikazuje prostornu dostupnost **domova zdravlja, zdravstvenih ustanova i ljekarni** u Gradu Zagrebu: koliko je ustanova dostupno pješice i vozilom te koja se stajališta javnog prijevoza nalaze u njihovoj blizini. Izrađena je u okviru **Datathona Portala otvorenih podataka** (Ministarstvo pravosuđa, uprave i digitalne transformacije), isključivo od otvorenih podataka.

**Karta:** [adresa objavljene karte, npr. https://\<korisnik\>.github.io/\<repozitorij\>/]
**Dokumentacija:** mapa [`docs/`](docs/)

> *English summary:* A static web map (OpenLayers, exported with QGIS qgis2web) showing walking and driving accessibility of primary health centres, other healthcare facilities and pharmacies in the City of Zagreb, together with nearby bus and tram stops. Built from open data (data.gov.hr, OpenStreetMap). Walking thresholds: 200 m (about 2.5 min) and 500 m (about 6 min); driving: 5 min (health centres and pharmacies) and 10 min (other healthcare facilities).

## Što karta prikazuje

Karta sadrži 25 slojeva koji se uključuju i isključuju u legendi:

| Skupina | Slojevi |
|---|---|
| Ustanove (točke) | Domovi zdravlja, Zdravstvene ustanove, Ljekarne |
| Autobusna stajališta (6) | Stajališta udaljena do 2,5 i do 6 minuta hoda od domova zdravlja, zdravstvenih ustanova i ljekarni |
| Tramvajska stajališta (6) | Isto kao za autobusna stajališta |
| Dostupnost pješice (6 slojeva, linije) | Broj domova zdravlja, zdravstvenih ustanova i ljekarni dostupnih u 2,5 i 6 minuta hoda |
| Dostupnost vozilom (3 sloja) | Područje dostupno do domova zdravlja i ljekarni u 5 minuta te do zdravstvenih ustanova u 10 minuta vožnje |
| Podloga | Ortofoto Grada Zagreba 2022 (WMS) |

Klikom na objekt otvara se njegova atributna tablica: za ustanove naziv, adresa, web-stranica i telefon; za stajališta naziv i linije koje se na njima zaustavljaju; za slojeve pješačke dostupnosti broj ustanova dostupnih s te lokacije.

## Kako otvoriti kartu

- **Na internetu:** otvorite adresu karte navedenu iznad.
- **Lokalno:** preuzmite repozitorij (*Code → Download ZIP*), raspakirajte ga i dvaput kliknite `index.html`. Nije potreban poslužitelj ni instalacija. Za prikaz podloge (ortofoto) potrebna je internetska veza.

## Struktura repozitorija

| Mapa / datoteka | Sadržaj |
|---|---|
| `index.html` | Ulazna stranica web karte |
| `layers/` | Podaci slojeva (`.js` datoteke s GeoJSON podacima) |
| `styles/` | Stilovi i legende slojeva |
| `resources/` | JavaScript biblioteke i resursi (OpenLayers i dr.) |
| `webfonts/` | Fontovi za ikone |
| `images/` | Slike |
| `docs/` | Tehnička i projektna dokumentacija, dijagram arhitekture |
| `LICENSE` | Licenca MIT (izvorni kod) |
| `LICENSES.md` | Pregled svih licenci i atribucija |

## Podaci

| Skup podataka | Izdavač | Licenca |
|---|---|---|
| Geoportal Domovi zdravlja | Grad Zagreb (data.gov.hr) | CC BY 4.0 |
| Geoportal Zdravstvene ustanove, Ljekarne, Autobusna i Tramvajska stajališta ZET, Mjesni odbori | Grad Zagreb (data.gov.hr) | Otvorena dozvola (OD) |
| OpenStreetMap, izvadak za Hrvatsku (prometna mreža) | OpenStreetMap suradnici, Geofabrik | ODbL 1.0 |
| Ortofoto 2022 (WMS) | Grad Zagreb | Otvorena dozvola (OD) |
| Populacijska mreža 1 × 1 km, 2021. (samo u analizi, nije dio repozitorija) | Eurostat (GISCO) | [provjeriti] |

Poveznice i puni popis atribucija nalaze se u [`LICENSES.md`](LICENSES.md).

## Metodologija ukratko

Obrada je provedena u **QGIS-u 3.40** (koordinatni sustav HTRS96/TM, EPSG:3765), a karta je izvezena dodatkom **qgis2web 4.4.0** (OpenLayers 10.7.0).

1. Prometna mreža iz OpenStreetMapa izrezana je na područje Grada Zagreba (za pješake bez autocesta i brzih cesta; za vozila odabrane kategorije cesta uz brzine iz oznake `maxspeed`, a gdje nedostaje, 50 km/h).
2. **Pješačka dostupnost:** alatom Service area izračunate su zone od 200 m (oko 2,5 min) i 500 m (oko 6 min) za svaku vrstu ustanove. Preklapanja zona izbrojena su (Join attributes by location) i agregirana (Aggregate, maksimum) da se dobije broj dostupnih ustanova po dijelu mreže (pristup kumulativnih prilika).
3. **Dostupnost vozilom:** vremenski pragovi (5 i 10 min) određeni su iz prosjeka vremena do tri najbliže ustanove (QNEAT3), a zone su izračunate alatom Service area (najbrži put) i spojene u jedan objekt (Dissolve).
4. **Stajališta** unutar zona pješačke dostupnosti odabrana su pojasom od 20 m i izrezivanjem (Clip).

Detaljan opis nalazi se u dokumentaciji (`docs/`).

### Ključni rezultati

Udio stanovnika Grada Zagreba (Eurostatova mreža 1 × 1 km, 2021.) kojima je ustanova dostupna:

| Vrsta ustanove | Pješice 2,5 min (200 m) | Pješice 6 min (500 m) | Vozilom |
|---|---|---|---|
| Domovi zdravlja | 68,2 % | 80,0 % | 99,4 % (5 min) |
| Zdravstvene ustanove | 24,1 % | 34,7 % | 97,8 % (10 min) |
| Ljekarne | 79,7 % | 86,1 % | 99,1 % (5 min) |

Udjeli su približni jer su izračunati odabirom ćelija mreže koje se sijeku sa zonama dostupnosti (rezultati preklapanja nisu dio karte).

## Osvježavanje podataka

Podaci se osvježavaju **ručno**: izvorni skupovi preuzeti su kao datoteke, a ne kao servisi povezani na izvor. Po objavi novih verzija izvornih slojeva potrebno je ponoviti obradu u QGIS-u i ponovno izvesti kartu dodatkom qgis2web. Za ustanove i stajališta Portal ne predviđa vrijeme osvježavanja; osvježava ih izdavač (Grad Zagreb).

## Ograničenja

- Obuhvaćeno je samo područje Grada Zagreba.
- Zone se računaju po prometnoj mreži OpenStreetMapa i jedinstvenoj pretpostavci brzine hoda (oko 5 km/h) i vožnje; ne uzimaju se u obzir gužve, nagibi ni prometni signali.
- Slojevi dostupnosti vozilom prikazuju područje dostupnosti, a ne broj dostupnih ustanova.
- Podloga (ortofoto) učitava se s vanjskog WMS servisa Grada Zagreba.

## Licence

Kod je dostupan pod licencom **MIT**, izvedeni podaci (`layers/`) pod **ODbL 1.0**, a dokumentacija pod **CC BY 4.0**. Ulazni podaci i komponente trećih strana zadržavaju vlastite licence. Pojedinosti: [`LICENSES.md`](LICENSES.md).

## Autori

- Antonela Banović, Lucija Mahovne, Lovro Šanje (studenti)
- Mentor: Ivan Šišak, Sveučilište u Zagrebu, Prirodoslovno-matematički fakultet


## Napomena

Rješenje je izrađeno za Datathon Portala otvorenih podataka u okviru ulaganja C2.3. R2-I2 Nacionalnog plana oporavka i otpornosti 2021.–2026. Pri izradi je savjetodavno korištena umjetna inteligencija (vidi dokumentaciju).
