const copyrightP = document.getElementById("copyright-year");
const currentYear = new Date().getFullYear();

copyrightP.textContent = `©${currentYear}`;
