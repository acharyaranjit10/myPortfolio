import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
const Contact = () => {
  return (
    <section id="contact" className="overflow-x-hidden">
    <div className="head-cont bg-[#033e65] text-center text-white text-2xl pt-4 font-bold mb-10">
  <h1 className="relative inline-block pb-1">
    Connect With Me
    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[110%] h-[3px] bg-orange-400"></span>
  </h1>
</div>
      <div className="formbox relative w-full min-h-[70vh] p-8 bg-[#033e65] flex items-center justify-center">
        <div className="form w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Contact Info */}
          <div className="contact-info p-8 relative bg-[#0a3863] border-2 border-[#26516e]">
            <h3 className="title text-[#E4E6C3] text-2xl font-medium mb-4">Let's get in touch</h3>
            <p className="text text-[#a9cdee] mb-6">
              If you have anymore queries then you can contact me through the form given below.
              let's build something great together.
            </p>

            <div className="info">
              <div className="information flex items-center my-4 text-[#a9cdee]">
                <i className="fas fa-map-marker-alt mr-3"></i>
                <p>06-kageshwori manohara, Kathmandu, Nepal</p>
              </div>
              <div className="information flex items-center my-4 text-[#a9cdee]">
                <i className="fas fa-envelope mr-3"></i>
                <a 
                  href="mailto:acharyaranjit2002@gmail.com" 
                  id="my-mail" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#a9cdee] transition-all duration-500 hover:text-[#709fc9] hover:scale-105"
                >
                  acharyaranjit2002@gmail.com
                </a>
              </div>
              <div className="information flex items-center my-4 text-[#a9cdee]">
                <i className="fas fa-phone mr-3"></i>
                <p>9845693040</p>
              </div>
            </div>

            <div className="social-media pt-8">
              <p className="text-[#a9cdee]">Connect with me :</p>
              <div className="social-icons flex mt-2">
                <a 
                  href="https://www.facebook.com/ranjet.acharya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  id="fb"
                  className="w-9 h-9 rounded flex items-center justify-center text-white mr-2 transition-all duration-300 hover:scale-105 hover:shadow-md"
                  style={{ background: 'linear-gradient(45deg, #0065d9, #0065d9)' }}
                >
                  <FaFacebookF className="text-lg" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  id="twt"
                  className="w-9 h-9 rounded flex items-center justify-center text-white mr-2 transition-all duration-300 hover:scale-105 hover:shadow-md"
                  style={{ background: 'linear-gradient(45deg, black, black)' }}
                >
                  <BsTwitterX className="text-lg" />
                </a>
                <a 
                  href="https://www.instagram.com/ranjitacharya00/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  id="insta"
                  className="w-9 h-9 rounded flex items-center justify-center text-white mr-2 transition-all duration-300 hover:scale-105 hover:shadow-md"
                  style={{ background: 'linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)' }}
                >
                  <FaInstagram className="text-lg" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ranjit-acharya-521b6427a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  id="linked"
                  className="w-9 h-9 rounded flex items-center justify-center text-white mr-2 transition-all duration-300 hover:scale-105 hover:shadow-md"
                  style={{ background: 'linear-gradient(45deg, #0077B5, #0077B5)' }}
                >
                  <FaLinkedinIn className="text-lg" />
                </a>
                <a 
                  href="https://github.com/acharyaranjit10" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  id="git"
                  className="w-9 h-9 rounded flex items-center justify-center text-white mr-2 transition-all duration-300 hover:scale-105 hover:shadow-md"
                  style={{ background: 'linear-gradient(45deg, rgb(43, 42, 42), black)' }}
                >
                  <FaGithub className="text-lg" />
                </a>
                <a 
                  href="/Ranjit-Acharya-CV.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  id="cv"
                  className="w-9 h-9 rounded flex items-center justify-center text-white mr-2 transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <img src="img/cv.png" alt="cv" className="h-[110%] w-[110%] relative right-0.5 bottom-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form p-8 relative bg-[#0c2651] text-[#d7dff3]">
            <div className="before:content-[''] before:absolute before:w-6 before:h-6 before:bg-[#0c2651] before:rotate-45 before:top-12 before:-left-3"></div>
            
            <form className="relative z-10 overflow-hidden">
              <h3 className="title text-2xl font-medium mb-4 text-[#E4E6C3]">Contact me</h3>
              
              <div className="input-container relative my-4">
                <input 
                  type="text" 
                  name="name" 
                  className="input w-full outline-none border-2 border-[#d7dff3] bg-transparent py-2 px-4 rounded-full text-[#d7dff3] font-bold text-sm tracking-wider transition-all duration-300"
                  placeholder="Name"
                />
              </div>
              
              <div className="input-container relative my-4">
                <input 
                  type="email" 
                  name="email" 
                  className="input w-full outline-none border-2 border-[#d7dff3] bg-transparent py-2 px-4 rounded-full text-[#d7dff3] font-bold text-sm tracking-wider transition-all duration-300"
                  placeholder="Email"
                />
              </div>
              
              <div className="input-container relative my-4">
                <input 
                  type="tel" 
                  name="phone" 
                  className="input w-full outline-none border-2 border-[#d7dff3] bg-transparent py-2 px-4 rounded-full text-[#d7dff3] font-bold text-sm tracking-wider transition-all duration-300"
                  placeholder="Phone"
                />
              </div>
              
              <div className="input-container textarea relative my-4">
                <textarea 
                  name="message" 
                  className="input w-full outline-none border-2 border-[#d7dff3] bg-transparent py-3 px-4 rounded-xl text-[#d7dff3] font-bold text-sm tracking-wider min-h-[150px] resize-none"
                  placeholder="Message"
                ></textarea>
              </div>
              
              <input 
                type="submit" 
                value="Send" 
                className="btn py-2 px-5 bg-transparent border-2 border-gray-300 text-white text-sm rounded-lg cursor-pointer shadow-md transition-all duration-300 hover:shadow-lg hover:rounded-lg"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;