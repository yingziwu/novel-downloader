import { BaseRuleClass } from "../../../rules";
import { Book } from "../../../main/Book";
import { AttachmentClass } from "../../../main/Attachment";
export declare class fanqie extends BaseRuleClass {
    constructor();
    bookParse(): Promise<Book>;
    chapterParse(chapterUrl: string, chapterName: string | null, isVIP: boolean, isPaid: boolean, charset: string, options: object): Promise<{
        chapterName: string | null;
        contentRaw: HTMLDivElement;
        contentText: string;
        contentHTML: HTMLElement;
        contentImages: AttachmentClass[];
        additionalMetadate: null;
    }>;
}
export declare function replaceFanqieCharacter(fontName: string, fontlink: string, inputText: string): Promise<string>;