import React from 'react'
import { VideoContainer, ResponsiveIframe } from './styles'

function YouTubeIframeResponsive({ youtubeID }) {
  const image = `https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`

  return (
    <VideoContainer>
      <ResponsiveIframe
        title="Titulo do Iframe"
        src={image}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  )
}

export default YouTubeIframeResponsive