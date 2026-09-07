//Importing React
import React from 'react';
const HomePage = () =>{
    return(
    <>
    <div className='home-page'>
    <h1>👋 Hello ,welcome to my blog!</h1>
    <p>
        Welcome to my blog! Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since 1966,
          when designers at Letraset and James Mosley, the librarian at St Bride 
          Printing Library in London, took a 1914 Cicero translation and scrambled 
          it to make dummy text for Letraset's Body Type sheets. It has survived not
           only many decades, but also the leap into electronic typesetting, remaining 
           essentially unchanged. 
    </p>
    <br/>
    <p>
        It is a long established fact that a reader will be distracted by the 
        readable content of a page when looking at its layout. The point of using
         Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          as opposed to using 'Content here, content here', making it look like 
          readable English. 
    </p>
    <button>🚀 Explore Articles</button>
    

<h2>Why MyBlog?</h2>

<div className="cards">

  <div className="card">
    <h3>⚛️ React</h3>
    <p>Learn modern frontend development.</p>
  </div>

  <div className="card">
    <h3>🟢 Node.js</h3>
    <p>Build scalable backend applications.</p>
  </div>

  <div className="card">
    <h3>💼 Career</h3>
    <p>Tips and guidance for developers.</p>
  </div>

</div>
    </div>
    </>
    );
};

export default HomePage;