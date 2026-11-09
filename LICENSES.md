# Licence i atribucija

Ovaj repozitorij sadrži geoportal o prostornoj dostupnosti zdravstvenih usluga (domovi zdravlja, zdravstvene ustanove, ljekarne) u Gradu Zagrebu, izrađen za Datathon Portala otvorenih podataka. Različiti dijelovi repozitorija imaju različite licence, kako je navedeno u nastavku.

## 1. Pregled

| Dio repozitorija | Licenca |
|---|---|
| Izvorni kod i prilagodbe web karte (npr. `index.html`, vlastite skripte i stilovi, `README`) | MIT, vidi datoteku [`LICENSE`](LICENSE) |
| Izvedeni slojevi podataka (mapa `layers/`) | Open Database License (ODbL) 1.0 |
| Dokumentacija i dijagram arhitekture | Creative Commons Imenovanje 4.0 (CC BY 4.0) |
| Ulazni podaci | Izvorne licence, vidi odjeljak 5 |
| Komponente trećih strana (mape `resources/`, `webfonts/` i sl.) | Vlastite licence komponenti, vidi odjeljak 6 |

## 2. Izvorni kod: MIT

Izvorni kod i prilagodbe web karte dostupni su pod licencom MIT. Puni tekst nalazi se u datoteci [`LICENSE`](LICENSE).

Copyright (c) 2026 Antonela Banović, Lucija Mahovne, Lovro Šanje, Ivan Šišak / GEOtim1

## 3. Izvedeni slojevi podataka: ODbL 1.0

Slojevi u mapi `layers/` izvedeni su iz podataka OpenStreetMapa (prometna mreža) i drugih otvorenih skupova podataka (vidi odjeljak 5). Zbog licence OpenStreetMapa (ODbL, uvjet dijeljenja pod istim uvjetima) izvedena baza podataka dostupna je pod istom licencom.

> Ova baza podataka dostupna je pod licencom Open Database License: <https://opendatacommons.org/licenses/odbl/1-0/>. Sva prava na pojedinačni sadržaj baze dodijeljena su pod licencom Database Contents License: <https://opendatacommons.org/licenses/dbcl/1-0/>.

Uvjeti ODbL-a ukratko (nije zamjena za puni tekst licence):

- Podatke smijete slobodno koristiti, kopirati, mijenjati i dijeliti, uključujući komercijalno.
- Obvezno je navesti izvor (atribucija), vidi odjeljak 8.
- Ako javno objavljujete izmijenjenu verziju baze, mora ostati pod ODbL-om (dijeljenje pod istim uvjetima).
- Karte i drugi prikazi izrađeni iz podataka (tzv. produced work) mogu se koristiti uz navođenje izvora.

Izvorna prometna mreža: &copy; OpenStreetMap suradnici, ODbL. Preuzeto iz izvatka za Hrvatsku, Geofabrik: <https://download.geofabrik.de/europe/croatia.html>

## 4. Dokumentacija: CC BY 4.0

Dokumentacija i dijagram arhitekture (npr. `arhitektura.png`, `arhitektura.svg`, tehnička i projektna dokumentacija) dostupni su pod licencom Creative Commons Imenovanje 4.0 (CC BY 4.0): <https://creativecommons.org/licenses/by/4.0/>.

Smijete ih kopirati, mijenjati i dijeliti, uz navođenje autora, poveznicu na licencu i oznaku jesu li napravljene izmjene.

Predložena atribucija: *Geoportal prostorne dostupnosti zdravstvenih usluga na području Grada Zagreba, GEOtim1, 2026., CC BY 4.0.*

## 5. Ulazni podaci

Pri korištenju i dijeljenju slojeva vrijede uvjeti izvornih licenci. Izvori:

| Skup podataka | Izdavač | Licenca | Poveznica |
|---|---|---|---|
| Geoportal Domovi zdravlja | Grad Zagreb | CC BY 4.0 | <https://data.gov.hr/ckan/hr/dataset/geoportal-domovi-zdravlja> |
| Geoportal Zdravstvene ustanove | Grad Zagreb | Otvorena dozvola (OD) | <https://data.gov.hr/ckan/hr/dataset/geoportal-zdravstvene-ustanove> |
| Geoportal Ljekarne | Grad Zagreb | Otvorena dozvola (OD) | <https://data.gov.hr/ckan/hr/dataset/geoportal-ljekarne> |
| Geoportal Autobusna stajališta ZET | Grad Zagreb | Otvorena dozvola (OD) | <https://data.gov.hr/ckan/hr/dataset/geoportal-autobusna-stajalista-zet> |
| Geoportal Tramvajska stajališta ZET | Grad Zagreb | Otvorena dozvola (OD) | <https://data.gov.hr/ckan/hr/dataset/geoportal-tramvajska-stajalista-zet> |
| Mjesni odbori, prostorna jedinica mjesne samouprave za područje Grada Zagreba | Grad Zagreb | Otvorena dozvola (OD) | <https://data.gov.hr/ckan/hr/dataset/mjesni-odbori-prostorna-jedinica-mjesne-samouprave-za-podrucje-grada-zagreba> |
| OpenStreetMap, izvadak za Hrvatsku | OpenStreetMap suradnici (izvadak: Geofabrik) | ODbL 1.0 | <https://download.geofabrik.de/europe/croatia.html> |
| Ortofoto 2022 (WMS), podloga karte | Grad Zagreb | Otvorena dozvola (OD) | <https://geoportal.zagreb.hr/Public/Ortofoto2022_Public/MapServer/WMSServer> |
| Populacijska mreža 1 × 1 km, 2021. (korištena u analizi; nije dio ovog repozitorija) | Eurostat (GISCO) | [provjeriti licencu odabrane verzije] | <https://ec.europa.eu/eurostat/web/gisco/geodata/population-distribution/population-grids> |

Podaci s Portala otvorenih podataka koriste se u skladu s otvorenom dozvolom pod kojom su objavljeni, uz navođenje izvora (Pravilnik o vrstama i sadržaju dozvola za ponovnu uporabu informacija, »Narodne novine«, br. 67/17).

## 6. Komponente trećih strana

Komponente trećih strana zadržavaju vlastite licence i autorska prava.

| Komponenta | Verzija | Licenca | Lokacija |
|---|---|---|---|
| OpenLayers | 10.7.0 | BSD-2-Clause | `resources/` |




## 7. Alati korišteni pri izradi

Sljedeći alati korišteni su za obradu podataka i izradu web karte i nisu uključeni u ovaj repozitorij:

| Alat | Verzija | Licenca |
|---|---|---|
| QGIS | 3.40 | GPL (v2 ili novija) |
| QNEAT3 (dodatak za QGIS) | 1.0.8 | GPL-3.0 |
| qgis2web (dodatak za QGIS) | 4.4.0 | GPL-2.0 |

## 8. Kako navesti izvor

Pri korištenju ove web karte ili njezinih podataka navedite:

> Podaci o ustanovama i stajalištima: Grad Zagreb, data.gov.hr (Otvorena dozvola; Domovi zdravlja: CC BY 4.0). Prometna mreža: &copy; OpenStreetMap suradnici (ODbL), izvadak Geofabrik. Podloga: Ortofoto 2022, Grad Zagreb (Otvorena dozvola). Granice mjesnih odbora: Grad Zagreb, data.gov.hr (Otvorena dozvola). Geoportal prostorne dostupnosti zdravstvenih usluga na području Grada Zagreba, GEOtim1, 2026.

## 9. Napomena

Ovaj dokument služi kao informativni pregled licenci i nije pravni savjet. U slučaju razlike mjerodavan je tekst pojedine licence.
