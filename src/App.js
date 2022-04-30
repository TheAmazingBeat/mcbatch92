// import logo from './logo.svg';
import './App.css';
import {Container, Box} from '@mui/material'
import ImageGallery from 'react-image-gallery';
import { photos } from './photos2';
import Navbar from './Navbar';

// const BasicRows = () => <Gallery photos={photos} />;
function App() {
  return (
    // <div className="App">
    //   <BasicRows/>
    // </div>
    <Container>
      <Box>
        <Navbar />
      </Box>
      <Box>
        {/* <BasicRows/> */}
        <ImageGallery items={photos}/>
      </Box>
    </Container>
  );
}

export default App;
