// Min 8 characters length
// At least 1 Upper Case
// At least 1 Special Character (!@#$&*)
// At least 1 numerals (0-9)
// At least 1 letters in Lower Case

export const passwordValidateRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
