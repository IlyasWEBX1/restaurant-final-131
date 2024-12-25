import logo from '../logo.svg';
import '../index.css'
import { useEffect, useState } from 'react';

function OpeningHour() {
    const [OpeningHour, setOpeningHour] = useState([]);
    const [openQuestion, setOpenQuestion] = useState(null); //

    useEffect(() => {
        const fetchOpeningHour = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_PUBLIC_API_URL}/api/opening-hour/`);
                const data = await response.json();
                setOpeningHour(data);
            } catch (error) {
                console.error("Error fetching restaurants:", error);
            }
        };

        fetchOpeningHour();
    }, []);
    const toggleCollapse = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <div className="page-container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative pt-10 pb-6 lt:-mt-5 lt:pb-0 lt:pt-[110px] lt:h-[514px] lz:h-[544px] xl:h-[564px] xxl:h-[724px] bg-white">
                        <div id="page">
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex-none w-full flex-auto">
                                    <div className="support-section">
                                        <div className="support-header-container">
                                            <div className="support-header-text text-center">
                                                <h1 className="page-header text-4xl text-green-700 text-center font-bold">
                                                    Working Hours
                                                </h1>
                                                <p className="text-md md:text-md pt-4 mb-0 text-center">
                                                    Want to order or eat out? Take a look at our serving hour
                                                </p>
                                                <div className="container shadow-lg max-w-2xl mx-auto px-4 pt-10 pb-10 bg-green-700">
                                                    <div className="section-accordion clearfix mt-3">
                                                        <div
                                                            className="panel-group"
                                                            role="tablist"
                                                            aria-multiselectable="true"
                                                            id="accordion"
                                                        >
                                                            {OpeningHour.map((OpeningHour, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="border border-gray-300 rounded shadow-lg bg-white w-256 mb-10"
                                                                >
                                                                    <div className="support-qa" role="tab">
                                                                        <h3 className="panel-title">
                                                                            <button
                                                                                className="bg-transparent border-none pl-0 text-left w-full text-green-700 text-xl font-bold pl-4"
                                                                                data-toggle="collapse"
                                                                                href="#collapse0"
                                                                                aria-expanded="true"
                                                                                aria-controls="collapse0"
                                                                                onClick={() => toggleCollapse(index)}
                                                                                type="button"
                                                                            >
                                                                                {OpeningHour.day}
                                                                            </button>
                                                                            {openQuestion == index ? (
                                                                                <span
                                                                                    className="toggleswitch cursor-pointer"
                                                                                    onClick={() => toggleCollapse(index)}
                                                                                >
                                                                                    Hide
                                                                                </span>
                                                                            ) : (
                                                                                <span
                                                                                    className="toggleswitch cursor-pointer"
                                                                                    onClick={() => toggleCollapse(index)}
                                                                                >
                                                                                    Show More
                                                                                </span>
                                                                            )}
                                                                        </h3>
                                                                    </div>
                                                                    {openQuestion == index && (
                                                                        <div
                                                                            className="transition duration-300 ease-in-out panel-collapse p-4 bg-gray-100 border border-gray-300 rounded"
                                                                            role="tabpanel"
                                                                        >
                                                                            <p>
                                                                                {OpeningHour.opening_time}-
                                                                                {OpeningHour.closing_time}
                                                                            </p>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OpeningHour;
