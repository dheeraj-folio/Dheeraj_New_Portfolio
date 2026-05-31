import React from 'react'


const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      value: "dheeraj.folio@gmail.com",
      icon: "✉",
      color: "violet",
    },
    {
      title: "Phone",
      value: "+91 97849 58368",
      icon: "☎",
      color: "blue",
    },
    {
      title: "Location",
      value: "Jaipur, Rajasthan, India",
      icon: "📍",
      color: "green",
    },
    {
      title: "Availability",
      value: "Mon - Sat (10:00 AM - 7:00 PM)",
      icon: "⏰",
      color: "orange",
    },
  ];

  // Dynamic class matching based on color values
  const iconColorMap = {
    violet: "text-violet-400",
    blue: "text-blue-400",
    green: "text-green-400",
    orange: "text-orange-400",
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-28 bg-[#070B14] text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-violet-700/20 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* Heading */}
        <div className="text-center">
          <p className="text-violet-500 uppercase tracking-[4px] text-xs sm:text-sm font-semibold">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mt-4 sm:mt-5">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-7 sm:leading-8 mt-4 sm:mt-6 max-w-3xl mx-auto">
            Have a project in mind or just want to say hi? Fill out the form and I’ll get back to you as soon as possible.
          </p>

          {/* Line */}
          <div className="w-16 sm:w-24 h-1 bg-violet-500 rounded-full mx-auto mt-6 sm:mt-8"></div>
        </div>

        {/* Main Grid Layout - Switches from single stack on mobile to 3-column setup on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mt-12 sm:mt-20">

          {/* LEFT FORM */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 backdrop-blur-xl">
            {/* Form Title */}
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10">
              Send Me a Message
            </h3>

            {/* Inputs Container */}
 {/* Functional Submission Form */}
            <form 
              onSubmit={async (e) => {
                e.preventDefault();
                const button = e.target.querySelector('button[type="submit"]');
                const statusText = e.target.querySelector('.form-status');
                
                // Set loading state feedback
                button.disabled = true;
                statusText.textContent = "Sending message...";
                statusText.className = "form-status text-sm text-violet-400 mt-2 block sm:inline sm:ml-4";

                const formData = new FormData(e.target);
                
                // SECURITY NOTE: Obtain a free access key token at https://web3forms.com
                // Paste your key token value here:
                formData.append("access_key", "877ce3e8-fb33-47ee-97f7-5e2fdbac7714");

                try {
                  const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                  });

                  const data = await response.json();

                  if (data.success) {
                    statusText.textContent = "Message sent successfully! 💜";
                    statusText.className = "form-status text-sm text-green-400 mt-2 block sm:inline sm:ml-4";
                    e.target.reset(); // Clear all fields on success
                  } else {
                    throw new Error(data.message);
                  }
                } catch (error) {
                  statusText.textContent = "Something went wrong. Please try again.";
                  statusText.className = "form-status text-sm text-red-400 mt-2 block sm:inline sm:ml-4";
                } finally {
                  button.disabled = false;
                }
              }}
            >
              {/* Inputs Container */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-[#0F172A] border border-white/10 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-4 sm:py-5 outline-none text-white focus:border-violet-500 transition-all duration-300 text-sm sm:text-base"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full bg-[#0F172A] border border-white/10 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-4 sm:py-5 outline-none text-white focus:border-violet-500 transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="w-full mt-4 sm:mt-6 bg-[#0F172A] border border-white/10 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-4 sm:py-5 outline-none text-white focus:border-violet-500 transition-all duration-300 text-sm sm:text-base"
              />

              {/* Message */}
              <textarea
                name="message"
                required
                rows="6"
                placeholder="Your Message"
                className="w-full mt-4 sm:mt-6 bg-[#0F172A] border border-white/10 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-4 sm:py-5 outline-none text-white resize-none focus:border-violet-500 transition-all duration-300 text-sm sm:text-base"
              ></textarea>

              {/* Action Bottom Wrapper */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="w-full sm:w-auto">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-semibold hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all duration-300 text-sm sm:text-base"
                  >
                    Send Message
                  </button>
                  
                  {/* Real-time Inline Status Message Hook */}
                  <span className="form-status hidden"></span>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                  I'll get back to you within 24 hours
                </p>
              </div>
            </form>
          </div>

          {/* RIGHT CONTACT INFO */}
          <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 backdrop-blur-xl">
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10">
              Contact Information
            </h3>

            {/* Info Items */}
            <div className="space-y-6 sm:space-y-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start sm:items-center gap-4 sm:gap-5 border-b border-white/10 pb-5 sm:pb-6 last:border-none last:pb-0"
                >
                  {/* Icon Card Frame */}
                  <div
                    className={`w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl bg-[#111827] shrink-0 ${iconColorMap[item.color] || ""}`}
                  >
                    {item.icon}
                  </div>

                  {/* Content Details */}
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg sm:text-2xl font-semibold truncate">
                      {item.title}
                    </h4>

                    <p className="text-gray-400 text-sm sm:text-lg mt-1 sm:mt-2 leading-6 sm:leading-8 break-words">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;