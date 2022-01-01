import React from 'react';
import moment from 'moment';

import {RankingContainer, RankingTitle, RankingTable, RankingHeader, RankingRow} from './styles';
import {RankingData} from './types';
import {addCommaToNumber} from 'utils/StringUtils';

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
