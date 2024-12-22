import logo from '../logo.svg';
import '../index.css'
import { useEffect, useState } from 'react';

function About() {
    const [FAQ, setFAQ] = useState([]);

    useEffect(() => {
        const fetchFAQ = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/faq/`);
                const data = await response.json();
                setFAQ(data);
            } catch (error) {
                console.error("Error fetching restaurants:", error);
            }
        };

        fetchFAQ();
    }, []);
    return (
        <div id='react_0HN905CVP8J15' data-hypernova-key="SupportPage" data-hypernova-id="5a611ada-2fc6-4131-8d58-e2297714c613">
            <div className='container'>
                <div className='bg-white mt-5'></div>
            </div>
        </div>
    );
}

export default About;
