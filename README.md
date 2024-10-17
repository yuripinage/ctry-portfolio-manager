# Venture Capital Portfolio Manager

This project is a study on **Next.js 14**, focusing on building a portfolio manager for companies in the venture capital sector. The initial implementation includes a form for adding companies to an internal database and a table displaying the current list of companies.

## Preview
<p align="center">
  <img src="https://github.com/user-attachments/assets/7ff63424-0600-4716-8404-2703126e2792" width="700px"/>
</p>

## Features

- **Data Display**: View a list of all companies currently in the database.
- **Company Management**: Add new companies to the portfolio with the following details:
  - **ID**: Unique identifier for the company
  - **Name**: The name of the company
  - **Founders**: Names of the company's founders
  - **Valuation**: Current valuation of the company
  - **Invested Amount**: Amount invested in the company
  - **Funding Round**: Current funding round (e.g., Seed, Series A, etc.)
  - **Status**: Current status of the company (e.g., Active, Acquired and Sold)
  - **Risk Evaluation**: Evaluation of risk from 1 to 5

## Technologies Used

- **[MUI](https://mui.com/)**: Utilized for theming and UI components.

- **[better-sqlite3](https://github.com/Wizcorp/better-sqlite3)**: Used for creating the API and managing the database.

- **[react-hook-form](https://react-hook-form.com/)**: Implemented for handling form inputs efficiently, making form management easier and more performant.

- **[react-query](https://react-query.tanstack.com/)**: Employed for API calls.

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone git@github.com:yuripinage/ctry-portfolio-manager.git
cd ctry-portfolio-manager
npm install
npm run dev
```
