// Load existing data from localStorage
let vocab = JSON.parse(localStorage.getItem("vocab")) || [];
let grammar = JSON.parse(localStorage.getItem("grammar")) || [];
let expressions = JSON.parse(localStorage.getItem("expressions")) || [];

// Track index being edited (-1 means adding new)
let vocabEditIndex = -1;
let grammarEditIndex = -1;
let exprEditIndex = -1;

// Display all on load
displayVocabulary();
displayGrammar();
displayExpressions();

// ===== Vocabulary =====
function addVocabulary() {
    const word = document.getElementById("vocabWord").value.trim();
    const translation = document.getElementById("vocabTranslation").value.trim();

    if (!word || !translation) { alert("Please enter both word and translation."); return; }

    if(vocabEditIndex === -1){
        // Add new
        vocab.push({word, translation});
    } else {
        // Edit existing
        vocab[vocabEditIndex] = {word, translation};
        vocabEditIndex = -1;
    }

    localStorage.setItem("vocab", JSON.stringify(vocab));
    displayVocabulary();
    document.getElementById("vocabWord").value = "";
    document.getElementById("vocabTranslation").value = "";
}

function displayVocabulary(filter="") {
    const list = document.getElementById("vocabList");
    list.innerHTML = "";
    vocab
        .filter(item => item.word.toLowerCase().includes(filter.toLowerCase()) || 
                        item.translation.toLowerCase().includes(filter.toLowerCase()))
        .forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `${item.word} → ${item.translation}`;

            // Add Edit button
            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.style.marginLeft = "10px";
            editBtn.onclick = () => editVocabulary(index);
            li.appendChild(editBtn);

            list.appendChild(li);
        });
}

function editVocabulary(index){
    document.getElementById("vocabWord").value = vocab[index].word;
    document.getElementById("vocabTranslation").value = vocab[index].translation;
    vocabEditIndex = index;
}

function filterVocabulary() {
    const filter = document.getElementById("vocabSearch").value;
    displayVocabulary(filter);
}

// ===== Grammar =====
function addGrammar() {
    const title = document.getElementById("grammarTitle").value.trim();
    const note = document.getElementById("grammarNote").value.trim();

    if(!title || !note) { alert("Please enter a grammar topic and note."); return; }

    if(grammarEditIndex === -1){
        grammar.push({title, note});
    } else {
        grammar[grammarEditIndex] = {title, note};
        grammarEditIndex = -1;
    }

    localStorage.setItem("grammar", JSON.stringify(grammar));
    displayGrammar();
    document.getElementById("grammarTitle").value = "";
    document.getElementById("grammarNote").value = "";
}

function displayGrammar(filter="") {
    const list = document.getElementById("grammarList");
    list.innerHTML = "";
    grammar
        .filter(item => item.title.toLowerCase().includes(filter.toLowerCase()) || 
                        item.note.toLowerCase().includes(filter.toLowerCase()))
        .forEach((item,index) => {
            const li = document.createElement("li");
            li.textContent = `${item.title}: ${item.note}`;

            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.style.marginLeft = "10px";
            editBtn.onclick = () => editGrammar(index);
            li.appendChild(editBtn);

            list.appendChild(li);
        });
}

function editGrammar(index){
    document.getElementById("grammarTitle").value = grammar[index].title;
    document.getElementById("grammarNote").value = grammar[index].note;
    grammarEditIndex = index;
}

function filterGrammar() {
    const filter = document.getElementById("grammarSearch").value;
    displayGrammar(filter);
}

// ===== Expressions =====
function addExpression() {
    const french = document.getElementById("exprFrench").value.trim();
    const meaning = document.getElementById("exprMeaning").value.trim();

    if(!french || !meaning){ alert("Please enter both the expression and its meaning."); return; }

    if(exprEditIndex === -1){
        expressions.push({french, meaning});
    } else {
        expressions[exprEditIndex] = {french, meaning};
        exprEditIndex = -1;
    }

    localStorage.setItem("expressions", JSON.stringify(expressions));
    displayExpressions();
    document.getElementById("exprFrench").value = "";
    document.getElementById("exprMeaning").value = "";
}

function displayExpressions(filter="") {
    const list = document.getElementById("exprList");
    list.innerHTML = "";
    expressions
        .filter(item => item.french.toLowerCase().includes(filter.toLowerCase()) || 
                        item.meaning.toLowerCase().includes(filter.toLowerCase()))
        .forEach((item,index) => {
            const li = document.createElement("li");
            li.textContent = `${item.french} → ${item.meaning}`;

            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.style.marginLeft = "10px";
            editBtn.onclick = () => editExpression(index);
            li.appendChild(editBtn);

            list.appendChild(li);
        });
}

function editExpression(index){
    document.getElementById("exprFrench").value = expressions[index].french;
    document.getElementById("exprMeaning").value = expressions[index].meaning;
    exprEditIndex = index;
}

function filterExpressions() {
    const filter = document.getElementById("exprSearch").value;
    displayExpressions(filter);
}
