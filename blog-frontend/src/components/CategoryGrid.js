// import './CategoryGrid.css';

// const categories = ['Travel', 'Lifestyle', 'Food', 'Technology', 'Fitness', 'Finance'];

// const CategoryGrid = () => {
//   return (
//     <div className="category-grid">
//       {categories.map((cat, index) => (
//         <div key={index} className="category-card">
//           <h3>{cat}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CategoryGrid;



import './CategoryGrid.css';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Travel', image: '/images/travel.jpg' },
  { name: 'Lifestyle', image: '/images/lifestyle.jpg' },
  { name: 'Food', image: '/images/food.jpg' },
  { name: 'Technology', image: '/images/technology.jpg' },
  { name: 'Fitness', image: '/images/fitness.jpg' },
  { name: 'Finance', image: '/images/finance.jpg' },
];

const CategoryGrid = () => {
  return (
    <div className="category-grid">
      {categories.map((cat, index) => (
        <Link to={`/category/${cat.name.toLowerCase()}`} key={index} className="category-card">
          <img src={cat.image} alt={cat.name} />
          <h3>{cat.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;
