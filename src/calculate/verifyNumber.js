// The [^0-9] expression is used to find any character that is NOT a digit.
export default function verifyNumber(item) {
    return /[0-9]+/.test(item);
}