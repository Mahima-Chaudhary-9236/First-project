import React from 'react';

const AboutPage = () =>(
    <>
    <div className='about-page'
        style={{
            backgroundColor:"lightgray",
            padding: "20px",
            borderRadius:"10px",
            margin:"10px",
           // border:"2px solid gray",
            //width:"100%",
            boxShadow:"0 4px rgba(0 ,0 ,0 0.1)",
            marginBottom:"20px",
        }}
        >
    <h1 
       style={{
        color:"black",
        fontSize:"45",
        textAlign:"center",
        fontWeight:"bold",
        marginBottom:"20px",
       }}
    >AboutPage</h1>
    <p 
       style={{
        color:"black",
        fontSize:"20px",
        textAlign:"justify",
        
       }}
    >
        There are many variations of passages of Lorem Ipsum available,
         but the majority have suffered alteration in some 
         form, by injected humour, or randomised words which
          don't look even slightly believable
    </p>
    <br/>
    <p
        style={{
        color:"black",
        fontSize:"20px",
        
       }}
    >
        Contrary to popular belief, Lorem Ipsum is not simply
         random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old.
           Richard McClintock, a Latin professor at Hampden-Sydney
        Latin words, consectetur, from a Lorem Ipsum passage, 
        
    </p>
    <br/>
    <p 
       style={{
        color:"black",
        fontSize:"20px",
        
       }}
    >
        The standard chunk of Lorem Ipsum used since 1966 is reproduced
         below for those interested. Sections 1.10.32 and 1.10.33
          from "de Finibus Bonorum et Malorum" by Cicero are also
           reproduced in their exact original form, accompanied 
           by English versions from the 1914 translation by H. Rackham.


    </p>
    
        <>
        <div className="missioncard"
            style={{
                width:"95%",
                padding:"20px",
                borderRadius:"15px",
                backgroundColor:"white",
               // border:"1px solid #ddd",
                boxshadow:"0 4px 10px rgba(0,0,0,0.1)",
                //boxsizing:"border-box",
                color:"#555",
                fontSizing:"18px",
                lineHeight:"1.6",
                textAlign:"justify",
                margin:"30px auto",
            }}
            >
        
        
            <h2>🎯Our Mission</h2>
            <p>Our mission is to make learning programmming easier by providing high-quality ArticleList
                On React Node.js JavaScript, MongoDB and career guidance. We believe that learning
                should be simple, interactive,and accessible for everyone
            </p>
        </div>
        
        </>    
            
    

    

<div className="cards">

  <div className="card">
    <h3>⚛️ Frontend</h3>
    <p>Learn React, JavaScript, HTML, CSS and modern UI development.</p>
  </div>

  <div className="card">
    <h3>🟢 Backend</h3>
    <p>Understand Node.js, Express.js, APIs and MongoDB.</p>
  </div>

  <div className="card">
    <h3>🚀 Career Growth</h3>
    <p>Get useful tips, resources and guidance for your developer journey.</p>
  </div>

</div>
    </div>
    </>
);
export default AboutPage;