import logo from './logo.svg';
import './App.css';
import image from './part2.png'
function App() {
  return (
    <div className="App">
      <h1>Luke Wiskus 5611 Part 2 and Part 3 submission</h1>
      
      <div className="part2">
       

        <ul>
          <li style={{fontSize: "20px"}}> <h1>PART 2</h1></li>
          <img style={{width: "600px", height: "400px", objectFit: "contain"}} src={image} />
          <li><iframe width="560" height="315" src="https://www.youtube.com/embed/e4ufJOKKqlQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
          <li>
            <h1>User Scenario Editing</h1>
            <p>(TS: 0:00) You can create obsticles and set the goal and start node before you run the path</p>
          </li>
          <li>
            <h1>Realtime User Interaction</h1>
            <p>(TS: 0:19) You can continue creating obstacles and changing the goal node as the simulation is running, and the agent will react to it and move accordingly</p>
          </li>
          <li>
            <h1>Particle System</h1>
            <p>(TS: 0:36) A firework goes off once the agent reaches the goal node! the particles have an inital velocity and are effected by gravity.</p>
          </li>
          <li><h1>Code</h1><a href={"https://github.umn.edu/wisku005/part2"} target="_blank">GitHub</a></li>
          <li>
            <h1>List Of Tools</h1>
            <p>Just Processing</p>
          </li>
          <li>
            <h1>Write Up</h1>
            <p>I had a few difficulties. I really wanted to get this to be 3D, so I first tried with OpenGL but I couldn't getting working with WSL, so I switched to processing but I couldnt get it looking good in 3D, so I spent a long time trying to do it with three.js since I have done a lot with it before, but eventually I didn't like that either so I switched to Unity and then It wasn't working the way I wanted it to and I was running low on time so I went for just the 2D scene in processing.</p>
            <p>Other than that, I had the most difficulty with getting the agent to work and respond to the user inputs durring run time, I kept getting weird behaviors but with enough effort I got it working correctly.</p>
          </li>
        </ul>
      </div>
      <div className="part2">
        <ul>
          <li style={{fontSize: "20px"}}><h1>Part 3</h1></li>
          <li>
            <div style={{display: 'flex'}}>
              <iframe style={{marginRight: "5px"}} width="560" height="315" src="https://www.youtube.com/embed/cjj7wsAVbDQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/DK_7N0kn5sU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </li>
          <li>
            <h1>Description</h1>
            <p>The way I structured the code was object oriented with agents. Ecah had their own update function and calculated goal forces based off of its local neighbors and its goal position which is anywhere on the opposide side the agent spawns with a random Y. In the second scenario there is an obstacle in the middle that the agents need to navigate around. The algorithm is the same algorithm provided on canvas. </p>
            <p> There are also 400 agents spawned, a lot are initally off screen or go off screen but they are there</p>
          </li>
          <li>
            <h1>Difficulties</h1>
            <p>The article on canvas said that if two are collding just decrease their radius, which is what I did. I dont know if that really counts as avoiding collisions but its what I did.</p>
            <p>I cant get the agents to respond naturally to the obstacles. no matter how I tweak the time horizion, sensing radius, or maximum magnitude, I can't get it to all work together naturally</p>
            <p>It was hard to balance the weight of neighbors and the aggresiveness of the agents to go to their goal velocities while minimizing collisions</p>
          </li>
          <li>
            <h1>List of Tools</h1>
            <p>Just processing</p>
          </li>
          <li><h1>Code</h1><a href={"https://github.umn.edu/wisku005/part3"} target="_blank">GitHub</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
