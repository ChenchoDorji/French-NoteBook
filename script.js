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

// ===== VOCABULARY =====
function addVocabulary() {
    const word = document.getElementById("vocabWord").value.trim();
    const translation = document.getElementById("vocabTranslation").value.trim();

    if(!word || !translation){ alert("Please enter both word and translation."); return; }

    if(vocabEditIndex === -1){
        vocab.push({word, translation});
    } else {
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
            li.style.display = "flex";
            li.style.justifyContent = "space-between";
            li.style.alignItems = "center";

            const textSpan = document.createElement("span");
            textSpan.textContent = `${item.word} → ${item.translation}`;
            li.appendChild(textSpan);

            const btnContainer = document.createElement("div");

            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.onclick = () => editVocabulary(index);
            btnContainer.appendChild(editBtn);

            const delBtn = document.createElement("button");
            delBtn.textContent = "Delete";
            delBtn.onclick = () => deleteVocabulary(index);
            btnContainer.appendChild(delBtn);

            li.appendChild(btnContainer);
            list.appendChild(li);
        });
}

function editVocabulary(index){
    document.getElementById("vocabWord").value = vocab[index].word;
    document.getElementById("vocabTranslation").value = vocab[index].translation;
    vocabEditIndex = index;
}

function deleteVocabulary(index){
    if(confirm("Are you sure you want to delete this vocabulary?")){
        vocab.splice(index,1);
        localStorage.setItem("vocab", JSON.stringify(vocab));
        displayVocabulary();
    }
}

function filterVocabulary(){
    const filter = document.getElementById("vocabSearch").value;
    displayVocabulary(filter);
}

// ===== GRAMMAR =====
function addGrammar() {
    const title = document.getElementById("grammarTitle").value.trim();
    const note = document.getElementById("grammarNote").value.trim();

    if(!title || !note){ alert("Please enter a grammar topic and note."); return; }

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
            li.style.display = "flex";
            li.style.justifyContent = "space-between";
            li.style.alignItems = "center";

            const textSpan = document.createElement("span");
            textSpan.textContent = `${item.title}: ${item.note}`;
            li.appendChild(textSpan);

            const btnContainer = document.createElement("div");

            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.onclick = () => editGrammar(index);
            btnContainer.appendChild(editBtn);

            const delBtn = document.createElement("button");
            delBtn.textContent = "Delete";
            delBtn.onclick = () => deleteGrammar(index);
            btnContainer.appendChild(delBtn);

            li.appendChild(btnContainer);
            list.appendChild(li);
        });
}

function editGrammar(index){
    document.getElementById("grammarTitle").value = grammar[index].title;
    document.getElementById("grammarNote").value = grammar[index].note;
    grammarEditIndex = index;
}

function deleteGrammar(index){
    if(confirm("Are you sure you want to delete this grammar note?")){
        grammar.splice(index,1);
        localStorage.setItem("grammar", JSON.stringify(grammar));
        displayGrammar();
    }
}

function filterGrammar(){
    const filter = document.getElementById("grammarSearch").value;
    displayGrammar(filter);
}

// ===== EXPRESSIONS =====
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
            li.style.display = "flex";
            li.style.justifyContent = "space-between";
            li.style.alignItems = "center";

            const textSpan = document.createElement("span");
            textSpan.textContent = `${item.french} → ${item.meaning}`;
            li.appendChild(textSpan);

            const btnContainer = document.createElement("div");

            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.onclick = () => editExpression(index);
            btnContainer.appendChild(editBtn);

            const delBtn = document.createElement("button");
            delBtn.textContent = "Delete";
            delBtn.onclick = () => deleteExpression(index);
            btnContainer.appendChild(delBtn);

            li.appendChild(btnContainer);
            list.appendChild(li);
        });
}

function editExpression(index){
    document.getElementById("exprFrench").value = expressions[index].french;
    document.getElementById("exprMeaning").value = expressions[index].meaning;
    exprEditIndex = index;
}

function deleteExpression(index){
    if(confirm("Are you sure you want to delete this expression?")){
        expressions.splice(index,1);
        localStorage.setItem("expressions", JSON.stringify(expressions));
        displayExpressions();
    }
}

function filterExpressions(){
    const filter = document.getElementById("exprSearch").value;
    displayExpressions(filter);
}
