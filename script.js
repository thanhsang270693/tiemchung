// Xử lý sự kiện gửi form
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Ngừng hành động mặc định (gửi form)

    // Lấy giá trị từ form
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;

    // Kiểm tra xem các trường đã được điền đầy đủ chưa
    if (!name || !phone || !email || !date) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }

    // Thông báo đăng ký thành công
    alert(`Cảm ơn bạn đã đăng ký tiêm chủng!\n\nTên: ${name}\nSố điện thoại: ${phone}\nEmail: ${email}\nNgày tiêm: ${date}`);

    // Sau khi đăng ký thành công, có thể reset form
    document.getElementById('registration-form').reset();
});
