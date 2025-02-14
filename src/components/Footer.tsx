const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div>
            <h2 className="text-green-400 font-bold mb-3">Other Links</h2>
            <ul className="space-y-2 text-sm">
              <li>Verification of Certificates</li>
              <li>About Us</li>
              <li>FAQs</li>
              <li>Convocations</li>
              <li>Placement</li>
              <li>International Affairs</li>
              <li>Library</li>
              <li>Testimonials</li>
              <li>Mandatory Disclosures</li>
              <li>Academic Council</li>
              <li>Equal Opportunity Cell</li>
            </ul>
          </div>
  
          <div>
            <h2 className="text-green-400 font-bold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>CIQA</li>
              <li>KIIT Online Programs</li>
              <li>KIIT Research Journal</li>
              <li>Student Counselling Cell</li>
              <li>NAAC</li>
              <li>NBA</li>
              <li>NIRF</li>
              <li>UGC</li>
              <li>IQAC</li>
              <li>KIIT NISP</li>
            </ul>
          </div>
  
          <div>
            <h2 className="text-green-400 font-bold mb-3">KIIT Group Websites</h2>
            <ul className="space-y-2 text-sm">
              <li>Founder</li>
              <li>KISS Foundation</li>
              <li>Art of Giving</li>
              <li>KIMS Hospital</li>
              <li>Technology Business Incubator</li>
              <li>KIIT International School</li>
              <li>Kalinga Bharti FM</li>
            </ul>
          </div>
  
          {/* Covid-19 */}
          <div>
            <h2 className="text-green-400 font-bold mb-3">Covid-19</h2>
            <ul className="space-y-2 text-sm">
              <li>COVID-19 Updates from KIIT</li>
              <li>Covid Guidelines (New)</li>
              <li>Centers for Disease Control & Prevention</li>
              <li>Directives as per WHO</li>
            </ul>
          </div>
  
          {/* Contact Us */}
          <div>
            <h2 className="text-green-400 font-bold mb-3">Contact Us</h2>
            <p className="text-sm">Kalinga Institute of Industrial Technology (KIIT)</p>
            <p className="text-sm">Patia, Bhubaneswar, Odisha, India 751024</p>
            <p className="text-sm flex items-center">
              📧 <span className="ml-2">kiit@kiit.ac.in</span>
            </p>
            <p className="text-sm flex items-center">
              📞 <span className="ml-2">0674 2725113 / 0674 2741389</span>
            </p>
            <p className="text-sm">Admission: 8080 735 735</p>
            <p className="text-sm">Online Programs: 8856080200</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  