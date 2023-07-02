<h1>시니어가 배송하는 행복밥상 구독 서비스 - '해피박스'</h1>
<img width="1180" alt="스크린샷 2022-12-27 오전 12 09 34" src="https://github.com/dev-dennisjeong/happybox/assets/122762371/41263cdd-e36d-458c-8213-bd6e735b5214" style = "width: 45%; height : 45%">


<h2>1. 기획 의도</h2>
<div dir="auto" style="display: flex;">
<img width="1180" alt="스크린샷 2022-12-27 오전 12 09 34" src="https://github.com/dev-dennisjeong/happybox/assets/122762371/25a3fd01-ccdd-4ab2-88b2-8f8e35a0af38" style = "width: 45%; height : 45%">
  <img width="1180" alt="스크린샷 2022-12-27 오전 12 09 34" src="https://github.com/dev-dennisjeong/happybox/assets/122762371/336b6d9e-6108-4d6c-8397-28009f521a2d" style = "width: 45%; height : 45%">
</div>


<h2>2. 기대 효과</h2>
<div dir="auto" style="display: flex;">
  <img width="1180" alt="스크린샷 2022-12-27 오전 12 09 34" src="https://github.com/dev-dennisjeong/happybox/assets/122762371/e11d2a18-a635-4d09-bb77-3cd40815f65f" style = "width: 45%; height : 45%">
</div>



<h2>3. 프로젝트 사용 툴</h2>
<div dir="auto" style="display: flex;">
  <img width="1180" alt="스크린샷 2022-12-27 오전 12 09 34" src="https://github.com/dev-dennisjeong/happybox/assets/122762371/1290455a-f222-4cf5-84ca-aa307271a216" style = "width: 45%; height : 45%">
</div>


<h2>4. 프로젝트 전체적인 타임라인</h2>

|일자|내용|구체적인 활동|
|:---------:|:--------:|:-------:|
|4월 10일 ~ 4월 13일|주제 선정| 주제 선정 및 기획 |
|4월 13일 ~ 4월 13일|역할 분담| 퍼블리싱 역할 분담 |
|4월 14일 ~ 4월 28일 | 퍼블리싱 | 맡은 퍼블리싱 작업 |
|4월 28일 ~ 5월 04일| 엔티티 설계 | 엔티티 설계 및 퍼블리싱 수정 |
|5월 04일 ~ 5월 10일 | 레포지토리 제작 | 백엔드 사전 설계 작업 |
|5월 10일 ~ 5월 24일|Back 작업|백엔드 역할 분담 및 백 작업|
|5월 24일 ~ 5월 25일|발표 준비| 더미파일 넣기 및 서버배포 ppt 준비|


<h2>5. 나의 담당 업무</h2>

5-1. 퍼블리싱
- 로그인
- 회원가입
- 아이디/비밀번호 찾기
- 레시피 게시판
- 리뷰 게시판
  
5-2. 백엔드
  - 레시피 게시판
  - 리뷰 게시판
  - 기부 게시판

5-3. 나의 프로젝트 타임라인

|일자|담당 파트|작업 내용|
|:---------:|:--------:|:-----------:|
|4월 13일 ~ 4월 28일|Front-end| 로그인, 회원가입, 아이디/비밀번호 찾기, 게시판 퍼블리싱 작업 완료 |
|4월 28일 ~ 5월 04일| Back-end | 엔티티 설계 및 퍼블리싱 수정 |
|5월 04일 ~ 5월 08일 | 레포지토리 제작 | 게시판, 댓글, 파일 레포지토리 제작 |
|5월 08일 ~ 5월 13일|Back-end| 레시피 게시판 목록, 상세보기, 작성, 수정, 삭제 |
|5월 13일 ~ 5월 17일|Back-end| 리뷰 게시판 목록, 상세보기, 작성, 수정, 삭제 |
|5월 17일 ~ 5월 20일|Back-end| 기부 게시판 목록, 상세보기, 작성, 수정, 삭제 |
|5월 20일 ~ 5월 22일|Back-end| 댓글 목록, 작성, 수정, 삭제 |
|5월 22일 ~ 5월 23일 | Back-end | 게시글 좋아요, 댓글 좋아요 |
|5월 26일 ~ 5월 26일 | 발표 | 발표 |


<h2>5. 느낀점</h2>
<h3>5-1. 어려웠던 부분</h3>
📌DB를 설계할 때 연관관계를 어떻게 맺어야 할 지 헷갈렸다. <br>
✔ 부모 테이블을 만들어 자식 테이블이 상속 받도록 설계했다. <br><br>
📌entity와 DTO를 언제 어떻게 구분해서 사용해야 하는지 감이 잘 잡히지 않아서 헷갈렸다. <br>
✔ 프로젝트를 통해 학습과 적용을 반복하다보니 자연스레 언제 사용해야 하는지 알게됐다. 특히, DTO에 내가 필요한 변수를 능숙하게 선언, 사용 할 수 있게 됐다는 점이 큰 수확이었다. <br><br><br><br>


<h3>5-2. 문제를 해결했던 부분</h3>
<h4>📌파일이 등록되지 않는 문제</h4> 
<br>🌩문제 상황🌩<br>
파일이 upload 폴더에는 담기는데 DB에 저장되지 않는 문제가 발생했다.
<br>🚨문제 원인🚨 <br>
레포지토리 설계가 잘못되었다.
<br>🚀해결 방법🚀<br>
JavaScript에서 console 출력을 통해 어느 부분이 문제인지 확인해보았다.<br>
그 후 Controller부터 Service, Repository까지 거슬러 올라가면서 Slf4j 어노테이션으로 출력을 통해<br>
오류를 확인한 후 레포지토리 설계가 잘못된 것을 확인하고 그 부분을 수정했다.


<h3>6-4. 총평</h3>
JPA 프로젝트에서는 저번 프로젝트때 다루지 못했던 게시판, 파일 부분을 맡아서 해보았다.
JPA는 엔티티부터 레포지토리, 서비스까지 하나하나 설계를 꼼꼼히 해야한다는 것을 깨달았고,
비록 처음에는 속도가 더딜지라도, 나중에 오류를 찾아서 고치는 것보다 처음부터 설계를 꼼꼼하게 해야 
더 빠르게 개발할 수 있을 뿐만 아니라, 후에 유지보수를 할 때도 편할 것 같다는 생각이 들었다.
우여곡절이 많았지만, 팀원들과의 협업을 통해 성공적으로 프로젝트를 마무리할 수 있어서 너무 뿌듯했다.

<h4>🌟개발은 꼼꼼히 해야 더 빨리 개발할 수 있다.</h4>


<h2>ERD</h2>
<img src="https://github.com/dev-kmg2331/happybox/assets/115636546/6564b7c5-66ec-4a32-ab38-c382e69892a6"</img>
