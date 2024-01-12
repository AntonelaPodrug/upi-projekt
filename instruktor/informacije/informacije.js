document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const questionInput = document.getElementById("question-input");
    const sendQuestionBtn = document.getElementById("send-question-btn");
    const questionList = document.getElementById("question-list");

    const autoReplies = [
        "Autoškola se nalazi na adresi Ulica Ruđera Boškovića 33 u Splitu.",
        "Predavanja iz propisa počinju svako drugi ponedjeljak.",
        "Cijena B kategorije je 1000€.",
        "Na upis trebate donijeti osobnu iskaznicu i potvrdu o obavljenom liječničkom pregledu.",
        "Ako imate dodatnih pitanja možete nam se javiti na broj +3852161922 ili putem mail-a autoskola@gmail.com."
    ];

    document.querySelectorAll(".question-btn").forEach(function (button, index) {
        button.addEventListener("click", function () {
            const questionText = button.textContent;
            appendMessage("Vi", questionText);

            setTimeout(function () {
                const replyText = autoReplies[index % autoReplies.length];
                appendMessage("Autoškola", replyText);
                scrollToBottom();
            }, 500); 
        });
    });

    sendQuestionBtn.addEventListener("click", function () {
        const questionText = questionInput.value.trim();

        if (questionText !== "") {
            appendMessage("Vi", questionText);
            questionInput.value = "";

            setTimeout(function () {
                const randomReply = autoReplies[Math.floor(Math.random() * autoReplies.length)];
                appendMessage("Autoškola", randomReply);
                scrollToBottom();
            }, 500); 
        }
    });

    function appendMessage(sender, text) {
        const message = document.createElement("div");
        message.className = sender === "Vi" ? "message sent" : "message received";
        message.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatBox.appendChild(message);
    }

    function scrollToBottom() {
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
