function runAI() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  output.textContent = `Pretend AI is working... You said: "${input}"`;

  // Later: hook this up to OpenAI API using fetch
}
