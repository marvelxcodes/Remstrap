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
};
