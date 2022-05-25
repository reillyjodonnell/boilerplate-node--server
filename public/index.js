const form = document.getElementById('login-form');
const errorElement = document.getElementById('error');
form.addEventListener('submit', async function (e) {
  e.preventDefault();

  console.log(this);

  const formData = new FormData(this);

  try {
    const fetchedData = await fetch('/login', {
      method: 'post',
      body: formData,
    });
    const response = await fetchedData.text();
    const parsedResponse = JSON.parse(response);
    console.log(parsedResponse);
    const error = parsedResponse?.error;
    if (error) {
      console.log(error);
      errorElement.classList.add('error');
      errorElement.textContent = error;
    }
  } catch (err) {
    console.log(err);
  }
});
