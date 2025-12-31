function copyValue(text, btn) {
  navigator.clipboard.writeText(text);
  const original = btn.innerText;
  btn.innerText = "Copied ✓";
  setTimeout(() => btn.innerText = original, 1200);
}
