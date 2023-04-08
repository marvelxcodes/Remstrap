'use client';
import { motion } from 'framer-motion';
import useSelect from '@/hooks/useSelect';
import { closeModal } from '@/slices/Modal';
import { dispatch } from '@/utils/store';
import styles from './RemoveProjectConfirmation.module.scss';
import { useDeleteProjectMutation } from '@/slices/Projects';
import { openLoading, closeLoading } from '@/slices/Loading';
import { useRouter } from 'next/navigation';

const RemoveProjectConfirmation = () => {
	const { Modal } = useSelect();
	const { refresh } = useRouter();
	const [deleteProject, { isLoading }] = useDeleteProjectMutation();

	async function handleYes() {
		dispatch(openLoading());
		dispatch(closeModal());
		await deleteProject({ projectId: Modal.data.id });
		refresh();
		dispatch(closeLoading());
	}
	function handleNo() {
		dispatch(closeModal());
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={handleNo}
			className={styles.backdrop}
		>
			<motion.div
				initial={{ rotateX: '30deg' }}
				animate={{ rotateX: '0' }}
				exit={{ rotateX: '30deg' }}
				onClick={(e) => e.stopPropagation()}
				className={styles.container}
			>
				<h3 className={styles.text}>Are you sure?</h3>
				<div className={styles.buttonsWrapper}>
					<button onClick={handleYes} className={styles.yesButton}>
						Yes
					</button>
					<button onClick={handleNo} className={styles.noButton}>
						No
					</button>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default RemoveProjectConfirmation;
