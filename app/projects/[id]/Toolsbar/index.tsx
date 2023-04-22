'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Menu } from '../UI';
import {
	TextIcon,
	AdjustmentIcon,
	EmojiIcon,
	SettingsIcon,
	LayerIcon,
	ImageIcon,
	MoreIcon,
	AssetIcon,
} from '@/components/Icons';

const Toolsbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<AnimatePresence>
			<motion.aside>
				<div>
					<Menu name='Background'>
						<TextIcon />
					</Menu>
					<Menu name='Layers'>
						<LayerIcon />
					</Menu>
					<Menu name='Images'>
						<ImageIcon />
					</Menu>
					<Menu name='Assets'>
						<AssetIcon />
					</Menu>
					<Menu name='Adjustment'>
						<AdjustmentIcon />
					</Menu>
					<Menu name='Settings'>
						<SettingsIcon />
					</Menu>
					<Menu name='More'>
						<MoreIcon />
					</Menu>
				</div>
				<div></div>
			</motion.aside>
		</AnimatePresence>
	);
};

export default Toolsbar;
