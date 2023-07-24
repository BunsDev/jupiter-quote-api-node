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

import { exists, mapValues } from '../runtime';
import type { SwapInfo } from './SwapInfo';
import {
    SwapInfoFromJSON,
    SwapInfoFromJSONTyped,
    SwapInfoToJSON,
} from './SwapInfo';

/**
 * 
 * @export
 * @interface RoutePlanStep
 */
export interface RoutePlanStep {
    /**
     * 
     * @type {SwapInfo}
     * @memberof RoutePlanStep
     */
    swapInfo?: SwapInfo;
    /**
     * 
     * @type {number}
     * @memberof RoutePlanStep
     */
    percent?: number;
}

/**
 * Check if a given object implements the RoutePlanStep interface.
 */
export function instanceOfRoutePlanStep(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoutePlanStepFromJSON(json: any): RoutePlanStep {
    return RoutePlanStepFromJSONTyped(json, false);
}

export function RoutePlanStepFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutePlanStep {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'swapInfo': !exists(json, 'swapInfo') ? undefined : SwapInfoFromJSON(json['swapInfo']),
        'percent': !exists(json, 'percent') ? undefined : json['percent'],
    };
}

export function RoutePlanStepToJSON(value?: RoutePlanStep | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'swapInfo': SwapInfoToJSON(value.swapInfo),
        'percent': value.percent,
    };
}

