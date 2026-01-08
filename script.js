// Load existing data from localStorage
let vocab = JSON.parse(localStorage.getItem("vocab")) || [];
let expressions = JSON.parse(localStorage.getItem("expressions")) || [];

// Track index being edited (-1 means adding new)
let vocabEditIndex = -1;
let exprEditIndex = -1;

// Display all on load
displayVocabulary();
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

            const textSpan = document.createElement("span");
            textSpan.textContent = `${item.word} → ${item.translation}`;
            li.appendChild(textSpan);

            const btnContainer = document.createElement("div");

            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.className = "edit";
            editBtn.onclick = () => editVocabulary(index);
            btnContainer.appendChild(editBtn);

            const delBtn = document.createElement("button");
            delBtn.textContent = "Delete";
            delBtn.className = "delete";
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

            const textSpan = document.createElement("span");
            textSpan.textContent = `${item.french} → ${item.meaning}`;
            li.appendChild(textSpan);

            const btnContainer = document.createElement("div");

            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.className = "edit";
            editBtn.onclick = () => editExpression(index);
            btnContainer.appendChild(editBtn);

            const delBtn = document.createElement("button");
            delBtn.textContent = "Delete";
            delBtn.className = "delete";
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
