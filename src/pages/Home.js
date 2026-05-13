import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import ProductCard from '../components/ProductCard';
import heroImage from '../assets/hero-section.jpeg';

function Home() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const q = query(collection(db, 'products'), where('featured', '==', true));
        const snap = await getDocs(q);
        const items = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setFeatured(items);
      } catch (error) {
        console.error('Erreur chargement produits mis en avant:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <>
      <section className="home-hero-only">
        <img src={heroImage} alt="Gloow by Amal" />
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Sélection</p>
              <h2>Meilleurs Produits</h2>
            </div>

            <Link to="/products" className="text-link">
              Tout voir
            </Link>
          </div>

          {loading ? (
            <p>Chargement...</p>
          ) : featured.length ? (
            <div className="products-grid sahar-products-grid">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p>Aucun produit en avant pour le moment.</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;