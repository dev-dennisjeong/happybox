const insertData = {
    id: reviewBoardDTO.id,
    boardTitle: "",
    boardContent: "",
    welfareName: "",
    reviewBoardFiles: new Array()
}

// 기존 file list 를 insertData에 담음
insertData.reviewBoardFiles = fileDTOS;

$(function () {
    $(".rating-point img").each(function (index) {
        $(this).on("click", function () {
            $(".rating-point img").attr("src", "/img/mypage/rating.png");
            $(this).prevAll().addBack().attr("src", "/img/mypage/rating-pull.png");

            var pullCount = $(".rating-point img[src='/img/mypage/rating-pull.png']").length;
            console.log("rating-pull.png 개수: " + pullCount);
        });
    });
});

const setList = $('.board-form');
function showList(){
    let text='';
    text +=
        `
        <table>
            <caption>
                내용 작성
            </caption>
            <colgroup>
                <col style="width: 180px"/>
                <col style="width: auto"/>
            </colgroup>
            <tbody>
            <tr>
                <th class="text-left" scope="row">
                    <div class="in-tb">
                        제목<em class="es"><span class="blind">필수입력</span></em>
                    </div>
                </th>
                <td class="text-left">
                    <div class="input-group w-full">
                        <input
                                name="boardTitle"
                                type="text"
                                id="vQuestionTitle"
                                class="input-text"
                                placeholder="제목을 입력해주세요"
                                value="${reviewBoardDTO.boardTitle}"
                        />
                    </div>
                </td>
            </tr>

            <tr>
                <th class="text-left" scope="row" style="padding-top: 0;">
                    <div class="in-tb">
                        복지관명<em class="es"><span class="blind">필수입력</span></em>
                    </div>
                </th>
                <td class="text-left" style="padding-top: 0;">
                    <div class="input-group w-full">
                        <input
                                type="text"
                                name="welfareName"
                                id="vQuestionTitle"
                                title=""
                                class="input-text"
                                placeholder="복지관명을 입력해주세요"
                                value="${reviewBoardDTO.welfareName}"
                        />
                    </div>
                </td>
            </tr>

            <tr>
                <th class="text-left" scope="row" style="padding-top: 0;">
                    <div class="in-tb">
                        별점<em class="es"><span class="blind">필수입력</span></em>
                    </div>
                </th>
                <td class="text-left" style="padding-top: 0;">
                    <div class="input-group w-full">
                        <em class="rating-point">
                            <img class="rating__point one" src="/img/mypage/rating-pull.png">
                            <img class="rating__point two" src="/img/mypage/rating-pull.png">
                            <img class="rating__point three" src="/img/mypage/rating-pull.png">
                            <img class="rating__point four" src="/img/mypage/rating-pull.png">
                            <img class="rating__point five" src="/img/mypage/rating-pull.png">
                        </em>
                    </div>
                </td>
            </tr>

            <tr>
                <th class="text-left" scope="row">
                    <div class="in-tb">
                        내용 <em class="es"><span class="blind">필수입력</span></em>
                    </div>
                </th>
                <td class="text-left">
                    <div class="textarea-box-count h230">
      <textarea
              name="boardContent"
              id="vQuestionCont"
              placeholder="내용을 입력하세요"
      >${reviewBoardDTO.boardContent}</textarea>
                    </div>
                </td>
            </tr>
            <!-- 첨부파일 영역 -->
            <tr class="attach-file-line" >
                <th class="text-left" scope="row"></th>
                <td class="text-left">
                    <div class="file-add-boxes">

                        <!-- 사진 들어가는 곳 -->
                    </div>
                </td>
            </tr>
            <!--// 첨부파일 영역 -->
            </tbody>
        </table>
        `
    setList.append(text);
}

showList();

const setFile = $('.file-add-boxes');
function showFiles() {
    console.log(reviewBoardDTO);
    reviewBoardDTO.reviewBoardFiles.forEach((file, i) => {
        console.log(file);
        let text ='';
        let filePath = '/image/display?fileName=' + file.filePath + "/t_" + file.fileUuid + "_" + file.fileOrgName;
        text +=
            `
            <div class="div-attach-thumb" id="US_RV_IMG_attachThumb">
                <button type="button" class="btn-attach-thumb" style="display: none;">
                    <i class="ico-plus-xlg"></i><span class="blind">파일첨부</span>
                </button>
                <input class="input_file" name="imgFile" type="file" accept="image/*" style="display: none">
                <div class="attach-img" style="display: block;">
                    <img
                    src="${filePath}" 
                    style="width: 68px; height: 68px">
                    <button type="button" class="btn-x-xs2 btn_del">
                        <i class="ico-x-white"></i><span class="blind">삭제</span>
                    </button>
                </div>
            </div>
            `
        setFile.append(text);
    });
    let text = '';
    if(reviewBoardDTO.reviewBoardFiles.length < 3){
        for(let i=0; i< 3 - reviewBoardDTO.reviewBoardFiles.length; i++) {
            text +=
                `
                <div class="div-attach-thumb" id="US_RV_IMG_attachThumb">
                <button type="button" class="btn-attach-thumb">
                    <i class="ico-plus-xlg"></i><span class="blind">파일첨부</span>
                </button>
                <input
                        class="input_file"
                        name="imgFile"
                        type="file"
                        accept="image/*"
                        style="display: none"
                />
                <div class="attach-img" style="display: none;">
                    <img
                             src=""
                            style="width: 68px; height: 68px"
                    />
                    <button
                            type="button"
                            class="btn-x-xs2 btn_del"
                    >
                        <i class="ico-x-white"></i><span class="blind">삭제</span>
                    </button>
                </div>
            </div>
                `
        }
    }
    text +=
        `
        <p class="text-guide-md">
            - 최대 15MB 이하의 JPG, PNG, GIF, BMP 파일 3장까지 첨부 가능합니다.
        </p>
        `
    setFile.append(text);
}

showFiles();

/* 파일 등록 */
const $fileAttachBtn = $(".btn-attach-thumb");
const $imgFile = $("input[type='file']");
const $imgDiv = $('.attach-img');
const $fileT = $('.attach-img img');


$fileAttachBtn.on("click", function () {
    let $fileInput = $(this).next();
    $fileInput.click();
});

const fileAjax = (data, index) => {
    $.ajax({
        url: '/image/upload',
        data: data,
        method: 'post',
        processData: false,
        contentType: false,
        success: function (result) {
            if (result) {
                let file = new Object();

                file.filePath = result.paths[0];
                file.fileUuid = result.uuids[0];
                file.fileOrgName = result.orgNames[0];

                insertData.reviewBoardFiles.push(file);
                console.log(insertData);
            }
        }
    });
}

$imgFile.each((i, e) => {
    $(e).on('change', function (e) {
        console.log(this.files[0]);
        let file = this.files[0];
        let formData = new FormData();

        formData.append('file', file);

        fileAjax(formData, i);

        $imgDiv.eq(i).css('display', 'block');
        // 기존의 이미지 숨김 처리
        $('.btn-attach-thumb').eq(i).css('display', 'none');
        let reader = new FileReader();
        // 이벤트 타겟의 url을 불러와서
        reader.readAsDataURL(e.target.files[0]);
        // 올리기
        // onload - file이 로드된 후 발생하는 이벤트
        reader.onload = function (e) {
            // 이벤트가 발생된 타겟의 url을 출력해서 result에 담아줌
            let result = e.target.result;
            // result가 이미지라면 result에 담긴 이미지로 설정
            if (result.includes('image')) {
                $fileT.eq(i).attr('src', result)
                // 이미지가 아니라면 no_image.png를 이미지로 설정
            } else {
                $imgDiv.eq(i).css('dispaly', 'none');
            }
        };
    });
});


$(document).ready(function() {
    $('.btn_del').on('click', function(e) {
        e.preventDefault();
        var $attachImg = $(this).parent('.attach-img');
        var $img = $attachImg.find('img');
        var $btnAttachThumb = $(this).closest('.div-attach-thumb').find('.btn-attach-thumb');

        $img.attr('src', '');
        $attachImg.css('display', 'none');
        $btnAttachThumb.css('display', 'inline-block');
    });
});


$("form[name='form']").on("submit", function (e) {
    e.preventDefault();

    let boardTitle = $("input[name='boardTitle']").val();
    let welfareName = $("input[name='welfareName']").val();
    let boardContent = $("textarea[name='boardContent']").val();

    insertData.boardTitle = boardTitle;
    insertData.welfareName = welfareName;
    insertData.boardContent = boardContent;

    $.ajax({
        url: '/user-board/review-board-modify',
        data: JSON.stringify(insertData),
        contentType: "application/json; charset=utf-8",
        method: 'post',
        success: function (result) {
            location.href = result;
        }
    })
});