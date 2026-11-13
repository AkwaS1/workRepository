async function fetchUpdateLog() {
    const rawUrl = 'https://raw.githubusercontent.com/AkwaS1/workRepository/updateLog/README.md';

    try {
        const response = await fetch(rawUrl);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке файла');
        }

        const markdownText = await response.text();
        document.getElementById('update-container').innerHTML = marked.parse(markdownText);
    } catch (error) {
        document.getElementById('update-container').innerHTML = '<p>Не удалось загрузить лог обновлений.</p>';
        console.error(error);
    }
}

fetchUpdateLog();