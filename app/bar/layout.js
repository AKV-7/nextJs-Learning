import Image from 'next/image';
import React from 'react'

const BarLayout = ({children}) => {
  return (
    <div>
      <div className=" hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          
          <Image
            src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           width={600} height={400}
            className=" max-w-sm lg:max-w-sm lg:shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Welcome to our Bar </h1>
            <p className="py-6"> Grab your Drinks and set the mood! </p>
            <button className="btn btn-primary">Let's get some</button>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}

export default BarLayout
