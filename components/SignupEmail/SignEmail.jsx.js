function togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput');
    const inputType = passwordInput.type;
    passwordInput.type = inputType === 'password' ? 'text' : 'password';
}

function formData() {
    const datas = document.querySelector('.parent-container');
    datas.innerHTML = `
    <div>
    <div class="custom-form">
    <img class="icon" src="https://img.icons8.com/ios/15/new-post--v1.png" alt="new-post--v1" />
    <input type="text" placeholder="Username" class="custom-input" />
    </div>
    <div class="custom-form">
    <img class="icon" src="https://img.icons8.com/ios/15/new-post--v1.png" alt="new-post--v1" />
    <input type="text" placeholder="Your Email" class="custom-input" />
    </div>
    <div class="password-container">
    <input type="password" placeholder="Password" class="password" id="passwordInput">
    <img class="pass-icon" src="https://img.icons8.com/sf-regular/20/visible.png" alt="visible" onclick="togglePasswordVisibility()">
    </div>
    </div>
    `
}
formData()