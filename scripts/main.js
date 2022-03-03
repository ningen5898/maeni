import { WORDS } from './wordlist.js';
function get_words() {
    var epochMs = new Date('January 23, 2022 00:00:00').valueOf();
    var now = Date.now();
    var msInDay = 86400000;
    var index = Math.floor((now - epochMs) / msInDay);
    var yesterday = new Date(now - msInDay);
    var ul = document.createElement('ul');
    var wl = document.getElementById('main');
    var header = document.createElement('p');
    header.innerHTML = 'Words until ' + yesterday + '. Click each word to search ' +
        'jisho (opens in new tab).';
    wl.appendChild(header);
    for (var i = 0; i < index; i++) {
        var li = document.createElement('li');
        var lnk = document.createElement('a');
        lnk.innerHTML = WORDS[i];
        lnk.setAttribute('href', 'https://jisho.org/search/' + WORDS[i]);
        lnk.setAttribute('target', '_blank');
        li.appendChild(lnk);
        li.setAttribute('style', 'display:block;');
        ul.appendChild(li);
    }
    wl.appendChild(ul);
}
get_words();
//# sourceMappingURL=main.js.map