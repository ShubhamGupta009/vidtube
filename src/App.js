import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Box } from '@mui/system';
import Navbar from './Component/Navbar';
import Feed from './Component/Feed';
import VideoDetail from './Component/VideoDetail';
import SearchFeed from './Component/SearchFeed';
import ChannelDetail from './Component/ChannelDetail';

const App = () => {
  return (
    <div>
        <Router>
            
            <Box sx={{backgroundColor:'#000'}}>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Feed />} />
                    <Route exact path='/video/:id' element={<VideoDetail />} />
                    <Route exact path='/channel/:id' element={<ChannelDetail />} />
                    <Route exact path='/search/:searchTerm' element={<SearchFeed />} />
                </Routes>
            </Box>
        </Router>
    </div>
  )
}

export default App
