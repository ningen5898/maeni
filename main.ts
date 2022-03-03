import { WORDS } from './wordlist.js';

function get_words() {
  const epochMs = new Date('January 23, 2022 00:00:00').valueOf();
  const now = Date.now();
  const msInDay = 86400000;
  const index = Math.floor((now - epochMs) / msInDay);
  const yesterday = new Date(now - msInDay);
  var ul = document.createElement('ul');
  var wl = document.getElementById('main');
  var header = document.createElement('p');
  header.innerHTML = 'Words until '+yesterday;
  wl.appendChild(header);
  for (var i=0; i<index; i++) {
    var li = document.createElement('li');
    li.innerHTML = WORDS[i];
    li.setAttribute('style', 'display:block;');
    ul.appendChild(li);
  }
  wl.appendChild(ul);
}

get_words();
