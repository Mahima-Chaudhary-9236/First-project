import React, { useState } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from 'axios';

const CommentsList = ({ comments, setComments ,articleName }) => {
    const [editingIndex, setEditingIndex] = useState(null);
    const [editText, setEditText] = useState("");

    const deleteComment = async (commentToDelete) => {
        try {
            const response = await fetch(
                `/api/articles/${articleName}/delete-comment`,
                {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: commentToDelete.username,
                        text: commentToDelete.text
                    })
                }
            );
            const data = await response.json();
            if (!response.ok) {
                alert(data.message);
                return;
            }
            setComments(data.comments);
        } catch (error) {
            console.log(error);
        }
    };
    
    const updateComment = async (index) => {
        try {
            const updatedPayload = {
                commentIndex: index,
                text: editText
            };
        
            // Syntax axios.put(url, data, { headers });
                    const response = await axios.put(
                `/api/articles/${articleName}/edit-comment`, 
                updatedPayload,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
                    const data = await response.data();
                    
                    setComments(data.comments);
                    setEditingIndex(null);
        } catch (error) {
            if (axios.isAxiosError(error)) {
            console.log(error.response?.data?.message || "An error occurred");
        } 
    };
    };
    
    return (
        <>
            <h3>Comments:</h3>
            {comments.map((comment, index) => (
                <div className="comment" key={index}>
                    
                    <div className="comment-header">
                        <h4>{comment.username}</h4>
                        <div className="comment-buttons">
                            <button onClick={() => { 
                                setEditingIndex(index);
                                setEditText(comment.text);
                            }}>
                                <FaEdit />
                            </button>
                            <button onClick={() => deleteComment(comment)}>
                                <FaTrash />
                            </button>

                             
                    </div>
                    </div>
                    
                    <p>{comment.text}</p>
                    
                    {editingIndex === index && (
                        <div>
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                            <button onClick={() => updateComment(index)}>
                                Save
                            </button> 
                        </div>
                    )}

                </div>
            ))}
        </>
    );
};
// const CommentsList = ({ comments, setComments ,articleName }) => {
//     const [editingIndex, setEditingIndex] = useState(null);
//     const [editText, setEditText] = useState("");

//     const deleteComment = async (commentToDelete) => {
//         try {
//             const response = await fetch(
//                 `/api/articles/${articleName}/delete-comment`,
//                 {
//                     method: 'DELETE',
//                     headers: {
//                         'content-type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         username: commentToDelete.username,
//                         text: commentToDelete.text
//                     })
//                 }
//             );
//             const data = await response.json();
//             if (!response.ok) {
//                 alert(data.message);
//                 return;
//             }
//             setComments(data.comments);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const updateComment = async (index) => {
//         try {
//             const response = await fetch(`/api/articles/${articleName}/edit-comment`, {
//                 method: 'PUT',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     commentIndex: index,
//                     text: editText
//                 })
//             });
//             const data = await response.json();
//             if (!response.ok) {
//                 alert(data.message);
//                 return;
//             }
//             setComments(data.comments);
//             setEditingIndex(null);
//         } catch (error) {
//             console.log(error);
//         }
//     };
    
//     return (
//         <>
//             <h3>Comments:</h3>
//             {comments.map((comment, index) => (
//                 <div className="comment" key={index}>
                    
//                     <div className="comment-header">
//                         <h4>{comment.username}</h4>
//                         <div className="comment-buttons">
//                             <button onClick={() => { 
//                                 setEditingIndex(index);
//                                 setEditText(comment.text);
//                             }}>
//                                 <FaEdit />
//                             </button>
//                             <button onClick={() => deleteComment(comment)}>
//                                 <FaTrash />
//                             </button>

                             
//                     </div>
//                     </div>
                    
//                     <p>{comment.text}</p>
                    
//                     {editingIndex === index && (
//                         <div>
//                             <input
//                                 type="text"
//                                 value={editText}
//                                 onChange={(e) => setEditText(e.target.value)}
//                             />
//                             <button onClick={() => updateComment(index)}>
//                                 Save
//                             </button> 
//                         </div>
//                     )}

//                 </div>
//             ))}
//         </>
//     );
// };

export default CommentsList;
