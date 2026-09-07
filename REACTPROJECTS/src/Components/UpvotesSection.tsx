 import React from "react";
 const UpvotesSection = ({articleName,upvotes,setArticleInfo})=>{
  const upvoteArticle = async()=>{


        console.log("working")
       const result = await fetch(`http://localhost:9000/api/articles/${articleName}/upvote`,{
        //console.log("working")
           method:'POST',
       });
      
         const body = await result.json();
         console.log(body)
         setArticleInfo(body);
     };

     
    //  const result = await fetch(`/api/articles/${articleName}/upvote`, {
    //      method: 'POST', // standard convention uses uppercase
    //  });

return(
         <div id="upvotes-section">
           {/* <button onClick={upvoteArticle}></button> */}
          
           {/* <button onClick={()=>upvoteArticle()}>Add Upvotes</button> 
           <p>This post has been upvoted {setarticleInfo.upVotes}times</p>*/}  
         </div>
)};
 //};

 export default UpvotesSection;





    
