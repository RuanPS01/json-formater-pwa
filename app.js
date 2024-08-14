window.onload = async function () {
    registerSW();
}

// Register the Service Worker
async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator
                .serviceWorker
                .register('service-worker.js');
            console.log("SW registration successful");
        } catch (e) {
            console.log('SW registration failed: ', e);
        }
    }
}

window.clearWarning = function (event) {
    event.target.removeAttribute('aria-invalid');
    document.getElementById('storm').style.display = 'none';
    document.getElementById('sunrise').style.display = 'block';
}


window.formatJson = async function (event) {
    try {
        event.preventDefault();
        document.getElementById('json').setAttribute('aria-invalid', 'false');
        const json = document.getElementById('json').value;
        const result = JSON.stringify(JSON.parse(json), null, 2);
        document.getElementById('result').value = result;
    } catch (err) {
        document.getElementById('json').setAttribute('aria-invalid', 'true');
        document.getElementById('storm').style.display = 'block';
        document.getElementById('sunrise').style.display = 'none';
    }
}