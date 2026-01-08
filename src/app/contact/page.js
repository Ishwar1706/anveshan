export default function ContactPage() {
  return (
    <main className="text-white relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-16">
        <div
          className="max-w-4xl mx-auto rounded-xl p-6 md:p-10 backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(6,6,10,0.68)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-200 mb-4 text-center">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="contact-details text-left">
              <h2 className="text-xl text-pink-400 font-semibold mb-2">Get in touch</h2>
              <p className="mb-4 text-yellow-200">We're happy to answer questions about ANVESHAN 2026 — reach out via any of the channels below.</p>

              <ul className="space-y-3 text-yellow-300">
                <li>
                  <strong>Address:</strong>
                  <div>Pimpri Chinchwad College Of Engineering, Sector -26, Pradhikaran, Nigdi, Near Akurdi Railway Station, Pune - 411 044.</div>
                </li>
                <li>
                  <strong>Email:</strong>
                  <div><a href="mailto:info@anveshan.example" className="text-yellow-100">cresa@pccoepune.org</a></div>
                </li>
                <li>
                  <strong>Phone:</strong>
                  <div><a href="tel:+911234567890" className="text-yellow-100">+91 9579945613</a>
                  <a href="tel:+911234567890" className="text-yellow-100">     / +91 7218599251</a></div>
                </li>
                <li>
                  <strong>Social:</strong>
                  <div className="flex gap-3 mt-2">
                    <a href="https://www.instagram.com/cresa_pccoe?igsh=YXRtajFsZmwybmxy" target="_blank" className="text-pink-400">Instagram</a>
                 
                  </div>
                </li>
              </ul>

             
            </div>

            <div className="map-wrap rounded-md overflow-hidden border border-white/8">
              {/* Google Maps embed centered on Pune, replace coordinates if desired */}
              <iframe
                title="ANVESHAN Location"
                className="w-full h-64 md:h-full min-h-[260px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.273282524436!2d73.7616398!3d18.6517288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2sPCCOE%20-%20Pimpri%20Chinchwad%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1767508346500!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
