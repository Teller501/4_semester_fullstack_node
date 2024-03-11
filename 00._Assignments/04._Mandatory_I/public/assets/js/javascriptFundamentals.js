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

const codeSnippet11 = document.getElementById("code-snippet-11");
const code11 = codeSnippet11.textContent;
const outputDiv11 = document.getElementById("output-11");
const outputText11 = document.getElementById("output-text-11");
const runCodeButton11 = document.getElementById("run-code-11");

const codeSnippet12 = document.getElementById("code-snippet-12");
const code12 = codeSnippet12.textContent;
const outputDiv12 = document.getElementById("output-12");
const outputText12 = document.getElementById("output-text-12");
const runCodeButton12 = document.getElementById("run-code-12");

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

runCodeButton11.addEventListener("click", () => {
    outputDiv11.style.display = "block";
    outputText11.textContent = "";

    typeEffect(executeCode(code11), outputText11);
});

runCodeButton12.addEventListener("click", () => {
    outputDiv12.style.display = "block";
    outputText12.textContent = "";

    typeEffect(executeCode(code12), outputText12);
});
