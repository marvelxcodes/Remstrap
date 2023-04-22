import { SignIn } from '@clerk/nextjs/app-beta';
import styles from './page.module.scss';

const Page = () => {
	return (
		<div className={styles.container}>
			<SignIn afterSignInUrl={'/projects'} />;
		</div>
	);
};

export default Page;
