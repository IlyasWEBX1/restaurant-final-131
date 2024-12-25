import React, { useState, useEffect } from 'react';
import '../index.css';

const Header = ({ onChangeComponent }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState([]);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_PUBLIC_API_URL}/api/profile/`);
                const data = await response.json();
                setProfile(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };

        fetchProfile();
    }, []);

    // Assuming profile[0] is the correct data object for the profile
    const logo = profile.length > 0 ? profile[0].logo : 'fallback-image-url.png';

    return (
        <footer className="bg-gray-800 px-6 py-12">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex pb-8">
                    <div className="flex flex-grow">
                        <div>
                            {/* Use the logo from the profile state */}
                            <img className="w-52" alt="logo" src={logo} />
                        </div>
                    </div>
                    <div className="flex space-x-12">
                        <div className="flex flex-col space-y-2">
                            <span className="text-white poppins">About Online Food</span>
                            <span className="text-white poppins">Read our blog</span>
                            <span className="text-white poppins">Sign up to deliver</span>
                            <span className="text-white poppins">Add your restaurant</span>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <span className="text-white poppins">About Online Food</span>
                            <span className="text-white poppins">Read our blog</span>
                            <span className="text-white poppins">Sign up to deliver</span>
                            <span className="text-white poppins">Add your restaurant</span>
                        </div>

                        <div className="flex flex-col space-y-2">
                            {loading ? (
                                <p>Loading...</p>
                            ) : (
                                profile.length > 0 && (
                                    <>
                                        {/* Assuming profile[0] has the data you want to display */}
                                        <span className="text-white poppins"><a href={profile[0].facebook}>Facebook</a></span>
                                        <span className="text-white poppins"><a href={profile[0].instagram}>Instagram</a></span>
                                        <span className="text-white poppins"><a href={profile[0].twitter}>Twitter</a></span>
                                    </>
                                )
                            )}
                        </div>
                    </div>

                </div>
                <div className='flex items-center pt-8'>
                    <div className='flex flex-grow'>
                        <span class="poppins text-gray-500 font-semi-bold text-4lg">Developed by 💗 Ilyas Wahyu Bharata</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Header;
