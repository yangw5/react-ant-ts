export interface ISong {
    id: number;
    demoId?: number;
    plId?: number;
    songId?: number;
    name?: string;
    description?: string;
    feedbackStatus?: number | string;
    feedbackDescription?: string;
    feedbackId?: number;
    imgUrl?: string;
}
