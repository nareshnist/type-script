var inputEl = document.getElementById('user-name');
if (!inputEl) {
    throw new Error("Could not find user-name element");
}
console.log(inputEl.value);
// explicit type assertion
