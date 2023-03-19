'use client';
import useSelect from '@/hooks/useSelect';
import { AnimatePresence } from 'framer-motion';
import NewProjectModal from '@/modals/NewProject';
import Alert from './Alert';
import RemoveProjectConfirmation from '@/modals/RemoveProjectConfirmation';

const Overlays = () => {
	const { Alert: AlertState, Modal: ModalState } = useSelect();
	return (
		<AnimatePresence>
			{AlertState.title && <Alert />}
			{ModalState.currentModal === 'newproject' && <NewProjectModal />}
			{ModalState.currentModal === 'removeprojectconfirmation' && (
				<RemoveProjectConfirmation />
			)}
		</AnimatePresence>
	);
};

export default Overlays;
