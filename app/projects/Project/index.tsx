import Image from 'next/image';
import styles from './index.module.scss';
import Link from 'next/link';
import { ProjectsType } from '@/utils/types';
import useDate from '@/hooks/useDate';
import { DeleteButton, NameInput } from '../UI';

const Project = (props: ProjectsType) => {
	const date = useDate(props.createdOn);
	return (
		<div key={props.id} className={styles.container}>
			<div className={styles.imageWrapper}>
				<Image
					className={styles.image}
					src={props.image}
					alt={props.name}
					height={108}
					width={192}
					draggable={false}
				/>
			</div>
			<div className={styles.textWrapper}>
				<NameInput
					id={props.id}
					name={props.name}
					className={styles.name}
				/>
				<div className={styles.descWrapper}>
					<div>
						<h3 className={styles.dimension}>{`${props.size} px`}</h3>
						<p className={styles.createdOn}>{`Created ${date}`}</p>
					</div>
					<DeleteButton id={props.id} className={styles.dumpIcon} />
				</div>
			</div>
			<Link href={`/projects/${props.id}`}>
				<button className={styles.openProjectBtn}>OPEN IN EDITOR</button>
			</Link>
		</div>
	);
};

export default Project;
