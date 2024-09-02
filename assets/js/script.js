// script.js

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    const terminal = document.querySelector('.terminal');

    const initialTextColor = 'text-green-500';
    const initialBorderColor = 'border-green-500';

    const welcomeMessage = `<p>Welcome to Roiander Portfolio. Please type <span class="text-green-300">help</span> for a list of available commands.</p>`;

    output.innerHTML = welcomeMessage;

    const commands = {
        help: `Available commands:<br>
<ul>
    <li>- <span class="text-green-300">help</span>: Shows this help message.</li>
    <li>- <span class="text-green-300">whoami</span>: About me.</li>
    <li>- <span class="text-green-300">youtube</span>: Opens my YouTube Channel.</li>
    <li>- <span class="text-green-300">twitter</span>: Opens my Twitter account.</li>
    <li>- <span class="text-green-300">github</span>: Opens Github.</li>
    <li>- <span class="text-green-300">coffee</span>: Opens Buy me a Coffee.</li>
    <li>- <span class="text-green-300">clear</span>: Clears the terminal screen.</li>
</ul>`,
        whoami: 'I am a software engineering student, I like programming and maintaining continuous learning to be able to be aware of future solutions to implement.'
    };

    const externalLinks = {
        youtube: 'https://www.youtube.com/@Roiander',
        twitter: 'https://x.com/RoianderDev',
        github: 'https://github.com/Roiander',
        coffee: 'https://ko-fi.com/roiander'
    };

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const userInput = input.value.trim().toLowerCase();
            if (userInput === '') return;

            const commandLine = document.createElement('p');
            commandLine.innerHTML = `<span class="prompt">[ Roiander ]#</span> ${userInput}`;
            output.appendChild(commandLine);

            if (userInput === 'clear') {
                output.innerHTML = welcomeMessage;
            } else if (externalLinks[userInput]) {
                window.open(externalLinks[userInput], '_blank');
                const responseLine = document.createElement('p');
                responseLine.innerHTML = `Opening ${userInput} in a new tab...`;
                output.appendChild(responseLine);
            } else if (commands[userInput]) {
                const responseLine = document.createElement('p');
                responseLine.innerHTML = commands[userInput];
                output.appendChild(responseLine);
            } else {
                const responseLine = document.createElement('p');
                responseLine.innerHTML = `Command not found: ${userInput}`;
                output.appendChild(responseLine);
            }

            input.value = '';

            output.parentElement.scrollTop = output.parentElement.scrollHeight;
        }
    });
});
