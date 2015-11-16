/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @emails oncall+jsinfra
 * @flow
 */

jest
  .dontMock('countDistinct');

var Immutable = require('immutable');
var countDistinct = require('countDistinct');

describe('countDistinct', () => {
  it('does not include duplicate items in the count', () => {
    var originalArray = [{id: 1}, {id: 2}, {id: 3}, {id: 1}, {id: 2}];
    var count = countDistinct(originalArray, i => i.id);
    expect(count).toBe(3);
  });

  it('defaults to identity selector', () => {
    var originalArray = [1, 2, 3, 4, 1, 2, 3];
    var count = countDistinct(originalArray);
    expect(count).toBe(4);
  });

  it('works with immutable iterables', () => {
    var iterable = Immutable.Iterable([1, 2, 3, 4, 1, 2, 3]);
    var count = countDistinct(iterable);
    expect(count).toBe(4);
  });
});
