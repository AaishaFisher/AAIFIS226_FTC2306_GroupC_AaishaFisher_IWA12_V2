const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true, //yes
        canCheckout: true, //yes
        canCheckIn: false, //no
    },
    reserved: {
        color: 'blue',
        canReserve: false, //no
        canCheckout: true, //yes
        canCheckIn: false, //no
    },
    overdue: {
        color: 'red',
        canReserve: false, //no
        canCheckout: false, //no
        canCheckIn: true, //yes
    },
    checkedOut: {
        color: 'orange',
        canReserve: false, //no
        canCheckout: false, //no
        canCheckIn: true, //yes
    }
};

// Edit below line 

//book1
const status1 = document.querySelector('#book1 .status');
const reserve1 = document.querySelector('#book1 .reserve');
const checkout1 = document.querySelector('#book1 .checkout');
const checkin1 = document.querySelector('#book1 .checkin');

const book1Status = status1.textContent.trim();

if (book1Status in STATUS_MAP) {
    status1.style.color = STATUS_MAP[book1Status].color;
    reserve1.disabled = !STATUS_MAP[book1Status].canReserve;
    checkout1.disabled = !STATUS_MAP[book1Status].canCheckout;
    checkin1.disabled = !STATUS_MAP[book1Status].canCheckIn;
}

//book2
const status2 = document.querySelector('#book2 .status');
const reserve2 = document.querySelector('#book2 .reserve');
const checkout2 = document.querySelector('#book2 .checkout');
const checkin2 = document.querySelector('#book2 .checkin');

const book2Status = status2.textContent.trim();

if (book2Status in STATUS_MAP) {
    status2.style.color = STATUS_MAP[book1Status].color;
    reserve2.disabled = !STATUS_MAP[book1Status].canReserve;
    checkout2.disabled = !STATUS_MAP[book1Status].canCheckout;
    checkin2.disabled = !STATUS_MAP[book1Status].canCheckIn;
}

//book3
const status3 = document.querySelector('#book3 .status');
const reserve3 = document.querySelector('#book3 .reserve');
const checkout3 = document.querySelector('#book3 .checkout');
const checkin3 = document.querySelector('#book3 .checkin');

const book3Status = status2.textContent.trim();

if (book3Status in STATUS_MAP) {
    status3.style.color = STATUS_MAP[book3Status].color;
    reserve3.disabled = !STATUS_MAP[book3Status].canReserve;
    checkout3.disabled = !STATUS_MAP[book3Status].canCheckout;
    reserve3.style.color = checkout3.style.color = checkin3.style.color = 'black';

    if (!STATUS_MAP[book3Status].canCheckIn) {
        checkin3.style.color = 'gray';
    }
}

