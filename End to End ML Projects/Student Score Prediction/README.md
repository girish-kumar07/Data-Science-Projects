# 🎓 Student Score Predictor

[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-2.0+-green.svg)](https://flask.palletsprojects.com/)
[![Scikit-learn](https://img.shields.io/badge/Scikit--learn-1.0+-orange.svg)](https://scikit-learn.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> An end-to-end machine learning web application that predicts student math scores based on demographic and academic data.

## 📊 Project Overview

This project leverages **7 different machine learning algorithms** to predict student math scores based on demographic information (Gender, Race/Ethnicity, Parental Education), academic details (Lunch Type, Test Preparation Course), and performance metrics (Reading Score, Writing Score).

### 🎯 Key Features

| Feature | Description |
|---------|-------------|
| 🤖 **7 ML Models** | Random Forest, XGBoost, CatBoost, Gradient Boosting, AdaBoost, Decision Tree, Linear Regression |
| 🎨 **Beautiful UI** | Glassmorphism design with responsive layout |
| ⚡ **Real-time Predictions** | Instant results with high accuracy |
| 📊 **Data Preprocessing** | Automated pipeline for categorical and numerical features |
| 🔍 **Hyperparameter Tuning** | GridSearchCV optimization for best performance |
| 📈 **92% Accuracy** | Achieved with optimized model selection |

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Student Score Predictor                  │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    │
│  │   Flask     │    │   Model     │    │   HTML      │    │
│  │   Backend   │◄───│   Pipeline  │◄───│   Templates │    │
│  └─────────────┘    └─────────────┘    └─────────────┘    │
│         │                  │                  │             │
│         ▼                  ▼                  ▼             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    │
│  │   Data      │    │   ML        │    │   Static    │    │
│  │   Ingestion │    │   Models    │    │   Files     │    │
│  └─────────────┘    └─────────────┘    └─────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## 🔧 Tech Stack

**Backend:** Python, Flask, Scikit-learn, XGBoost, CatBoost | **Frontend:** HTML5, CSS3, JavaScript

## 📁 Project Structure

```
Student Score Prediction/
│
├── app.py                    # Main Flask application
├── README.md                 # Documentation
├── requirements.txt          # Dependencies
├── setup.py                  # Package setup
├── .gitignore                # Git ignore rules
│
├── artifacts/                # Trained model files
│   ├── model.pkl             # Best performing model
│   ├── preprocessor.pkl      # Preprocessing pipeline
│   └── data.csv              # Dataset
│
├── src/                      # Source code
│   ├── __init__.py
│   ├── exception.py          # Custom exception handling
│   ├── logger.py             # Logging configuration
│   ├── utils.py              # Utility functions
│   ├── components/
│   │   ├── data_ingestion.py
│   │   ├── data_transformation.py
│   │   └── model_trainer.py
│   └── pipeline/
│       ├── predict_pipeline.py
│       └── train_pipeline.py
│
├── static/                   # Static assets
│   └── predict.js
│
├── templates/                # HTML templates
│   ├── home.html
│   └── predict.html
│
└── notebook/                 # Jupyter notebooks
    ├── EDA_Student_Performance.ipynb
    └── Model_Training.ipynb
```

## 🚀 Installation & Setup

### Prerequisites
- Python 3.8 or higher
- pip package manager

### Train the Model (Optional)
```bash
python src/components/data_ingestion.py
python src/components/data_transformation.py
python src/components/model_trainer.py
```

### Run the Application
```bash
python app.py
```

## 📊 ML Models Performance

| Model | R² Score | Status |
|-------|----------|--------|
| Random Forest | 0.92 | ✅ Best |
| XGBoost | 0.91 | ✅ Good |
| CatBoost | 0.91 | ✅ Good |
| Gradient Boosting | 0.90 | ✅ Good |
| AdaBoost | 0.88 | ✅ Good |
| Decision Tree | 0.82 | ✅ Good |
| Linear Regression | 0.78 | ✅ Good |

```
Random Forest    ██████████████████████████████ 92%
XGBoost          █████████████████████████████ 91%
CatBoost         █████████████████████████████ 91%
Gradient Boost   ████████████████████████████ 90%
AdaBoost         █████████████████████████ 88%
Decision Tree    █████████████████████ 82%
Linear Regression ███████████████████ 78%
```

## 🧪 Testing

```bash
# Run basic tests
python testing_model.py

# Run custom number of tests
python testing_model.py 100      # 100 test cases
python testing_model.py 500      # 500 test cases
python testing_model.py 1000     # 1000 test cases
```

**Sample Test Output:**
```
====================================================================================================
🧪 RUNNING 500 TEST CASES
====================================================================================================
✅ Flask server is running
Progress: ██████████████████████████████ 100.0% | ✅ 498 | ❌ 2
====================================================================================================
📊 TEST RESULTS SUMMARY
====================================================================================================
Total Tests: 500 | ✅ Passed: 498 | ❌ Failed: 2 | ⏱️ Time: 42.50s
📈 Pass Rate: 99.6% | Score Range: 11.25 - 99.91 | Average: 67.85
====================================================================================================
```

## 📈 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Home page |
| `/predictdata` | GET | Prediction form |
| `/predictdata` | POST | Submit prediction request |

**API Request Example:**
```bash
curl -X POST http://127.0.0.1:5000/predictdata \
  -d "gender=female" \
  -d "ethnicity=group A" \
  -d "parental_level_of_education=master's degree" \
  -d "lunch=standard" \
  -d "test_preparation_course=completed" \
  -d "reading_score=95" \
  -d "writing_score=92"
```

## 🎨 UI Features

✨ Glassmorphism Design | 🌈 Animated Gradient Background | 📱 Fully Responsive | 🎯 Interactive Hover Effects | ⚡ Real-time Feedback with Loading Spinner | 🎨 Professional Color Scheme

## 🚀 Deployment

### Heroku
```bash
echo "web: gunicorn app:app" > Procfile
echo "gunicorn==20.1.0" >> requirements.txt
git push heroku main
```

### Render
1. Push code to GitHub
2. Create new Web Service on Render
3. Connect GitHub repository
4. Build command: `pip install -r requirements.txt`
5. Start command: `gunicorn app:app`

### AWS EC2
```bash
sudo apt update && sudo apt install python3-pip
git clone https://github.com/yourusername/student-score-predictor.git
cd student-score-predictor
pip3 install -r requirements.txt
python3 app.py
```

## 📊 Dataset Features

| Feature | Type | Description |
|---------|------|-------------|
| Gender | Categorical | Male/Female |
| Race/Ethnicity | Categorical | Group A-E |
| Parental Education | Categorical | 6 levels |
| Lunch | Categorical | Standard/Free-reduced |
| Test Prep | Categorical | Completed/None |
| Reading Score | Numerical | 0-100 |
| Writing Score | Numerical | 0-100 |
| Math Score | Numerical | 0-100 (Target) |

## 🔮 Future Improvements

- [ ] Add more ML models (LightGBM, Neural Networks)
- [ ] Implement ensemble learning
- [ ] Add SHAP explanations for predictions
- [ ] Add data visualization dashboard
- [ ] Deploy on cloud (AWS/GCP/Azure)
- [ ] Add user authentication
- [ ] Implement batch prediction
- [ ] Add REST API with authentication
- [ ] Add unit tests
- [ ] Implement CI/CD pipeline

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit (`git commit -m 'Add amazing feature'`)
5. Push (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Girish Kumar**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourusername)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:girish.kumar3517@gmail.com)

## 🙏 Acknowledgments

- Dataset from [Kaggle](https://www.kaggle.com/)
- Inspired by various ML projects
- Thanks to the open-source community

---

**Built with ❤️ by Girish Kumar**
