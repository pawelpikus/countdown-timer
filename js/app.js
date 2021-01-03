const currentYear = new Date().getFullYear();

const getEndYear = () => {
    return new Date(`June 26 ${currentYear} 00:00:00`)
}

const year = document.querySelector('.year');
year.textContent = `${currentYear}/${getEndYear().getFullYear()}`;

const app = document.querySelector('.countdown-timer');
const message = document.querySelector('.message');
const heading = document.querySelector('h1');

const format = (t) => {
    return t > 9 ? t : '0' + t;
};

const render = (time) => {
    app.innerHTML = 
    `<div class='countdown'>
        <div class='timer'>
            <h2 class='days'>${format(time.days)}</h2>
            <small>Days</small>
        </div>
        <div class='timer'>
            <h2 class='hours'>${format(time.hours)}</h2>
            <small>Hours</small>
        </div>
        <div class='timer'>
            <h2 class='minutes'>${format(time.minutes)}</h2>
            <small>Minutes</small>
        </div>
        <div class='timer'>
            <h2 class='seconds'>${format(time.seconds)}</h2>
            <small>Seconds</small>
        </div>
    </div>`;
};

const showMessage = () => {
    message.textContent = `Happy Summer Holiday!`;
    app.innerHTML = '';
    heading.style.display = 'none';
};

const hideMessage = () => {
    message.innerHTML = '';
    heading.style.display = 'block';
};

const complete = () => {
    showMessage();

    //restart message after showing a greeting message
    setTimeout(() => {
        hideMessage();
        countdownTimer.setExpiredDate(getEndYear());
    }, 1000 * 60 * 24);
};

const countdownTimer = new CountDown(getEndYear(), render, complete);

