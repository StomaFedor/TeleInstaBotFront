
import { Media } from "./media.model";

export interface PostModel {
    id: number,
    avatar: string,
    medias: Media[],
    postUrl: string,
    intagramNickName: string,
    address: string,
    likes: number,
    description: string,
    date: string,
}