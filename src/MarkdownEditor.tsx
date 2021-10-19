import React, { useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');

  return(
      <SimpleMDE onChange={(e) => setMarkdown(e)}/>
  )
}

export default MarkdownEditor;
