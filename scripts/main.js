import { WORDS } from './wordlist.js';
function get_words() {
    var epochMs = new Date('January 23, 2022 00:00:00').valueOf();
    var now = Date.now();
    var msInDay = 86400000;
    var index = Math.floor((now - epochMs) / msInDay);
    var yesterday = new Date(now - msInDay);
    var wl = document.getElementById('date_message');
    var header = document.createElement('p');
    header.innerHTML = 'Words until ' + yesterday + '. Click a word to search ' +
        'jisho (opens in new tab). Dates are in local format.';
    wl.appendChild(header);
    if (index > WORDS.length) {
        index = WORDS.length;
    }
    var words_table = document.getElementById('words_table');
    for (var i = 0; i < index; i++) {
        var li = document.createElement('li');
        var word_date = new Date(epochMs + i * msInDay);
        var word_date_str = word_date.toLocaleDateString(undefined);
        var tr = document.createElement('tr');
        var td_date = document.createElement('td');
        var td_word = document.createElement('td');
        td_date.innerHTML = word_date_str;
        var jisho_link = document.createElement('a');
        jisho_link.innerHTML = WORDS[i];
        jisho_link.setAttribute('href', 'https://jisho.org/search/' + WORDS[i]);
        jisho_link.setAttribute('target', '_blank');
        td_word.appendChild(jisho_link);
        tr.appendChild(td_date);
        tr.appendChild(td_word);
        words_table.appendChild(tr);
    }
}
setTimeout(get_words);
//# sourceMappingURL=main.js.map