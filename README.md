# Project description

This is a simple project that uses pure React as a base for weather research and rendering in a SPA. It includes some features such as:

- Change the system theme
- Search the weather by location
- Display weather data

# Tools

For this project I am using some tools for the project, below is the list of tools:

- TypeScript
- React
- Vite
- WeatherAPI
- Axios

# How to run the project

## Prerequisites

For this project, you need to have `Node` and `NPM` installed on your machine to run the program.

Another important requirement for using the system is having a Weatherapi access key, which can be obtained through this link [Weatherapi Docs](https://www.weatherapi.com/docs/). With this access key, you must add the following structure to an `.env` environment variable file. Without this file, the system will not work as expected.

```.env
  VITE_KEY=<your-key>
```

## Installing dependencies

Go to the project page and run the command below to download all the dependencies required for the code to work correctly.

```shell
  npm install
```

## Running the project

To run the project, you need to execute the command below for the system to run. Once the system is running, you can access it through the URL `http://localhost:5173/`.

```shell
  npm run dev
```

## Route Structure

This project uses React Router v6 to manage navigation between pages. Routes are organized in a nested fashion, with a shared layout (AppLayout) that displays common elements (title, navigation bar, and theme control) across all pages.

### Route Definition

In the App.tsx file we have the following route hierarchy:

```tsx
<BrowserRouter>
  <Routes>
    <Route element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="forecast/:cityName" element={<WeatherDetails />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
</BrowserRouter>
```

- **Parent Route**: AppLayout

  - Defines the main layout of the application:
    - Header with title (Weather Panel).
    - NavLink for Home and About.
    - ThemeSwitcher component to toggle between light and dark modes.
  - Contains an <Outlet /> that renders the content of the corresponding child route.

- **Route / (Home)**

  - Component: Home
  - Displays the search bar for entering the city name.
  - When searching, redirects the user to /forecast/:cityName.

- **Route /forecast/:cityName (Forecast Details)**

  - Component: WeatherDetails
  - Dynamic route, receives the cityName parameter via the URL.
  - Displays detailed weather information for the searched city.

- **/about Route**

  - Component: About
  - Static page with information about the application.

- **Route \* (Fallback)**
  - Any non-existent route redirects the user back to /.
