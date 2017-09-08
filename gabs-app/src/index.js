import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gabs from './App';
import registerServiceWorker from './registerServiceWorker';

import {emojify} from 'react-emojione';


const  gabs = {
  author: "Gaby",
  hobbies: "painting, writing, photography."
}


// what does this App stands for???
ReactDOM.render(
  <Gabs
    author = {gabs.author}
    hobbies = {gabs.hobbies} />,

document.getElementById('root'));












registerServiceWorker();
