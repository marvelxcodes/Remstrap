'use client';
import styles from './NewProject.module.scss';
import { motion } from 'framer-motion';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { openAlert } from '@/slices/Alert';
import { closeModal } from '@/slices/Modal';
import useSelect from '@/hooks/useSelect';
import { useRouter } from 'next/navigation';
import NumberInput from '@/components/NumberInput';

const NewProjectModal = () => {
	const dispatch = useDispatch();
	const { push } = useRouter();
	const { Alert } = useSelect();

	const createProjectHandler = async (event: any) => {
		event.preventDefault();

		console.log(event.currentTarget);
		// Get values from form when submitted
		const name = event.target[0].value;
		const width = Number(event.target[1]);
		const height = Number(event.target[2].value);
		const bgColor = event.target[3].value;

		if (name && width && height && bgColor) {
			const res = await axios.post(`${location.origin}/api/project/create`, {
				name,
				size: `${width}x${height}`,
				bgColor,
				userId: user?.id,
			});
			if (res.data.success) {
				push(`/project/${res.data.project.id}`);
			}
		} else {
			dispatch(
				openAlert({
					title: 'Empty field found!',
					description: 'All fields must be filled!',
				})
			);
		}
	};

	function closeHandler(event: MouseEvent<HTMLDivElement>) {
		dispatch(closeModal());
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={closeHandler}
			className={styles.backdrop}
		>
			<motion.div
				initial={{ rotateX: '100deg', opacity: 0 }}
				animate={{ rotateX: '0deg', opacity: 1 }}
				exit={{ scale: 0.8, opacity: 0 }}
				onClick={(event) => event.stopPropagation()}
				className={styles.container}
			>
				<form onSubmit={createProjectHandler}>
					<input
						maxLength={15}
						placeholder='Project Name'
						className={styles.projectName}
						type='text'
					/>
					<p className={styles.canvasText}>Canvas</p>
					<div className={styles.sizeContainer}>
						<NumberInput
							placeholder='width'
							className={styles.widthInput}
						/>
						<NumberInput
							placeholder='height'
							className={styles.heightInput}
						/>
					</div>
					<button type='submit' className={styles.createBtn}>
						CREATE PROJECT
					</button>
				</form>
			</motion.div>
		</motion.div>
	);
};

export default NewProjectModal;
