# Установка SF Pro Display

## Где скачать SF Pro Display

SF Pro Display - это проприетарный шрифт Apple. Вот несколько способов его получить:

### Способ 1: Из macOS системы (если у вас Mac)

1. Откройте Finder
2. Перейдите в `/System/Library/Fonts/Supplemental/`
3. Найдите файлы `SFProDisplay-*.otf`
4. Скопируйте следующие файлы:
   - SFProDisplay-Regular.otf
   - SFProDisplay-Medium.otf
   - SFProDisplay-Semibold.otf
   - SFProDisplay-Bold.otf

### Способ 2: С Apple Developer сайта

1. Зайдите на https://developer.apple.com/fonts/
2. Скачайте SF Pro Font Family
3. Распакуйте архив
4. Найдите папку с SF Pro Display

### Способ 3: Конвертация из .otf в .woff2

После получения файлов .otf, конвертируйте их в .woff2:

```bash
npm install -g ttf2woff2
```

Затем в папке с .otf файлами:
```bash
for file in *.otf; do
  ttf2woff2 "$file" "${file%.otf}.woff2"
done
```

Или используйте онлайн конвертер: https://cloudconvert.com/otf-to-woff2

## Установка в проект

1. Поместите файлы шрифтов в папку `app/fonts/`:
   - `SFProDisplay-Regular.woff2`
   - `SFProDisplay-Medium.woff2`
   - `SFProDisplay-Semibold.woff2`
   - `SFProDisplay-Bold.woff2`

2. Если у вас есть только .otf файлы, поместите их в папку и обновите `fonts.ts`:

```typescript
src: [
  {
    path: './fonts/SFProDisplay-Regular.otf',
    weight: '400',
    style: 'normal',
  },
  // ... и т.д.
]
```

3. Перезапустите dev сервер:
```bash
docker-compose restart frontend
```

## Проверка

После установки шрифт должен автоматически применяться ко всему приложению. Проверьте в браузере через DevTools (Elements -> Computed -> font-family), что используется SF Pro Display.

