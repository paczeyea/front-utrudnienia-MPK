# Mapa Utrudnień MPK
To repozytorium jest częścią projektu zespołowego pt. "Mapa Utrudnień MPK".
W tej części znajdują się pliki odpowiedzialne za frontend projektu tj. strona aplikacji, w tym jej funkcje i wygląd.

## Wykorzystane technologie:
Projekt korzysta z następujących technologii i narzędzi: 
- **Angular**: Platforma do budowy aplikacji frontendowych. 
- **TypeScript**: Język programowania będący nadzbiorem JavaScript. 
- **Tailwind CSS**: Framework CSS do szybkiego tworzenia stylów. 
- **Angular CLI**: Narzędzie do zarządzania projektami Angular. 
- **PWA**: Funkcjonalności Progressive Web App dla lepszej wydajności i doświadczenia użytkownika.

## Instalacja:
Aby uruchomić ten projekt u siebie, należy wykonać poniższe kroki:
1. **Sklonuj repozytorium**: 
``git clone https://github.com/paczeyea/front-utrudnienia-MPK.git ``

2. **Przejdź do folderu projektu**:
``cd front-utrudnienia-MPK``

3. **Zainstaluj Node Package Manager**:
``npm install``

4. **Uruchom projekt**:
``ng serve``

5. **Przejdź w przeglądarce do**:
``http://localhost:4200``


## Działanie głównych funkcjonalności aplikacji w postaci przycisków
- **Przycisk z ikoną autobusu**:
Służy on do wyświetlenia wybranych tramwajów i autobusów na mapie w czasie rzeczywistym.
1.  użytkownik wybiera z listy numer pojazdu  
2.  użytkownik widzi na mapie wszystkie pojazdy z tym numerem  
3.  użytkownik klika na wyświetlany pojazd, żeby rozwinąć dymek z godziną, o której powinien być bądź o której godzinie był na wcześniej wybranym przystanku pojazd
- **Przycisk z ikoną lupy**:
Służy on do wyświetlenia numerów linii oraz możliwych połączeń między wpisanymi punktami. 
1.  użytkownik wprowadza adres skąd wyrusza oraz dokąd zmierza  
2.  wyświetla się mapa z zaznaczonym przystankiem  
3.  użytkownik naciska na rozwijaną listę (na liście są podświetlone te numery linii, którymi da się dojechać do celu)  
4.  użytkownik zaznacza na liście numery linii jakie go interesują  
5.  użytkownik klika na ekranie poza listą, lub używa przycisku “cofnij”  
6.  aplikacja wyświetla na mapie pojazdy wskazanych linii  
7.  przy każdym z pojazdów wyświetla się planowana godzina kiedy pojazd dotrze do najbliższego przystanku
- **Przycisk z ikoną listy**:
Służy on do wyświetlenia rozkładu jazdy.
1.  użytkownik klika odpowiednią ikonę
2.  użytkownik wybiera linię autobusu/tramwaju, która go interesuje
3.  użytkownik wybiera odpowiedni kierunek jazdy
4.  użytkownik wybiera przystanek
5. użytkownik widzi rozkład jazdy wybranego autobusu, konkretnego kierunku jazdy na określonym przystanku
- **Przycisk z ikoną wykrzyknika**:
Dzięki tej funkcjonalności użytkownik może zgłosić utrudnienie, którego jest świadkiem, przez co zgłoszone utrudnienie jest widoczne dla innych użytkowników.
1.  użytkownik otwiera aplikację  
2.  użytkownik wprowadza adres miejsca utrudnienia  
3.  aplikacja wyświetla dane miejsce na mapie jako miejsce utrudnienia (np. pinezka/podświetlenie)  
4.  przy wyborze autobusu/tramwaju, znając miejsce startowe i końcowe trasy, użytkownik zaznacza te linie, które przejeżdżają przez miejsca utrudnienia ruchu.  
5.  aplikacja proponuje alternatywne tramwaje i autobusy - jako objazd danych miejsc, pod warunkiem że jest odpowiednio szybko czy mało przesiadek.
