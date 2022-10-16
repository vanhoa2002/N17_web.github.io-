$(document).ready(function() {
    
    // khi click vào đăng ký thì sẽ hiện form đăng ký ra
    $('.signup').click(function() {
        $('.signup-form-wrap').css("display", "block");
    })

    // khi click vào đăng nhập thì sẽ hiện form đăng nhập ra
    $('.login').click(function() {
        $('.login-form-wrap').css("display", "block");
    })

    // khi click nút X ở form đăng nhập hoặc đăng ký thì đóng form lại
    $('.close').click(function() {
        $('.signup-form-wrap').css("display", "none");
        $('.login-form-wrap').css("display", "none");
    })

    // khi click nút hủy thì đóng form lại
    $('.btn-cancel').click(function() {
        $('.signup-form-wrap').css("display", "none");
        $('.login-form-wrap').css("display", "none");
    })
    
    // cái này định làm khi click vào item ở phần lịch sử tìm kiếm
    // thì không bị mất input (bug)
    $('.search-history__item-link').click(function() {
        $('.search-box__input').focus();
        $('.search-box__input').css("width", "300px");
        $('.search-box__input').css("padding", "0 15px 0 12px;");
    })
    
    // chuyển sang đăng ký khi click vào "Chưa có tài khoản?"
    $('.switch-signup-form').click(function() {
        $('.login-form-wrap').css("display", "none");
        $('.signup-form-wrap').css("display", "block");
    })
    
    // chuyển sang đăng nhập khi click vào "Đã có tài khoản?"
    $('.switch-login-form').click(function() {
        $('.signup-form-wrap').css("display", "none");
        $('.login-form-wrap').css("display", "block");
    })
})

// kiểm tra xem người dùng nhập đúng định dạng tài khoản khi đăng ký không
// tài khoản chứa ít nhất 3 ký tự, bao gồm chữ hoa, chữ thường và số và không chứa dấu cách
function checkUser() {
    var userInput = document.getElementById('user-input').value;
    var userError = document.getElementById('user-error');
    if (userInput.trim() == "") {
        userError.innerHTML = "*Tên tài khoản không được để trống";
        return false;
    }
    if (!userInput.trim().match(/^[a-zA-z0-9]{3,}$/)) {
        userError.innerHTML = "*Tên tài khoản chứa ít nhất 3 ký tự, gồm chữ hoa, chữ thường và số";
        return false;
    }
    userError.innerHTML = "";
    return true;
}

// kiểm tra xem người dùng nhập đúng định dạng mật khẩu khi đăng ký không
// tài khoản chứa ít nhất 6 ký tự, chứa ít nhất một chữ hoa, ít nhất một chữ thường, ít nhất một chữ số, cho phép ký tự và không chứa dấu cách
function checkPwd() {
    var pwdInput = document.getElementById('pwd-input').value;
    var pwdError = document.getElementById('pwd-error');
    if (pwdInput.trim() == "") {
        pwdError.innerHTML = "*Mật khẩu không được để trống";
        return false;
    }
    if (!pwdInput.trim().match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z@#\$\/\+\=\(\)\<\>\?-_%\^&\*\.]{6,}$/)) {
        pwdError.innerHTML = "*Mật khẩu chứa ít nhất 6 ký tự, ít nhất 1 chữ hoa, 1 chữ thường, 1 chữ số";
        return false;
    }
    pwdError.innerHTML = "";
    return true;
}

// kiểm tra xem người dùng nhập lại mật khẩu có chính xác không
function checkRepwd() {
    var pwdInput = document.getElementById('pwd-input').value;
    var repwdInput = document.getElementById('repwd-input').value;
    var repwdError = document.getElementById('repwd-error');
    if (repwdInput.trim() != pwdInput.trim()) {
        repwdError.innerHTML = "*Mật khẩu không khớp";
        return false;
    }
    repwdError.innerHTML = "";
    return true;
}

// kiểm tra tất cả định dạng nhập vào form đăng ký
function validInfo() {
    if (checkUser() && checkPwd() && checkRepwd()) {
        return true;
    }
    return false;
}