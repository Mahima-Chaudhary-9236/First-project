import React from 'react';
import article from "../pages/article-content";
import {Link} from "react-router-dom";
// const ArticleList = ({articles}) =>(
const ArticleList = (props) =>{
let article_to_display =  props.articles !=null ?  props.articles : article;
 return <>
     <div
    style={{
      display:"flex",
      
      flexWrap:"wrap",
      justifyContent:"flex-start",
      gap:"20px",
      // marginBottom:"40px",
      // alignItems:"center",
      borderRadius:"15px",
      padding:"20px",
    // border:"2px solid #ddd",
     marginTop:"40px",

      
    }}
    >
      
    <h2 
    style={{
      color:"darkblack.",
     
    }}> 
    More Article</h2>
    <div
    style={{
      
      display:"grid",
      flexWrap:"wrap",
      gridTemplateColumns:"repeat(2, 1fr)",
      justifyContent:"center",
      gap:"20px"
    }}
      >
    {
      
        article_to_display.map((articles,key)=>(
            <Link className="article-list-item" key={key} to={`/article/${articles.name}`}
            
        style={{
            backgroundColor:"lightgray",
            padding:"20px",
           // margin:"20px 0",
            borderRadius:"15px",
            textDecoration:"none",
            color:"black",
           // display:"block",
           // border:"2px solid #ddd",
            //marginLeft:"70px",
           // width:"300px",
           // border:"2px solid",
           minHeight:"250px",
        }}
        >
                <h3
                  style={{
                   
                    fontSize:"30px",
                   // margin:"15px",
                    marginBottom:"15px",
                    marginTop:"0px",
                    color:"darkblack"

                  }}
                >{articles.title}</h3>
                
                <p
                  style={{
                   textAlign:"left",
                    fontSize:"20px",
                     lineHeight:"1.6",
                     color:"white"
                    
                  }}
                >{articles.content[0].substring(0,150)}....</p>
              
            
            </Link>
        ))}
      </div>
    </div>
  </>
};
export default ArticleList;




      

     
//      >
//     {
//         Array.isArray(articles) && articles.map((article,key)=>(
//             <Link className="article-list-item" key={key} to={`/article/${article.name}`}
            
//         style={{
//             backgroundColor:"lightgray",
//             padding:"20px",
//            // margin:"20px 0",
//             borderRadius:"15px",
//             textDecoration:"none",
//             color:"black",
//            // display:"block",
//            // border:"2px solid #ddd",
//             //marginLeft:"70px",
//            // width:"300px",
//            // border:"2px solid",
//            minHeight:"250px",
//         }}
//         >

     
             
//                 <h3
//                   style={{
                   
//                     fontSize:"30px",
//                    // margin:"15px",
//                     marginBottom:"15px",
//                     marginTop:"0px",
//                     color:"black"

//                   }}
//                 >{article.title}</h3>
                
//                 <p
//                   style={{
//                    textAlign:"left",
//                     fontSize:"20px",
//                      lineHeight:"1.6",
//                      color:"white"
                    
//                   }}
//                 >{article.content?.[0]?.substring(0,150)}....</p>
            
//             </Link>
//         ))}
//       </div>
//     </di
