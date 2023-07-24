/* tslint:disable */
/* eslint-disable */
/**
 * Jupiter Api v6
 * Jupiter quote and swap API
 *
 * The version of the OpenAPI document: 6.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  DexValue,
  IndexedRouteMapResponse,
  QuoteResponseV2,
  SwapRequest,
  SwapResponse,
} from '../models';
import {
    DexValueFromJSON,
    DexValueToJSON,
    IndexedRouteMapResponseFromJSON,
    IndexedRouteMapResponseToJSON,
    QuoteResponseV2FromJSON,
    QuoteResponseV2ToJSON,
    SwapRequestFromJSON,
    SwapRequestToJSON,
    SwapResponseFromJSON,
    SwapResponseToJSON,
} from '../models';

export interface IndexedRouteMapGetRequest {
    onlyDirectRoutes?: boolean;
}

export interface QuoteGetRequest {
    outputMint: string;
    inputMint: string;
    amount: string;
    slippage?: number;
    dexes?: Array<DexValue>;
    excludeDexes?: Array<DexValue>;
    onlyDirectRoutes?: boolean;
    asLegacyTransaction?: boolean;
    platformFeeBps?: number;
}

export interface SwapPostRequest {
    swapRequest: SwapRequest;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Returns a hash map, input mint as key and an array of valid output mint as values, token mints are indexed to reduce the file size
     * GET /indexed-route-map
     */
    async indexedRouteMapGetRaw(requestParameters: IndexedRouteMapGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IndexedRouteMapResponse>> {
        const queryParameters: any = {};

        if (requestParameters.onlyDirectRoutes !== undefined) {
            queryParameters['onlyDirectRoutes'] = requestParameters.onlyDirectRoutes;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/indexed-route-map`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IndexedRouteMapResponseFromJSON(jsonValue));
    }

    /**
     * Returns a hash map, input mint as key and an array of valid output mint as values, token mints are indexed to reduce the file size
     * GET /indexed-route-map
     */
    async indexedRouteMapGet(requestParameters: IndexedRouteMapGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IndexedRouteMapResponse> {
        const response = await this.indexedRouteMapGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * GET /quote
     */
    async quoteGetRaw(requestParameters: QuoteGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuoteResponseV2>> {
        if (requestParameters.outputMint === null || requestParameters.outputMint === undefined) {
            throw new runtime.RequiredError('outputMint','Required parameter requestParameters.outputMint was null or undefined when calling quoteGet.');
        }

        if (requestParameters.inputMint === null || requestParameters.inputMint === undefined) {
            throw new runtime.RequiredError('inputMint','Required parameter requestParameters.inputMint was null or undefined when calling quoteGet.');
        }

        if (requestParameters.amount === null || requestParameters.amount === undefined) {
            throw new runtime.RequiredError('amount','Required parameter requestParameters.amount was null or undefined when calling quoteGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.outputMint !== undefined) {
            queryParameters['outputMint'] = requestParameters.outputMint;
        }

        if (requestParameters.inputMint !== undefined) {
            queryParameters['inputMint'] = requestParameters.inputMint;
        }

        if (requestParameters.amount !== undefined) {
            queryParameters['amount'] = requestParameters.amount;
        }

        if (requestParameters.slippage !== undefined) {
            queryParameters['slippage'] = requestParameters.slippage;
        }

        if (requestParameters.dexes) {
            queryParameters['dexes'] = requestParameters.dexes;
        }

        if (requestParameters.excludeDexes) {
            queryParameters['excludeDexes'] = requestParameters.excludeDexes;
        }

        if (requestParameters.onlyDirectRoutes !== undefined) {
            queryParameters['onlyDirectRoutes'] = requestParameters.onlyDirectRoutes;
        }

        if (requestParameters.asLegacyTransaction !== undefined) {
            queryParameters['asLegacyTransaction'] = requestParameters.asLegacyTransaction;
        }

        if (requestParameters.platformFeeBps !== undefined) {
            queryParameters['platformFeeBps'] = requestParameters.platformFeeBps;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/quote`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QuoteResponseV2FromJSON(jsonValue));
    }

    /**
     * GET /quote
     */
    async quoteGet(requestParameters: QuoteGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuoteResponseV2> {
        const response = await this.quoteGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * POST /swap
     */
    async swapPostRaw(requestParameters: SwapPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SwapResponse>> {
        if (requestParameters.swapRequest === null || requestParameters.swapRequest === undefined) {
            throw new runtime.RequiredError('swapRequest','Required parameter requestParameters.swapRequest was null or undefined when calling swapPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/swap`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SwapRequestToJSON(requestParameters.swapRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SwapResponseFromJSON(jsonValue));
    }

    /**
     * POST /swap
     */
    async swapPost(requestParameters: SwapPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SwapResponse> {
        const response = await this.swapPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
