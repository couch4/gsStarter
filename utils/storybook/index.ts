import hideProps from './hideProps.json';
export const hideAllProps = () => {
	const config: any = {};
	hideProps.forEach((prop) => {
		config[prop] = {
			table: {
				disable: true,
			},
		};
	});
	return config;
};
