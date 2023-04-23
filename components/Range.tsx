import { StatePropsType } from '@/utils/types';
import { ChangeEventHandler } from 'react';
import styles from './Range.module.scss';

const Range = ({ state, setState }: StatePropsType<number>) => {
	const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
		setState(event.target.valueAsNumber);
	};
	return (
		<label className={styles.label}>
			<input
				onChange={changeHandler}
				min={0}
				max={100}
				className={styles.range}
				value={state}
				type='range'
			/>
			{state}%
		</label>
	);
};

export default Range;
