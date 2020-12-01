let inputValue = "";
let pattern;
let regexValue;
let replacementValue;

const resultsFunction = () => {
    let results = inputValue.replace(pattern, replacementValue);
    console.log("results:", results);
    mainBelow.innerHTML =results;
}

inPute.addEventListener("keyup", (e) => {
    inputValue = e.target.value;
    console.log("inputValue:", inputValue);
});

regexPattern.addEventListener("keyup", (e) => {
    regexValue = e.target.value;
    console.log('regexValue:', regexValue)
    pattern = new RegExp(regexValue, "gim");
    console.log('pattern:', pattern)

    if (inputValue.match(pattern)) {
        carreColor.classList.add("green");
    } else {
        carreColor.classList.remove("green");
    }
    resultsFunction();
});

checkBox.addEventListener("click", (e) => {
    pattern = new RegExp(regexValue, "gm");
    console.log("pattern:", pattern);
    if (checkBox.checked) {
        if (inputValue.match(pattern)) {
            carreColor.classList.add("green");
        } else {
            carreColor.classList.remove("green");
        }
    } else {
        pattern = new RegExp(regexValue, "gim");
        if (inputValue.match(pattern)) {
            carreColor.classList.add("green");
        } else {
            carreColor.classList.remove("green");
        }
    }
    resultsFunction();
});

// Meme principe que boolean... on est d'abord en gi mais si on clique sur Case sensitive

replacementInput.addEventListener("keyup", (e) => {
    replacementValue = e.target.value;
    console.log('replacementValue:', replacementValue)
    resultsFunction();
})

