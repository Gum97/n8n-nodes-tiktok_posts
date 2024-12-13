import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class TikTokApi implements ICredentialType {
	name = 'tikTokApi';
	displayName = 'TikTok API';
	documentationUrl = 'https://developers.tiktok.com/doc/login-kit-web';
	properties: INodeProperties[] = [
		{
			displayName: 'Client Key',
			name: 'clientKey',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
		},
	];
}
