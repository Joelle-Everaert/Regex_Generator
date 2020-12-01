const mainUp = document.createElement('div')
mainUp.classList.add("main");
document.body.appendChild(mainUp);

const labelResults = document.createElement("label");
labelResults.for = "inputD";
labelResults.innerHTML = "Results";
document.body.appendChild(labelResults);

const mainBelow = document.createElement('div')
mainBelow.classList.add("mainBelow");
document.body.appendChild(mainBelow);

const carreColor = document.createElement('div')
carreColor.classList.add("carreColor");
mainUp.appendChild(carreColor);

const inputesDiv = document.createElement("div");
inputesDiv.classList.add("inputesDiv");
mainUp.appendChild(inputesDiv);

const labelInputA = document.createElement("label");
labelInputA.for = "inputA"
labelInputA.innerHTML = "Test sentence"
inputesDiv.appendChild(labelInputA)

const inPute = document.createElement('input');
inputesDiv.appendChild(inPute);
inPute.placeholder = "write something please";
inPute.id = "inputA";

const labelInputB = document.createElement("label");
labelInputB.for = "inputB"
labelInputB.innerHTML = "Regex pattern"
inputesDiv.appendChild(labelInputB)

const regexPattern = document.createElement('input');
inputesDiv.appendChild(regexPattern);
regexPattern.placeholder = "write something please";
regexPattern.id = "inputB";

const labelReplacement = document.createElement("label");
labelReplacement.for = "inputC";
labelReplacement.innerHTML = "Replacement Input";
inputesDiv.appendChild(labelReplacement);

const replacementInput = document.createElement("input");
inputesDiv.appendChild(replacementInput);
replacementInput.placeholder = "write something please";
replacementInput.id = "inputC";

const labelCheckbox = document.createElement("label");
labelCheckbox.for = "inputC";
labelCheckbox.innerHTML = "Case Sensitive";
inputesDiv.appendChild(labelCheckbox);

const checkBox = document.createElement("input");
inputesDiv.appendChild(checkBox);
checkBox.type = "checkbox";
checkBox.id = "inputC";