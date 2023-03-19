import { DetailedHTMLProps, InputHTMLAttributes, ChangeEvent } from 'react';

type NumberInputType = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {};

const NumberInput = ({ ...props }: NumberInputType) => {
	function changeHandler(event: ChangeEvent<HTMLInputElement>) {
		event.currentTarget;
	}
	return (
		<input
			onChange={changeHandler}
			type='number'
			inputMode='numeric'
			{...props}
		/>
	);
};

export default NumberInput;
