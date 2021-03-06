/*
    This file is part of confluxWeb.

    confluxWeb is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    confluxWeb is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with confluxWeb.  If not, see <http://www.gnu.org/licenses/>.
*/

import AbstractMethod from '../../../lib/methods/AbstractMethod';

export default class AbstractGetTransactionFromBlockMethod extends AbstractMethod {
    /**
     * @param {String} rpcMethod
     * @param {Utils} utils
     * @param {Object} formatters
     * @param {AbstractConfluxWebModule} moduleInstance
     *
     * @constructor
     */
    constructor(rpcMethod, utils, formatters, moduleInstance) {
        super(rpcMethod, 2, utils, formatters, moduleInstance);
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     * @param {AbstractConfluxWebModule} moduleInstance - The package where the method is called from for example Cfx.
     */
    beforeExecution(moduleInstance) {
        this.parameters[0] = this.formatters.inputBlockAddressFormatter(this.parameters[0]);
        this.parameters[1] = this.utils.numberToHex(this.parameters[1]);
    }

    /**
     * This method will be executed after the RPC request.
     *
     * @method afterExecution
     *
     * @param {Object} response
     *
     * @returns {Object}
     */
    afterExecution(response) {
        return this.formatters.outputTransactionFormatter(response);
    }
}
