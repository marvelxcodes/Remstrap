'use client';

import styles from './UI.module.scss';

import useSelect from '@/hooks/useSelect';
import { setCurrentMenu } from '@/slices/Menu';
import { dispatch } from '@/utils/store';
import { ReactNode } from 'react';

export interface MenuPropsType {
	name: string;
	children: ReactNode;
}

export function Menu({ name, children }: MenuPropsType) {
	const { Menu } = useSelect();
	const isSelected = Menu.currentMenu === name;

	// sets this menu's name as the value of currentMenu in store
	const clickHandler = () => dispatch(setCurrentMenu(name));

	return (
		<div
			onClick={clickHandler}
			className={isSelected ? styles.selectedMenu : styles.menu}
		>
			{children}
			<span className={styles.tooltip}>{name}</span>
		</div>
	);
}

export interface SubMenuPropsType {
	name: string;
	children: ReactNode;
}

export function SubMenu({ name, children }: SubMenuPropsType) {
	return (
		<div className={styles.submenu}>
			<span className={styles.label}>{name}</span>
			{children}
		</div>
	);
}
