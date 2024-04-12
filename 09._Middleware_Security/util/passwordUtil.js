import bcrypt from "bcrypt";

const saltRounds = 14;
const plaintextPassowrd = "AndersTeller501";
const passwordHash = "$2b$14$W54TyGZ/THKoszCcheYcte7TmDWhAqyYQn9uI.a3Wv48nEptNnSHO"

const hashedPassword = await bcrypt.hash(plaintextPassowrd, saltRounds);

// console.log(hashedPassword);

const isSame = await bcrypt.compare(plaintextPassowrd, passwordHash);

console.log(isSame);