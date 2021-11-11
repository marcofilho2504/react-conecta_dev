import React, { createContext, useState } from 'react';

export const PostContext = createContext();

export  function PostProvider({children}) {
    const [image, setImage] = useState(null);
    const [Title, setTitle] = useState('');
    const [Tags, setTags] = useState([]);
    const [MarkdownText, setMarkdownText] = useState('');

    const handleChangeTitle = ( event ) => {
        setTitle(event.currentTarget.value);
    };

    const handleTagsChange = ( event, values ) => {
        setTags(values);
    };

    const handleMarkdownTextChange = (event) => {
        setMarkdownText(event.currentTarget.value);
    };

    return (
        <PostContext.Provider value = {{
                image,
                setImage,
                Title,
                setTitle: handleChangeTitle,
                Tags,
                setTags: handleTagsChange,
                MarkdownText,
                setMarkdownText: handleMarkdownTextChange
            }}
        > 
        
            {children} 
        
        </PostContext.Provider>
    );
}