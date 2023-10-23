import React, { useState } from 'react'
import { Link } from "react-router-dom";
import viteLogo from '../assets/vite.svg'
import reactLogo from '../assets/react.svg'
import reactRouterLogo from '../assets/react-router.svg'
import tsLogo from '../assets/typescript.svg'
import tailwindLogo from '../assets/tailwind.svg'


export default function Root() {
    const [count, setCount] = useState(0)

    return (
        <React.Fragment>
            <div className="flex flex-row justify-center">
                <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="h-20 m-7 hover:drop-shadow-2xl" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="h-20 m-7 hover:drop-shadow-2xl animate-spin-slow" alt="React logo" />
                </a>
                <a href="https://reactrouter.com/" target="_blank">
                <img src={reactRouterLogo} className="h-20 m-7 hover:drop-shadow-2xl" alt="React Router logo" />
                </a>
                <a href="https://www.typescriptlang.org/" target="_blank">
                <img src={tsLogo} className="h-20 m-7 hover:drop-shadow-2xl" alt="TypeScript logo" />
                </a>
                <a href="https://tailwindcss.com/" target="_blank">
                <img src={tailwindLogo} className="h-20 m-7 hover:drop-shadow-2xl" alt="Tailwind CSS logo" />
                </a>
            </div>

            <div className="p-2">
                <h1>Vite w/ SWC + React + React-Router + TypeScript + Tailwind</h1>
            </div>
            
            <div className="p-2">
                <p>Click on the Vite and React logos to learn more</p>
            </div>

            <div className="p-2">
                <button onClick={() => setCount((count) => count + 1)} type="button" className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                count is {count}
                </button>
            </div>

            <div className="p-2">
                <p>Edit <code>src/routes/root.tsx</code> and save to test HMR</p>
            </div>

            <Link to={'about'}><button  type="button" className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">To About Page</button></Link>
        </React.Fragment>
    )
}