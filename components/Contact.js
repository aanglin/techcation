import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full  p-4 py-16'>
      <h2 className='text-center text-gray-400 text-4xl'>Send us a message</h2>
      <p className='text-center text-gray-400 py-2 text-3xl'>We're Excited!</p>
      <div className='grid md:grid-cols-2'>
        <img
          src='https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
          alt='/'
          className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'
        />
        <form>
          <div className='grid grid-cols-2'>
            <input className='border border-gray-400 m-2 p-2' type='text' placeholder='First' />
            <input className='border border-gray-400 m-2 p-2' type='text' placeholder='Last' />
            <input className='border border-gray-400 m-2 p-2' type='email' placeholder='Email' />
            <input className='border border-gray-400 m-2 p-2' type='tel' placeholder='Phone' />
            <input className='border border-gray-400 col-span-2 p-2 m-2' type='text' placeholder='Address' />
            <textarea className='border border-gray-400 col-span-2 m-2 p-1' cols='30' rows='10'></textarea>
            <button className='col-span-2 m-2'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;