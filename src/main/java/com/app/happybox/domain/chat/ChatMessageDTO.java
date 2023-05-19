package com.app.happybox.domain.chat;

import com.app.happybox.type.MessageType;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
public class ChatMessageDTO {

    private MessageType type; //메시지 타입
    private String roomId;// 방 번호
    private String sender;//채팅을 보낸 사람
    private String message;// 메세지
    private String time; // 채팅 발송 시간

    @Builder
    public ChatMessageDTO(MessageType type, String roomId, String sender, String message, String time) {
        this.type = type;
        this.roomId = roomId;
        this.sender = sender;
        this.message = message;
        this.time = time;
    }
}
