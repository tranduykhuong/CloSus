import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const photo = useSelector((state) => state.photos);
  console.log(photo);

  return (
    <div>
      HOME
    </div>
  );
};

export default Home;
