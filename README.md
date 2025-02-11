# PROSTY SKLEP W IONIC ANGULAR

## Krótki opis

Założenia:
  * Skorzystałem z gotowego API.
  * Nie skupiałem się jakoś szczególnie na designie.

Główne funkcjonalności:
  * Wyświetlanie listy produktów pobranych z API.
  * Dynamiczne zarządzanie ilością produktów w koszyku.
  * Dodawanie produktów do koszyka i przeglądanie jego zawartości.
  * Składanie zamówienia z potwierdzeniem w estetycznym popupie.

Zastosowane dobre praktyki:
  * Wykorzystanie environment: Link do API jest przechowywany w pliku środowiskowym environment, co ułatwia zarządzanie konfiguracją aplikacji w różnych środowiskach (np. deweloperskim i produkcyjnym).
  * Modularna struktura projektu:
  * Serwisy (ProductsService): Odpowiadają za logikę biznesową i komunikację z API, co wspiera zasadę separacji odpowiedzialności.
  * Modele (Product): Zdefiniowane interfejsy zapewniają spójność struktury danych w całej aplikacji.
  * Komponenty: Podzielone na logiczne części (ProductsComponent, CartComponent), co ułatwia zarządzanie kodem i jego rozbudowę.
  * Uproszczenie importów: Zastosowano pliki index.ts, które grupują eksporty z różnych modułów, co upraszcza importy w całej aplikacji i poprawia czytelność kodu.

## Link do filmu
Link do filmu z działaniem: [https://drive.google.com/drive/u/1/folders/1a1o1acXeD1rFd0i8siAT47RVvh1t-NA9](https://drive.google.com/file/d/1Fjpmh0ggCoTWKRKV2q8sApPrSt0lSwpR/view?usp=sharing)

## Screeny z aplikacji
![image](https://github.com/user-attachments/assets/cf4b1195-3a35-4523-9e29-3cc8330272a5)

![image](https://github.com/user-attachments/assets/7da0b1d6-98fe-4132-a9ea-c370cf6eb761)

![image](https://github.com/user-attachments/assets/1ecfb4d2-f1f9-431d-a146-eae29426adb1)

![image](https://github.com/user-attachments/assets/74673080-df7f-45c3-98c5-f6c5f844a519)



