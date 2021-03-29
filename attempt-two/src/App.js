import Header from './Components/Header'
import PhotoDisplay from './Components/PhotoDisplay'
import './Components/myStyles.css'

function App() {
  return (
    <div className='sheet'>
      <div className='header-style'>
        <Header title= {"Photo Gallery"} />
      </div>
      <div>
      <PhotoDisplay />
      </div>
    </div>
  );
}

export default App;
