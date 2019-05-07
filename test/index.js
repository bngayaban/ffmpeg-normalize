'use strict';
import test from 'ava';
const normalize = require('../index');

test('normalize ebu R128', t => {
	return normalize({
		input: __dirname + '/sample.mp4',
		output: __dirname + '/sample.processed.mp4',
		loudness: {
			normalization: 'ebuR128',
			target:
			{
				input_i: -23,
				input_lra: 7.0,
				input_tp: -2.0
			}
		},
		verbose: true
	})
	.then( normalized => {
		if (!normalized){
			t.fail('Not normalized.');
		} else {
			console.log(normalized)
			t.pass();
		}
	})
});


test('normalize ebu R128 for file with < 3 sec duration', t => {
	return normalize({
		input: __dirname + '/sample_short.mp3',
		output: __dirname + '/sample_short.processed.mp3',
		loudness: {
			normalization: 'ebuR128',
			target:
				{
					input_i: -16,
					input_lra: 7.0,
					input_tp: -2.0
				}
		},
		verbose: true
	})
		.then( normalized => {
			if (!normalized){
				t.fail('Not normalized.');
			} else {
				console.log(normalized)
				t.pass();
			}
		})
});
