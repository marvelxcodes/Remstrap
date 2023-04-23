import { Dispatch, SetStateAction } from 'react';

export type ProjectsType = {
	id: string;
	name: string;
	size: string;
	image: string;
	createdOn: Date;
};

export type ProjectType = {
	id: string;
	name: string;
	size: string;
	properties: string;
};

export type NextContext = {
	params: { [key: string]: string };
	searchParams: { [key: string]: string };
};

export type StatePropsType<T> = {
	state: T;
	setState: Dispatch<SetStateAction<T>>;
};
