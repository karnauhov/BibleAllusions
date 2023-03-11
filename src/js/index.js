var Books = [   { id: "Gen", name: "Genesis", chapters: 50, verses: [31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33, 38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 55, 32, 20, 31, 29, 43, 36, 30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26] },
                { id: "Exod", name: "Exodus", chapters: 40, verses: [22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27, 25, 26, 36, 31, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38, 29, 31, 43, 38] },
                { id: "Lev", name: "Leviticus", chapters: 27, verses: [17, 16, 17, 35, 19, 30, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37, 27, 24, 33, 44, 23, 55, 46, 34] },
                { id: "Num", name: "Numbers", chapters: 36, verses: [54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 50, 13, 32, 22, 29, 35, 41, 30, 25, 18, 65, 23, 31, 40, 16, 54, 42, 56, 29, 34, 13] },
                { id: "Deut", name: "Deuteronomy", chapters: 34, verses: [46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 32, 18, 29, 23, 22, 20, 22, 21, 20, 23, 30, 25, 22, 19, 19, 26, 68, 29, 20, 30, 52, 29, 12] },
                { id: "Josh", name: "Joshua", chapters: 24, verses: [18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28, 51, 9, 45, 34, 16, 33] },
                { id: "Judg", name: "Judges", chapters: 21, verses: [36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31, 30, 48, 25] },
                { id: "Ruth", name: "Ruth", chapters: 4, verses: [22, 23, 18, 22] },
                { id: "1Sam", name: "1 Samuel", chapters: 31, verses: [28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30, 24, 42, 15, 23, 29, 22, 44, 25, 12, 25, 11, 31, 13] },
                { id: "2Sam", name: "2 Samuel", chapters: 24, verses: [27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 33, 43, 26, 22, 51, 39, 25] },
                { id: "1Kgs", name: "1 Kings", chapters: 22, verses: [53, 46, 28, 34, 18, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46, 21, 43, 29, 53] },
                { id: "2Kgs", name: "2 Kings", chapters: 25, verses: [18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 21, 21, 25, 29, 38, 20, 41, 37, 37, 21, 26, 20, 37, 20, 30] },
                { id: "1Chr", name: "1 Chronicles", chapters: 29, verses: [54, 55, 24, 43, 26, 81, 40, 40, 44, 14, 47, 40, 14, 17, 29, 43, 27, 17, 19, 8, 30, 19, 32, 31, 31, 32, 34, 21, 30] },
                { id: "2Chr", name: "2 Chronicles", chapters: 36, verses: [17, 18, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 22, 15, 19, 14, 19, 34, 11, 37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 27, 23] },
                { id: "Ezra", name: "Ezra", chapters: 10, verses: [11, 70, 13, 24, 17, 22, 28, 36, 15, 44] },
                { id: "Neh", name: "Nehemiah", chapters: 13, verses: [11, 20, 32, 23, 19, 19, 73, 18, 38, 39, 36, 47, 31] },
                { id: "Esth", name: "Esther", chapters: 10, verses: [22, 23, 15, 17, 14, 14, 10, 17, 32, 3] },
                { id: "Job", name: "Job", chapters: 42, verses: [22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21, 29, 29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24, 41, 30, 24, 34, 17] },
                { id: "Ps", name: "Psalms", chapters: 150, verses: [6, 12, 8, 8, 12, 10, 17, 9, 20, 18, 7, 8, 6, 7, 5, 11, 15, 50, 14, 9, 13, 31, 6, 10, 22, 12, 14, 9, 11, 13, 25, 11, 22, 23, 28, 13, 40, 23, 14, 18, 14, 12, 5, 27, 18, 12, 10, 15, 21, 23, 21, 11, 7, 9, 24, 14, 12, 12, 18, 14, 9, 13, 12, 11, 14, 20, 8, 36, 37, 6, 24, 20, 28, 23, 11, 13, 21, 72, 13, 20, 17, 8, 19, 13, 14, 17, 7, 19, 53, 17, 16, 16, 5, 23, 11, 13, 12, 9, 9, 5, 8, 29, 22, 35, 45, 48, 43, 14, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 176, 7, 8, 9, 4, 8, 5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 26, 9, 8, 24, 14, 10, 8, 12, 15, 21, 10, 20, 14, 9, 6] },
                { id: "Prov", name: "Proverbs", chapters: 31, verses: [33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24, 29, 30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33, 31] },
                { id: "Eccl", name: "Ecclesiastes", chapters: 12, verses: [18, 26, 22, 17, 19, 12, 29, 17, 18, 20, 10, 14] },
                { id: "Song", name: "Song of Solomon", chapters: 8, verses: [17, 17, 11, 16, 16, 13, 13, 14] },
                { id: "Isa", name: "Isaiah", chapters: 66, verses: [31, 22, 26, 6, 30, 13, 25, 22, 21, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6, 17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38, 22, 8, 31, 29, 25, 28, 28, 25, 13, 15, 22, 26, 11, 23, 15, 12, 17, 13, 12, 21, 14, 21, 22, 11, 12, 19, 12, 25, 24] },
                { id: "Jer", name: "Jeremiah", chapters: 52, verses: [19, 37, 25, 31, 31, 30, 34, 22, 26, 25, 23, 17, 27, 22, 21, 21, 27, 23, 15, 18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32, 21, 28, 18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34] },
                { id: "Lam", name: "Lamentations", chapters: 5, verses: [22, 22, 66, 22, 22] },
                { id: "Ezek", name: "Ezekiel", chapters: 48, verses: [28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14, 49, 32, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28, 23, 29, 49, 26, 20, 27, 31, 25, 24, 23, 35] },
                { id: "Dan", name: "Daniel", chapters: 12, verses: [21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13] },
                { id: "Hos", name: "Hosea", chapters: 14, verses: [11, 23, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 16, 9] },
                { id: "Joel", name: "Joel", chapters: 3, verses: [20, 32, 21] },
                { id: "Amos", name: "Amos", chapters: 9, verses: [15, 16, 15, 13, 27, 14, 17, 14, 15] },
                { id: "Obad", name: "Obadiah", chapters: 1, verses: [21] },
                { id: "Jonah", name: "Jonah", chapters: 4, verses: [16, 11, 10, 11] },
                { id: "Mic", name: "Micah", chapters: 7, verses: [16, 13, 12, 14, 14, 16, 20] },
                { id: "Nah", name: "Nahum", chapters: 3, verses: [15, 13, 19] },
                { id: "Hab", name: "Habakkuk", chapters: 3, verses: [17, 20, 19] },
                { id: "Zeph", name: "Zephaniah", chapters: 3, verses: [18, 15, 20] },
                { id: "Hag", name: "Haggai", chapters: 2, verses: [15, 23] },
                { id: "Zech", name: "Zechariah", chapters: 14, verses: [21, 13, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21] },
                { id: "Mal", name: "Malachi", chapters: 4, verses: [14, 17, 18, 6] },
                { id: "Matt", name: "Matthew", chapters: 28, verses: [25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20] },
                { id: "Mark", name: "Mark", chapters: 16, verses: [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20] },
                { id: "Luke", name: "Luke", chapters: 24, verses: [80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48, 47, 38, 71, 56, 53] },
                { id: "John", name: "John", chapters: 21, verses: [51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25] },
                { id: "Acts", name: "Acts", chapters: 28, verses: [26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28, 41, 38, 40, 30, 35, 27, 27, 32, 44, 31] },
                { id: "Rom", name: "Romans", chapters: 16, verses: [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27] },
                { id: "1Cor", name: "1 Corinthians", chapters: 16, verses: [31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24] },
                { id: "2Cor", name: "2 Corinthians", chapters: 13, verses: [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 13] },
                { id: "Gal", name: "Galatians", chapters: 6, verses: [24, 21, 29, 31, 26, 18] },
                { id: "Eph", name: "Ephesians", chapters: 6, verses: [23, 22, 21, 32, 33, 24] },
                { id: "Phil", name: "Philippians", chapters: 4, verses: [30, 30, 21, 23] },
                { id: "Col", name: "Colossians", chapters: 4, verses: [29, 23, 25, 18] },
                { id: "1Thess", name: "1 Thessalonians", chapters: 5, verses: [10, 20, 13, 18, 28] },
                { id: "2Thess", name: "2 Thessalonians", chapters: 3, verses: [12, 17, 18] },
                { id: "1Tim", name: "1 Timothy", chapters: 6, verses: [20, 15, 16, 16, 25, 21] },
                { id: "2Tim", name: "2 Timothy", chapters: 4, verses: [18, 26, 17, 22] },
                { id: "Titus", name: "Titus", chapters: 3, verses: [16, 15, 15] },
                { id: "Phlm", name: "Philemon", chapters: 1, verses: [25] },
                { id: "Heb", name: "Hebrews", chapters: 13, verses: [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25] },
                { id: "Jas", name: "James", chapters: 5, verses: [27, 26, 18, 17, 20] },
                { id: "1Pet", name: "1 Peter", chapters: 5, verses: [25, 25, 22, 19, 14] },
                { id: "2Pet", name: "2 Peter", chapters: 3, verses: [21, 22, 18] },
                { id: "1John", name: "1 John", chapters: 5, verses: [10, 29, 24, 21, 21] },
                { id: "2John", name: "2 John", chapters: 1, verses: [13] },
                { id: "3John", name: "3 John", chapters: 1, verses: [15] },
                { id: "Jude", name: "Jude", chapters: 1, verses: [25] },
                { id: "Rev", name: "Revelation", chapters: 22, verses: [20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 17, 18, 20, 8, 21, 18, 24, 21, 15, 27, 21] }];

var resultBooks = [];
var resultChapters = [];
var resultVerses = [];

function main() {
    var selectBooks = document.querySelector("#selectBooks");
    var inputChapters = document.querySelector("#inputChapters");
    var inputVerses = document.querySelector("#inputVerses");
    var inputLength = document.querySelector("#inputLength");
    var buttonSearch = document.querySelector("#buttonSearch");
    
    // Select book
    selectBooks.onchange = function(e) {
        inputChapters.max = Books[selectBooks.selectedIndex].chapters;
        inputChapters.value = 1;
        inputVerses.max = Books[selectBooks.selectedIndex].verses[0];
        inputVerses.value = 1;
    };

    // Chapter validation
    inputChapters.oninput = function(e) {
        if (this.value != "") {
            this.value = Math.min(this.max, Math.max(1, Math.round(this.value)));
        }
    };
    inputChapters.onkeypress = function(e) {
        return e.charCode >= 48 && e.charCode <= 57;
    };
    inputChapters.onblur = function(e) {
        if (this.value == "") {
            this.value = 1;
        }
    };
    inputChapters.onchange = function(e) {
        if (inputChapters.value == "") {
            inputVerses.max = Books[selectBooks.selectedIndex].verses[0];
        } else {
            inputVerses.max = Books[selectBooks.selectedIndex].verses[inputChapters.value - 1];
        }
        inputVerses.value = 1;
    };

    // Verse validation
    inputVerses.oninput = function(e) {
        if (this.value != "") {
            this.value = Math.min(this.max, Math.max(1, Math.round(this.value)));
        }
    };
    inputVerses.onkeypress = function(e) {
        return e.charCode >= 48 && e.charCode <= 57;
    };
    inputVerses.onblur = function(e) {
        if (this.value == "") {
            this.value = 1;
        }
    };

    // Length validation
    inputLength.oninput = function(e) {
        if (this.value != "") {
            this.value = Math.min(this.max, Math.max(1, Math.round(this.value)));
        }
    };
    inputLength.onkeypress = function(e) {
        return e.charCode >= 48 && e.charCode <= 57;
    };
    inputLength.onblur = function(e) {
        if (this.value == "") {
            this.value = 1;
        }
    };

    // Search button handler
    buttonSearch.onclick = search;

    // Init fields
    for (const book of Books) {
        var opt = document.createElement("option");
        opt.value = book.id;
        opt.innerHTML = book.name;
        selectBooks.appendChild(opt);
    }
    selectBooks.value = Books[Books.length - 1].id;
    inputChapters.max = Books[Books.length - 1].chapters;
    inputVerses.max = Books[Books.length - 1].verses[0];
}

function search() {
    var selectBooks = document.querySelector("#selectBooks");
    var inputChapters = document.querySelector("#inputChapters");
    var inputVerses = document.querySelector("#inputVerses");
    var inputLength = document.querySelector("#inputLength");
    var result = document.querySelector("#result");

    // Prepare verse addresses for search
    var length = Number(inputLength.value);
    var verseAddresses = [];
    var currentBookIndex = selectBooks.selectedIndex;
    var currentChapterIndex = Number(inputChapters.value) - 1;
    var currentVerseIndex = Number(inputVerses.value) - 1;
    verseAddresses.push({ 
        bookIndex: currentBookIndex,
        bookId: Books[currentBookIndex].id,
        chapterIndex: currentChapterIndex,
        verseIndex: currentVerseIndex
    });
    for (var index = 1; index < length; index++) {
        currentVerseIndex++;
        if (Books[currentBookIndex].verses[currentChapterIndex] > currentVerseIndex) {
            verseAddresses.push({ 
                bookIndex: currentBookIndex,
                bookId: Books[currentBookIndex].id,
                chapterIndex: currentChapterIndex,
                verseIndex: currentVerseIndex
            });
        } else {
            index--;
            currentVerseIndex = -1;
            if (Books[currentBookIndex].chapters > currentChapterIndex + 1) {
                currentChapterIndex++;
            } else if (Books.length > currentBookIndex + 1){
                currentChapterIndex = 0;
                currentBookIndex++;
            } else {
                console.warn("END OF BIBLE");
                break;
            }
        }
    }

    // Prepare list of words
    var G = GREEK.words;
    var words = [];
    for (var i = 0; i < verseAddresses.length; i++) {
        var verse = getVerse(verseAddresses[i])
        if (verse && verse.words && verse.words.length > 0) {
            for (var j = 0; j < verse.words.length; j++) {
                var word = G[verse.words[j]];
                if (word && word.weight && word.lexeme && words.indexOf(verse.words[j]) == -1) {
                    words.push({ index: verse.words[j], word });
                }
            }
        }
    }

    // Prepare header before search
    var resultText = "<center><b>Allusions for ";
    if (verseAddresses.length == 1) {
        resultText += verseAddresses[0].bookId + " " + (verseAddresses[0].chapterIndex + 1) + ":" + (verseAddresses[0].verseIndex + 1);
    } else {
        resultText += verseAddresses[0].bookId + " " + (verseAddresses[0].chapterIndex + 1) + ":" + (verseAddresses[0].verseIndex + 1) + " - " + verseAddresses[verseAddresses.length - 1].bookId + " " + (verseAddresses[verseAddresses.length - 1].chapterIndex + 1) + ":" + (verseAddresses[verseAddresses.length - 1].verseIndex + 1);
    }
    resultText += "</b></center>Next unique " + words.length + " words: [";
    for (var j = 0; j < words.length; j++) {
        resultText += G[words[j].index].lexeme + " (" + words[j].index + ")";
        if (j < words.length - 1) {
            resultText += ", ";
        }
    }
    resultText += "]<br><hr>";

    // Search words in Bible
    resultBooks = [];
    resultChapters = [];
    resultVerses = [];
    for (var index = 0; index < words.length; index++) {
        searchWordInBible(words[index], verseAddresses);
    }

    // Sort results
    resultBooks.sort(weightCompare);
    resultChapters.sort(weightCompare);
    resultVerses.sort(weightCompare);

    // Result for verses
    var minVerseCount = 2;
    var anyVerse = false;
    resultText += "<center><b>VERSES</b> (more than " + minVerseCount + " words):</center>";
    for (var i = 0; i < resultVerses.length; i++) {
        if (resultVerses[i].weight > minVerseCount) {
            anyVerse = true;
            resultText += "<b>" + resultVerses[i].id + "</b> -> weight: <b>" + resultVerses[i].weight + "</b>, words: [";
            for (var j = 0; j < resultVerses[i].words.length; j++) {
                resultText += G[resultVerses[i].words[j]].lexeme + " (" + resultVerses[i].words[j] + ")";
                if (j < resultVerses[i].words.length - 1) {
                    resultText += ", ";
                }
            }
            resultText += "]<br>";
        }
    }
    if (!anyVerse) {
        resultText += "NOTHING TO SHOW<br>";
    }
    resultText += "<hr>";

    // Result for chapters
    var minChapterCount = Math.ceil(words.length / 3);
    var anyChapter = false;
    resultText += "<center><b>CHAPTERS</b> (more than " + minChapterCount + " words):</center>";
    for (var i = 0; i < resultChapters.length; i++) {
        if (resultChapters[i].weight > minChapterCount) {
            anyChapter = true;
            resultText += "<b>" + resultChapters[i].id + "</b> -> weight: <b>" + resultChapters[i].weight + "</b>, words: [";
            for (var j = 0; j < resultChapters[i].words.length; j++) {
                resultText += G[resultChapters[i].words[j]].lexeme + " (" + resultChapters[i].words[j] + ")";
                if (j < resultChapters[i].words.length - 1) {
                    resultText += ", ";
                }
            }
            resultText += "]<br>";
        }
    }
    if (!anyChapter) {
        resultText += "NOTHING TO SHOW<br>";
    }
    resultText += "<hr>";

    // Result for books
    var minBookCount = Math.ceil(words.length / 2);
    var anyBook = false;
    resultText += "<center><b>BOOKS</b> (more than " + minBookCount + " words):</center>";
    for (var i = 0; i < resultBooks.length; i++) {
        if (resultBooks[i].weight > minBookCount) {
            anyBook = true;
            resultText += "<b>" + resultBooks[i].id + "</b> -> weight: <b>" + resultBooks[i].weight + "</b><br>";
        }
    }
    if (!anyBook) {
        resultText += "NOTHING TO SHOW<br>";
    }

    result.innerHTML = resultText;
}

function getVerse(verseAddress) {
    if (verseAddress) {
        var book = BIBLE.books[verseAddress.bookIndex];
        if (book) {
            var chapter = book.chapters[verseAddress.chapterIndex];
            if (chapter) {
                var verse = chapter.verses[verseAddress.verseIndex];
                return verse;
            }
        }
    }
    return undefined;
}

function searchWordInBible(wordData, excludeVerses) {
    if (!wordData){
        return;
    }
    var index = wordData.index;
    var word = wordData.word;

    for (var bookIndex = 0; bookIndex < BIBLE.books.length; bookIndex++) {
        var curBook = BIBLE.books[bookIndex];
        for (var chapterIndex = 0; chapterIndex < curBook.chapters.length; chapterIndex++) {
            var curChapter = curBook.chapters[chapterIndex];
            for (var verseIndex = 0; verseIndex < curChapter.verses.length; verseIndex++) {
                var curVerse = curChapter.verses[verseIndex];
                for (var wordIndex = 0; wordIndex < curVerse.words.length; wordIndex++) {
                    var curWord = curVerse.words[wordIndex];
                    if (curWord == index) {
                        // Check exclude addresses
                        var exclude = false;
                        if (excludeVerses) {
                            for (var excIndex = 0; excIndex < excludeVerses.length; excIndex++) {
                                var excludeVerse = excludeVerses[excIndex];
                                if (excludeVerse.bookIndex == bookIndex && excludeVerse.chapterIndex == chapterIndex && excludeVerse.verseIndex == verseIndex) {
                                    exclude = true
                                    break;
                                }
                            }
                        }

                        if (!exclude) {
                            // Add result to resultBooks
                            var existBookIndex = resultBooks.findIndex(function (element) { 
                                return element.id == BIBLE.books[bookIndex].book;
                            });
                            if (existBookIndex == -1) {
                                resultBooks.push({
                                    id: BIBLE.books[bookIndex].book,
                                    bookIndex: bookIndex,
                                    weight: word.weight,
                                    words: [index]
                                });
                            } else {
                                if (resultBooks[existBookIndex].words.findIndex(function (wordIndex) { return wordIndex == index; }) == -1 && word.weight > 0) {
                                    resultBooks[existBookIndex].weight += word.weight;
                                    resultBooks[existBookIndex].words.push(index);
                                }
                            }

                            // Add result to resultChapters
                            var existChapterIndex = resultChapters.findIndex(function (element) { 
                                return element.id == BIBLE.books[bookIndex].book + " " + (chapterIndex + 1);
                            });
                            if (existChapterIndex == -1) {
                                resultChapters.push({
                                    id: BIBLE.books[bookIndex].book + " " + (chapterIndex + 1),
                                    bookIndex: bookIndex,
                                    chapterIndex: chapterIndex,
                                    weight: word.weight,
                                    words: [index]
                                });
                            } else {
                                if (resultChapters[existChapterIndex].words.findIndex(function (wordIndex) { return wordIndex == index; }) == -1 && word.weight > 0) {
                                    resultChapters[existChapterIndex].weight += word.weight;
                                    resultChapters[existChapterIndex].words.push(index);
                                }
                            }

                            // Add result to resultVerses
                            var existVerseIndex = resultVerses.findIndex(function (element) { 
                                return element.id == BIBLE.books[bookIndex].book + " " + (chapterIndex + 1) + ":" + (verseIndex + 1);
                            });
                            if (existVerseIndex == -1) {
                                resultVerses.push({
                                    id: BIBLE.books[bookIndex].book + " " + (chapterIndex + 1) + ":" + (verseIndex + 1),
                                    bookIndex: bookIndex,
                                    chapterIndex: chapterIndex,
                                    verseIndex: verseIndex,
                                    weight: word.weight,
                                    words: [index]
                                });
                            } else {
                                if (resultVerses[existVerseIndex].words.findIndex(function (wordIndex) { return wordIndex == index; }) == -1 && word.weight > 0) {
                                    resultVerses[existVerseIndex].weight += word.weight;
                                    resultVerses[existVerseIndex].words.push(index);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function weightCompare(a, b) { 
    if ( a.weight > b.weight ) {
        return -1;
    }
    if ( a.weight < b.weight ) {
        return 1;
    }
    return 0;
 }

main();
