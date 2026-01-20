function startLiveClock() {
    const clockElement = document.getElementById('pos-clock');
    
    const georgianMonths = [
        "იანვარი", "თებერვალი", "მარტი", "აპრილი", 
        "მაისი", "ივნისი", "ივლისი", "აგვისტო", 
        "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"
    ];

    function updateTime() {
        const now = new Date();
        
        const day = now.getDate();
        const month = georgianMonths[now.getMonth()];
        const year = now.getFullYear();
        
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        clockElement.textContent = `${day} ${month}, ${year} | ${hours}:${minutes}:${seconds}`;
    }

    updateTime();
    setInterval(updateTime, 1000); 
}

document.addEventListener('DOMContentLoaded', startLiveClock);