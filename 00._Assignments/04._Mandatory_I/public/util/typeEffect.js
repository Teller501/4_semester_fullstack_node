export default function typeEffect(text, element) {
    let i = 0;
    const speed = 50;
    text = text.replace(/\n/g, "<br>");

    function typeWriter() {
        if (i < text.length) {
            let char = text.charAt(i);
            if (text.startsWith("<br>", i)) {
                element.innerHTML += "<br>";
                i += 4;
            } else {
                element.innerHTML += char;
                i++;
            }
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}
