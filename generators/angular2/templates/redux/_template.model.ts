export type <%= name.pascal() %>Type = "Small" | "Medium" | "Large";

export interface <%= name.pascal() %> {
	id: string;
	name: string;
	type: <%= name.pascal() %>Type;
};
