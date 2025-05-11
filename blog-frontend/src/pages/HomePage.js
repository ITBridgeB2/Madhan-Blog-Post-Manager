import Navbar from '../components/Navbar';
import CategoryGrid from '../components/CategoryGrid';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '40px' }}>
        <h2 style={{ textAlign: 'center' }}>Explore Blog Categories</h2>
        <CategoryGrid />
      </div>
    </>
  );
};

export default HomePage;
