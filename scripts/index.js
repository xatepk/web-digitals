const form = document.querySelector('.day-info');
const formDay = document.querySelector('.day-info__date');
const textTranslate = document.querySelector('.day-info__text')

const getDayInfo = (evt) => {
  evt.preventDefault();

  const dateArr = new Date(formDay.value).toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  }).replace(/[,%]/g, '').split(' ');

  textTranslate.textContent = dateArr.length ? `${dateArr[0][0].toUpperCase() + dateArr[0].slice(1)}, ${Math.ceil(dateArr[1]/7)} неделя ${dateArr[2][0].toUpperCase() + dateArr[2].slice(1)} ${dateArr[3]} года` : '';
};


form.addEventListener('submit', getDayInfo);

