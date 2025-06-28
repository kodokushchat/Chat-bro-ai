
console.log('LUX-00 Genesis loaded');

const screenshotInput = document.getElementById('screenshotInput');
const screenshotPreview = document.getElementById('screenshotPreview');

screenshotInput.addEventListener('change', () => {
  const file = screenshotInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      screenshotPreview.src = e.target.result;
      screenshotPreview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});
