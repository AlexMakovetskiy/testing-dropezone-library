import ImageUploadForm from './ImageUploadForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <label>Загрузите свои изображения</label>
          <ImageUploadForm></ImageUploadForm>
        </div>
      </header>
    </div>
  );
}

export default App;
