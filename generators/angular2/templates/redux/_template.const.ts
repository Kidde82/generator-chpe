import { <%= name.pascal() %>Type } from "./<%= name.kebab() %>.model";

export const <%= name.uppersnake() %>_TYPE = {
	small: "Small" as <%= name.pascal() %>Type,
	medium: "Medium" as <%= name.pascal() %>Type,
	large: "Large" as <%= name.pascal() %>Type
}
