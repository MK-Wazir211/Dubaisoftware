import { FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#286672] to-[#2a7989] bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600">
              Welcome to Dubai Software Solutions. Whether you're a software engineer seeking career opportunities 
              or a client looking for premium solutions, reach out using the form or visit us directly.
            </p>
            
            <div className="space-y-6 mt-12">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="w-6 h-6 text-[#286672] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Dubai Software Solutions</h3>
                  <p className="text-gray-600">DAMAC XL Tower</p>
                  <p className="text-gray-600">Al Abraj Street, Business Bay</p>
                  <p className="text-gray-600">Dubai, United Arab Emirates</p>
                </div>
              </div>

              <div className="mt-8 rounded-xl overflow-hidden border-2 border-[#286672]/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.207530343434!2d55.27041531501118!3d25.25825898386311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d3a5d5d5d5d%3A0x5f5d5d5d5d5d5d5d!2sDAMAC%20XL%20Tower!5e0!3m2!1sen!2sae!4v1629999999999!5m2!1sen!2sae"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-white shadow-lg p-8 rounded-xl border border-[#286672]/20">
            <div className="space-y-4">
              {[
                { label: 'Name', placeholder: 'Enter your name', type: 'text' },
                { label: 'E-mail', placeholder: 'Enter your e-mail', type: 'email' },
                { label: 'Phone Number', placeholder: 'Phone Number...', type: 'tel' },
                { label: 'Subject', placeholder: 'Subject...', type: 'text' },
              ].map((field, index) => (
                <div key={index} className="space-y-2">
                  <label className="text-sm font-medium text-[#286672]">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-gray-100 border border-[#286672]/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#286672] focus:border-transparent"
                    required
                  />
                </div>
              ))}
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#286672]">Message</label>
                <textarea
                  placeholder="Enter your message"
                  rows={4}
                  className="w-full bg-gray-100 border border-[#286672]/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#286672] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#286672] hover:bg-[#1d4d5a] px-6 py-4 rounded-lg font-semibold text-white flex items-center justify-center space-x-3 transition-all hover:shadow-xl hover:shadow-[#286672]/20"
            >
              <span>Send Message</span>
              <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
