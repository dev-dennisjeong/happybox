package com.app.happybox.service.board;

import com.app.happybox.entity.board.RecipeBoard;
import com.app.happybox.entity.board.RecipeBoardDTO;
import com.app.happybox.entity.board.ReviewBoardDTO;
import com.app.happybox.repository.board.RecipeBoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Qualifier("recipeBoard")
public class RecipeBoardServiceImpl implements RecipeBoardService {
    private final RecipeBoardRepository recipeBoardRepository;

    @Override
    public Slice<RecipeBoardDTO> getRecipeBoards(Pageable pageable) {
        Slice<RecipeBoard> recipeBoards =
                recipeBoardRepository.findAllByIdDescWithPaging_QueryDSL(PageRequest.of(0, 10));
        List<RecipeBoardDTO> collect = recipeBoards.get().map(board -> recipeBoardToDTO(board)).collect(Collectors.toList());
        return new SliceImpl<>(collect, pageable, recipeBoards.hasNext());
    }

    @Override
    public Slice<RecipeBoardDTO> getPopularRecipeBoards(Pageable pageable) {
        Slice<RecipeBoard> recipeBoards =
                recipeBoardRepository.findAllByLikeCountDescWithPaging_QueryDSL(PageRequest.of(0, 10));
        List<RecipeBoardDTO> collect = recipeBoards.get().map(board -> recipeBoardToDTO(board)).collect(Collectors.toList());

        return new SliceImpl<>(collect, pageable, recipeBoards.hasNext());
    }

    @Override
    public Page<RecipeBoardDTO> findAllByMemberIdDescWithPaging_QueryDSL(Pageable pageable, Long memberId) {
        return null;
    }

    @Override
    public Page<RecipeBoard> findRecipeBoardListByMemberIdWithPaging_QueryDSL(Pageable pageable, Long memberId) {
        return null;
    }

    @Override
    public List<RecipeBoard> findRecipeBoardReplyCountByMemberId_QueryDSL(Long memberId) {
        return null;
    }

    @Override
    public List<RecipeBoard> findTop5ByLikeCountWithRepresentFileOrderByLikeCount_QueryDSL() {
        return null;
    }

    @Override
    public Long findRecipeBoardCountByIdMemberId_QueryDSL(Long memberId) {
        return null;
    }

    @Override
    public Page<RecipeBoard> findRecipeBoardListDescWithPaging_QueryDSL(Pageable pageable) {
        return null;
    }
}