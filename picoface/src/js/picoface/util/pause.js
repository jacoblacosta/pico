'use strict';
export async function pause(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}


export class TimeoutedError extends Error {}
export async function timeouted(delay, callback) {
    return new Promise(async (resolve, reject) => {
        setTimeout(()=>{
            reject(new TimeoutedError());
        }, delay);
        try {
            const result = await callback();
            resolve(result);
        } catch (err) {
            reject(err);
        };
    });
}