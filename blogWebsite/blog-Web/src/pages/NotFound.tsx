import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  function backHome() {
    navigate('/');
  }
  return (
    <div className="container mx-auto flex justify-center items-center flex-col gap-4">
      <h1 className="text-3xl font-bold mt-12">Not Found 404</h1>
      <Stack spacing={2} direction="row" className="m-3">
        <Button variant="outlined" onClick={backHome}>
          Back To Home
        </Button>
      </Stack>
    </div>
  );
}

export default NotFound;
