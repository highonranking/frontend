import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full bg-transparent  shadow-md px-12 flex items-center justify-between z-20">
      
      <img className="w-28" src='assets/logo.png' alt="Logo" />

     <div className="border-[0.2px] border-slate-50 ">
        <h2 className='text-2xl px-8 py-3 font-extrabold
         text-white'>☰</h2>
        
     </div>
    </div>
  );
}

export default Navbar;
