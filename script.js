let count = 10;

function displayCountdown(callback) {
    if (count > 0) {
        document.getElementById('countdown').innerText = count;
        count--;
        setTimeout(() => displayCountdown(callback), 1000);
    } else {
        callback();
    }
}

displayCountdown(() => {
    document.getElementById('countdown').innerText = 'Happy Independence Day!';
});
