'use client';
import styles from './Alert.module.scss';
import { motion } from 'framer-motion';
import useSelect from '@/hooks/useSelect';
import { useEffect } from 'react';
import { closeAlert } from '@/slices/Alert';
import { dispatch } from '@/utils/store';

const Alert = () => {
	const { Alert } = useSelect();
	useEffect(() => {
		setTimeout(() => dispatch(closeAlert()), 5000);
	}, []);
	return (
		<motion.div
			initial={{ scale: 0.6, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			exit={{ scale: 0.8, opacity: 0 }}
			className={styles.wrapper}
		>
			<div className={styles.stripe}></div>
			<div className={styles.container}>
				<h1 className={styles.title}>{Alert.title}</h1>
				<h1 className={styles.description}>{Alert.description}</h1>
			</div>
		</motion.div>
	);
};

export default Alert;
