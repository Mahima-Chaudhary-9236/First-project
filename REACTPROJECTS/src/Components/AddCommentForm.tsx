import { useState } from 'react';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
    console.log("BUTTON CLICKED");
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const [nameError, setNameError] = useState('');
    const [commentError, setCommentError] = useState('');

    const addComment = async () => {
        setNameError('');
        setCommentError('');

        if (username.trim() === '') {
            setNameError('Please enter your name');
            return;
        }

        if (commentText.trim() === '') {
            setCommentError('Please enter your comment');
            return;
        }

        if (commentText.trim().length < 3) {
            setCommentError('Comment must be at least 3 characters long');
            return;
        }

        if (commentText.trim().length > 30) {
            setCommentError('Comment must not exceed 30 characters');
            return;
        }

        try {
            const result = await fetch(`/api/articles/${articleName}/add-comment`, {
                method: 'post',
                body: JSON.stringify({ username: username, text: commentText }),
                headers: {
                    'Content-type': 'application/json',
                }
            });
            const body = await result.json();
            console.log("BODY FROM SERVER:", body);
            setArticleInfo(body);
            
            setUsername('');
            setCommentText('');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id="add-comment-form" className="comment-card">
            <h3>Add a Comment :</h3>
            <br/>
            <label>
                Name :
                <input 
                    type="text" 
                    value={username} 
                    onChange={(event) => setUsername(event.target.value)}
                />
                {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
            </label>
            <br/>
            <label>
                Comment:
                <textarea 
                    rows="4" 
                    cols="50" 
                    value={commentText} 
                    onChange={(event) => setCommentText(event.target.value)}
                />
                {commentError && <p style={{ color: 'red' }}>{commentError}</p>}
            </label>
            <button onClick={() => addComment()}>ADD Comment</button>
        </div>
    );
}

export default AddCommentForm;
