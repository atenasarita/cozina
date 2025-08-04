import React, { useState, useEffect } from 'react';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-cozina-cream overflow-hidden">

      <div className="flex items-center justify-center px-4">
        <div className={`w-full max-w-6xl relative transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
           

    <div className="flex justify-center items-stretch m-12">
      <div className='bg-cozina-orange w-1/3 p-12 flex align-items rounded-l-2xl'>
        <h1 className="text-3xl font-cozina-heading text-cozina-maroon mb-4">Welcome to Cozina!</h1>
      </div>

      <div className='bg-cozina-darkpink flex-1 p-12  rounded-r-2xl'>
        <div className="space-y-5">
            <h1 className="text-3xl font-cozina-heading text-cozina-lightpink mb-4">Create Your Account</h1>
              
              <div className="flex space-x-4 "> 
              {/* First Name field */}
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5" style={{ color: '#8B4B5C' }} />
                </div>
                <input
                  type="text"
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleInputChange}
                  className="bg-cozina-cream w-full pl-10 py-3 border-2 rounded-xl focus:ring-2 focus:ring-white/30 focus:border-white/50 transition-all duration-300 text-gray-800 placeholder-gray-500"
                  placeholder="First Name"
                  required
                />
              </div>

              {/* Last Name field */}
              <div className="relative flex-1"> 
                <input
                  type="text"
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleInputChange}
                  className="bg-cozina-cream w-full pl-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-white/30 focus:border-white/50 transition-all duration-300 text-gray-800 placeholder-gray-500"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

              {/* Email field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5" style={{ color: '#8B4B5C' }} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-cozina-cream w-full pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-white/30 focus:border-white/50 transition-all duration-300 text-gray-800 placeholder-gray-500"
                  placeholder="Email Address"
                  required
                />
              </div>

              {/* Password field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5" style={{ color: '#8B4B5C' }} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="bg-cozina-cream w-full pl-10 pr-12 py-3 rounded-xl focus:ring-2 focus:ring-white/30 focus:border-white/50 transition-all duration-300 text-gray-800 placeholder-gray-500"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 hover:opacity-70 transition-opacity" style={{ color: '#8B4B5C' }} />
                  ) : (
                    <Eye className="h-5 w-5 hover:opacity-70 transition-opacity" style={{ color: '#8B4B5C' }} />
                  )}
                </button>
              </div>

              {/* Confirm Password field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5" style={{ color: '#8B4B5C' }} />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="bg-cozina-cream w-full pl-10 pr-12 py-3 rounded-xl focus:ring-2 focus:ring-white/30 focus:border-white/50 transition-all duration-300 text-gray-800 placeholder-gray-500"
                  placeholder="Confirm Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 hover:opacity-70 transition-opacity" style={{ color: '#8B4B5C' }} />
                  ) : (
                    <Eye className="h-5 w-5 hover:opacity-70 transition-opacity" style={{ color: '#8B4B5C' }} />
                  )}
                </button>
              </div>

              {/* Submit button */}
              <button
                onClick={handleSubmit}
                className="bg-cozina-lightpink text-cozina-maroon w-full py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Register</span>
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-white/30"></div>
              <span className="px-4 text-white/70 text-sm">or</span>
              <div className="flex-1 border-t border-white/30"></div>
            </div>

            {/* Social signup options */}
            <div className="space-y-3">
              <button 
                className="w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 bg-cozina-orange text-cozina-maroon">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Continue with Google</span>
              </button>
              
              <button 
                className="w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 bg-cozina-orange text-cozina-maroon">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span>Continue with Apple</span>
              </button>
            </div>

            {/* Footer */}
            <div className="text-center mt-6">
              <p className="text-cozina-cream text-sm">
                Already have an account?{' '}
                <a href="#" className="text-cozina-cream font-medium hover:underline transition-all duration-300">
                  Log in here
                </a>
              </p>
            </div>

          
            <div className="text-center mt-4">
              <p className="text-xs text-cozina-cream">
                By signing up, you agree to our{' '}
                <a href="#" className="text-cozina-cream hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-cozina-cream hover:underline">Privacy Policy</a>
              </p>
            </div>

      </div>
    </div>


          </div>
      </div>
    </div>);
};

export default SignUp;