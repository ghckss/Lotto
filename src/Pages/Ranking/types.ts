export interface RankingData {
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
