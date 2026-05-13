import React, { useEffect, useMemo, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { Search } from 'lucide-react';
import { db } from '../firebase';
import ProductCard from '../components/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const PRODUCTS_PER_PAGE = 20;

  useEffect(() => {
    async function fetchProducts() {
      const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
      const snap = await getDocs(q);
      const data = snap.docs.map((docItem) => ({ id: docItem.id, ...docItem.data() }));
      setProducts(data);
      setLoading(false);
    }

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title?.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredProducts, page]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <section className="section premium-products-page">
      <div className="container">
        <div className="page-top premium-page-top">
          <div>
            <p className="eyebrow">Catalogue</p>
            <h1>Tous les produits</h1>
            <p className="catalogue-subtitle">
              Une sélection douce, féminine et raffinée pour votre routine glow.
            </p>
          </div>

          <div className="premium-search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={search}
              onChange={handleSearch}
              className="search-input"
            />
          </div>
        </div>

        {loading ? (
          <p>Chargement...</p>
        ) : (
          <>
            <div className="products-grid premium-products-grid">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination-premium">
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                  Précédent
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    className={page === index + 1 ? 'active-page' : ''}
                    onClick={() => setPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}

                <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
                  Suivant
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Products;