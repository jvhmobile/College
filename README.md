# College Coach Outreach Portal

React + Vite portal generated from **State - NCSA Top Golf Programs.xlsx**. It contains 58 schools.

## Local setup

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Copy these files into the repository that publishes your GitHub Pages site.
2. Commit and push to the `main` branch.
3. In GitHub, open **Settings > Pages** and set **Source** to **GitHub Actions**.
4. The included workflow builds and deploys the app.

## Data and edits

- Source school data: `src/data/schools.json`
- Outreach changes made in the app are saved only in the current browser using `localStorage`.
- Use **Export CSV** to back up the working list.
- Because GitHub Pages is static, browser edits do not sync to other devices.

## Replace/update spreadsheet data

Update `src/data/schools.json` using the same object structure. The UI will automatically recalculate dashboard totals and filters.
