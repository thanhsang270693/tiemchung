// Lấy phần tử của form và bảng đăng ký
const form = document.getElementById("registrationForm");
const registrationList = document.getElementById("registrationList").getElementsByTagName("tbody")[0];

// Lắng nghe sự kiện submit của form
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Ngừng hành động mặc định (gửi form)

    // Lấy các giá trị từ form
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
        // Định dạng ngày giờ tiêm theo dạng dễ đọc
        const formattedDate = new Date(appointmentDate);
        const formattedAppointmentDate = formattedDate.toLocaleString("vi-VN", {
            weekday: 'long', 
            year: 'numeric', 
            month: 'numeric', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric',
            second: 'numeric'
        });

        // Tạo một hàng mới cho bảng danh sách đăng ký
        const row = document.createElement("tr");

        const cell1 = document.createElement("td");
        cell1.textContent = name;
        const cell2 = document.createElement("td");
        cell2.textContent = dob;
        const cell3 = document.createElement("td");
        cell3.textContent = phone;
        const cell4 = document.createElement("td");
        cell4.textContent = formattedAppointmentDate;
        const cell5 = document.createElement("td");
        cell5.textContent = vaccine;
        const cell6 = document.createElement("td");
        cell6.textContent = parentName;
        const cell7 = document.createElement("td");
        cell7.textContent = weight;
        const cell8 = document.createElement("td");
        cell8.textContent = height;

        // Thêm các ô vào hàng
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        row.appendChild(cell5);
        row.appendChild(cell6);
        row.appendChild(cell7);
        row.appendChild(cell8);

        // Thêm hàng vào bảng đăng ký
        registrationList.appendChild(row);

        // Reset form sau khi gửi
        form.reset();
    } else {
        alert("Vui lòng điền đầy đủ thông tin!");
    }
});
