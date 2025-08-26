function updateCounter(textareaId, counterId) {
  const textarea = document.getElementById(textareaId);
  const counter = document.getElementById(counterId);

  textarea.addEventListener("input", () => {
    counter.textContent = textarea.value.length;
  });
}

updateCounter("text1", "count1");
updateCounter("text2", "count2");
