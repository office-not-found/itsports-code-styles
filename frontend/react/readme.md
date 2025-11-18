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
- **printWidth**: 90 символов
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

### Conventional Commits

Проекты следует стандарту [Conventional Commits](https://www.conventionalcommits.org/) для единообразия истории коммитов.

#### Формат коммита

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Обязательные части:**
- `type` - тип изменения
- `subject` - краткое описание (не более 90 символов)

**Опциональные части:**
- `scope` - область изменения (компонент, модуль, страница)
- `body` - детальное описание
- `footer` - breaking changes, ссылки на issues

#### Типы коммитов

- **`feat:`** - новая функциональность
  ```bash
  feat(auth): add login form with validation
  feat(partners): implement partner search filter
  ```

- **`fix:`** - исправление бага
  ```bash
  fix(header): resolve alignment issue on mobile
  fix(api): handle timeout errors correctly
  ```

- **`docs:`** - изменения в документации
  ```bash
  docs: update README with new architecture
  docs(api): add JSDoc comments to auth module
  ```

- **`style:`** - форматирование кода (не влияет на логику)
  ```bash
  style: format code with prettier
  style(button): adjust padding and margins
  ```

- **`refactor:`** - рефакторинг без изменения функциональности
  ```bash
  refactor(notifications): simplify state management
  refactor: extract common logic into utils
  ```

- **`test:`** - добавление или исправление тестов
  ```bash
  test(auth): add unit tests for login form
  test: fix failing E2E tests
  ```

- **`chore:`** - технические изменения (зависимости, конфиги, сборка)
  ```bash
  chore: update dependencies to latest versions
  chore(ci): add GitHub Actions workflow
  ```

#### Примеры использования scope

```bash
# Модуль/фича
feat(account-module): add password reset functionality
fix(partners-table): correct sorting logic

# Компонент
feat(Button): add loading state
fix(Modal): prevent closing on backdrop click

# Страница
feat(LoginPage): implement remember me checkbox
fix(Dashboard): resolve data fetching race condition

# Общие области
refactor(api): simplify error handling
chore(deps): update React to v19
```

#### Breaking Changes

Для изменений, нарушающих обратную совместимость, добавьте `!` после типа или `BREAKING CHANGE:` в footer:

```bash
feat!: change API response format

BREAKING CHANGE: The auth API now returns tokens in different format.
Migration guide: ...
```

Подробнее: [Conventional Commits Specification](https://www.conventionalcommits.org/)

### Naming веток

Используйте формат: `<type>/<task-number>-<description>`

**Примеры:**
```bash
feature/add-login-page
bugfix/fix-header-alignment
hotfix/critical-security-fix
refactor/simplify-api-client
```

**Типы веток:**
- `feature/` - новая функциональность
- `bugfix/` или `fix/` - исправление бага
- `hotfix/` - срочное исправление в production
- `refactor/` - рефакторинг кода
- `docs/` - изменения в документации
- `chore/` - технические задачи

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
- **Зависимость от ядра** - модули используют общие сервисы из `shared/` (ранее `core/`), не зависят друг от друга напрямую
- **Однонаправленный поток** - данные идут сверху вниз: `pages` → `modules` → `components` → `ui`

**Структура для средних проектов:**
```
src/
  ├── app/            # Точка входа приложения + провайдеры (Router, Query, Theme)
  ├── pages/          # Страницы приложения (роутинг, layout)
  ├── modules/        # Бизнес-модули (независимые блоки функционала)
  └── shared/         # Общая инфраструктура (ранее core/)
      ├── api/        # API клиент и конфигурация
      ├── config/     # Конфигурации (роуты, query, theme, notifications)
      ├── lib/        # Общие хуки и утилиты
      ├── model/      # Глобальные типы и модели данных
      └── ui/         # UI-kit (базовые переиспользуемые компоненты)
```

**Описание слоёв:**

- **`app/`** - инициализация приложения, провайдеры (QueryProvider, ThemeProvider, RouterProvider)
- **`pages/`** - страницы приложения, связанные с роутами (Layout, LoginPage, NotFoundPage)
- **`modules/`** - бизнес-модули с собственной структурой (api, lib, model, query, ui)
  ```
  modules/account-module/
    ├── api/       # API запросы модуля
    ├── lib/       # Хуки и утилиты модуля
    ├── model/     # Типы, валидация, store модуля
    ├── query/     # React Query хуки
    └── ui/        # UI-компоненты модуля
  ```
- **`core/`** (⚠️ **Переименовано в `shared/`**) - переиспользуемая инфраструктура:
  - `api/` - axios клиент с интерцепторами
  - `config/` - настройки роутинга, React Query, темы, уведомлений
  - `lib/` - общие хуки (`useSearchParamsObject`) и утилиты (`throwErrorToast`)
  - `model/` - глобальные TypeScript типы и интерфейсы
  - `ui/` - базовые UI-компоненты (Button, Modal, TextInput, Select)

> **Примечание:** Мы переименовали папку `core/` в `shared/` для более точного отражения её назначения. В существующих проектах может использоваться название `core/`, но рекомендуется мигрировать на `shared/` при возможности.

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
// Импорт UI-компонента из shared (ранее core)
import { Button, Modal } from "@/shared/ui";

// Импорт утилиты из shared/lib
import { throwErrorToast } from "@/shared/lib";

// Импорт компонента модуля
import { LoginForm } from "@/modules/account-module";

// Импорт страницы
import { Layout } from "@/pages/layout";
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