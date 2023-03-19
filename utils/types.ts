export type ProjectType = {
	id: string;
	name: string;
	size: string;
	image: string;
	createdOn: Date;
};

export type NextContext = {
	params: { [key: string]: string };
};
