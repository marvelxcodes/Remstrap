import styles from './loading.module.scss';
import Logo from '@/assets/Logo.svg';

const loading = () => {
	return (
		<div className={styles.container}>
			<Logo />
		</div>
	);
};

export default loading;
