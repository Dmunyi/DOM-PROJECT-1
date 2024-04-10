function updateTotalPrice() {
    let totalPrice = 0;
    document.querySelectorAll('.item').forEach(item => {
      const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
      const quantity = parseInt(item.querySelector('.quantity-value').textContent);
      totalPrice += price * quantity;
    });
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
  }

  // Event listeners for increment and decrement buttons
  document.querySelectorAll('.increment').forEach(button => {
    button.addEventListener('click', function() {
      const quantityElement = this.parentElement.querySelector('.quantity-value');
      let quantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = quantity + 1;
      updateTotalPrice();
    });
  });

  document.querySelectorAll('.decrement').forEach(button => {
    button.addEventListener('click', function() {
      const quantityElement = this.parentElement.querySelector('.quantity-value');
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
        updateTotalPrice();
      }
    });
  });

  // Event listener for delete button
  document.querySelectorAll('.delete').forEach(button => {
    button.addEventListener('click', function() {
      this.parentElement.remove();
      updateTotalPrice();
    });
  });

  // Event listener for like button
  document.querySelectorAll('.heart').forEach(heart => {
    heart.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });