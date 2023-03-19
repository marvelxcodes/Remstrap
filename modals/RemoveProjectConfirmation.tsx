import styles from './RemoveProjectConfirmation.module.scss';

const RemoveProjectConfirmation = () => {
	return (
		<div className={styles.backdrop}>
			<div className={styles.container}>
				<h3 className={styles.text}>Are you sure?</h3>
				<div className={styles.buttonsWrapper}>
					<button className={styles.yesButton}>Yes</button>
					<button className={styles.noButton}>No</button>
				</div>
			</div>
		</div>
	);
};

export default RemoveProjectConfirmation;
