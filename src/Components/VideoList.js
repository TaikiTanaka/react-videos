import VideoItem from './VideoItem'
import React from 'react';

const VideoList = ({videos, onVideoSelect}) => {
  const listVideos = videos.map(vid => <VideoItem 
      onVideoSelect={onVideoSelect}
      key={vid.id.videoId}
      video={vid}
      />)
  return(
    <div className='ui relaxed divided list'>{listVideos}</div>
  )
}

export default VideoList;