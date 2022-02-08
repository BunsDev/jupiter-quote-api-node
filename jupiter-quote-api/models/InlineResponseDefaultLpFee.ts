/* tslint:disable */
/* eslint-disable */
/**
 * Jupiter API
 * Jupiter quote and swap API
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface InlineResponseDefaultLpFee
 */
export interface InlineResponseDefaultLpFee {
    /**
     * 
     * @type {number}
     * @memberof InlineResponseDefaultLpFee
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponseDefaultLpFee
     */
    mint?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponseDefaultLpFee
     */
    pct?: number;
}

export function InlineResponseDefaultLpFeeFromJSON(json: any): InlineResponseDefaultLpFee {
    return InlineResponseDefaultLpFeeFromJSONTyped(json, false);
}

export function InlineResponseDefaultLpFeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponseDefaultLpFee {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'mint': !exists(json, 'mint') ? undefined : json['mint'],
        'pct': !exists(json, 'pct') ? undefined : json['pct'],
    };
}

export function InlineResponseDefaultLpFeeToJSON(value?: InlineResponseDefaultLpFee | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'mint': value.mint,
        'pct': value.pct,
    };
}

