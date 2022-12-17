function application(forms, apiURL, applicationCompletedModal, applicationCrashedModal, inputNames) {
    forms.forEach(f => {
        f.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputs = [];
            inputNames.forEach(i => {
                if(f.elements[i]) {
                    inputs.push(f.elements[i]);
                }
            });

            const validation = f.querySelector('.validation');

            if (validation) {
                validation.classList.remove('show');
                validation.textContent = '';
            }
        

            const clientData = {};
            inputs.forEach(i => {
                clientData[i.name] = i.value;
            });

            const utmInfo = getCookie('utm_info');
            clientData.utmInfo = utmInfo ? utmInfo : '';

            apiRequest(apiURL, 'POST', clientData, () => {
                setTimeout(() => {
                    hideLoader();
                    showModal(applicationCompletedModal);
                    f.reset();
                    if(!document.getElementById('development-mode')){
                        // reach goles in analytics
                    }
                }, 400);
            }, (error, response) => {
                setTimeout(() => {
                    hideLoader();
                    if (response && response.errors) {

                        const messages = Object.values(response.errors).reduce((prev, curr) => {
                            return prev + ' ' + curr.reduce((prev,curr) => prev + " " + curr, '')
                        }, '');
                        
                        validation.textContent = messages.toString();
                        validation.classList.add('show');
                    } else {
                        showModal(applicationCrashedModal);
                    }
                }, 400);
            });
            showLoader();
        });
    });
}


