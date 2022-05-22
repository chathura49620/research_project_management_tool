import React, { Component } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import MarkingFilesUploadComponent from './component/EvaPanel/marking-files-upload-component';
class App extends Component {
  render() {
    return (
      <div className="App">
        <MarkingFilesUploadComponent />
      </div>
    );
  }
}
export default App;