package com.app.happybox.service.user;

import com.app.happybox.entity.user.Welfare;

public interface WelfareService {
//    회원정보수정
    public void updateWelfareInfoById(Welfare welfare);

//    회원탈퇴
    public void updateUserStatusById(Long welfareId);
}
