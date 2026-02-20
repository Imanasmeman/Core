# CORE Dashboard UI

Frontend dashboard built with React and Vite.  
It includes a sidebar navigation shell and two primary pages:
- People (employee cards and filters)
- Timesheet (summary cards, sortable table, pagination)

This project is currently UI-focused and uses local mock data.

## Tech Stack

- React `19`
- Vite `7`
- React Router DOM `7`
- Lucide React (icon library)
- Plain CSS (component/page scoped files)
- ESLint `9`

## Requirements

- Node.js `18+` (recommended: latest LTS)
- npm `9+`

## Setup Instructions

1. Clone the repository:

```bash
git clone <your-repo-url>
cd core
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open the URL shown in terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev`  
  Starts Vite dev server with hot-reload.

- `npm run build`  
  Creates a production build in `dist/`.

- `npm run preview`  
  Serves the built app locally from `dist/`.

- `npm run lint`  
  Runs ESLint checks.

## Project Structure

```text
src/
  components/
    common/
      Pagination.jsx
      SearchBar.jsx
    employees/
      EmployeeCard.jsx
      EmployeeFilters.jsx
    layout/
      Sidebar.jsx
      Navbar.jsx
    timesheet/
      DateFilter.jsx
      SummaryCard.jsx
      TimesheetTable.jsx
  data/
    employeesData.js
  pages/
    Home.jsx
    Employees.jsx
    Timesheet.jsx
  App.jsx
  main.jsx
```

## Routing

Configured in `src/App.jsx`:

- `/` -> Home
- `/employees` -> People page
- `/timesheet` -> Timesheet page

Note: Sidebar includes links for additional paths (`/my-info`, `/project-setup`, etc.) that are not yet implemented in routes.

## Data Source

- Employee and timesheet data are currently hardcoded in:
  - `src/data/employeesData.js`
- No backend/API integration is configured yet.

## UI/Design Notes

- The app uses a fixed dashboard shell:
  - Left sidebar
  - Top navbar
  - Scrollable content area
- Employee cards include department-specific Lucide badge icons.
- Layout includes responsive behavior for desktop/tablet/mobile breakpoints.

## Assumptions Made

1. This repository is a frontend-only prototype for internal dashboard UI.
2. Mock/static data is acceptable for current scope.
3. Authentication and authorization are out of scope right now.
4. Timezone display (`MST`) in navbar is static UI text.
5. External avatar image links are allowed during development.
6. Tailwind directives exist in `src/index.css`, but no Tailwind config is currently present in repository; current styling relies on plain CSS files.
7. Routing intentionally contains only implemented pages; non-implemented sidebar links are placeholders.

## Build and Deployment

1. Build:

```bash
npm run build
```

2. Output folder:

- `dist/`

3. Deploy `dist/` to any static hosting provider:
- Vercel
- Netlify
- GitHub Pages
- S3 + CloudFront

If deployed under a subpath, update Vite base config in `vite.config.js`.

## Troubleshooting

- Dependency install issues:
  - Delete `node_modules` and `package-lock.json`
  - Run `npm install` again

- Port already in use:
  - Vite will suggest a new port automatically
  - Or run: `npm run dev -- --port 5174`

- Styles not updating:
  - Hard refresh browser
  - Restart dev server

## Future Improvements

- Add backend integration for employees/timesheet APIs
- Replace hardcoded timezone/time behavior
- Add route guards and auth flow
- Add unit/integration tests
- Introduce design tokens and theme strategy

## License

No license file is currently defined in this repository.  
Add a `LICENSE` file if this project will be distributed.
