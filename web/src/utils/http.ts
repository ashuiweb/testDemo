/* eslint-disable @typescript-eslint/no-explicit-any */
const baseURL = "http://127.0.0.1:3002";
const obj = {
    async request(url = "", options = { method: "get" }) {
        return await fetch(`${baseURL}${url}`, options).then((r) => r.json());
    },
    async get(url: string) {
        return await this.request(`${url}`);
    },
    async post(url: string, data: any) {
        return await this.request(`${url}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    },
};

export default obj;
