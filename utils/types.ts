export interface ProjectType {
	id: string;
	userId: string;
	name: string;
	size: string;
	properties: {};
}

export interface NextContext {
	params: { [key: string]: string };
}
