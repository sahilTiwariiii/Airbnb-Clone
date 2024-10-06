// so we have to make this file because 'layout.js' is server side  file and 'Provider' is client side so we cannot direct wrap that Provider into the Layout.js file because it is server side file and Provider is client side so it will through error if we direclty warp that provider into layout.js so for that we had to make this component so that that error will no came 

// kyu hum layout.js me direct Provider se wrap nahi kar sakte hai kyu ek paragraph me samjho in hindi?

// Ans) Hum `layout.js` me direct `Provider` se isliye wrap nahi kar sakte kyunki Next.js 14 me server-side rendering aur client-side rendering alag hoti hai. Redux ka `Provider` client-side pe kaam karta hai, lekin `layout.js` server-side bhi run hota hai. Agar hum direct `Provider` ko server-side pe use karenge to Next.js me "use client" directive ki zarurat hoti hai, jo sirf client-side components pe lagti hai. Isliye hum Redux ke liye ek alag `ReduxProvider.js` file banate hain, jisme "use client" directive laga kar client-side rendering ko ensure karte hain.

'use client'; 

import React from 'react'
import { store } from './store/store';
import { Provider } from 'react-redux';

const ReduxtoolkitProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxtoolkitProvider