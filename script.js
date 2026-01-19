const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

/* Add message to UI */
function addMessage(message, className) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", className);
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

/* Fake AI typing */
function showTyping() {
  const typingDiv = document.createElement("div");
  typingDiv.classList.add("message", "bot-message");
  typingDiv.textContent = "EmpowHer AI is typing...";
  chatBox.appendChild(typingDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
  return typingDiv;
}

/* DEMO AI Brain */
function getDemoReply(userMessage) {
  const msg = userMessage.toLowerCase();

  // 💼 CAREER & GUIDANCE (HIGH PRIORITY)
  if (
    msg.includes("career") ||
    msg.includes("guidance") ||
    msg.includes("job") ||
    msg.includes("internship") ||
    msg.includes("work")
  ) {
    return "🌱 Yes, absolutely! I can guide you in choosing a safe career based on your interests. Popular options include IT, teaching, healthcare, design, content writing, and remote jobs. Tell me what you enjoy or your education background.";
  }

  // 🎓 SKILLS & LEARNING
  if (
    msg.includes("skill") ||
    msg.includes("learn") ||
    msg.includes("course") ||
    msg.includes("training")
  ) {
    return "📚 You can build skills like communication, coding, graphic design, digital marketing, data analysis, or public speaking. Skills help you get safer and better-paying jobs.";
  }

  // 🚨 SCAMS & FRAUD
  if (
    msg.includes("scam") ||
    msg.includes("fraud") ||
    msg.includes("fake job") ||
    msg.includes("money asked") ||
    msg.includes("pay first")
  ) {
    return "⚠️ Warning: Real jobs never ask for money. Avoid offers that promise high salary quickly or ask for fees or personal details.";
  }

  // ⚖️ WOMEN LEGAL RIGHTS
  if (
    msg.includes("rights") ||
    msg.includes("legal") ||
    msg.includes("law") ||
    msg.includes("harassment")
  ) {
    return "⚖️ Women have the right to a safe workplace, equal pay, and dignity. Workplace harassment is illegal, and you can report it to HR or a women’s helpline.";
  }

  // 🛡️ SAFETY (ONLY STRONG DANGER WORDS)
  if (
    msg.includes("unsafe") ||
    msg.includes("threat") ||
    msg.includes("violence") ||
    msg.includes("danger")
  ) {
    return "❤️ Your safety matters most. If you are in danger, please contact a trusted person or local emergency helpline immediately.";
  }

  // 🧠 EMOTIONAL SUPPORT
  if (
    msg.includes("stress") ||
    msg.includes("anxiety") ||
    msg.includes("confidence") ||
    msg.includes("afraid")
  ) {
    return "🌸 You are strong and capable. It’s okay to feel overwhelmed. Taking small steps toward your goals is progress.";
  }

  // 👋 GREETING
  if (msg === "hi" || msg === "hello" || msg === "hey") {
    return "Hi 👋 I’m EmpowHer AI. I support women with safety, jobs, skills, and legal awareness.";
  }

  // 🔁 FALLBACK
  return "🤖 I can help you with career guidance, safe jobs, skill development, women’s rights, and scam alerts. Please ask me anything.";
}



/* Send button logic */
sendBtn.onclick = () => {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, "user-message");
  userInput.value = "";

  const typingDiv = showTyping();

  setTimeout(() => {
    typingDiv.remove();
    const reply = getDemoReply(message);
    addMessage(reply, "bot-message");
  }, 1000);
};

/* Enter key support */
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});
