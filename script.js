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

//book2
const status2 = document.querySelector('#book1 .status');
const reserve2 = document.querySelector('#book1 .reserve');
const checkout2 = document.querySelector('#book1 .checkout');
const checkin2 = document.querySelector('#book1 .checkin');

//book3
status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

checkin.0.color = none
status.0.style.color = STATUS_MAP.status.color
reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.1.color = none
status.1.style.color = STATUS_MAP.status.color
reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.2.color = none
status.2.style.color = STATUS_MAP.status.color
reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'