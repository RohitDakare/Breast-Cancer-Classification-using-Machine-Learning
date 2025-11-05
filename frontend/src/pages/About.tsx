export default function About() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Breast Cancer Classification System
            </h3>
          </div>
        </div>
        
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Breast cancer awareness"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <svg className="flex-none w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2">Early detection saves lives</span>
                </figcaption>
              </figure>
            </div>
          </div>
          
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                Our Breast Cancer Classification System is designed to assist healthcare professionals in the early detection and classification of breast cancer using advanced machine learning algorithms.
              </p>
            </div>
            
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <h3 className="text-gray-900">How It Works</h3>
              <p>
                The system analyzes various features extracted from digitized images of fine needle aspirates (FNA) of breast masses. These features describe characteristics of the cell nuclei present in the image.
              </p>
              <p>
                Using a trained machine learning model, the system classifies tumors as either <strong>benign</strong> (non-cancerous) or <strong>malignant</strong> (cancerous) with high accuracy.
              </p>
              
              <h3 className="text-gray-900 mt-8">Key Features</h3>
              <ul role="list">
                <li>High accuracy in tumor classification</li>
                <li>Quick and efficient analysis</li>
                <li>Detailed visualization of results</li>
                <li>User-friendly interface</li>
                <li>Secure and private data handling</li>
              </ul>
              
              <h3 className="text-gray-900 mt-8">Disclaimer</h3>
              <p>
                This system is intended to assist healthcare professionals and should not be used as the sole basis for diagnosis. Always consult with a qualified healthcare provider for medical advice and diagnosis.
              </p>
              
              <div className="mt-8 flex">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="/predict"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Try It Now
                  </a>
                </div>
                <div className="ml-3 inline-flex">
                  <a
                    href="https://www.who.int/news-room/fact-sheets/detail/breast-cancer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Learn More About Breast Cancer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
