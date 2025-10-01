# Micro Frontend React Microservices App

This project is a micro frontend architecture built with React.js, utilizing multiple independently deployable applications (microservices) that work together to form a complete system. Each app runs on its own port and is responsible for a specific domain of the overall application.

## Project Structure

- **host-app/** (Port: 3000): Main container app that integrates remote micro frontends and manages global state.
- **auth-app/** (Port: 3001): Handles authentication, user login, profile, and user management.
- **booking-app/** (Port: 3002): Manages booking-related features and components.
- **reporting-app/** (Port: 3003): Provides reporting and data visualization features.


## Features

- Micro frontend architecture using React.js
- Each app is independently developed, built, and deployed
- Webpack Module Federation for sharing components and data between apps
- Clear separation of concerns for scalability and maintainability
- **Reusable Components:**
  - Common UI components such as **Table**, **Button**,**Input** and **AddUserModal** are created as reusable React components.
  - These components are exposed via Module Federation, allowing other micro frontends to consume them without code duplication.
  - Example: The `table` component is used in both `auth-app` and `host-app` for consistent data display.
  - The `AddUserModal` component is exposed from `auth-app` for user management features.
  - The `button` component is exposed from `host-app/pages/button.tsx` for consistent UI actions.
- **Data Sharing:**
  - User and booking data are exposed from their respective micro frontends and consumed in the `reporting-app` for analytics and reporting.
  - This enables the `reporting-app` to visualize and report on data managed by other services, such as user statistics and booking trends.

## Getting Started



### Installation
1. Clone the repository:
   ```bash
   git clone micro_frontend
   cd micro_frontend
   ```
2. Install dependencies for each app:
   ```bash
   cd host-app && npm install
   cd ../auth-app && npm install
   cd ../booking-app && npm install
   cd ../reporting-app && npm install
   ```

### Running the Apps
Start each app in a separate terminal window/tab:

- **Host App:**
  ```bash
  cd host-app
  npm start
  # Runs on http://localhost:3000
  ```
- **Auth App:**
  ```bash
  cd auth-app
  npm start
  # Runs on http://localhost:3001
  ```
- **Booking App:**
  ```bash
  cd booking-app
  npm start
  # Runs on http://localhost:3002
  ```
- **Reporting App:**
  ```bash
  cd reporting-app
  npm start
  # Runs on http://localhost:3003
  ```


## Development
- Each app has its own `src/` directory for source code and `public/` for static assets.
- Use Webpack Module Federation to expose and consume components and data between apps.
- Update the respective `webpack.config.js` files to manage federation settings, including exposing and consuming components like `table`, `AddUserModal`, and `button`.
- When creating a new reusable component, ensure it is exported in the appropriate `index.tsx` or module file and configured in the Module Federation plugin.
- For data sharing (e.g., user and booking data), expose the relevant slices or API endpoints and import them in the `reporting-app` as needed.

## Tips
- Make sure all apps are running for the micro frontend integration to work properly.
- You can develop and test each app independently.
- For shared types or utilities, consider creating a shared package or use module federation.

## License
This project is licensed under the MIT License.

---

**Ports:**
- Host App: http://localhost:3000
- Auth App: http://localhost:3001
- Booking App: http://localhost:3002
- Reporting App: http://localhost:3003

---

For any issues or contributions, please open an issue or submit a pull request.