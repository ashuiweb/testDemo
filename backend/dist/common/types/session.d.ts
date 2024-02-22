export interface SessionType {
    code: string;
    message: {
        message: Record<string, any> | Record<string, any>[];
        url: string;
    };
    userInfo: any;
    authAccessIds: string[];
    referer: string;
    userData: any;
}
