'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});


var isClicked = false;

function playStream() {
  isClicked = !isClicked;

  soundManager.createSound({
    id: 'otvoreni',
    url: 'http://209.105.250.73:8502/stream.aac'
  });

  if( isClicked ) 
  {
    chrome.browserAction.setIcon({path:"images/icon-pause.png"});
    soundManager.play('otvoreni');
  } else {
    soundManager.stop('otvoreni');
    chrome.browserAction.setIcon({path:"images/icon-play.png"});    
  }

}


chrome.browserAction.onClicked.addListener(playStream);