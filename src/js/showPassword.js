export default function showPassword() {
    const elements = Array.from(document.querySelectorAll('.js-show-password'));

    elements.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            const input = element.previousElementSibling;

            if (input.type === 'text') {
                input.type = 'password';
            } else {
                input.type = 'text';
            }
        });
    });
}
