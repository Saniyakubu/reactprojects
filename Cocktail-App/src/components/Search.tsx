import React from 'react';
import { Button } from '@mui/material';
function Search() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className=" text-center mt-10">
      <input type="text" />
      <Button>search</Button>
    </form>
  );
}

export default Search;
