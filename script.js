// Kiểm tra tính hợp lệ của form trước khi gửi
document.querySelector('form').addEventListener('submit', function(event) {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  if (!name || !phone) {
    alert('Vui lòng điền đầy đủ thông tin!');
    event.preventDefault();
  }
});
