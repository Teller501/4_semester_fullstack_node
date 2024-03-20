import executeCode from "/util/codeExecutor.js";
import typeEffect from "/util/typeEffect.js";

const snippets = [
    {
        codeId: "code-snippet-1",
        outputId: "output-1",
        outputTextId: "output-text-1",
        buttonId: "run-code-1",
    },
    {
        codeId: "code-snippet-2",
        outputId: "output-2",
        outputTextId: "output-text-2",
        buttonId: "run-code-2",
    },
    {
        codeId: "code-snippet-3",
        outputId: "output-3",
        outputTextId: "output-text-3",
        buttonId: "run-code-3",
    },
    {
        codeId: "code-snippet-5",
        outputId: "output-5",
        outputTextId: "output-text-5",
        buttonId: "run-code-5",
    },
    {
        codeId: "code-snippet-6",
        outputId: "output-6",
        outputTextId: "output-text-6",
        buttonId: "run-code-6",
    },
    {
        codeId: "code-snippet-11",
        outputId: "output-11",
        outputTextId: "output-text-11",
        buttonId: "run-code-11",
    },
    {
        codeId: "code-snippet-12",
        outputId: "output-12",
        outputTextId: "output-text-12",
        buttonId: "run-code-12",
    },
];

snippets.forEach((snippet) => {
    const runButton = document.getElementById(snippet.buttonId);
    runButton.addEventListener("click", () => {
        const outputDiv = document.getElementById(snippet.outputId);
        const outputText = document.getElementById(snippet.outputTextId);
        const codeSnippet = document.getElementById(snippet.codeId);
        const code = codeSnippet.textContent;

        outputDiv.style.display = "block";
        outputText.textContent = "";
        typeEffect(executeCode(code), outputText);
    });
});
