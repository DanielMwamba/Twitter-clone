import React from 'react';
import {Header, TweetEditor, Tweets} from '../components';



function Home() {
  return (
    <main className="timeline">
      <Header />
      <TweetEditor />
      <Tweets />
      
      

    </main>
  );
}

export default Home;