# Конфигурация frontend приложений

<!-- ## React
Стек:
- Typescript
- React
- Redux Toolkit

## Команда для старта приложения с Redux Toolkit
```shell
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

## Eslint
Данный конфиг поддерживается версиями eslint ниже 9.х

## Prettier
В поле plugins указан плагин prettier-plugin-organize-imports. Для корректной работы необходимо установить данный плагин в проект:
```shell
npm i -D prettier-plugin-organize-imports
``` -->

## Стек технологий

### Основные
- **[React](https://react.dev/)** - библиотека для построения пользовательских интерфейсов
- **[TypeScript](https://www.typescriptlang.org/)** - типизированный JavaScript
- **[Zustand](https://zustand-demo.pmnd.rs/)** - state management
- **[React Query](https://tanstack.com/query/latest)** - асинхронное управление состоянием и кэширование данных
- **[Vite](https://vitejs.dev/)** - инструмент сборки и dev-сервер
- **[React Router](https://reactrouter.com/)** - маршрутизация

### UI и стили
- **[Mantine](https://mantine.dev/)** - библиотека UI-компонентов
- **[SCSS/Sass](https://sass-lang.com/)** - препроцессор стилей
- **[CSS Modules](https://github.com/css-modules/css-modules)** - модульные стили
- **[Clsx](https://github.com/lukeed/clsx)** - условная композиция классов
- **[Lucide React](https://lucide.dev/)** - иконки

### Дополнительные библиотеки
- **[Socket.io Client](https://socket.io/docs/v4/client-api/)** - WebSocket соединения
- **[Day.js](https://day.js.org/)** - работа с датами
- **[Chart.js](https://www.chartjs.org/)** & **[React-Chartjs-2](https://react-chartjs-2.js.org/)** - графики и диаграммы
- **[React Hook Form](https://react-hook-form.com/)** - управление формами с высокой производительностью
- **[Zod](https://zod.dev/)** - валидация схем для сложных форм и данных


### Инструменты разработки
- **[ESLint](https://eslint.org/)** - линтер JavaScript/TypeScript (версия < 9.x)
- **[Prettier](https://prettier.io/)** - форматирование кода
- **[Stylelint](https://stylelint.io/)** - линтер для стилей (CSS/SCSS)
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[lint-staged](https://github.com/lint-staged/lint-staged)** - проверка staged файлов

### Тестирование
- **[Vitest](https://vitest.dev/)** - unit-тесты
- **[Playwright](https://playwright.dev/)** - E2E тесты
- **[Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** - тестирование React компонентов

## Рекомендации по тестированию

### Философия: тестируйте только то, что экономит время

**Не нужно тестировать все.** Пишите тесты только для функционала, где:
- Ручное тестирование занимает много времени
- Часто возникают баги и регрессии
- Высокая цена ошибки (финансы, безопасность, критические процессы)

### Когда стоит писать тесты

**✅ Автотесты оправданы:**
- Работа с деньгами и финансовыми операциями
- Критические бизнес-процессы (регистрация, оформление заказов, изменение статусов)
- Важная система уведомлений (особенно в реальном времени через WebSocket)
- Функционал, который часто ломается при изменениях

**❌ Тесты не нужны:**
- Простые UI-компоненты (кнопки, карточки)
- Статические страницы
- Тривиальные функции (геттеры, простые мапперы)
- Визуальный дизайн и стили
- Функционал, который легко проверить вручную за 5 секунд

### Типы тестов

#### Unit-тесты (Vitest + Testing Library)
Тестируйте изолированно:
- Функции с бизнес-логикой
- Валидаторы и парсеры
- Хуки с логикой
- Утилиты и хелперы

**Пример:**
```typescript
describe('calculateDiscount', () => {
  it('применяет скидку 10% для суммы > 1000', () => {
    expect(calculateDiscount(1500, 'PROMO10')).toBe(1350);
  });
  
  it('не применяет скидку для невалидного промокода', () => {
    expect(calculateDiscount(1500, 'INVALID')).toBe(1500);
  });
});
```

#### E2E тесты (Playwright)
Тестируйте только критические сценарии:
- **Happy Path** критических процессов (оформление заказа, регистрация, оплата)
- **Права доступа** для разных ролей (если это важно для бизнеса)
- Сложные многошаговые процессы, которые долго проверять вручную

**Не тестируйте E2E:**
- Каждую кнопку и поле формы
- Все возможные комбинации состояний
- Простые CRUD операции (если они не критичны)

### Практический подход к тестированию

**Вопросы, которые стоит задать:**
1. Сколько времени занимает ручная проверка? (> 1 минуты → пишем тест)
2. Как часто этот функционал ломается? (часто → пишем тест)
3. Какова цена ошибки? (высокая → пишем тест)

**Если один из ответов "Да" → тест скорее всего нужен.**

### Запуск тестов

```shell
# Unit-тесты
npm run test              # Запуск всех unit-тестов
npm run test -- --watch   # Watch режим для разработки

# E2E тесты
npm run test:e2e          # Запуск всех E2E тестов
npm run test:e2e:ci       # Запуск в CI режиме
npx playwright test --ui  # UI режим для отладки
```

## Начало работы

### Установка зависимостей
```shell
npm install
```

### Скрипты package.json

Добавьте следующие скрипты в ваш `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview --no-open",
    "test": "vitest run",
    "test:e2e": "playwright test",
    "test:e2e:ci": "VITE_CI=true npx playwright test",
    "format": "prettier --write .",
    "lint": "eslint .",
    "lint:fix": "eslint --fix .",
    "stylelint": "stylelint \"**/*.scss\"",
    "stylelint:fix": "stylelint \"**/*.scss\" --fix",
    "type-check": "tsc --noEmit",
    "prepare": "husky"
  },
  "lint-staged": {
    "src/**/*.ts?(x)": [
      "eslint --cache --fix",
      "prettier --write"
    ],
    "src/**/*.?(s)css": [
      "prettier --write",
      "stylelint \"**/*.scss\" --fix"
    ]
  }
}
```

### Команды для разработки

#### Разработка
```shell
npm run dev  # Запуск dev-сервера (Vite)
```

#### Сборка
```shell
npm run build     # TypeScript компиляция + production сборка
npm run preview   # Предпросмотр production сборки
```

#### Тестирование
```shell
npm run test:e2e       # Запуск E2E тестов (Playwright)
npm run test:e2e:ci    # Запуск E2E тестов в CI режиме
```

#### Линтинг и форматирование
```shell
npm run lint           # Проверка ESLint
npm run lint:fix       # Автоисправление ESLint
npm run stylelint      # Проверка стилей
npm run stylelint:fix  # Автоисправление стилей
npm run format         # Форматирование всех файлов (Prettier)
npm run type-check     # Проверка типов TypeScript
```

## Code Style

### ESLint
Используется конфигурация `eslint-config-react-app` с дополнительными правилами Prettier.
**Важно**: проект использует ESLint версии < 9.x.

### Prettier
Основные настройки:
- **printWidth**: 160 символов
- **tabWidth**: 4 пробела
- **semi**: обязательные точки с запятой
- **singleQuote**: двойные кавычки
- **trailingComma**: без trailing comma
- **endOfLine**: LF
- **plugins**: автоматическая организация импортов

Плагин `prettier-plugin-organize-imports` автоматически сортирует и группирует импорты.

### Stylelint
Используются конфигурации:
- `stylelint-config-standard-scss` - стандарт для SCSS
- `stylelint-config-clean-order` - упорядочивание CSS свойств

### TypeScript
- **Strict mode** включен
- **Path aliases**: `@/*` → `./src/*`
- **CSS Modules**: типизация через `typescript-plugin-css-modules`

## Git Workflow

### Pre-commit hooks
Проект использует **Husky** + **lint-staged** для автоматической проверки перед коммитом:

**TypeScript/TSX файлы**:
1. ESLint проверка и автоисправление
2. Prettier форматирование

**CSS/SCSS файлы**:
1. Prettier форматирование
2. Stylelint проверка и автоисправление

## Архитектура проекта

### Выбор архитектуры

Выбор архитектуры зависит от размера и сложности проекта:

#### FSD (Feature-Sliced Design) - для больших проектов
**[FSD](https://feature-sliced.design/)** подходит для очень больших и сложных приложений с множеством функций, где критически важна масштабируемость и строгое разделение ответственности.

**Структура FSD:**
- **`app/`** - провайдеры приложения (роутинг, query client, тема, авторизация)
- **`entities/`** - доменные сущности (user, partner, account): API, схемы, query/mutation хуки, UI-атомы
- **`features/`** - прикладные возможности (формы, фильтры, пагинация, logout, сортировка)
- **`pages/`** - страницы приложения (композиция виджетов и фич)
- **`shared/`** - переиспользуемые утилиты, конфиги, UI-компоненты
- **`widgets/`** - составные виджеты (navbar, таблицы с действиями)

**Когда использовать FSD:**
- Большие корпоративные приложения
- Имеется команда разработчиков
- Множество сложных бизнес-процессов с переиспользуемыми сущностями
- Необходима строгая изоляция слоев и контроль зависимостей
- Долгосрочный проект с постоянным развитием (годы поддержки)
- Важна возможность параллельной разработки независимых фич без конфликтов

**Примечание:** В некоторых случаях допустимо нарушать правила FSD (например, позволить `entities` импортировать друг друга), если сущности тесно связаны.

Подробнее: [Feature-Sliced Design Documentation](https://feature-sliced.design/)

#### Модульная архитектура - для маленьких/средних проектов
**[Модульная архитектура](https://www.hackfrontend.com/docs/architecture/module)** - более простая и гибкая альтернатива FSD. Подходит для большинства проектов, от простых до средней сложности.

**Ключевые принципы:**
- **Независимость модулей** - изменения в одном модуле не ломают другие
- **Инкапсуляция** - всё относящееся к модулю хранится внутри одной папки
- **Public API** - взаимодействие с модулем только через открытый интерфейс
- **Зависимость от ядра** - модули используют общие сервисы из `core`, не зависят друг от друга напрямую
- **Однонаправленный поток** - данные идут сверху вниз: `pages` → `modules` → `components` → `ui`

**Структура для средних проектов:**
```
src/
  ├── pages/          # Страницы приложения
  ├── modules/        # Бизнес-модули (независимые блоки функционала)
  ├── components/     # Общие компоненты
  ├── core/           # Ядро (API, роутинг, глобальные сервисы)
  ├── ui/             # UI-kit (базовые UI-компоненты)
  ├── hooks/          # Общие хуки
  └── utils/          # Утилиты
```

**Упрощенная структура для маленьких проектов:**
```
src/
  ├── components/     # Все компоненты
  ├── pages/          # Страницы
  ├── hooks/          # Хуки
  ├── services/       # API
  ├── utils/          # Утилиты
  └── store/          # Store (Zustand/Context)
```

**Когда использовать модульную архитектуру:**
- Маленькие и средние проекты
- Нужна структура, но FSD избыточен
- MVP, прототипы, простые CRUD приложения
- Четкие функциональные блоки без сложной слоистости

**Плюсы:**
- Проще и гибче FSD
- Легко адаптировать под размер проекта
- Ясные границы ответственности
- Легко добавлять/удалять модули

**Минусы:**
- Не всегда очевидно, когда выносить код в отдельный модуль
- Возможно дублирование кода между модулями
- Глобальное состояние может создавать неявные связи

Подробнее: [Модульная архитектура на HackFrontend](https://www.hackfrontend.com/docs/architecture/module)

### Алиасы путей
- `@/` - алиас для директории `src/`

Пример использования:
```typescript
import { Component } from "@/components/Component";
import { helper } from "@/shared/helpers/helper";
```

## Переменные окружения

Создайте файл `.env` в корне проекта. Vite автоматически загружает переменные с префиксом `VITE_`:

```env
VITE_API_URL=http://localhost:3000
```

Доступ в коде:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Полезные ссылки

### Документация основных технологий
- [React](https://react.dev/) - официальная документация React
- [TypeScript](https://www.typescriptlang.org/) - документация TypeScript
- [Zustand](https://zustand-demo.pmnd.rs/) - документация Zustand
- [React Query (TanStack Query)](https://tanstack.com/query/latest) - документация React Query
- [Vite](https://vitejs.dev/) - документация Vite
- [React Router](https://reactrouter.com/) - документация React Router

### UI и стили
- [Mantine](https://mantine.dev/) - документация Mantine UI
- [Sass](https://sass-lang.com/) - документация Sass
- [Lucide Icons](https://lucide.dev/) - библиотека иконок

### Формы и валидация
- [React Hook Form](https://react-hook-form.com/) - документация React Hook Form
- [Zod](https://zod.dev/) - документация Zod

### Инструменты разработки
- [ESLint](https://eslint.org/) - линтер JavaScript/TypeScript
- [Prettier](https://prettier.io/) - форматирование кода
- [Stylelint](https://stylelint.io/) - линтер для стилей (CSS/SCSS)
- [Husky](https://typicode.github.io/husky/) - Git hooks
- [lint-staged](https://github.com/lint-staged/lint-staged) - проверка staged файлов

### Тестирование
- [Vitest](https://vitest.dev/) - документация Vitest
- [Playwright](https://playwright.dev/) - документация Playwright
- [Testing Library](https://testing-library.com/) - документация Testing Library

### Архитектура
- [Feature-Sliced Design](https://feature-sliced.design/) - документация FSD
- [Модульная архитектура](https://www.hackfrontend.com/docs/architecture/module) - документация модульной архитектуры