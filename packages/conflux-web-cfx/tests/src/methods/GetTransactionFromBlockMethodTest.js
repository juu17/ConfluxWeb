import * as Utils from 'conflux-web-utils';
import {formatters} from 'conflux-web-core-helpers';
import GetTransactionFromBlockMethod from '../../../src/methods/GetTransactionFromBlockMethod';

/**
 * GetTransactionFromBlockMethod test
 */
describe('GetTransactionFromBlockMethodTest', () => {
    let getTransactionFromBlockMethod;

    beforeEach(() => {
        getTransactionFromBlockMethod = new GetTransactionFromBlockMethod(Utils, formatters, {});
    });

    it('constructor check', () => {
        expect(getTransactionFromBlockMethod.rpcMethod).toEqual('cfx_getTransactionByBlockAddressAndIndex');
    });

    it('calls execute with hash', () => {
        getTransactionFromBlockMethod.parameters = ['0x0'];

        getTransactionFromBlockMethod.beforeExecution({});

        expect(getTransactionFromBlockMethod.rpcMethod).toEqual('cfx_getTransactionByBlockHashAndIndex');
    });

    it('calls execute with number', () => {
        getTransactionFromBlockMethod.parameters = [100];

        getTransactionFromBlockMethod.beforeExecution({});

        expect(getTransactionFromBlockMethod.rpcMethod).toEqual('cfx_getTransactionByBlockAddressAndIndex');
    });
});
