export type ProjectType = {
	id: string;
	userId: string;
	name: string;
	size: string;
	properties: {};
};

export type NextContext = {
	params: { [key: string]: string };
};
