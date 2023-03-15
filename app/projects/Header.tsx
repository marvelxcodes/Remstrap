import styles from './Header.module.scss';
import { ProfileImage } from './UI';
import { FAQIcon, SettingsIcon } from '@/components/Icons';

const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>REMSTRAP</h1>
			<SettingsIcon className={styles.menu} />
			<FAQIcon className={styles.menu} />
			<div className={styles.profile}>
				<ProfileImage className={styles.image} />
			</div>
		</header>
	);
};

export default Header;
