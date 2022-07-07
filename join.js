function joinForm_check() {
    const uid = document.getElementById('uid');
    const uName = document.getElementById('u_name');
    const pwd = document.getElementById('pwd');
    const repwd = document.getElementById('repwd');
    const mobile1 = document.getElementById('mobile1');
    const mobile2 = document.getElementById('mobile2');
    const mobile3 = document.getElementById('mobile3');

    if (uid.value == "") {
        alert('아이디를 입력하세요');
        uid.focus();
        return false;
    }
    if (uName.value == "") {
        alert('이름 입력하세요');
        uName.focus();
        return false;
    }
    if (pwd.value == "") {
        alert('패스워드를 입력하세요');
        pwd.focus();
        return false;
    }

    let pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if(!pwdCheck.test(pwd.value)){
        alert('패스워드 형식에 맞게 입력하세요');
        pwd.focus();
        return false;
    }

    if(pwd.value !== repwd.value){
        alert('비밀번호가 일치하지 않습니다.');
        repwd.focus();
        return false;
    }else {
        alert('환영합니다.');
    }

    let reg = /^[0~9]+/g;
    if(!reg.test(mobile1.value)){
        alert('숫자만 입력하세요');
        mobile1.focus();
        return false;
    }

}

function id_check() {
    // window.open('팝업 문서의 경로', '팝업 문서 이름', '옵션')
    window.open('', '', 'width=300, height=100, left=300, top=100');
}

function change_email() {
    const email_add = document.getElementById('email_add');
    const email_sel = document.getElementById('email_sel');

    let idx = email_sel.options.selectedIndex;
    let val = email_sel.options[idx].value;
    email_add.value = val;
}