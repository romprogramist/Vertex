document.addEventListener('DOMContentLoaded', () => {
    const telInputs = document.querySelectorAll('input[type=tel]');
    phoneMask(telInputs);

    modalsInit();

    const forms = document.querySelectorAll('form');
    const applicationCompletedModal = document.getElementById('success');
    const applicationCrashedModal = document.getElementById('error');
    application(forms, '/api/application/send', applicationCompletedModal, applicationCrashedModal, ['name', 'phone']);
});
