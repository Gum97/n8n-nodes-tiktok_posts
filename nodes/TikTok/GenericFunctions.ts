import {
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
	NodeApiError,
} from 'n8n-workflow';

export async function apiRequest(
	this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions,
	method: string,
	endpoint: string,
	body: any = {},
	qs: object = {},
	option: object = {},
) {
	const credentials = await this.getCredentials('tikTokApi');

	const options = {
		method,
		body,
		qs,
		uri: `https://open-api.tiktok.com${endpoint}`,
		headers: {
			'Authorization': `Bearer ${credentials.accessToken}`,
		},
		json: true,
		...option,
	};

	try {
		return await this.helpers.request(options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error);
	}
}
