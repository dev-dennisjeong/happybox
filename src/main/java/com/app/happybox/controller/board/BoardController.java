package com.app.happybox.controller.board;

import com.app.happybox.entity.board.*;
import com.app.happybox.repository.board.DonationBoardRepository;
import com.app.happybox.service.board.DonationBoardService;
import com.app.happybox.service.board.RecipeBoardService;
import com.app.happybox.service.board.ReviewBoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/user-board/*")
@RequiredArgsConstructor
@Slf4j
public class BoardController {

    @Qualifier
    private final ReviewBoardService reviewBoardService;
    @Qualifier
    private final RecipeBoardService recipeBoardService;
    @Qualifier
    private final DonationBoardService donationBoardService;

//    리뷰 게시판 리스트(최신순)
    @GetMapping("review-board-list/newest")
    @ResponseBody
    public Slice<ReviewBoardDTO> getReviewBoardList(int page, int size){
        Slice<ReviewBoardDTO> result = reviewBoardService.getReviewBoards(PageRequest.of(page, size));
        return result;
        }

//    레시피 게시판 리스트 (최신순)
    @GetMapping("recipe-board-list")
    public Slice<RecipeBoardDTO> getRecipeBoardList(int page, int size){
        return recipeBoardService.getRecipeBoards(PageRequest.of(page, size));
    }

//    기부 게시판 리스트
    @GetMapping("donate-list")
    public Page<DonationBoardDTO> getDonateBoardList(int page, int size){
        return donationBoardService.getList(PageRequest.of(0, 10));
    }
}