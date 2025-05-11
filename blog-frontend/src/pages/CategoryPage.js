import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { categoryName } = useParams();

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>{categoryName.toUpperCase()} Blog Posts</h2>
      <p>Here you can show blog posts under {categoryName} category.</p>
      {/* Later: Filter posts from backend based on category */}
    </div>
  );
};

export default CategoryPage;
