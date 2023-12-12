import React from 'react';


function App() {
  return (    
    <section className="h-screen w-screen flex flex-col md:flex-row justify-center md:space-x-16 items-center">
      <div className="absolute md:relative md:w-1/3 max-w-sm invisible md:visible">
      <label className="pl-10 text-blue-900 text-xl font-bold">Machine Learning for Diagnosis</label>
        <p className="mt-2 font-bold">Empowering Healthcare: </p>
        <p class="text-gray-500">Machine Learning technology helps healthcare professionals provide faster, more accurate diagnoses.</p>
        <img
          src="https://celltecltd.com/wp-content/uploads/2023/05/undraw_Access_account_re_8spm-980x902.png"
          alt="Home Image" />       
      </div>
      <div class="absolute md:relative invisible md:visible">
      <svg width="2" height="660" viewBox="0 0 2 660" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="-4.37114e-08" x2="1.00003" y2="660" stroke="#E2E8F0" strokeWidth="2"/>
      </svg>
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left py-6">
          <label className="mr-1 text-blue-900 text-4xl font-bold">Sign in</label>
        </div>
        <div className="pb-2">
        </div>
        <div className="relative text-gray-400 block">
          <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>        
          <input type="email" id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' ' />
          <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>        
        </div>
        <div className="pt-6 mb-2">
        </div>
        <div className="relative block fill-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none w-7 h-7 absolute top-1/2 transform -translate-y-1/2 right-4" viewBox="0 1.5 21 20" >
          <path xmlns="http://www.w3.org/2000/svg" d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>  
        <input id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="password" placeholder=' ' />
        <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>        
        </div>
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me   </span>
          </label>
          {/* <a className="text-gray-500 hover:text-gray-800 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a> */}
        </div>
        <div className="text-center md:text-left">
          <button className="w-full mt-4 bg-blue-900 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Sign In</button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account? <a className="text-red-600 hover:underline hover:underline-offset-4" href="#">Register</a>
        </div>
      </div>
    </section>
  );
}

export default App;