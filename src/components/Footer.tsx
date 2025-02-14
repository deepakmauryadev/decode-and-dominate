const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white p-10 flex">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Other Links */}
          <div>
            <h2 className="text-green-400 font-bold mb-3">Other Links</h2>
            <ul className="space-y-2 text-sm">
              {[ "About us", "Verification of certificates", "FAQs", "Convocations", "MOU’s and Collaborations", "Centres of Excellence", "Executive Committee Society", "Placement", "International Affairs", "Library", "Testimonials", "Mandatory Disclosures", "KIIT-DU Alumni Information", "Conversion & Medium of Instruction Certificate", "ARIIA 2021", "National Academic Depository", "Ek Bharat Shreshtha Bharat", "Anthem", "Social Media Guidelines", "Anti-Ragging Committee", "Internal Complaint Committee", "Executive Council", "Academic Council", "Finance Committee", "Equal Opportunity Cell", "AICTE Online Grievance", "Policies", "University Activity Monitoring Portal", "Code of Conduct of Boarders", ].map((item, index) => (
                <li key={index} className="hover:text-blue-800 cursor-pointer transition-colors duration-100">{item}</li>
              ))}
            </ul>
          </div>
  
          {/* Quick Links */}
          <div>
            <h2 className="text-green-400 font-bold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              {[ "CIQA", "KIIT Online Programs", "KIIT Online Admission & Public Notice", "SAP Portal", "Grievance Portal (SGRC)", "KIIT Review", "KIIT Research Journal", "Student Counselling Cell", "Student Activity Centre", "Controller of Examinations", "Recognised Centres", "Sustainability", "NAAC", "NBA", "NIRF", "UGC", "IQAC", "KIIT NISP", "Download Logo", "The Learning Development Center", "COVID 19 Counseling", "COVID Courses", "Tribal Courses", "KIIT Innovation & Startup Policy", "Student’s Code of Conduct", "Research and Consultancy Guidelines", "Regulations & Guidelines", ].map((item, index) => (
                <li key={index} className="hover:text-blue-800 cursor-pointer transition-colors duration-100">{item}</li>
              ))}
            </ul>
          </div>
  
          {/* KIIT Group Websites & COVID-19 */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-green-400 font-bold mb-3">KIIT Group Websites</h2>
              <ul className="space-y-2 text-sm">
                {[ "Founder", "KISS Foundation", "Art of Giving", "KIMS Hospital", "Technology Business Incubator", "KIIT International School", "Kalinga Bharti FM", ].map((item, index) => (
                  <li key={index} className="hover:text-blue-800 cursor-pointer transition-colors duration-100">{item}</li>
                ))}
              </ul>
            </div>
  
            <div>
              <h2 className="text-green-400 font-bold mb-3">Covid-19</h2>
              <ul className="space-y-2 text-sm">
                {[ "COVID-19 Updates from KIIT", "Covid Guidelines (New)", "Centers for Disease Control & Prevention", "Directives as per WHO", ].map((item, index) => (
                  <li key={index} className="hover:text-blue-800 cursor-pointer transition-colors duration-100">{item}</li>
                ))}
              </ul>
            </div>
          </div>
  
          <div>
            <h2 className="text-green-400 font-bold mb-3">Contact Us</h2>
            <p className="text-sm">Kalinga Institute of Industrial Technology (KIIT)</p>
            <p className="text-sm">Patia, Bhubaneswar, Odisha, India 751024</p>
            
            <p className="text-sm flex items-center">📧 <span className="ml-2">kiit@kiit.ac.in</span></p>
            
            <p className="text-sm flex items-center">📞 <span className="ml-2">0674 2725113 <br />0674 2741389</span></p>
  
            <p className="text-sm">Admission: 8080 735 735</p>
            <p className="text-sm">Online Programs: 8856080200</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
