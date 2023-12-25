
function addProductsToPage() {
    const container = document.getElementById('bagContainer');

   
    JSON.parse(localStorage.getItem("favs")).forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const img = document.createElement('img');
        img.classList.add(product.class);
        img.src = product.src;
        img.alt = product.alt;

        const heartBow = document.createElement('div');
        heartBow.classList.add('heart-bow');

        productDiv.appendChild(img);
        
        container.appendChild(productDiv);


        const sepet = document.createElement('div');
        sepet.classList.add('sepet');

        const randomPrice = Math.round(Math.random()*1500)/100 + "AZN"
       

        let priceDiv = document.createElement("div")

        priceDiv.innerText = randomPrice

        productDiv.appendChild(img);
        productDiv.appendChild(sepet);
        productDiv.appendChild(priceDiv);
        container.appendChild(productDiv);
        
    });

}
addProductsToPage()

if (document.querySelector(".bag-container").children.length != 0) {

    document.querySelector(".alert").classList.add("display-none")
    document.querySelector(".shopLink").classList.add("display-none")
   document.querySelector(".payment-container").classList.remove("display-none")



}



        let cardNumberInput = document.getElementById('card-number');
        let expiryDateInput = document.getElementById('expiry-date');
        let cvvInput = document.getElementById('cvv');
        let completePaymentButton = document.getElementById('completePayment');

        function isValidCardNumber(cardNumber) {
           
            return /^\d{16}$/.test(cardNumber);
        }

        function isValidExpiryDate(expiryDate) {
            
            return /^\d{2}\/\d{2}$/.test(expiryDate);
        }

        function isValidCvv(cvv) {
          
            return /^\d{3}$/.test(cvv);
        }

        function checkInputs() {
            let cardNumberValue = cardNumberInput.value.trim();
            let expiryDateValue = expiryDateInput.value.trim();
            let cvvValue = cvvInput.value.trim();

            let isCardNumberValid = isValidCardNumber(cardNumberValue);
            let isExpiryDateValid = isValidExpiryDate(expiryDateValue);
            let isCvvValid = isValidCvv(cvvValue);

            completePaymentButton.disabled = !isCardNumberValid || !isExpiryDateValid || !isCvvValid;
        }

        
        cardNumberInput.addEventListener('input', checkInputs);
        expiryDateInput.addEventListener('input', function (event) {
            let inputValue = event.target.value;
            if (/^\d{2}\/?$/.test(inputValue)) {
                event.target.value = inputValue + '/';
            }
            checkInputs();
        });
        cvvInput.addEventListener('input', checkInputs);

        document.getElementById('completePayment').addEventListener('click', function (event) {
            event.preventDefault();

            
            document.getElementById('successMessage').style.display = 'block';

       
            cardNumberInput.value = '';
            expiryDateInput.value = '';
            cvvInput.value = '';

            
            completePaymentButton.disabled = true;
        });
   
