// Load existing data from localStorage
let vocab = JSON.parse(localStorage.getItem("vocab")) || [];
let grammar = JSON.parse(localStorage.getItem("grammar")) || [];
let expressions = JSON.parse(localStorage.getItem("expressions")) || [];

// Display all on load
displayVocabulary();
displayGrammar();
displayExpressions();

// ===== Vocabulary =====
function addVocabulary() {
    const word = document.getElementById("vocabWord").value.trim();
    const translation = document.getElementById("vocabTranslation").value.trim();

    if(word && translation) {
        vocab.push({word, translation});
        localStorage.setItem("vocab", JSON.stringify(vocab));
        displayVocabulary();
        document.getElementById("vocabWord").value = "";
        document.getElementById("vocabTranslation").value = "";
    } else {
        alert("Please enter both word and translation.");
    }
}

function displayVocabulary(filter="") {
    const list = document.getElementById("vocabList");
    list.innerHTML = "";
    vocab
        .filter(item => item.word.toLowerCase().includes(filter.toLowerCase()) || 
                        item.translation.toLowerCase().includes(filter.toLowerCase()))
        .forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.word} → ${item.translation}`;
            list.appendChild(li);
        });
}

function filterVocabulary() {
    const filter = document.getElementById("vocabSearch").value;
    displayVocabulary(filter);
}

// ===== Grammar =====
function addGrammar() {
    const title = document.getElementById("grammarTitle").value.trim();
    const note = document.getElementById("grammarNote").value.trim();

    if(title && note) {
        grammar.push({title, note});
        localStorage.setItem("grammar", JSON.stringify(grammar));
        displayGrammar();
        document.getElementById("grammarTitle").value = "";
        document.getElementById("grammarNote").value = "";
    } else {
        alert("Please enter a grammar topic and note.");
    }
}

function displayGrammar(filter="") {
    const list = document.getElementById("grammarList");
    list.innerHTML = "";
    grammar
        .filter(item => item.title.toLowerCase().includes(filter.toLowerCase()) || 
                        item.note.toLowerCase().includes(filter.toLowerCase()))
        .forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.title}: ${item.note}`;
            list.appendChild(li);
        });
}

function filterGrammar() {
    const filter = document.getElementById("grammarSearch").value;
    displayGrammar(filter);
}

// ===== Expressions =====
function addExpression() {
    const french = document.getElementById("exprFrench").value.trim();
    const meaning = document.getElementById("exprMeaning").value.trim();

    if(french && meaning) {
        expressions.push({french, meaning});
        localStorage.setItem("expressions", JSON.stringify(expressions));
        displayExpressions();
        document.getElementById("exprFrench").value = "";
        document.getElementById("exprMeaning").value = "";
    } else {
        alert("Please enter both the expression and its meaning.");
    }
}

function displayExpressions(filter="") {
    const list = document.getElementById("exprList");
    list.innerHTML = "";
    expressions
        .filter(item => item.french.toLowerCase().includes(filter.toLowerCase()) || 
                        item.meaning.toLowerCase().includes(filter.toLowerCase()))
        .forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.french} → ${item.meaning}`;
            list.appendChild(li);
        });
}

function filterExpressions() {
    const filter = document.getElementById("exprSearch").value;
    displayExpressions(filter);
}
