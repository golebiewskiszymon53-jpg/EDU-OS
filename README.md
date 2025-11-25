# EDU-OS

Otwartoźródłowy system operacyjny dla szkół. Skupia się na prostocie, bezpieczeństwie i dostępności narzędzi edukacyjnych. Projekt wykorzystuje bazę dystrybucji Debian. Nowe 
zsynchronizowane z wydaniami tych dystrybucji.

## Najważniejsze cechy

- **Open source:** pełna przejrzystość i możliwość rozwoju przez społeczność
- **Stabilność:** przewidywalne, cykliczne wydania i regularne aktualizacje
- **Dwie edycje:** Lite (lekka) oraz Pełna (bogatsza)
- **Pakiety edukacyjne:** LibreOffice, GIMP, Inkscape, Audacity, Scratch, Geogebra (opcjonalnie)
- **Przeglądarka:** wsparcie dla pracy w narzędziach Google (Docs, Sheets, Slides, Classroom) przez web
- **Prostota wdrożenia:** działa na typowym sprzęcie szkolnym

## Wersje

- **EDU OS Lite**
  - **Środowisko:** XFCE / LXQt
  - **Zastosowanie:** starsze lub słabsze komputery
  - **Grafika:** OpenGL 2.0+

- **EDU OS Pełna**
  - **Środowisko:** KDE Plasma / Cinnamon
  - **Zastosowanie:** nowocześniejsze pracownie i pełen zestaw aplikacji
  - **Zalecenia:** Vulkan 1.3, SSD, 8 GB RAM

## Minimalne wymagania sprzętowe

- **Lite:** Celeron N3350, 2 GB RAM, 32 GB dysku
- **Pełna:** i3 (6–8 gen) lub Celeron N4020/N4100, 4 GB RAM, 64 GB dysku

## Cykl wydawniczy

- Nowe główne wersje ukazują się razem z wydaniami Ubuntu/Debian, co około 2–3 lata.
- W trakcie cyklu dostępne są aktualizacje bezpieczeństwa i poprawki.

## Pobieranie

- Obrazy ISO i sumy kontrolne będą publikowane w sekcji „Releases” tego repozytorium.
- Strona projektu: (GitHub Pages) — jeśli aktywne, zawiera informacje o pobieraniu i instalacji.

## Instalacja (zarys)

1. **Przygotuj pendrive:** nagraj obraz ISO (np. Balena Etcher, Rufus, dd).
2. **Uruchom z pendrive:** wybierz urządzenie USB w menu startowym komputera.
3. **Instalator:** wybierz edycję Lite lub Pełna, ustawienia języka, dysku i użytkownika.
4. **Pierwsze uruchomienie:** zaloguj się, zaktualizuj system i skonfiguruj podstawowe aplikacje.

## Zgodność z narzędziami Google

- Praca w przeglądarce (Chromium/Firefox) z Google Docs/Sheets/Slides/Classroom działa bez zmian.
- Możliwa instalacja PWA dla szybszego dostępu jako „aplikacji”.
- Tryb offline można włączyć rozszerzeniem „Dokumenty Google offline”.

## Licencja

- Projekt jest dostępny na licencji open source GPL-3.0.
- Zobacz plik `LICENSE` w repozytorium.

## Wkład w projekt

- Zgłaszaj błędy i propozycje w „Issues”.
- Pull Requesty są mile widziane — prosimy o krótkie opisy zmian i testy.
- 
