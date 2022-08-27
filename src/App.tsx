import './App.css'
function App() {

  return (
    <div className='holder'>
      <div className='deckHolder'>
        <span className="spanDeck">Deck</span>
        <div className='deck'></div>
      </div>
     
      <div className='previewHolder'>
        <span className='spanPreview'>Preview</span>
        <p className='infoText'>Digite o nome do card que deseja adicionar ao deck!</p>
        <div className='inputHolder'>
          <input className='searchCardInput' type="text" />
        </div>
       
        <div className='cardButtons'>
          <button className='plus'>
            <div className='horizontal'></div>
            <div className='vertical'></div>
          </button>
          <button className='minum'>
            <div className='horizontal'></div>
          </button>
        </div>

        <div className='preview'></div>
      </div>
    </div>
  )
}

export default App
