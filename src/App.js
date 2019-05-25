import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <article>
        
      <header>
      <title>The Statue of Liberty's torch heads to new museum</title>
      author = by Kate Farley (<a href = "kate.farley@nytimes.com">kate.farley@nytimes.com</a>)
      date = {'November 22, 2018'}
      </header>
      
      <p>The Statue of Liberty's original torch is getting a new home.</p>

      <p>Made of copper and gold so that it would shine bright, the first torch took a beating from the weather and was replaced by a replica in  <time dateTime='1984'>1984</time> It's been stored in the statue's pedestal ever since.</p>
      
      <p>But visitors will be able to see the original 3,600-pound torch in all its glory at a new Statue of Liberty Museum, which will open on Liberty Island in <time dateTime='2019-05'>May 2019</time>. The torch was transported there by truck last week, along with a replica model of Lady Liberty's face.</p>
      
      <p><q>Although it is not one of the most difficult things we have ever moved,</q> says Douglas Phelps, who oversaw the relocation of the torch, <q>it is certainly the most important.</q></p>
      
      <section>
      <head>The history of the Statue of Liberty</head>
      
      <p>Not only is the Statue of Liberty the symbol of New York City, she is also a UNESCO World Heritage site under the designation of <em>Outstanding Universal Value</em>.</p>
      
      <p>Her full name is Liberty Enlightening the World, and she was designed by Frederic Auguste Bartholdi and built by Gustave Eiffel -- yes, the same guy who built Paris's Eiffel Tower.</p>
      
      <p>Lady Liberty was a gift from France to the United States to celebrate the centennial of their nation's independence -- although, somewhat awkwardly, she arrived a decade too late. Nevertheless, President Grover Cleveland formally unveiled her in  <time dateTime='1886'>1886</time>.</p>

      <p>Since then, the statue has served as a symbol of hope and possibility for many people who entered the United States as immigrants via neighboring Ellis Island.</p>
      
      <p><q>The original torch is a beautiful object of art and exemplifies the American ideals of freedom and democracy,</q>says John Piltzecker, superintendent of the Statue of Liberty National Monument. That symbolic spirit inspired the decision to inscribe these famous lines on the statue's pedestal:<blockquote>Give me your tired, your poor / Your huddled masses yearning to breathe free.</blockquote></p>
      
      <p>In<time datetime= "2017">2017</time>, nearly 4.5 million people visited Liberty Island.</p>

      <p>When completed, the Statue of Liberty Museum will be 26,000 square feet of history, inspiration and deeper analysis of the statue's symbolism both in the US and around the world.</p>
      
      <p>The inspiration gallery, which is where the torch will live, will have floor-to-ceiling glass windows looking out at Lower Manhattan, including the World Trade Center.</p>
      </section>
      
      <section>
        <head>Some facts about the Statue of Liberty</head>

        <ul>
          <li>Total overall height from the base of the pedestal foundation to the tip of the torch is <strong>305 feet, 6 inches</strong></li>
          <li>Height of the Statue from her heel to the top of her head is <strong>111 feet, 6 inches</strong></li>
          <li>The Statue has a <strong>35-foot</strong> waistline</li>
          <li>Total weight of the Statue of Liberty is <strong>225 tons</strong> (or <strong>450,000 pounds</strong>)</li>
        </ul>

      </section>

      </article>
    </div>
    
  );
}

export default App;

