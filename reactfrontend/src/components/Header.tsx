import * as React from 'react';

export const Header = () => {
    return (
        <div className="container flex w-full bg-white py-3">
            {/* Search bar */}

            <div className="font-sans text-black bg-white flex items-center justify-center ml-6 w-full">
                <div className="border rounded-full overflow-hidden flex w-full">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 m-0.5 py-1 px-5 leading-tight focus:outline-none focus:border-teal-500"
                        type="text"
                        placeholder="Search..."
                    />
                    <button className="flex items-center justify-center px-4 border-l">
                        <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
                    </button>
                </div>
            </div>
            {/* Icon */}
            <div className="w-full flex justify-end items-center">
                <div className="flex mr-2">
                    {/* <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            
                            stroke="currentColor"
                            className="w-6 h-6 mr-6"
                        >
                            <path
                                
                                
                                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                            />
                        </svg>
                    </span>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            
                            stroke="currentColor"
                            className="w-6 h-6 mr-6"
                        >
                            <path
                                
                                
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                            />
                        </svg>
                    </span> */}
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            
                            stroke="currentColor"
                            className="w-6 h-6 mr-6"
                        >
                            <path
                                
                                
                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
}