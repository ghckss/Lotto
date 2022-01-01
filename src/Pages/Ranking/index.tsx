import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import {addCommaToNumber} from 'utils/StringUtils';

interface RankingData {
    round: number;
    startDate: number;
    endDate: number;
    ranking: IRanking[];
}

interface IRanking {
    ranking: number;
    nickname: string;
    fee: number;
    prize: number;
}

const mockRankingData: RankingData = {
    round: 1,
    startDate: 1640995200000,
    endDate: 1641772800000,
    ranking: [
        {
            ranking: 1,
            nickname: '황호찬',
            fee: 50000,
            prize: 100000000
        },
        {
            ranking: 1,
            nickname: '황호찬',
            fee: 50000,
            prize: 100000000
        },
        {
            ranking: 1,
            nickname: '황호찬',
            fee: 50000,
            prize: 100000000
        },
        {
            ranking: 1,
            nickname: '황호찬',
            fee: 50000,
            prize: 100000000
        },
        {
            ranking: 1,
            nickname: '황호찬',
            fee: 50000,
            prize: 100000000
        }
    ]
};

const Ranking = () => {
    return (
        <RankingContainer>
            <RankingTitle>
                <div className='title'>제 {mockRankingData.round}회차 시뮬레이터 순위</div>
                <div className='period'>
                    {moment(mockRankingData.startDate).format('YYYY-MM-DD')} ~ {moment(mockRankingData.endDate).format('YYYY-MM-DD')}
                </div>
            </RankingTitle>
            <RankingTable>
                <RankingHeader>
                    <div className='cell ranking'>순위</div>
                    <div className='cell nickname'>닉네임</div>
                    <div className='cell fee'>사용 금액</div>
                    <div className='cell prize'>당첨금</div>
                    <div className='cell profit'>순이익</div>
                </RankingHeader>
                {mockRankingData.ranking.map((rank, index) => (
                    <RankingRow key={index}>
                        <div className='cell ranking'>{rank.ranking}</div>
                        <div className='cell nickname'>{rank.nickname}</div>
                        <div className='cell fee'>{addCommaToNumber(rank.fee)}</div>
                        <div className='cell prize'>{addCommaToNumber(rank.prize)}</div>
                        <div className='cell profit'>{addCommaToNumber(rank.prize - rank.fee)}</div>
                    </RankingRow>
                ))}
            </RankingTable>
        </RankingContainer>
    );
};

export default Ranking;

export const RankingContainer = styled.article`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

export const RankingTitle = styled.section`
    margin-top: 3rem;
    text-align: center;

    .title {
        font-size: 2rem;
    }

    .period {
        opacity: 0.6;
    }
`;

export const RankingTable = styled.section`
    width: 100%;
    margin-top: 4rem;

    .cell {
        display: flex;
        height: 3rem;
        align-items: center;
        justify-content: center;
    }

    .ranking {
        width: 5%;
    }

    .nickname {
        width: 20%;
    }

    .fee {
        width: 20%;
    }

    .prize {
        width: 20%;
    }

    .profit {
        width: 20%;
    }
`;

export const RankingHeader = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
    text-align: center;
`;

export const RankingRow = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`;
