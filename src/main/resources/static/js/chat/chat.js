let usernamePage = document.querySelector('#username-page');
let chatPage = document.querySelector('#chat-page');
let usernameForm = document.querySelector('#usernameForm');
let messageForm = document.querySelector('#messageForm');
let $exitForm = $("#roomExitForm");
let messageInput = document.querySelector('#message');
let messageArea = $(".chat-message-container")
let connectingElement = $(".chat-connection-container");

let stompClient = null;
let username = null;

let colors = [
    '#2196F3', '#32c787', '#00BCD4', '#ff5652',
    '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
];

// roomId 파라미터 가져오기
let roomId;

function connect(event) {
    event.preventDefault();
    username = document.querySelector('#name').value.trim();

    // username 중복 확인
    // isDuplicateName();

    // usernamePage 에 hidden 속성 추가해서 가리고 chatPage를 등장시킴
    // usernamePage.classList.add('hidden');
    // chatPage.classList.remove('hidden');

    // 연결하고자하는 Socket 의 endPoint
    let socket = new SockJS('/ws-stomp');
    stompClient = Stomp.over(socket);

    stompClient.connect({}, onConnected, onError);
}

function onConnected() {

    roomId = $("#roomId").val();

    // sub 할 url => /sub/chat/room/roomId 로 구독한다
    stompClient.subscribe('/sub/chat/room/' + roomId, onMessageReceived);

    // 서버에 username 을 가진 유저가 들어왔다는 것을 알림
    // /pub/chat/enterUser 로 메시지를 보냄
    stompClient.send("/pub/chat/enterUser",
        {},
        JSON.stringify({
            "roomId": roomId,
            sender: username,
            type: 'ENTER'
        })
    )

    // connectingElement.classList.add('hidden');

}

// 유저 닉네임 중복 확인
function isDuplicateName() {

    $.ajax({
        type: "GET",
        url: "/chat/duplicateName",
        data: {
            "username": username,
            "roomId": roomId
        },
        success: function (data) {
            console.log("함수 동작 확인 : " + data);

            username = data;
        }
    })

}

// 유저 리스트 받기
// ajax 로 유저 리스를 받으며 클라이언트가 입장/퇴장 했다는 문구가 나왔을 때마다 실행된다.
function getUserList() {
    let text = "";

    $.ajax({
        type: "GET",
        url: "/chat/userList",
        data: {
            "roomId": roomId
        },
        success: function (data) {
            data.forEach(user =>
                text += `
                    <p>${user}</p>
                `
            );
            messageArea.append(text);
        }
    })
}

function onError(error) {
    connectingElement.textContent = 'Could not connect to WebSocket server. Please refresh this page to try again!';
    connectingElement.style.color = 'red';
}

// 메시지 전송때는 JSON 형식을 메시지를 전달한다.
function sendMessage(event) {
    let messageContent = messageInput.value.trim();

    if (messageContent && stompClient) {
        let chatMessage = {
            "roomId": roomId,
            sender: username,
            message: messageInput.value,
            type: 'TALK'
        };

        stompClient.send("/pub/chat/sendMessage", {}, JSON.stringify(chatMessage));
        messageInput.value = '';
    }
    event.preventDefault();
}

// 메시지를 받을 때도 마찬가지로 JSON 타입으로 받으며,
// 넘어온 JSON 형식의 메시지를 parse 해서 사용한다.
function onMessageReceived(payload) {
    //console.log("payload 들어오냐? :"+payload);
    let chat = JSON.parse(payload.body);

    let text = "";

    if (chat.type === 'ENTER') {  // chatType 이 enter 라면 아래 내용
        text += `<p>${chat.message}</p>`
        getUserList();

    } else if (chat.type === 'LEAVE') { // chatType 가 leave 라면 아래 내용
        text += `<p>${chat.message}</p>`
        getUserList();

    } else { // chatType 이 talk 라면 아래 내용
        text += `<p>
                    <span>${chat.sender} : </span>${chat.message}
                 </p>
        `
    }

    messageArea.append(text);
}

function exitRoom(e) {
    e.preventDefault();
    // 구독 해제(채팅방 나가기)
    stompClient.unsubscribe(roomId);
    // roomId 초기화
    roomId = null;
}

function getAvatarColor(messageSender) {
    let hash = 0;
    for (let i = 0; i < messageSender.length; i++) {
        hash = 31 * hash + messageSender.charCodeAt(i);
    }

    let index = Math.abs(hash % colors.length);
    return colors[index];
}

usernameForm.addEventListener('submit', connect, true);
messageForm.addEventListener('submit', sendMessage, true);
$exitForm.on('submit', exitRoom);
