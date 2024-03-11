import executeCode from "/util/codeExecutor.js";
import typeEffect from "/util/typeEffect.js";

const codeSnippet = document.getElementById("code-snippet-1");
const code = codeSnippet.textContent;
const outputDiv = document.getElementById("output-1");
const outputText = document.getElementById("output-text-1");
const runCodeButton = document.getElementById("run-code-1");

const codeSnippet2 = document.getElementById("code-snippet-2");
const code2 = codeSnippet2.textContent;
const outputDiv2 = document.getElementById("output-2");
const outputText2 = document.getElementById("output-text-2");
const runCodeButton2 = document.getElementById("run-code-2");

const codeSnippet3 = document.getElementById("code-snippet-3");
const code3 = codeSnippet3.textContent;
const outputDiv3 = document.getElementById("output-3");
const outputText3 = document.getElementById("output-text-3");
const runCodeButton3 = document.getElementById("run-code-3");

const codeSnippet5 = document.getElementById("code-snippet-5");
const code5 = codeSnippet5.textContent;
const outputDiv5 = document.getElementById("output-5");
const outputText5 = document.getElementById("output-text-5");
const runCodeButton5 = document.getElementById("run-code-5");

const codeSnippet6 = document.getElementById("code-snippet-6");
const code6 = codeSnippet6.textContent;
const outputDiv6 = document.getElementById("output-6");
const outputText6 = document.getElementById("output-text-6");
const runCodeButton6 = document.getElementById("run-code-6");

const codeSnippet7 = document.getElementById("code-snippet-7");
const code7 = codeSnippet7.textContent;
const outputDiv7 = document.getElementById("output-7");
const outputText7 = document.getElementById("output-text-7");
const runCodeButton7 = document.getElementById("run-code-7");

runCodeButton.addEventListener("click", () => {
    outputDiv.style.display = "block";
    outputText.textContent = "";

    typeEffect(executeCode(code), outputText);
});

runCodeButton2.addEventListener("click", () => {
    outputDiv2.style.display = "block";
    outputText2.textContent = "";

    typeEffect(executeCode(code2), outputText2);
});

runCodeButton3.addEventListener("click", () => {
    outputDiv3.style.display = "block";
    outputText3.textContent = "";

    typeEffect(executeCode(code3), outputText3);
});

runCodeButton5.addEventListener("click", () => {
    outputDiv5.style.display = "block";
    outputText5.textContent = "";

    typeEffect(executeCode(code5), outputText5);
});

runCodeButton6.addEventListener("click", () => {
    outputDiv6.style.display = "block";
    outputText6.textContent = "";

    typeEffect(executeCode(code6), outputText6);
});

runCodeButton7.addEventListener("click", () => {
    outputDiv7.style.display = "block";
    outputText7.textContent = "";

    typeEffect(executeCode(code7), outputText7);
});
