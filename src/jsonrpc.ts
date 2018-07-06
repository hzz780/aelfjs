'use strict';

export interface ChainInfo {
    genesis_contract: string;
    chain_id: string;
}

export class RpcError{
    // TODO: implement
    json: any;
    constructor(json: any){
        this.json = json;
    }
}

export class JsonRpc{
    endpoint: string;
    fetchBuiltin: (input?: Request | string, init?: RequestInit) => Promise<Response>;
    constructor(endpoint: string, args: any = {}){
        this.endpoint = endpoint;
    }

    async fetch(path: string, body: any) {
        let response, json;
        try {
            let f = this.fetchBuiltin;
            response = await f(this.endpoint + path, {
                body: JSON.stringify(body),
                method: 'POST',
            });
            json = await response.json();
            if (json.processed && json.processed.except)
                throw new RpcError(json);
        } catch (e) {
            e.isFetchError = true;
            throw e;
        }
        if (!response.ok)
            throw new RpcError(json);
        return json;
    }
}