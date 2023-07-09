import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
/* type searchProp = {
    setSearch: React.Dispatch<React.SetStateAction<string>
}
 */

type searchProp = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

function Search({ setSearch, search }: searchProp) {
  function update(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className=" text-center mt-10">
      <Box
        component="div"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        className=" bg-white p-7 shadow-lg w-1/3 mx-auto"
      >
        <TextField
          id="outlined-basic"
          label="Search Drink"
          variant="outlined"
          size="medium"
          value={search}
          onChange={update}
          className=" w-fit"
        />
      </Box>
    </form>
  );
}

export default Search;
