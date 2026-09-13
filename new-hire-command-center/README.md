# React + Vite

## Dummy Tracker Data

The app currently uses [dummy-new-hire-tracker.csv](public/dummy-new-hire-tracker.csv) and the matching fixture in [onboardingData.js](src/data/onboardingData.js). `Riya` is demo data; it was not read from the private Google Sheet.

To populate the Google Sheet for this UI, use these columns:

| Column | Purpose |
| --- | --- |
| `name` | New hire name |
| `role` | Job title |
| `start_date` | Start date shown in the progress card |
| `cohort` | Cohort shown in the page header |
| `check_in_label` | Hero eyebrow, such as `Day 3 check-in` |
| `check_in_message` | Hero headline |
| `check_in_summary` | Hero supporting copy |
| `total_essentials` | Progress denominator |
| `completed_essentials_before_visible_tasks` | Completed milestones represented outside the visible task rows |
| `task_title` | One onboarding task per row |
| `task_meta` | Task detail, ticket, or due date |
| `task_complete` | Boolean: `true` or `false` |
| `meeting_month` | Calendar month label |
| `meeting_day` | Calendar day label |
| `meeting_title` | Upcoming calendar event |
| `meeting_meta` | Event time and location |

The CSV uses one row per task and repeats the employee-level fields. A real connector should group rows by `name`, collect task rows, and collect meeting rows before returning the same shape as `dummyNewHire`.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
