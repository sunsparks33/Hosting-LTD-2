document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Toggle Dark Mode';
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    const style = document.createElement('style');
    style.innerHTML = `
        body.dark-mode {
            background-color: #121212;
            color: #ffffff;
        }
        body {
            background-color: #ffffff;
            color: #000000;
        }
        button {
            position: fixed;
            top: 10px;
            right: 10px;
            padding: 10px 20px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
});