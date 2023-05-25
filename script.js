function bookSeat() {
    const seats = document.getElementsByClassName('seat');
    
    for (let i = 0; i < seats.length; i++) {
      seats[i].addEventListener('click', function() {
        this.classList.toggle('booked');
      });
    }
  }
  