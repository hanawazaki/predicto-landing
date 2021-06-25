const clock = document.querySelector('.time-launch')
const countDownDate = new Date()
const nextMonth = countDownDate.setMonth(countDownDate.getMonth() + 2)

const time = () => {
    const now = new Date().getTime();
    const distance = nextMonth - now;

    const day = 1000 * 60 * 60 * 24;
    const hour = 1000 * 60 * 60;
    const min = 1000 * 60;

    const d = Math.floor(distance / (day));
    const h = Math.floor((distance % (day)) / (hour));
    const m = Math.floor((distance % (hour)) / (min));
    const s = Math.floor((distance % (min)) / (1000));

    const html = `
        <div class="item">
            <p class="time">${d}</p>
            <p>Days</p>
        </div>
        <div class="item">
            <p class="time">${h}</p>
            <p>Hour</p>
        </div>
        <div class="item">
            <p class="time">${m}</p>
            <p>Minutes</p>
        </div>
        <div class="item">
            <p class="time">${s}</p>
            <p>Second</p>
        </div>
    `
    clock.innerHTML = html
}

setInterval(time, 1000)