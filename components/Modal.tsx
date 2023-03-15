'use client';
import styles from './Modal.module.scss';
import useSelect from '@/hooks/useSelect';
import { ReactNode } from 'react';

type ModalPropsType = {
	name: string;
	children: ReactNode;
};

const Modal = ({ name, children }: ModalPropsType) => {
	const { Modal } = useSelect();
	if (Modal[name]) {
		return <div>{children}</div>;
	}
	return <></>;
};

export default Modal;
