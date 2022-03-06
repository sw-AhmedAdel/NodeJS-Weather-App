const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const msg1 = document.querySelector('.msg1');
const msg2 = document.querySelector('.msg2');

weatherForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const address = search.value
  search.value ='';
  msg1.textContent="Loading, please wait"
  const res = await fetch(`/v1/weather/address?address=${address}`);
  const data = await res.json();
  if(data.error) {
    console.log(data.error);
    msg2.textContent=data.error;
  }
  else {
    msg2.textContent=`location is:${data.location}, ${data.forecast}`
  }

})

 
