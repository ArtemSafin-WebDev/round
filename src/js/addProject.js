export default function addProject() {
    const elements = Array.from(document.querySelectorAll('.js-add-project'));

    elements.forEach(element => {
        const fileInput = element.querySelector('.add-project__upload-photo-file-input');
        const fileDropzone = element.querySelector('.add-project__upload-photo-dropzone');
        const textInputs = Array.from(
            element.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="password"], textarea')
        );
        const filename = element.querySelector('.add-project__upload-filename');
        const submitBtn = element.querySelector('.add-project__submit-btn');
        

        console.log('Text inputs', textInputs)

        

        const loadFile = () => {
            const input = fileInput;
            const imageFileTypes = ['image/gif', 'image/jpeg', 'image/png'];

            if (input.files && input.files[0]) {
                const fileIsImage = imageFileTypes.includes(input.files[0]['type']);
                const prevImage = element.querySelector('.add-project__upload-photo-image');
                if (fileIsImage) {
                    const reader = new FileReader();

                    reader.onload = function(e) {
                        const src = e.target.result;
                        let image = null;
                        if (prevImage) {
                            image = prevImage;
                        } else {
                            image = document.createElement('img');
                        }

                        if (filename.textContent) {
                            filename.textContent = '';
                        }
                       
                        image.className = 'add-project__upload-photo-image';
                        image.src = src;

                        fileDropzone.appendChild(image);
                    };

                    reader.readAsDataURL(input.files[0]);
                } else {
                    if (prevImage) {
                        prevImage.remove();
                    }

                    filename.textContent = input.files[0].name;
                }
            }
        };

        const handleButtonActivity = () => {
            const fileLoaded = fileInput.files && fileInput.files[0];

            const emptyFields = textInputs.filter(input => input.value.trim() === '');

            if (fileLoaded && !emptyFields.length) {
                submitBtn.disabled = false;

                console.log({
                    fileLoaded,
                    emptyFields
                })
            } else {
                submitBtn.disabled = true;

                console.log({
                    fileLoaded,
                    emptyFields
                })
            }
        };


        console.log('Hello')

        textInputs.forEach(input => {
            input.addEventListener('input', () => {
                console.log('Typing')
                handleButtonActivity();
            })
        })


        fileInput.addEventListener('change', () => {
            loadFile();
            handleButtonActivity();
        })

        
    });
}
