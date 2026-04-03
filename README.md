# ✈️ Flug

Flug is a modern flight search web application built using React. It provides a clean and intuitive interface to explore flights, airports, airlines, cities, and more — all in one place.

---

## 🚀 Features

- 🔍 Search flights, airports, airlines, cities, and countries
- 🧭 Nested routing with dynamic UI navigation
- ⚡ Fast and responsive interface
- 🎨 Clean and modern UI design
- 📦 Uses mock JSON data (API-ready architecture)
- 🌐 Deployed on GitHub Pages

---

## 🧱 Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router (HashRouter)
- **Data Handling:** Fetch API (JSON-based)
- **Deployment:** GitHub Pages

---

## 📁 Project Structure

```

Flug/
│
├── public/
│   ├── Dummy/                 # Mock JSON data
│   └── images/                # Static assets
│
├── src/
│   ├── Components/
│   │   ├── Home/
│   │   ├── Flights/
│   │   ├── Search/
│   │   ├── Airports/
│   │   ├── Airlines/
│   │   ├── Airplanes/
│   │   ├── AircraftType/
│   │   ├── Cities/
│   │   ├── Countries/
│   │   └── NotFound/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── vite.config.js
└── package.json

````

---

## 🔗 Routes Overview

| Route | Description |
|------|------------|
| `/` | Home page |
| `/flights` | Flights listing |
| `/search` | Search dashboard |
| `/search/flights` | Search flights |
| `/search/airports` | Search airports |
| `/search/airlines` | Search airlines |
| `/search/airplanes` | Search airplanes |
| `/search/aircraft/type` | Aircraft types |
| `/search/cities` | Search cities |
| `/search/countries` | Search countries |

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/lucky-KRMU/Flug.git

# Navigate into project
cd Flug

# Install dependencies
npm install

# Start development server
npm run dev
````

---

## 🌍 Deployment (GitHub Pages)

This project is deployed using GitHub Pages.

### Steps:

1. Install gh-pages:

```bash
npm install gh-pages --save-dev
```

2. Add to `package.json`:

```json
"homepage": "https://lucky-KRMU.github.io/Flug",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Set base in `vite.config.js`:

```js
base: "/Flug/"
```

4. Deploy:

```bash
npm run deploy
```

---

## 📡 Data Handling

Currently, the app uses mock JSON files stored in the `public` directory.

Example:

```js
fetch("/Flug/Dummy/dummy_aircraft_type_json.json")
```

The architecture is designed to easily switch to real APIs in the future.

---

## 🔐 Environment Variables (Future API Integration)

Create a `.env` file:

```env
VITE_API_KEY=your_api_key_here
```

Access in code:

```js
const apiKey = import.meta.env.VITE_API_KEY;
```

---

## ⚠️ Important Notes

* Uses **HashRouter** for compatibility with GitHub Pages
* JSON files must be inside `/public`
* Paths must include base (`/Flug/`) in production
* API keys in frontend are not secure (use backend in future)

---

## 🧠 Future Improvements

* 🔗 Integrate real flight APIs
* 🔎 Advanced filtering and sorting
* 📊 Pagination & performance optimization
* 🧠 Smart suggestions (AI-based)
* 📱 Mobile-first improvements

---

## 👨‍💻 Author

**Lucky Pawar**

* GitHub: [https://github.com/lucky-KRMU](https://github.com/lucky-KRMU)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 💡 Inspiration

Built as a learning + portfolio project to explore:

* modern frontend architecture
* routing systems
* API integration patterns
* UI/UX design principles

---

### ✈️ Flug — Search smarter. Travel better.

---

