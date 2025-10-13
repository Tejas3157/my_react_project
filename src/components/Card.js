import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Card() {
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchCats = async () => {
            try {
                const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10');
                setCats(response.data); 
            } catch (err) {
                console.error('Error Fetching Cats:', err);
                setError('Failed to fetch cats. Please try again later.'); 
            } finally {
                setLoading(false); 
            }
        };

        fetchCats();
    }, []); 

    
    if (loading) {
        return <div className="text-center py-5"><h2>Loading Cats... 🐾</h2></div>;
    }

    
    if (error) {
        return <div className="text-center py-5 text-danger"><h2>{error}</h2></div>;
    }

    
    return (
        <div className="container py-5">
            <header className="text-center mb-5">
                <h1 className="gallery-title">🐱 🐾 Perfect Cat Gallery 🐾 🐱</h1>
                <p className="lead text-muted">A collection of adorable cats from the internet!</p>
            </header>

            <div className="row g-4">
                {cats.map(cat => (
                    <div key={cat.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card cat-card">
                            <img src={cat.url} className="cat-card-img" alt="A cute cat" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card
