import executeCode from "/util/codeExecutor.js";
import typeEffect from "/util/typeEffect.js";

const codeSnippet = document.getElementById("code-snippet-1");
const code = codeSnippet.textContent;
const outputDiv = document.getElementById("output-1");
const outputText = document.getElementById("output-text-1");
const runCodeButton = document.getElementById("run-code-1");

runCodeButton.addEventListener("click", () => {
    outputDiv.style.display = "block";
    outputText.textContent = "";

    typeEffect(executeCode(code), outputText);
});
