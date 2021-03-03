export default function avatarUpload() {
    const elements = Array.from(document.querySelectorAll('.js-avatar-upload'));

    elements.forEach(element => {
        const input = element.querySelector('input[type="file"]');

        input.addEventListener('change', () => {
            const prevImage = element.querySelector('.register__form-avatar-upload-image');
            if (input.files && input.files[0]) {
                const reader = new FileReader();

                reader.onload = function(e) {
                    const src = e.target.result;
                    let image = null;
                    if (prevImage) {
                        image = prevImage;
                    } else {
                        image = document.createElement('img');
                    }

                  

                    image.className = 'register__form-avatar-upload-image';
                    image.src = src;

                    element.appendChild(image);
                };

                reader.readAsDataURL(input.files[0]);
            }
        });
    });
}
