document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('predictForm');
    const resultSection = document.getElementById('resultSection');
    const predictedScore = document.getElementById('predictedScore');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const errorMessage = document.getElementById('errorMessage');
    const predictBtn = document.getElementById('predictBtn');

    // ===== GET RESULT FROM HIDDEN ELEMENT =====
    const resultValueElement = document.getElementById('resultValue');
    const resultValue = resultValueElement ? resultValueElement.value : null;

    console.log('Result Value:', resultValue);

    // If there's a result, show it with animation
    if (resultValue && resultValue !== '' && resultValue !== 'null' && resultValue !== 'None') {
        resultSection.style.display = 'block';
        resultSection.classList.add('show');
        if (predictedScore) {
            predictedScore.textContent = resultValue;
        }
        setTimeout(() => {
            resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    }

    // ===== FORM SUBMISSION =====
    if (form) {
        form.addEventListener('submit', function(e) {
            loadingSpinner.classList.add('show');
            predictBtn.disabled = true;
            predictBtn.innerHTML = '⏳ Processing...';
            errorMessage.classList.remove('show');
            resultSection.style.display = 'none';
            resultSection.classList.remove('show');
        });
    }

    // ===== REAL-TIME VALIDATION =====
    const numberInputs = document.querySelectorAll('input[type="number"]');
    numberInputs.forEach(input => {
        input.addEventListener('blur', function() {
            const val = parseFloat(this.value);
            if (this.value !== '' && (val < 0 || val > 100)) {
                this.style.borderColor = '#ff6b6b';
                this.style.boxShadow = '0 0 20px rgba(255,107,107,0.1)';
            } else {
                this.style.borderColor = 'rgba(255,255,255,0.12)';
                this.style.boxShadow = 'none';
            }
        });
    });

    // ===== RESET FORM =====
    const resetBtn = document.querySelector('.btn-reset');
    if (resetBtn) {
        resetBtn.addEventListener('click', function(e) {
            e.preventDefault();
            form.reset();
            resultSection.style.display = 'none';
            resultSection.classList.remove('show');
            errorMessage.classList.remove('show');
            numberInputs.forEach(input => {
                input.style.borderColor = 'rgba(255,255,255,0.12)';
                input.style.boxShadow = 'none';
            });
            predictBtn.disabled = false;
            predictBtn.innerHTML = '🚀 Predict Math Score';
            loadingSpinner.classList.remove('show');
        });
    }

    // ===== NEW PREDICTION BUTTON =====
    const newPredictionBtn = document.querySelector('.btn-new-prediction');
    if (newPredictionBtn) {
        newPredictionBtn.addEventListener('click', function(e) {
            e.preventDefault();
            resultSection.style.display = 'none';
            resultSection.classList.remove('show');
            form.reset();
            predictBtn.disabled = false;
            predictBtn.innerHTML = '🚀 Predict Math Score';
            loadingSpinner.classList.remove('show');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    console.log('🚀 ScorePredict Pro loaded successfully!');
});