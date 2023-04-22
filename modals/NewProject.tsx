'use client';
import styles from './NewProject.module.scss';
import { motion } from 'framer-motion';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { openAlert } from '@/slices/Alert';
import { closeModal } from '@/slices/Modal';
import { useRouter } from 'next/navigation';
import NumberInput from '@/components/NumberInput';
import { useUser } from '@clerk/nextjs/app-beta/client';
import { useCreateProjectMutation } from '@/slices/Projects';
import { closeLoading, openLoading } from '@/slices/Loading';

const NewProjectModal = () => {
	const dispatch = useDispatch();
	const { push, refresh } = useRouter();
	const { user } = useUser();
	const [createProject] = useCreateProjectMutation();

	async function createProjectHandler(event: any) {
		event.preventDefault();

		// Get values from form on submit
		const name = event.target[0].value;
		const width = event.target[1].value;
		const height = event.target[2].value;

		if (name && width && height) {
			dispatch(openLoading());
			dispatch(closeModal());
			const res: any = await createProject({
				name,
				userId: user?.id!,
				size: `${width}x${height}`,
			});
			refresh();
			push(`/projects/${res.data.id}`);
			dispatch(closeLoading());
		} else {
			dispatch(
				openAlert({
					title: 'Empty field found!',
					description: 'All fields must be filled!',
				})
			);
		}
	}

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
