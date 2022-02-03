import { Book } from "../main/Book";
import { Chapter } from "../main/Chapter";
import { Options, SaveOptions } from "./options";
export declare class EPUB extends Options {
    private readonly contentOpf;
    private readonly metadata;
    private readonly manifest;
    private readonly spine;
    private readonly guide;
    private readonly ncx;
    private readonly navMap;
    private readonly toc;
    private readonly tocBody;
    private readonly book;
    private readonly chapters;
    private readonly epubZip;
    constructor(book: Book, streamZip: boolean, options?: SaveOptions);
    private addAttachment;
    private static genChapterHtmlFile;
    addChapter(chapter: Chapter, suffix?: string): Promise<void>;
    saveEpub(): Promise<void>;
}
