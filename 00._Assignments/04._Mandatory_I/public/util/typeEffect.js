export default function typeEffect(text, element) {
    let i = 0;
    const speed = 50;

    function typeWriter() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}