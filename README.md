# Jak opublikować stronę prawną

Te pliki są przygotowane do publikacji na GitHub Pages pod obecne adresy używane przez aplikację:

- `https://forfourone-star.github.io/zero-waste-regulamin/regulamin.html`
- `https://forfourone-star.github.io/zero-waste-regulamin/polityka.html`
- `https://forfourone-star.github.io/zero-waste-regulamin/delete`

## Co skopiować do repo strony

Do repozytorium GitHub Pages przenieś zawartość folderu `docs/legal-site/`, a nie sam folder jako dodatkowy podkatalog.

Na końcu w repo strony powinny być:

- `regulamin.html`
- `polityka.html`
- `styles.css`
- `legal.js`
- folder `delete/`
- w folderze `delete/` plik `index.html`

## Bardzo ważne

Jeśli wrzucisz cały folder `docs/legal-site/` jako podfolder, adresy w aplikacji nie będą się zgadzać.

Poprawna struktura repo strony:

```text
/
  regulamin.html
  polityka.html
  styles.css
  legal.js
  /delete
    index.html
```

## Szybki test po publikacji

Po wdrożeniu otwórz ręcznie:

- `https://forfourone-star.github.io/zero-waste-regulamin/regulamin.html#en`
- `https://forfourone-star.github.io/zero-waste-regulamin/polityka.html#fr`
- `https://forfourone-star.github.io/zero-waste-regulamin/delete#de`

Jeśli każda strona przewija Cię do właściwego języka, struktura jest poprawna.
