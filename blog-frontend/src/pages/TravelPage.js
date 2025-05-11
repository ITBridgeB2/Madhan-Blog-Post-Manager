// // Example: TravelPage.js
// import { useNavigate } from 'react-router-dom';

// const TravelPage = () => {
//   const navigate = useNavigate();

//   const handleCreatePost = () => {
//     navigate('/create?category=Travel');
//   };

//   return (
//     <div style={{ padding: '40px' }}>
//       <h2>Travel Blogs</h2>
//       <button onClick={handleCreatePost} style={{
//         padding: '10px 20px', margin: '20px 0', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px'
//       }}>
//         Create New Travel Post
//       </button>
//       {/* Placeholder for listing posts */}
//       <p>Coming soon: List of travel posts...</p>
//     </div>
//   );
// };

// export default TravelPage;





// src/pages/TravelPage.js
import React from 'react';
import './CategoryPage.css'; // optional for styling

const TravelPage = () => {
  const handleAddBlog = () => {
    // In real app, navigate to create blog form or open modal
    alert('Redirecting to create new Travel blog...');
  };

  return (
    <div className="category-page">
      <h1>✈️ Travel Blogs</h1>
      <p>Discover and share your travel adventures!</p>

      <div className="add-blog-section">
        <button className="add-blog-button" onClick={handleAddBlog}>
          + Add New Blog
        </button>
      </div>

      <div className="blog-list">
        {/* Future: Replace with real data */}
        <div className="blog-card">
          <h3>My Trip to Bali</h3>
          <p>Amazing beaches, food, and culture!</p>
        </div>
        <div className="blog-card">
          <h3>Exploring the Swiss Alps</h3>
          <p>A snowy adventure with breathtaking views.</p>
        </div>
      </div>
    </div>
  );
};

export default TravelPage;
