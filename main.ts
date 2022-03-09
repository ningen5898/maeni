import { WORDS } from './wordlist.js';

function get_words() {
  const epochMs = new Date('January 23, 2022 00:00:00').valueOf();
  const now = Date.now();
  const msInDay = 86400000;
  let index: number = Math.floor((now - epochMs) / msInDay);
  const yesterday = new Date(now - msInDay);
  var ul = document.createElement('ul');
  var wl = document.getElementById('main');
  var header = document.createElement('p');
  header.innerHTML = 'Words until '+yesterday+'. Click a word to search '+
                     'jisho (opens in new tab).';
  wl.appendChild(header);
  if (index > WORDS.length) {
	  index = WORDS.length;
  }
  for (var i=0; i<index; i++) {
    var li = document.createElement('li');
    var lnk = document.createElement('a');
    lnk.innerHTML = WORDS[i];
    lnk.setAttribute('href', 'https://jisho.org/search/'+WORDS[i]);
    lnk.setAttribute('target', '_blank');
    li.appendChild(lnk);
    li.setAttribute('style', 'display:block;');
    ul.appendChild(li);
  }
  wl.appendChild(ul);
}

setTimeout(get_words);
