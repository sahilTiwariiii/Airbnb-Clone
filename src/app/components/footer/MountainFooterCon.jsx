'use client';
import React from 'react'
import { mountaindata } from './footerdata/mountaindata';
import Link from 'next/link';
import "./MountainFooterCon.css"
const MountainFooterCon = () => {
  return (
    <div className="niamiahey">
        
        {mountaindata.map((item)=>(
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

export default MountainFooterCon