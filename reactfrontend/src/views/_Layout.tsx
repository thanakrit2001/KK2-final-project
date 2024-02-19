import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/Header'
import { DetailPatient } from './Patiant/DetailPatient';
import { ListPatient } from './Patiant/ListPatiant';
import { Route, Routes } from 'react-router-dom';
import { FormPatientModel } from '../components/AddPatientModel';
import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
  }
  
  export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
      checkToken();
    }, []);
  
    const checkToken = () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
        setLoggedIn(true);
      } else {
        setToken('');
        setLoggedIn(false);
        // Redirect to sign-in page if not logged in
        navigate('/signin');
      }
    };
  
    const updateTokenAndLoginStatus = (newToken: string, loggedInStatus: boolean) => {
      setToken(newToken);
      setLoggedIn(loggedInStatus);
      localStorage.setItem('token', newToken);
    };
  
    return (
        <div className="parent md:h-screen md:grid md:grid-cols-10">
            <section className="sidebar bg-green-400 md:col-span-2">
                <Sidebar />
            </section>

            <main className="flex-1 main md:col-span-8 bg-gray-200">
                <Header />
                {/* <div className="flex justify-between py-3 px-6 bg-gray-50 border-b space-x-6">
                    <form action="" className="w-full max-w-md">
                        <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                            <svg className="w-5 h-5 absolute ml-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input type="text" name="search" placeholder="Search talk" aria-label="Search talk" className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2" />
                        </div>
                    </form>

                    <div className="relative flex-shrink-0">
                        <div className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                            <img className="inline w-10 h-10 rounded-full" src="https://picsum.photos/150" alt="" />
                        </div>
                    </div>
                </div> */}
                <main>
                    <div className="m-4">
                        <Routes>
                            <Route path="/" element={<ListPatient />} />
                            <Route path="/detail/:id" element={<DetailPatient />} />
                        </Routes>
                    </div>
                </main>
            </main>
        </div>
    );
}