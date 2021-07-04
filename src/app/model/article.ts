import {Tag} from "./tag";

export interface Article {
  uuid: string;
  title: string;
  content: string;
  personal: boolean;
  tags: Tag[];
  createTime: string;
  updateTime: string;
}
