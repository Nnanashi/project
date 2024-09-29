import './Appmeight.css'
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// RestApiのアクセス先（app_id=3のみ使用）GET https://testservice1.microcms.io/api/v1/profile
// X-MICROCMS-API-KEY=8EKSLz6sXcJhT1NygqPjvtFFhn89aM5evV4f

function App() {
  return (
    <>
      <BusinessTwoToneIcon style={{ fontSize: 80 }} /><h1 >名刺アプリ Meight</h1>
      <p className="read-the-docs">
        マイページ
      </p>
      <div className='button'>
        <TextField
          sx={{ "& .MuiInputBase-input": { height: 50 }, width: 500 }}
          placeholder="文字を入力"
          multiline
          rows={1}
        />
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>
      </div>
    </>
  )
}

export default App
