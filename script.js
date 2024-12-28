// Lấy phần tử của form và bảng
const form = document.getElementById("registrationForm");
const calendarTableBody = document.getElementById("calendarTable").getElementsByTagName("tbody")[0];

// Lắng nghe sự kiện submit của form
form.addEventListener("submit", function(event) {
    // Ngừng hành động mặc định (gửi form)
    event.preventDefault();

    // Lấy giá trị từ các trường trong form
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const phone = document.getElementById("phone").value;
    const appointmentDate = document.getElementById("appointmentDate").value;
    const vaccine = document.getElementById("vaccine").value;
    const parentName = document.getElementById("parentName").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    // Kiểm tra nếu các trường không rỗng
    if (name && dob && phone && appointmentDate && vaccine && parentName && weight && height) {
        // Định dạng ngày giờ tiêm cho dễ đọc
        const formattedDate = new Date(appointmentDate).toLocaleString('vi-VN', {
            weekday: 'long', 
            year: 'numeric', 
            month: 'numeric', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric',
            second: 'numeric'
        });

        // Tạo một hàng mới cho bảng lịch
        const row = document.createElement("tr");

        // Tạo các ô dữ liệu cho hàng
        const cell1 = document.createElement("td");
        cell1.textContent = formattedDate; // Ngày giờ tiêm
        const cell2 = document.createElement("td");
        cell2.textContent = vaccine; // Loại vắc xin
        const cell3 = document.createElement("td");
        cell3.textContent = parentName; // Họ tên ba mẹ

        // Thêm các ô vào hàng
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);

        // Thêm hàng vào bảng lịch
        calendarTableBody.appendChild(row);

        // Reset form sau khi gửi
        form.reset();
    } else {
        alert("Vui lòng điền đầy đủ thông tin!");
    }
});
