"use client"

import React from 'react'

const MediaItem = ({name,image,author}) => {
  return (
    <div>
        <p>{name}</p>
        <p>{image}</p>
        <p>{author}</p>

    </div>
  )
}

export default MediaItem