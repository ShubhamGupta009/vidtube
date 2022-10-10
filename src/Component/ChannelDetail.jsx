import React,{useState, useEffect} from 'react';
import {Box} from '@mui/material';
import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { useParams } from 'react-router-dom';
import {fetchFromApi} from '../utils/fetchFromApi'

const ChannelDetail = () => {
  const {id} = useParams();
  //console.log(id);
  const [channelDetail,setChannelDetail] = useState(null);
  const[videos,setVideos] = useState([])
  useEffect(()=>{
    const fetchData = async() =>{
      const data = await fetchFromApi(`channels?part=snippet&id=${id}`)
      setChannelDetail(data?.items[0]);
      const videoData = await fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      setVideos(videoData?.items)
    }
    fetchData();
  },[id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{height:'250px',
      background:'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
      zIndex:10,}} />
      <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
