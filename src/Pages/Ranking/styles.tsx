import styled from 'styled-components';

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
