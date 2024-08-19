import { Button } from '../ui';
import React from 'react';

export const Header = () => {
  return (
    <div>
      <p>Home</p>
      <Button className='bg-primary-100 text-primary-300 ' variant='contained'>
        Click me
      </Button>
    </div>
  );
};
