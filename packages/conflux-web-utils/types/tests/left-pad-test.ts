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

import BN = require('bn.js');
import {leftPad} from 'conflux-web-utils';

const bigNumber = new BN(3);
// $ExpectType string
leftPad('0x3456ff', 20);
// $ExpectType string
leftPad(0x3456ff, 20);
// $ExpectType string
leftPad('Hello', 20, 'x');

// $ExpectError
leftPad(bigNumber, 20);
// $ExpectError
leftPad(['string'], 20);
// $ExpectError
leftPad([4], 20);
// $ExpectError
leftPad({}, 20);
// $ExpectError
leftPad(true, 20);
// $ExpectError
leftPad(null, 20);
// $ExpectError
leftPad(undefined, 20);
// $ExpectError
leftPad('0x3456ff', bigNumber);
// $ExpectError
leftPad('0x3456ff', ['string']);
// $ExpectError
leftPad('0x3456ff', [4]);
// $ExpectError
leftPad('0x3456ff', {});
// $ExpectError
leftPad('0x3456ff', true);
// $ExpectError
leftPad('0x3456ff', null);
// $ExpectError
leftPad('0x3456ff', undefined);
// $ExpectError
leftPad('Hello', 20, bigNumber);
// $ExpectError
leftPad('Hello', 20, ['string']);
// $ExpectError
leftPad('Hello', 20, [4]);
// $ExpectError
leftPad('Hello', 20, {});
// $ExpectError
leftPad('Hello', 20, true);
// $ExpectError
leftPad('Hello', 20, null);
