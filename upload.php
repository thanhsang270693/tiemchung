<?php
// Kiểm tra xem có tệp tải lên không
if (isset($_FILES['file-upload'])) {
    $errors = array();
    $file_name = $_FILES['file-upload']['name'];
    $file_size = $_FILES['file-upload']['size'];
    $file_tmp = $_FILES['file-upload']['tmp_name'];
    $file_type = $_FILES['file-upload']['type'];
    $file_ext = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));

    // Các loại tệp cho phép tải lên
    $allowed_extensions = array("jpg", "jpeg", "png", "gif");

    // Kiểm tra loại tệp
    if (!in_array($file_ext, $allowed_extensions)) {
        $errors[] = "Chỉ chấp nhận các định dạng tệp .jpg, .jpeg, .png, .gif.";
    }

    // Kiểm tra kích thước tệp (giới hạn dưới 2MB)
    if ($file_size > 2097152) {
        $errors[] = "Kích thước tệp quá lớn. Vui lòng tải lên tệp dưới 2MB.";
    }

    // Nếu không có lỗi, tiến hành lưu ảnh
    if (empty($errors)) {
        // Tạo thư mục 'uploads' nếu chưa có
        $upload_dir = 'uploads/';
        if (!is_dir($upload_dir)) {
            mkdir($upload_dir, 0777, true); // Tạo thư mục nếu chưa tồn tại
        }

        // Đặt đường dẫn lưu tệp
        $file_path = $upload_dir . time() . "_" . basename($file_name);

        // Di chuyển tệp từ thư mục tạm đến thư mục uploads
        if (move_uploaded_file($file_tmp, $file_path)) {
            echo "Tệp đã được tải lên thành công!";
            echo "<br><br><img src='$file_path' alt='Ảnh đã tải lên' style='max-width:100%;'>";
        } else {
            echo "Có lỗi trong quá trình tải lên tệp.";
        }
    } else {
        // Hiển thị lỗi
        foreach ($errors as $error) {
            echo "<p style='color:red;'>$error</p>";
        }
    }
} else {
    echo "Chưa có tệp nào được chọn để tải lên.";
}
?>
