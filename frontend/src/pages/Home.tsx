import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block">Breast Cancer</span>
        <span className="block text-indigo-600">Classification System</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        An intelligent system for early detection and classification of breast cancer using machine learning.
      </p>
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <Link
            to="/predict"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Get Started
          </Link>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <Link
            to="/analysis"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
          >
            View Analysis
          </Link>
        </div>
      </div>
      
      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Accurate Predictions</h3>
              <p className="mt-5 text-base text-gray-500">
                Our advanced machine learning model provides highly accurate predictions for breast cancer classification.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Quick Results</h3>
              <p className="mt-5 text-base text-gray-500">
                Get instant results with our efficient processing system, saving you valuable time and resources.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Detailed Analysis</h3>
              <p className="mt-5 text-base text-gray-500">
                Access comprehensive analysis and visualizations to better understand the prediction results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
