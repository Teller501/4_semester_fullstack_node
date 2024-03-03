export default function executeCode(code) {
    try {
        let originalConsoleLog = console.log;
        let logOutput = "";
        console.log = (...args) => {
            logOutput += args.join(" ") + "\n";
        };

        new Function(code)();

        console.log = originalConsoleLog;

        return logOutput;
    } catch (e) {
        return e.message;
    }
}


