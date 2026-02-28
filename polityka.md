# Polityka Prywatności aplikacji "Zero Waste AI Chef"

**Data ostatniej aktualizacji:** 28.02.2026

Twoja prywatność w kuchni i w sieci to nasz priorytet. Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób zbieramy, wykorzystujemy i chronimy Twoje dane osobowe w aplikacji mobilnej "Zero Waste AI Chef". Działamy w pełni zgodnie z europejskim ogólnym rozporządzeniem o ochronie danych (RODO).

## 1. Kto jest administratorem Twoich danych?

Administratorem Twoich danych osobowych (w rozumieniu przepisów RODO) jest Justyna Celmer, prowadząca działalność nierejestrowaną, posługująca się w obrocie marką "ForFourOne App Development".

* **Adres do korespondencji:** Włocławek, ul Długa 61A, 87-000 Włocławek
* **E-mail kontaktowy w sprawach prywatności:** <forfourone@gmail.com>

## 2. Jakie dane zbieramy i w jakim celu?

Aby nasza usługa SaaS (Software-as-a-Service) mogła dostarczać Ci spersonalizowane przepisy AI, zbieramy tylko niezbędne minimum informacji:

* **Dane logowania i profil (Google Sign-In):** Pobieramy Twój adres e-mail z profilu Google. Cel: autoryzacja konta (OAuth), obsługa subskrypcji PRO oraz zabezpieczenie Twoich zapisanych przepisów i list zakupów w bazie danych.
* **Zdjęcia z aparatu i galerii urządzenia:** Aplikacja prosi o jednorazowy lub stały dostęp do aparatu/galerii w celu działania Skanera AI (np. analizy zdjęć paragonów lub wnętrza lodówki). Cel: rozpoznawanie dodawanych produktów i generowanie z nich przepisów. **Ważne:** Zdjęcia są przesyłane do analizy przez modele AI w czasie rzeczywistym i nie są przez nas trwale przechowywane w celach innych niż realizacja tej funkcji.
* **Tokeny powiadomień Push:** Aby obsłużyć powiadomienia i komunikację w funkcji Rodziny (Household), zbieramy anonimowe tokeny urządzeń (Expo Push API). Cel: wysyłanie Ci na bieżąco powiadomień na telefon.

## 3. Czego absolutnie NIE zbieramy? (Zasada Privacy by Design)

Szanujemy Twoją prywatność, dlatego nasza aplikacja:

* **NIE** śledzi Twojej geolokalizacji (GPS).
* **NIE** pobiera Twojej listy kontaktów z telefonu.

## 4. Prywatność lokalna na Twoim urządzeniu

Funkcja łączenia kont w "Gospodarstwa domowe" umożliwia nadawanie własnych nazw (aliasów/nicków) członkom rodziny. Informujemy, że te poufne ustawienia są zapisywane wyłącznie lokalnie w pamięci Twojego urządzenia (technologia AsyncStorage) i nigdy nie są wysyłane do naszej głównej bazy danych.

## 5. Komu udostępniamy Twoje dane? (Odbiorcy Danych i Transfer poza EOG)

Z uwagi na to, że korzystamy z najnowocześniejszych technologii chmurowych i sztucznej inteligencji, Twoje dane mogą być przetwarzane przez naszych zaufanych partnerów (tzw. podmioty przetwarzające). Ponieważ część z nich ma siedzibę w USA, opieramy się na standardowych klauzulach umownych zabezpieczających transfer danych:

* **Supabase (na serwerach AWS):** Nasza główna chmura i baza danych (PostgreSQL), gdzie bezpiecznie przechowujemy Twój adres e-mail, wygenerowane przepisy oraz listy zakupów.
* **OpenRouter API (Brama AI):** Zewnętrzna usługa, do której przesyłane są zapytania (w tym listy składników i zdjęcia z aplikacji) w celu wygenerowania przepisów i obrazów. Dane te są przetwarzane przez modele Google (Gemini) oraz Black Forest Labs (Flux).
* **Expo:** Dostawca infrastruktury do wysyłki powiadomień Push na Twój telefon.

## 6. Twoje prawa (Zgodnie z RODO)

Masz pełną kontrolę nad swoimi danymi. Przysługuje Ci prawo do:

* Dostępu do swoich danych,
* Sprostowania nieprawidłowych danych,
* Usunięcia konta i wszystkich danych z nim powiązanych (tzw. prawo do bycia zapomnianym) – możesz to zrobić samodzielnie z poziomu ustawień Aplikacji,
* Ograniczenia przetwarzania oraz przenoszenia danych,
* Cofnięcia zgody (np. na powiadomienia Push) w dowolnym momencie w ustawieniach systemu Android.

W celu realizacji swoich praw, skontaktuj się z nami pod adresem: **<forfourone@gmail.com>**.

## 7. Bezpieczeństwo Danych

Stosujemy nowoczesne mechanizmy szyfrowania i zabezpieczone środowiska serwerowe (Edge Functions) do autoryzacji komunikacji z API i ochrony Twoich informacji.
