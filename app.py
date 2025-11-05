from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app) # This will enable CORS for all routes

# Load the trained model and scaler
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)
with open('scaler.pkl', 'rb') as f:
    scaler = pickle.load(f)

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.get_json()
    
    # The full list of 30 features the model was trained on
    feature_names = [
        'mean radius', 'mean texture', 'mean perimeter', 'mean area',
        'mean smoothness', 'mean compactness', 'mean concavity',
        'mean concave points', 'mean symmetry', 'mean fractal dimension',
        'radius error', 'texture error', 'perimeter error', 'area error',
        'smoothness error', 'compactness error', 'concavity error',
        'concave points error', 'symmetry error', 'fractal dimension error',
        'worst radius', 'worst texture', 'worst perimeter', 'worst area',
        'worst smoothness', 'worst compactness', 'worst concavity',
        'worst concave points', 'worst symmetry', 'worst fractal dimension'
    ]
    
    try:
        # Extract features from the request data in the correct order
        features = [float(data[name]) for name in feature_names]
        
        # Create a numpy array and reshape it
        features_array = np.asarray(features).reshape(1, -1)
        
        # Scale the features
        scaled_features = scaler.transform(features_array)
        
        # Make a prediction
        prediction = model.predict(scaled_features)
        
        # Return the prediction
        return jsonify({'prediction': int(prediction[0])})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)
