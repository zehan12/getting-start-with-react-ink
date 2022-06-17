import React, {useState, useEffect} from 'react';
import {render, Text, Color, Box } from 'ink';
import Spinner from 'ink-spinner';
import MultiSelect from 'ink-multi-select';


const link = 'blue.underline';
const error = 'bgRed.white';

const Counter = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCounter(previousCounter => previousCounter + 1);
		}, 100);

		return () => {
			clearInterval(timer);
		};
	}, []);

    const handleSubmit = items => {
		// `items` = [{ label: 'First', value: 'first' }, { label: 'Third', value: 'third' }]
	};

	const items = [{
		label: 'First',
		value: 'first'
	}, {
		label: 'Second',
		value: 'second'
	}, {
		label: 'Third',
		value: 'third'
	}];

	return <>
            <MultiSelect items={items} onSubmit={handleSubmit}/>
            <Box width={4}><Text>X</Text></Box>
            <Text color="green">{counter} tests passed</Text>
            <Text color="green">I am green</Text>
            <Text color="black" backgroundColor="white">
                I am black on white
            </Text>
            <Text color="#ffffff">I am white</Text>
            <Text bold>I am bold</Text>
            <Text italic>I am italic</Text>
            <Text underline>I am underline</Text>
            <Text strikethrough>I am strikethrough</Text>
            <Text inverse>I am inversed</Text>
            <Text>
                <Text color="green">
                    <Spinner type="dots" />
                </Text>
                {' Loading'}
            </Text>
            <Box flexDirection="column">
            <Box>
                <Box borderStyle="single" marginRight={2}>
                    <Text>single</Text>
                </Box>

                <Box borderStyle="double" marginRight={2}>
                    <Text>double</Text>
                </Box>

                <Box borderStyle="round" marginRight={2}>
                    <Text>round</Text>
                </Box>

                <Box borderStyle="bold">
                    <Text>bold</Text>
                </Box>
            </Box>

            <Box marginTop={1}>
                <Box borderStyle="singleDouble" marginRight={2}>
                    <Text>singleDouble</Text>
                </Box>

                <Box borderStyle="doubleSingle" marginRight={2}>
                    <Text>doubleSingle</Text>
                </Box>

                <Box borderStyle="classic">
                    <Text>classic</Text>
                </Box>
            </Box>
        </Box>
        </>
};

render(<Counter />);