import {useEffect, useState }from'react';
import { useParams } from 'react-router-dom';

import articleContent from './article-content';
import ArticleList from './ArticleList';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../Components/CommentsList';
import UpvotesSection from '../Components/UpvotesSection';
import AddCommentForm from '../Components/AddCommentForm';
const ArticlePage = () => {
 const { name } = useParams();
 const article = articleContent.find(articles=>articles.name===name);
 const otherArticles = articleContent.filter(article=>article.name !==name);
    


    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, downvotes:0,comments:[]});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
           setArticleInfo(body);
        }
        fetchData();
    }, [name]);
    if (!article) return <NotFoundPage/> 
    return (

        <>
      
            <div
                style={{
                    padding: "20px",
                    maxWidth: "900px",
                    margin: "auto",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                }}
            >
                <h1
                    style={{
                        marginTop: "10px",
                        color: "block",
                        fontSize: "25px"

                    }}
                >{article?.title}</h1>
                <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
                {/* <p>This post has been upvoted {articleInfo.upvotes}times</p> */}
                {/* <button */}
                {/* style={{ 
    
     >
          {/* 🚀Fronted   
        </button>  */}
                <div
                    style={{
                        backgroundColor: "#E8eaeb",
                        //border:"2px solid gray",
                        borderRadius: "10px",
                        padding: "20px",
                        margin: "20px",
                    }}
                >

                    {article?.content.map((paragraph, key) => (
                        <p
                            key={key}
                            style={{
                                // backgroundColor:"rgb(222, 216, 223)",

                                textAlign: "justify",
                                color: "#555",

                                marginBottom: "15px",
                                lineHeight: "1.8"

                            }}
                        >{paragraph}</p>
                    ))}

                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <h4
                        style={{
                            margin: "40px",
                            marginTop: "15px"
                        }}
                    >✨Did you Enjoy article</h4>
                    <button
                        style={{
                            backgroundColor: "green",
                            color: "White",
                            border: "none",
                            padding: "10px 15px",
                            borderRadius: "5px",
                            marginRight: "10px",
                        }}
                        
                      onClick={async () => {
                      const result = await fetch(
                     `http://localhost:9000/api/articles/${name}/upvote`,
                   {
                       method: "POST",
                     }
                     );

                    const body = await result.json();

                      setArticleInfo(body);
                      
                    }}
                >
                    👍 
                        {articleInfo.upvotes}
                    </button>
                    <button
                        style={{
                            backgroundColor: "red",
                            color: "white",
                            border: "none",
                            padding: "10px 15px",
                            borderRadius: "5px",
                        }}
                        onClick={async () => {
                      const result = await fetch(
                     `http://localhost:9000/api/articles/${name}/downvotes`,
                   {
                       method: "POST",
                     }
                     );

                    const body = await result.json();

                      setArticleInfo(body);
                    }}
                    >
                        {articleInfo.downvotes}
                        
                        👎 
                    </button>

                </div>
                 
                   <CommentsList
                     comments={articleInfo.comments} 
                      setComments={(updatedComments) =>
                    setArticleInfo({
                        ...articleInfo,
                        comments:updatedComments
                    })
                    
                
                      }
                            articleName={name}
                    />
 
                  {/* <CommentsList comments={articleInfo.comments}/> */}
                  <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
                   <ArticleList article={otherArticles}/>
              
                
       
                 
                </div>
        </> 

    )
};
export default ArticlePage;

