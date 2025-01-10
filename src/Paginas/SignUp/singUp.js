const form = document.querySelector('form')
const cancelButton = document.getElementById('Cancel')
const confirmButton = document.getElementById('Confirm')


cancelButton.addEventListener('click', () => {

    window.location.href = '../../../home.html'
})


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const date = document.getElementById('data').value
    const phone = document.getElementById('telefone').value
    const password = document.getElementById('senha').value
    const confirmPassword = document.getElementById('confsenha').value

    if (!name || !email || !date || !phone || !password || !confirmPassword) {
        alert('Please fill in all fields')
        return
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match')
        return
    }

    window.location.href = 'login.html'
});