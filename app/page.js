import Link from 'next/link';
import React from 'react'

const App = () => {
  return (
    <div>
      <h1 className=" text-5xl mb-8 font-bold">Next-js</h1>
      <Link href="counter" className=' btn btn-accent'>Start</Link>
    </div>
  );
}

export default App
