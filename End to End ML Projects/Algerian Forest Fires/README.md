# 🔥 Algerian Forest Fire Prediction

## Predict Fire Weather Index (FWI) using Machine Learning

[![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-2.3.3-green.svg)](https://flask.palletsprojects.com/)
[![Scikit-learn](https://img.shields.io/badge/Scikit--learn-1.5.0-orange.svg)](https://scikit-learn.org/)
[![Render](https://img.shields.io/badge/Render-Deployed-brightgreen.svg)](https://render.com)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📌 Overview

Wildfires are becoming more frequent and severe due to changing climate conditions. This project uses **Machine Learning** to predict the **Fire Weather Index (FWI)** based on meteorological parameters. The model helps assess fire risk levels, enabling proactive measures to prevent and manage wildfires.

The application is built with **Flask** and deployed as a web application with a clean, modern interface.

---

## 🧠 How It Works

1. **Input** weather and fire-related parameters
2. **Preprocessing** using StandardScaler for feature standardization
3. **Prediction** using a trained Ridge Regression model
4. **Output** Fire Weather Index (FWI) with risk level assessment

---

## 🚀 Live Demo

Access the live application here:  
**[Algerian Forest Fire Predictor](https://algerian-forest-fire-predictor.onrender.com)**

> **Note:** The application is hosted on Render's free tier. The first request may take up to 50 seconds to load due to instance spin-up.

---

## 📊 Dataset

The dataset contains **244 instances** from two regions of Algeria:

- **Bejaia Region** (Northeast Algeria) — 122 instances
- **Sidi Bel-Abbes Region** (Northwest Algeria) — 122 instances

**Time Period:** June 2012 – September 2012

### Features:

| Feature | Description | Range |
|---------|-------------|-------|
| **Temperature** | Temperature at noon (max) | 22 – 42 °C |
| **RH** | Relative Humidity | 21 – 90 % |
| **Ws** | Wind Speed | 6 – 29 km/h |
| **Rain** | Total rainfall | 0 – 16.8 mm |
| **FFMC** | Fine Fuel Moisture Code | 28.6 – 92.5 |
| **DMC** | Duff Moisture Code | 1.1 – 65.9 |
| **DC** | Drought Code | 7 – 220.4 |
| **ISI** | Initial Spread Index | 0 – 18.5 |
| **BUI** | Buildup Index | 1.1 – 68 |
| **FWI** | Fire Weather Index (Target) | 0 – 31.1 |
| **Classes** | Fire / Not Fire | Categorical |
| **Region** | Bejaia / Sidi-Bel Abbes | Binary |

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| **Backend** | Flask (Python) |
| **Machine Learning** | Scikit-learn (Ridge Regression) |
| **Preprocessing** | StandardScaler |
| **Frontend** | HTML, CSS, JavaScript |
| **Deployment** | Render |
| **Version Control** | Git & GitHub |

---

## 📈 Model Performance

| Metric | Score |
|--------|-------|
| **R² Score** | 0.9843 |
| **Mean Absolute Error** | 0.564 |

### Model Comparison

| Model | R² Score | MAE |
|-------|----------|-----|
| Linear Regression | 0.9848 | 0.547 |
| **Ridge Regression** | **0.9843** | **0.564** |
| RidgeCV | 0.9843 | 0.564 |
| Lasso | 0.9492 | 1.133 |
| LassoCV | 0.9814 | 0.636 |
| ElasticNet | 0.8753 | 1.882 |
| ElasticNetCV | 0.9814 | 0.658 |

---

## 🔍 Key Insights from EDA

- **August and September** experienced the highest number of forest fires
- Strong correlation between **FWI** and features like **FFMC**, **ISI**, and **DMC**
- Temperature and Humidity show significant negative correlation
- Region-based analysis reveals distinct fire patterns

---

## 🏗️ Project Structure

```
algerian-forest-fire-prediction/
│
├── application.py          # Flask application entry point
├── requirements.txt        # Python dependencies
│
├── ridge.pkl               # Trained Ridge Regression model
├── scaler.pkl              # StandardScaler for preprocessing
│
├── templates/
│   ├── home.html           # Landing page
│   └── predict.html        # Prediction form & results
│
├── notebooks/
│   ├── cleaning_dataset_2.ipynb   # Data cleaning & EDA
│   └── model_training_2.ipynb     # Model training & evaluation
│
└── README.md               # Project documentation
```

---

## 🚦 How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/algerian-forest-fire-prediction.git
cd algerian-forest-fire-prediction
```

### 2️⃣ Create a Virtual Environment

```bash
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
```

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Run the Application

```bash
python application.py
```

### 5️⃣ Open in Browser

```
http://127.0.0.1:5000
```

---

## 📸 Screenshots

### Home Page
```
Coming soon...
```

### Prediction Form
```
Coming soon...
```

### Results
```
Coming soon...
```

---

## 🧪 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Home page |
| `/predictdata` | GET | Prediction form |
| `/predictdata` | POST | Submit data & get FWI prediction |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/algerian-forest-fire-prediction/issues).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Dataset: Algerian Forest Fires Dataset (UCI Machine Learning Repository)
- Inspired by real-world wildfire prevention efforts

---

## 👨‍💻 Developer

<div align="center">

### Girish Kumar

**Machine Learning & Data Science Enthusiast**

[![GitHub](https://img.shields.io/badge/GitHub-girish--kumar07-181717?style=for-the-badge&logo=github)](https://github.com/girish-kumar07)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Girish%20Kumar-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/girishkumaragrawal/)

</div>

---

<div align="center">
  <sub>Built with ❤️ for wildfire awareness</sub>
</div>