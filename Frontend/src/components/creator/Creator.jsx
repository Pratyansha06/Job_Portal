import React from 'react';
import Navbar from '../components_lite/Navbar';

const Creator = () => {
  return (
    <div>
      <Navbar />
      
      {/* Main Content Section with Background */}
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto p-6 mt-12 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg">
        {/* Job Portal Logo (from the internet) */}
        <img 
          src="https://cdn.vectorstock.com/i/500p/74/45/job-portal-lettering-logo-design-template-concept-vector-37017445.jpg" // Replace with any logo URL you prefer
          alt="Job Portal Logo" 
          className="w-48 h-auto mb-6"
        />
        
        {/* About the Job Portal */}
        <h2 className="text-3xl font-bold mb-4 text-center">About Job Portal</h2>
        <p className="text-lg text-gray-200 text-center max-w-2xl mb-8">
          Job Portal is a platform that connects job seekers with top employers.
          Whether you are a fresh graduate looking for your first job or an experienced professional seeking new opportunities, Job Portal provides you with the tools to find the perfect match.
          Our mission is to make the job search process easier, faster, and more efficient for both job seekers and employers. We aim to help individuals achieve their career goals while enabling organizations to find the best talent.
        </p>
      </div>

      {/* Divider for Separation */}
      <hr className="w-full border-gray-300 my-6" />

      {/* User Posts/Reviews Section */}
      <div className="text-center p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Users Say</h2>
        
        {/* Review 1 */}
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff"
              alt="User Avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold text-lg">John Doe</h3>
              <p className="text-sm text-gray-500">Software Engineer</p>
            </div>
          </div>
          <p className="text-gray-600">
            "Job Portal helped me find my dream job in just a few weeks! The platform is easy to use, and the job listings are always up-to-date. Highly recommend!"
          </p>
        </div>
        
        {/* Review 2 */}
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <img
              src="https://ui-avatars.com/api/?name=Jane+Smith&background=0D8ABC&color=fff"
              alt="User Avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold text-lg">Jane Smith</h3>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
            </div>
          </div>
          <p className="text-gray-600">
            "Thanks to Job Portal, I was able to connect with the best companies. I got hired within a month of using the platform. It's fast, reliable, and user-friendly."
          </p>
        </div>

        {/* Review 3 */}
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <img
              src="https://ui-avatars.com/api/?name=Michael+Lee&background=0D8ABC&color=fff"
              alt="User Avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold text-lg">Michael Lee</h3>
              <p className="text-sm text-gray-500">Marketing Specialist</p>
            </div>
          </div>
          <p className="text-gray-600">
            "I found my perfect job match through Job Portal. The platform’s user interface is sleek, and I received job notifications that were always relevant to my field."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Creator;
