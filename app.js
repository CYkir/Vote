let totalVotes = 0;

const voteButton = document.getElementById('vote-btn');
const decreaseButton = document.getElementById('decrease-btn');
const deleteButton = document.getElementById('delete-btn');
const resultDiv = document.getElementById('result');

// Cek apakah ada suara yang tersimpan di localStorage
const storedVotes = JSON.parse(localStorage.getItem('votes'));
if (storedVotes && storedVotes.candidate1) {
    totalVotes = storedVotes.candidate1;
    updateResult();
}

voteButton.addEventListener('click', () => {
    totalVotes++;
    updateResult();
});

decreaseButton.addEventListener('click', () => {
    if (totalVotes > 0) {
        totalVotes--;
        updateResult();
    }
});

deleteButton.addEventListener('click', () => {
    totalVotes = 0;
    updateResult();
});

function updateResult() {
    resultDiv.textContent = `Jumlah Suara : ${totalVotes}`;
    resultDiv.style.display = 'block';

    // Simpan total suara ke localStorage
    localStorage.setItem('votes', JSON.stringify({
        candidate1: totalVotes
    }));
}