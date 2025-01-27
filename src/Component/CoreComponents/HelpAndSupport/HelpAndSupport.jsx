import React, { useState, useEffect } from "react";

export default function HelpAndSupport() {
  const [support, setSupport] = useState(null);

  useEffect(() => {
    fetch("/HelpSupport.json")
      .then((res) => res.json())
      .then((data) => {
        setSupport(data.helpAndSupport); // Update to access the correct object
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!support) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="overflow-auto h-screen bg-gradient-to-b from-green-700 to-green-900 text-white min-h-screen p-8">
      <div className="lg:flex lg:h-screen lg:justify-evenly items-center space-y-8 lg:space-y-0">
        <div className="w-full lg:w-1/3 text-center p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105" style={{
          background: `
            radial-gradient(circle at 20% 50%, #6eff62, transparent 60%),
            radial-gradient(circle at 10% 10%, #6eff62, transparent 70%),
            radial-gradient(circle at 70% 10%, #355E3B, transparent 90%),
            radial-gradient(circle at 30% 10%, #003300, transparent 75%)
          `,
          backgroundBlendMode: 'overlay',
        }}>
          <h1 className="font-semibold text-2xl mb-6">Contact Information</h1>
          <div className="text-lg">
            <p className="mb-4">Email: mmodak550@gmail.com</p>
            <p className="mb-4">Phone: (671) 595-0620</p>
          </div>

          {/* Business Hours */}
          <div className="border-t-2 border-green-400 my-8 pt-8">
            <h2 className="text-xl font-semibold">Business Hours</h2>
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p>Sat: 10:00 AM - 4:00 PM</p>
            <p>Sun: Closed</p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-6">
            <a href="https://facebook.com" className="text-xl text-green-500 hover:text-green-400 transition duration-300" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://twitter.com" className="text-xl text-green-500 hover:text-green-400 transition duration-300" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="https://linkedin.com" className="text-xl text-green-500 hover:text-green-400 transition duration-300" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          {/* Contact Form */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Quick Contact</h2>
            <form className="space-y-4">
              <div>
                <input className="w-full p-3 rounded-lg bg-black text-white border-2 border-green-500 focus:ring-2 focus:ring-green-300 focus:outline-none" type="text" placeholder="Your Name" />
              </div>
              <div>
                <input className="w-full p-3 rounded-lg bg-black text-white border-2 border-green-500 focus:ring-2 focus:ring-green-300 focus:outline-none" type="email" placeholder="Your Email" />
              </div>
              <div>
                <textarea className="w-full p-3 rounded-lg bg-black text-white border-2 border-green-500 focus:ring-2 focus:ring-green-300 focus:outline-none" placeholder="Your Message" rows="4"></textarea>
              </div>
              <div className="w-full text-center mt-6">
                <button type="submit" className="py-3 px-6 bg-green-600 hover:bg-green-500 text-white rounded-full font-semibold transition duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="p-8 rounded-xl w-full lg:w-1/3 transform transition duration-500 hover:scale-105 border-animate" style={{
          background: `
            radial-gradient(circle at 20% 50%, #6eff62, transparent 60%),
            radial-gradient(circle at 10% 10%, #6eff62, transparent 70%),
            radial-gradient(circle at 70% 10%, #355E3B, transparent 90%),
            radial-gradient(circle at 30% 10%, #003300, transparent 75%)
          `,
          backgroundBlendMode: 'overlay',
        }}>
          <h1 className="text-3xl font-semibold mb-6 text-center animate__animated animate__fadeIn">Support Details</h1>

          <form className="space-y-6 animate__animated animate__fadeIn animate__delay-1s">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="text-lg font-medium">First Name</label>
                <input className="rounded-lg w-full py-3 bg-black text-white border-2 border-green-500 focus:ring-2 focus:ring-green-300 focus:outline-none transition duration-300" type="text" name="first-name" />
              </div>
              <div>
                <label className="text-lg font-medium">Last Name</label>
                <input className="rounded-lg w-full py-3 bg-black text-white border-2 border-green-500 focus:ring-2 focus:ring-green-300 focus:outline-none transition duration-300" type="text" name="last-name" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="text-lg font-medium">Email</label>
                <input className="rounded-lg w-full py-3 bg-black text-white border-2 border-green-500 focus:ring-2 focus:ring-green-300 focus:outline-none transition duration-300" type="email" name="email" />
              </div>
              <div>
                <label className="text-lg font-medium">Phone Number</label>
                <input className="rounded-lg w-full py-3 bg-black text-white border-2 border-green-500 focus:ring-2 focus:ring-green-300 focus:outline-none transition duration-300" type="tel" name="phone-number" />
              </div>
            </div>

            <div>
              <label className="text-lg font-medium">Support Issue Title</label>
              <input className="rounded-lg w-full py-3 bg-black text-white border-2 border-green-500 focus:ring-2 focus:ring-green-300 focus:outline-none transition duration-300" type="text" name="issue-title" />
            </div>

            <div>
              <label className="text-lg font-medium">Description</label>
              <textarea className="rounded-lg w-full py-3 bg-black text-white border-2 border-green-500 focus:ring-2 focus:ring-green-300 focus:outline-none transition duration-300 h-24" name="description"></textarea>
            </div>

            <div className="w-full text-center mt-6">
              <button type="submit" className="py-3 px-6 bg-green-600 hover:bg-green-500 text-white rounded-full font-semibold transition duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* 3D Glassmorphism Testimonials */}
      <div className="">
        <h2 className="text-center text-3xl font-semibold mb-6">What Our Clients Say</h2>
        <div className="lg:flex lg:justify-evenly lg:space-x-8">
          {/* Testimonial 1 */}
          <div className="w-full lg:w-1/3 p-8 rounded-xl backdrop-blur-md bg-white/40 shadow-xl transform transition duration-300 hover:scale-105 mb-5">
            <p className="text-lg mb-4">"The support team was incredibly helpful, resolved my issue in no time!"</p>
            <h3 className="font-semibold text-xl">John Doe</h3>
            <p className="text-sm">Software Developer</p>
          </div>

          {/* Testimonial 2 */}
          <div className="w-full lg:w-1/3 p-8 rounded-xl backdrop-blur-md bg-white/40 shadow-xl transform transition duration-300 hover:scale-105 mb-5">
            <p className="text-lg mb-4">"Quick responses and great service! I couldn’t ask for more."</p>
            <h3 className="font-semibold text-xl">Jane Smith</h3>
            <p className="text-sm">Designer</p>
          </div>

          {/* Testimonial 3 */}
          <div className="w-full lg:w-1/3 p-8 rounded-xl backdrop-blur-md bg-white/40 shadow-xl transform transition duration-300 hover:scale-105">
            <p className="text-lg mb-4">"Excellent experience! Would definitely recommend to others."</p>
            <h3 className="font-semibold text-xl">Alice Brown</h3>
            <p className="text-sm">Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
