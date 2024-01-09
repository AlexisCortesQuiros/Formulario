const usernameInput = document.getElementById('username');
        const phoneInput = document.getElementById('phone');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        const acceptTermsCheckbox = document.getElementById('accept-terms');
        const registerButton = document.getElementById('register-button');

        usernameInput.addEventListener('blur', validateUsername);
        phoneInput.addEventListener('blur', validatePhone);
        passwordInput.addEventListener('blur', validatePassword);
        confirmPasswordInput.addEventListener('blur', validatePasswordMatch);
        acceptTermsCheckbox.addEventListener('change', checkFormValidity);

        function validateUsername() {
            const usernameValue = usernameInput.value;
            const isValid = /^[A-Za-z\s]{1,20}$/.test(usernameValue);
            setFieldValidity(usernameInput, isValid);
        }

        function validatePhone() {
            const phoneValue = phoneInput.value;
            const isValid = /^[0-9]{9}$/.test(phoneValue);
            setFieldValidity(phoneInput, isValid);
        }

        function validatePassword() {
            const passwordValue = passwordInput.value;
            const isValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(passwordValue);
            setFieldValidity(passwordInput, isValid);
            validatePasswordMatch();
        }

        function validatePasswordMatch() {
            const passwordValue = passwordInput.value;
            const confirmPasswordValue = confirmPasswordInput.value;
            const isValid = passwordValue === confirmPasswordValue && passwordValue.length >= 6;
            setFieldValidity(confirmPasswordInput, isValid);
            checkFormValidity();
        }

        function setFieldValidity(inputElement, isValid) {
            if (isValid) {
                inputElement.classList.remove('error');
                inputElement.classList.add('success');
            } else {
                inputElement.classList.remove('success');
                inputElement.classList.add('error');
            }
        }

        function checkFormValidity() {
            const isFormValid = usernameInput.classList.contains('success') &&
                                phoneInput.classList.contains('success') &&
                                passwordInput.classList.contains('success') &&
                                confirmPasswordInput.classList.contains('success') &&
                                acceptTermsCheckbox.checked;

            registerButton.disabled = !isFormValid;
        }