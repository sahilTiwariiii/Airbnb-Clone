'use client';
import Link from 'next/link';
import React from 'react';
import './SecondFooterContainer.css';

const SecondFooterContainer = () => {
	return (
        <>
        
      
		<div className="mainsecondfootercontainer">
			{/* 1st div Support */}
			<div className="firstdivofsecondfooter">
				<h2 className="supporttroppus">Support</h2>
				<div className="divlinkssknil">
					{/* Help Center */}
					<Link className="allsecondlinks helpcenter" href="/nothing">
						Help Center
					</Link>
					{/* AirCover */}
					<Link className="allsecondlinks aircover" href="/nothing">
						AirCover
					</Link>
					{/* Anti-discrimination */}
					<Link className="allsecondlinks antidesc" href="/nothing">
						Anti-discrimination
					</Link>
					{/* Disability support */}
					<Link className="allsecondlinks disability" href="/nothing">
						Disability support
					</Link>
					{/* Cancellation options */}
					<Link className="allsecondlinks cancelf" href="/nothing">
						Cancellation options
					</Link>
					{/* Report neighbourhood concern */}
					<Link className="allsecondlinks reportne" href="/nothing">
						Report neighbourhood concern
					</Link>
				</div>
			</div>
            {/* hr line */}
            <div className="dividerredividline"></div>

			{/* 2nd div Hosting */}
			<div className="seconddivofsecondfooter">
				<h2 className="supporttroppus">Hosting</h2>
				<div className="divlinkssknil">
					{/* Airbnb your home */}
					<Link className="allsecondlinks helpcenter" href="/nothing">
						Airbnb your home
					</Link>
					{/* AirCover for Hosts */}
					<Link className="allsecondlinks aircover" href="/nothing">
						AirCover for Hosts
					</Link>
					{/* Hosting resources */}
					<Link className="allsecondlinks antidesc" href="/nothing">
						Hosting resources
					</Link>
					{/* Community forum */}
					<Link className="allsecondlinks disability" href="/nothing">
						Community forum
					</Link>
					{/* Hosting responsibly */}
					<Link className="allsecondlinks cancelf" href="/nothing">
						Hosting responsibly
					</Link>
					{/* Join a free Hosting class */}
					<Link className="allsecondlinks reportne" href="/nothing">
						Join a free Hosting class
					</Link>
				</div>
			</div>
             {/* hr line */}
             <div className="dividerredividline"></div>
			{/* 3nd div Airbnb */}
			<div className="thirddivofsecondfooter">
				<h2 className="supporttroppus">Airbnb</h2>
				<div className="divlinkssknil">
					{/* Newsroom */}
					<Link className="allsecondlinks helpcenter" href="/nothing">
						Newsroom
					</Link>
					{/* New features */}
					<Link className="allsecondlinks aircover" href="/nothing">
						New features
					</Link>
					{/* Careers */}
					<Link className="allsecondlinks antidesc" href="/nothing">
						Careers
					</Link>
					{/* Investors */}
					<Link className="allsecondlinks disability" href="/nothing">
						Investors
					</Link>
					{/* Airbnb.org emergency stays */}
					<Link className="allsecondlinks cancelf" href="/nothing">
						Airbnb.org emergency stays
					</Link>
				</div>
			</div>
		</div>
          {/* hr line */}
          <div className="divideuniqueine"></div>
          </>
	);
};

export default SecondFooterContainer;
