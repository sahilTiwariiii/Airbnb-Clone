'use client';  // This enables client-side rendering in Next.js 14

import React, { useState } from 'react';  // Import useState to manage the active category state
import './Categories.css';
import { useRouter } from 'next/navigation';  // Import useRouter to manipulate the URL
import { categoriesuniquedata } from './categoriesdataunique';  // Assuming you have data imported

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);  // State to track the active category
  const router = useRouter();  // Initialize the Next.js router

  const handleClick = (category) => {
    setActiveCategory(category.id);  // Set the clicked category as active
    
    // Update the URL with the selected category (e.g., ?category=beach)
    router.push(`/?category=${category.label.toLowerCase()}`);
  };

  return (
    <div className="maincategories-container">
      {categoriesuniquedata.map((category) => (
        <div 
          className={`category-item ${activeCategory === category.id ? 'active' : ''}`}  // Add 'active' class when clicked
          key={category.id}
          onClick={() => handleClick(category)}  // Call handleClick on category click
        >
          <div className="category-icon">
            <category.icon 
              className='icon' 
              color={activeCategory === category.id ? '#000' : '#6A6A6A'}  // Change icon color when active
              size={24} 
              width={24} 
            />
          </div>
          <h1 className="category-label">
            {category.label}
          </h1>
        </div>
      ))}
    </div> 
  );
};

export default Categories;
