'use client';
import { dispatch } from '@/utils/store';
import { openModal } from '@/slices/Modal';
import styles from './index.module.scss';

const NewProjectBtn = () => {
	function clickHandler() {
		dispatch(
			openModal({
				currentModal: 'newproject',
				data: {},
			})
		);
	}
	return (
		<button onClick={clickHandler} className={styles.newProjectBtn}>
			<p className={styles.xlTxt}>New Project</p>
			<p className={styles.smTxt}>+</p>
		</button>
	);
};

export default NewProjectBtn;
