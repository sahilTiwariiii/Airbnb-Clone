'use client';

import Link from 'next/link';
import React from 'react'
import "./CategoriesFooter.css"
import { categorydata } from './footerdata/categoriesdata';

const CategoriesFooter = () => {
  return (
    <div className="niamiahey">
    {categorydata.map((item)=>(
       <>
       <div key={item.id} className="bougnfjg">
       <Link className="linkssknilrut" href="/f">
                       {item.linkcontent}
                   </Link>
                   <h3 className="tepyldneirf">{item.htagdata}</h3>
       </div>
       </>
    ))}
           
           
           </div>
  )
}

export default CategoriesFooter