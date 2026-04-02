import React, { useEffect } from 'react'

function PageTitleChange({title}) {
  useEffect(()=>{
    document.title = `${title} | Flug`
  }, [title])
}

export default PageTitleChange