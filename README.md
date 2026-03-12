# ⏰ React Clock & Stopwatch

A simple **React application** that displays a **live digital clock** along with a **stopwatch**.
The clock updates every second and the stopwatch allows you to **start, stop, and reset time**.

---

## 🚀 Features

* 🕒 **Live Digital Clock**
* ⏱ **Stopwatch Timer**
* ▶️ Start the stopwatch
* ⏸ Stop the stopwatch
* 🔄 Reset the stopwatch
* ⚛ Built using **React Hooks (useState & useEffect)**

---

## 🛠 Technologies Used

* ⚛ **React.js**
* 🧠 **React Hooks**

  * `useState`
  * `useEffect`
* 🎨 CSS

---

## 📂 Project Structure

```
project-folder
│
├── src
│   ├── App.css
│   ├── Clock.jsx
│   └── main.jsx
│
└── README.md
```

---

## ⚙️ How It Works

### 🕒 Clock Logic

* A state variable `date` stores the current time.
* `setInterval` updates the time every **1 second**.
* The component displays the current system time in the UI.

### ⏱ Stopwatch Logic

State variables used:

| State   | Purpose                               |
| ------- | ------------------------------------- |
| `timer` | Stores stopwatch time in seconds      |
| `on`    | Controls whether stopwatch is running |

When the **Start** button is clicked:

* `on` becomes `true`
* The timer increases every second.

When **Stop** is clicked:

* The timer stops.

When **Reset** is clicked:

* The timer resets back to `0`.

---

## 📸 Preview

💡 Displays:

* Current **system time**
* Stopwatch timer that counts seconds

---

## ▶️ Running the Project

1. Clone the repository

```
git clone https://github.com/yourusername/react-clock-stopwatch.git
```

2. Navigate to the project folder

```
cd react-clock-stopwatch
```

3. Install dependencies

```
npm install
```

4. Run the project

```
npm run dev
```

---

## 📌 Future Improvements

* ⏱ Add **minutes and milliseconds**
* 🎨 Improve UI styling
* 📱 Make it **fully responsive**
* 🔊 Add sound when stopwatch starts/stops

---

## 👨‍💻 Author

**Swayam Sharma**


---

