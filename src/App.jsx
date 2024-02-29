import './App.css'
import Show from './components/Show';

const App = () => {
  const shows = [
    {
      img: "src/assets/wicked.png",
      name: "Wicked",  
      url: "https://wickedthemusical.com/"
    },
    {
      img: "src/assets/The_Lion_King.png",
      name: "The Lion King",  
      url: "https://lionking.com/"
    },
    {
      img: "src/assets/Hamilton.jpg",
      name: "Hamilton", 
      url:"https://hamiltonmusical.com/new-york/" 
    },
    
    {
      img: "src/assets/Merrily We Roll Along.jpeg",
      name: "Merrily We Roll Along", 
      url: "https://merrilyonbroadway.com/" 
    },
    {
      img: "src/assets/MJ_Musical.png",
      name: "MJ The Musical",
      url: "https://newyork.mjthemusical.com/?gad_source=1&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNVdiuAVBqW8my-UWY77v17PlNiFZmDJ2PTTsMbrrBq7MNCp0sc5B9BoCnusQAvD_BwE&gclsrc=aw.ds"  
    },
    {
      img: "src/assets/Sweeney-Todd.jpeg",
      name: "Sweeney Todd: The Demon Barber of Fleet Street",  
      url: "https://sweeneytoddbroadway.com/?gad_source=1&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNYfncG6z3xsLdP60Pn2P9KIfuhQ3zNA_TxL0prW8IP3kJNFBBsT9TBoCk6sQAvD_BwE"
    },
    {
      img: "src/assets/Moulin-Rouge.png",
      name: "Moulin Rouge! The Musical",  
      url: "https://moulinrougemusical.com/new-york/home/"
    },
   
    {
      img: "src/assets/aladdin.jpeg",
      name: "Aladdin",  
      url: "https://aladdinthemusical.com/?gad_source=1&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNXHRReVZjF1BX9kn9OM80ANGzIE5QwRSg9cv4Prc7odOryVxNxGO7xoCCqkQAvD_BwE&gclsrc=aw.ds"
    },
    {
      img: "src/assets/Harry-Potter.jpeg",
      name: "Harry Potter and the Cursed Child",  
      url: "https://broadway.harrypottertheplay.com/"
    },
    {
      img: "src/assets/Juliet.jpeg",
      name: "& Juliet",  
      url: "https://andjulietbroadway.com/"
    },
  ]

  return (
    
    <div className="App">
      <h1>Best Selling Broadway Shows of February 2024</h1>
      <div className='ListOfShows'>
      {
      shows.map((show, i) => {
        return (
          <>
        <Show
        img={show.img}
        name= {show.name} 
        url={show.url}
         />
        </>
        )
      })
    }
    </div>
    </div>
    
  
   
  )
}

export default App;
