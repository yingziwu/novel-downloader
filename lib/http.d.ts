/// <reference types="tampermonkey" />
export interface GfetchRequestOptions {
    method?: "GET" | "HEAD" | "POST" | undefined;
    headers?: Record<string, string>;
    data?: string;
    cookie?: string;
    binary?: boolean;
    nocache?: boolean;
    revalidate?: boolean;
    timeout?: number;
    context?: object;
    responseType?: "arraybuffer" | "blob" | "json";
    overrideMimeType?: string;
    anonymous?: boolean;
    user?: string;
    password?: string;
}
export declare function gfetch(url: string, { method, headers, data, cookie, binary, nocache, revalidate, timeout, context, responseType, overrideMimeType, anonymous, user, password, }?: GfetchRequestOptions): Promise<Tampermonkey.Response<object>>;
export declare function getText(url: string, charset?: string, init?: RequestInit): Promise<string | void>;
export declare function getHtmlDOM(url: string, charset?: string, init?: RequestInit): Promise<Document>;
export declare function getHtmlDomWithRetry(url: string, charset?: string, init?: RequestInit): Promise<Document | null>;
export declare function ggetText(url: string, charset?: string, init?: GfetchRequestOptions): Promise<string | void>;
export declare function ggetHtmlDOM(url: string, charset?: string, init?: GfetchRequestOptions): Promise<Document>;
export declare function ggetHtmlDomWithRetry(url: string, charset?: string, init?: GfetchRequestOptions): Promise<Document | null>;
export declare function getFrameContent(url: string): Promise<Document | null>;