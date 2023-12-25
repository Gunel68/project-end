document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.querySelector('.registration-form');
    const userList = document.createElement('ul'); 
    userList.classList.add('user-list');

    
    registrationForm.style.position = 'relative';

    document.body.appendChild(userList);

    
    const registeredUsers = [];

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

       
        const fullname = document.getElementById('fullname').value;
        const fathername = document.getElementById('fathername').value;
        const age = document.getElementById('age').value;
        const language = document.getElementById('language').value;
        const phone = document.getElementById('phone').value;
        const part = document.querySelector('input[name="part"]:checked').value;
        const mlm = document.getElementById('mlm').value;

        
        const user = {
            fullname,
            fathername,
            age,
            language,
            phone,
            part,
            mlm
        };

        registeredUsers.push(user);

        
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <p>Ad: ${user.fullname}</p>
            <p>Ata Adı: ${user.fathername}</p>
            <p>Yaş: ${user.age}</p>
            <p>Dil Seçimi: ${user.language}</p>
            <p>Telefon Nömrəsi: ${user.phone}</p>
            <p>Vaxt Seçimi: ${user.part}</p>
            <p>Məllim Seçimi: ${user.mlm}</p>
            <button class="delete-button">Sil</button>
        `;

        userList.appendChild(listItem);

        
        registrationForm.reset();
    });

    
    userList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-button')) {
            const listItem = event.target.parentElement;
            const index = Array.from(listItem.parentNode.children).indexOf(listItem);

           
            registeredUsers.splice(index, 1);

            
            listItem.remove();
        }
    });
});
function validateInput(input) {
   
    const regex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ]+$/;

    
    if (!regex.test(input.value)) {
        
        input.value = input.value.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ]+/, '');
    }
}
function validateAge(input) {
    
    const age = parseInt(input.value, 10);

    
    if (isNaN(age) || age < 0 || age > 5) {
        
        input.value = '';
    }
}
function validatePhoneNumber(input) {
    
    input.value = input.value.replace(/\D/g, '');

    
    const cleanedInput = input.value.substring(0, 10);

    
    input.value = cleanedInput;
}
