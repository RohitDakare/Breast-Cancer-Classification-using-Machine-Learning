import { useState } from 'react';

const initialFormData = {
  'mean radius': '', 'mean texture': '', 'mean perimeter': '', 'mean area': '',
  'mean smoothness': '', 'mean compactness': '', 'mean concavity': '',
  'mean concave points': '', 'mean symmetry': '', 'mean fractal dimension': '',
  'radius error': '', 'texture error': '', 'perimeter error': '', 'area error': '',
  'smoothness error': '', 'compactness error': '', 'concavity error': '',
  'concave points error': '', 'symmetry error': '', 'fractal dimension error': '',
  'worst radius': '', 'worst texture': '', 'worst perimeter': '', 'worst area': '',
  'worst smoothness': '', 'worst compactness': '', 'worst concavity': '',
  'worst concave points': '', 'worst symmetry': '', 'worst fractal dimension': ''
};

const featureGroups = {
  'Mean Measurements': [
    'mean radius', 'mean texture', 'mean perimeter', 'mean area',
    'mean smoothness', 'mean compactness', 'mean concavity',
    'mean concave points', 'mean symmetry', 'mean fractal dimension'
  ],
  'Standard Error Measurements': [
    'radius error', 'texture error', 'perimeter error', 'area error',
    'smoothness error', 'compactness error', 'concavity error',
    'concave points error', 'symmetry error', 'fractal dimension error'
  ],
  '"Worst" or Largest Measurements': [
    'worst radius', 'worst texture', 'worst perimeter', 'worst area',
    'worst smoothness', 'worst compactness', 'worst concavity',
    'worst concave points', 'worst symmetry', 'worst fractal dimension'
  ]
};

export default function Predict() {
  const [formData, setFormData] = useState(initialFormData);
  const [prediction, setPrediction] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      setPrediction(data.prediction);
      
    } catch (error) {
      console.error('Prediction error:', error);
      alert('Error making prediction. Please check the console for details.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Breast Cancer Prediction</h2>
        <p className="mt-2 text-sm text-gray-600">
          Enter the following measurements to get a prediction
        </p>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit}>
        {Object.entries(featureGroups).map(([groupName, fields]) => (
          <div key={groupName}>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">{groupName}</h3>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
                    {field}
                  </label>
                  <div className="mt-1">
                    <input
                      id={field}
                      name={field}
                      type="number"
                      step="any"
                      required
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder={`Enter ${field}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}


        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Predicting...' : 'Predict'}
          </button>
        </div>
      </form>

      {prediction !== null && (
        <div className={`mt-8 p-4 rounded-md ${prediction === 0 ? 'bg-red-50' : 'bg-green-50'}`}>
          <div className="flex">
            <div className="flex-shrink-0">
              {prediction === 0 ? (
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <h3 className={`text-sm font-medium ${prediction === 0 ? 'text-red-800' : 'text-green-800'}`}>
                {prediction === 0 ? 'Malignant (Cancerous)' : 'Benign (Non-Cancerous)'}
              </h3>
              <div className={`mt-2 text-sm ${prediction === 0 ? 'text-red-700' : 'text-green-700'}`}>
                <p>
                  {prediction === 0 
                    ? 'The model predicts that the tumor is malignant. Please consult with a healthcare professional for further evaluation.'
                    : 'The model predicts that the tumor is benign. However, please consult with a healthcare professional for a comprehensive diagnosis.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
