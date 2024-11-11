import logo from './logo.svg';
import './App.css';
import { getImageUrl } from './utils.js';
import Gallery from './Gallery.js';
import MovingDot from './MovingDot.js';
import Scoreboard from './ScoreBoard.js';
import Section from './Section.js';
import Heading from './Heading.js';
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

function App() {
  return (
    <div>
      <h1>Lab 4_2 Tutorial</h1>
      <Profile />

      <br></br>

      <h1>Challenge 1</h1>
      <Gallery />

      <br></br>

      <h1>Moving Dot</h1>
      <MovingDot />

      <br></br>
      <section>
        <Scoreboard />

      </section>

      <br></br>
      <Page />
      

    </div>
  );
}

export default App;

function Page() {
  return (
    <Section level={1}>
    <Heading>Title</Heading>
    <Section level={2}>
      <Heading>Heading</Heading>
      <Heading>Heading</Heading>
      <Heading>Heading</Heading>
      <Section level={3}>
        <Heading>Sub-heading</Heading>
        <Heading>Sub-heading</Heading>
        <Heading>Sub-heading</Heading>
        <Section level={4}>
          <Heading>Sub-sub-heading</Heading>
          <Heading>Sub-sub-heading</Heading>
          <Heading>Sub-sub-heading</Heading>
        </Section>
      </Section>
    </Section>
  </Section>
  );
}
function Avatar({person, size}){
  return(
    <img
    className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
  
    />

  );

}

function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
 
}

function Clock({color,time}){
  return(
    <h1 style={{ color: color }}>
      {time}
    </h1>
  );

}